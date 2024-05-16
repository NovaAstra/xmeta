export enum SchemaTypeKind {
  BreezeString = 'BreezeString',
}

export interface SchemaImple {}

export interface SchemaOptions {}

export abstract class Schema implements SchemaImple {
  public constructor() {}

  public validateSync() {}

  protected _validate() {}
}
