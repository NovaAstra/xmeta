import { Schema } from './schema';

export class ObjectSchema extends Schema {
  public static create(): ObjectSchema {
    return new ObjectSchema();
  }

  public constructor() {
    super();
  }
}

export const object = ObjectSchema.create;