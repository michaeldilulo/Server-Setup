import mongoose from 'mongoose';
const Schema = mongoose.Schema

//* Holds the Model (what our data looks like)
const _firstModel = new Schema({
    firstProperty: { type: String, required: true },
    secondProperty: { type: String },
    thirdProperty: { type: Number, required: true, default: 0 },
    fourthProperty: {type: Number, default: 0}
})

//* Exposes the Repository (contact our database)
export default class FirstService {
    get repository() {
        return mongoose.model('stuff', _firstModel)
    }
}