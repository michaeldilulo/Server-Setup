// Object Relational Mapper, talk to Database
import mongoose, { connection } from 'mongoose';
// MongoDB Configurations
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', error => {
    console.error('[DATABASE ERROR]:', error);
})


// This is where you will paste your connection string.
// i.e.MongoDB Atlas
// process.env is for deployment
const connectionString = process.env.ConnectionString || "";



export default class DbContext {
    static async connect() {
        try {
            let status = await mongoose.connect(connectionString);
            console.log("Connected to database")
            return status;
        } catch (error) {
            console.error(error);
        }
    }
}