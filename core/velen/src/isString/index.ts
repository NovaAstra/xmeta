import { is } from '../is';

export function isString(input?: unknown): input is string {
  return is(String, input);
}
