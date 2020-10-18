import { dbContext } from "../database/DbContext";
import { BadRequest } from "../utilities/Errors";

class ExamplesService {
  async find(query={}) {
    let values = await dbContext.Values.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const examplesService = new ExamplesService();