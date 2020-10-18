export class NotFound extends Error {
    constructor(message = "Not Found") {
        super(message) 
            this.status = 404;
    }
}

export class Forbidden extends Error {
    constructor(message = "Forbidden Access") {
        super(message) 
            this.status = 403;
    }
}

export class UnauthorizedAccess extends Error {
    constructor(message = "Unauthorized Access") {
        super(message) 
            this.status = 401;
    }
}

export class BadRequest extends Error {
    constructor(message = "Bad Request") {
        super(message) 
            this.status = 400;
    }
}

export class UnexpectedError extends Error {
    constructor(message = "Server encounted an unexpected error") {
        super(message) 
            this.status = 500;
    }
}