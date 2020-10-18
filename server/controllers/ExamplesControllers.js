import express from "express";
import BaseController from "../utilities/BaseController";
import { examplesService } from "../services/ExampleService";

export class ExamplesController extends BaseController {
  constructor() {
    super("api/examples");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(_, res, next) {
    try {
      res.send(await examplesService.find());
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}