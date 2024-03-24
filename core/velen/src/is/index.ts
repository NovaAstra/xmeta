import type { Constructor, Function } from '@xmeta/turaly';

export function is<T extends Function>(ctor: T, input: unknown): input is ReturnType<T>;

export function is<T extends Constructor>(ctor: T, input: unknown): input is InstanceType<T>;

export function is<T extends Function>(ctor: T): (input: unknown) => input is ReturnType<T>;

export function is<T extends Constructor>(ctor: T): (input: unknown) => input is InstanceType<T>;

export function is<T extends Constructor>(ctor: T, input?: unknown) {
  if (arguments.length === 1) return (_input: unknown) => is(ctor, _input);

  return (
    (input != null &&
      (input.constructor === ctor || (ctor.name === 'Object' && typeof input === 'object'))) ||
    input instanceof ctor
  );
}
