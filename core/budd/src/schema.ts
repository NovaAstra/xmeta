import type { Message, TakeOptions, Action } from './types';

import { isFunction } from '@xmeta/velen';

export abstract class Schema<Output = unknown, Input = Output> {
  public readonly type: string;

  public constructor() {}

  public clone() {
    const next = Object.create(Object.getPrototypeOf(this));

    return next as this;
  }

  public parse(input?: unknown) {}

  public safeParse(input?: unknown) {}

  protected take(options: TakeOptions): any;
  protected take(action: Action): any;
  protected take(name: string, action: Action): any;
  protected take(name: string, message: Message, action: Action): any;
  protected take() {
    let options: TakeOptions;

    if (arguments.length === 1) {
      if (isFunction(arguments[0])) {
        options = { action: arguments[0] };
      } else {
        options = arguments[0];
      }
    } else if (arguments.length === 2) {
      options = { name: arguments[0], action: arguments[1] };
    } else {
      options = { name: arguments[0], message: arguments[1], action: arguments[2] };
    }
  }
}
