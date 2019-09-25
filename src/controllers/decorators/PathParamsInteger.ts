import {UseFilter} from "@tsed/common";
import {PathParamsIntegerFilter} from "../../filters/PathParamIntegerFilter";

export function PathParamsInteger(expression?: string): ParameterDecorator {
  return UseFilter(PathParamsIntegerFilter, {
    expression,
    useType: Number
  });
}
