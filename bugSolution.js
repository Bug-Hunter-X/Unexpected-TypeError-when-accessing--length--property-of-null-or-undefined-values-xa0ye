function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object' || typeof x.length !== 'number') {
    return 0; // Or handle the case appropriately, e.g., throw an error
  }
  return x.length;
}