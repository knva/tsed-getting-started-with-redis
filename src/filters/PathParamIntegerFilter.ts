import {BadRequest} from "ts-httpexceptions";
import * as Express from "express";
import {Filter, IFilter, ParseService} from "@tsed/common";

@Filter()
export class PathParamsIntegerFilter implements IFilter {
  constructor(private parseService: ParseService) {
  }

  transform(expression: string, request: Express.Request) {
    const value = this.parseService.eval(expression, request["params"]);

    const number = parseInt(value, 10);

    if (isNaN(number)) {
      throw new BadRequest(`${expression} is not a number`);
    }

    return number;
  }
}
