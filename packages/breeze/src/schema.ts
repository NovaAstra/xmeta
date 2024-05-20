export enum SchemaTypeKind {
  BreezeString = "BreezeString",
}

export interface SchemaImple {
  readonly $type: SchemaTypeKind;
}

export abstract class Schema implements SchemaImple {
  public abstract $type: SchemaTypeKind;

  protected clone() {
    const next = Object.create(Object.getPrototypeOf(this));

    return next as this;
  }
}
