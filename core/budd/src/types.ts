export type Message = string;

export type TakeOptions = {
  name?: string;
  message?: string;
  action: Action;
};

export type Action = () => void;

export type SchemaSpec = {};

export type SchemaOptions = {};

export type SchemaContext = {};
