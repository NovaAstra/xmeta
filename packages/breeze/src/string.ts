import { Schema } from './schema';

export class BreezeString extends Schema {
  public static create() {
    return new BreezeString();
  }
}

export const string = BreezeString.create;
