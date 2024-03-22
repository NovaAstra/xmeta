import { Schema } from './schema';

export class StringSchema extends Schema {
  public static create(): StringSchema {
    return new StringSchema();
  }

  public constructor() {
    super();
  }
}

export const string = StringSchema.create;
