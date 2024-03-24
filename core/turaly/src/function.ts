export type Constructor<T = any, U extends unknown[] = any[]> = new (...args: U) => T;

export type Function<T = any, U extends unknown[] = any[]> = (...args: U) => T;