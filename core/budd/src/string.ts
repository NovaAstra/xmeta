import { Schema } from './schema';

const a = {
  type: 'string',
  required: true,
  pattern: /a/, // 可选
};

export class StringSchema extends Schema {
  public static create() {
    return new StringSchema();
  }

  public constructor() {
    super();
  }

  public email() {}

  public length(length:number) {}

  public min(min: number) {}

  public max(max: number) {}

  public matches(regex:RegExp){}
}


export const string = StringSchema.create