import { Schema } from './schema';

export class StringSchema extends Schema {
  public static create(): StringSchema {
    return new StringSchema();
  }

  public constructor() {
    super();
  }

  public email() {}

  public length(length: number) {}

  public min(min: number) {}

  public max(max: number) {}

  public matches(regex: RegExp) {}
}

export const string = StringSchema.create;
