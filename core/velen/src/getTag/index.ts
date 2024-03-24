const toString = Object.prototype.toString;

export function getTag(input?: unknown): string {
  if (input === null) return `[object Null]`;

  if (input === undefined) return `[object Undefined]`;

  return toString.call(input);
}
