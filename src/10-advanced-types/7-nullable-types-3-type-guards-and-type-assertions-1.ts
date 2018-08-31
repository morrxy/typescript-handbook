// https://www.typescriptlang.org/docs/handbook/advanced-types.html

export { }

function f(sn: string | null): string {
  if (sn == null) {
    return 'default'
  } else {
    return sn
  }
}

function f1(sn: string | null): string {
  return sn || "default";
}
