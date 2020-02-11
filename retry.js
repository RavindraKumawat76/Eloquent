class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (err) {
      if (!(err instanceof MultiplicatorUnitFailure))
        throw err;
    }
  }
}

console.log(reliableMultiply(0, 8));
// console.log(primitiveMultiply(0,8));
// → 64