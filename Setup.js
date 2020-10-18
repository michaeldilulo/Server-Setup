import fs from 'fs';
import BaseController from './server/utilities/BaseController';

export class Paths {
    static get Public() {
        return __dirname + '/client/'
    }
    static get Server() {
        return __dirname + '/server'
    }
    static get Controllers() {
        // (2)
        return this.Server + '/controllers'
    }
}

export function RegisterControllers(router) {
    // look at file structure(fs), read dir sync
    // Going to Paths and asking where I am located at (2)
    let controllers = fs.readdirSync(Paths.Controllers);
    // Grab all files within controllers Folder
    controllers.forEach(loadController);

    async function loadController(controllerName) {
        try {
            // if not a js file stop
            if (!controllerName.endsWith(',js')) return;
            // if js file import and go get the actual controller
            let fileHandler = await import(Paths.Controllers + '/' + controllerName);
            // create controller called controllerClass, fileHandler get the controller from the controller file - last 3 characters
            let controllerClass = fileHandler[controllerName.slice(0, -3)];
            // instantiate the controller
            let controller = new controllerClass();
            if (controller instanceof BaseController) {
                // if controller is an instance of controller base, than register the controller to the route
                router.use(controller.mount, controller.router)
            }
        } catch (error) {
            console.error(
                '[CONTROLLER ERROR] : Unable to register controller at this time. Check your mount path and controller name',
                controllerName,
                error
            )
        }
    } 
}