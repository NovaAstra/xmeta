import { Schema, SchemaTypeKind } from "./schema";

export class BreezeString extends Schema {
  public readonly $type: SchemaTypeKind = SchemaTypeKind.BreezeString;

  public static create() {
    return new BreezeString();
  }
}

export const string = BreezeString.create;