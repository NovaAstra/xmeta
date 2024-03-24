import { is } from '../is';

export function isFunction(input?: unknown): input is Function {
  return is(Function, input);
}
