import ExampleSchema from "../models/Example";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Example", ExampleSchema);
}

export const dbContext = new DbContext();