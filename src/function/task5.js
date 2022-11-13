function fn(a) {
  function resultFn() {
    return a;
  }
  return resultFn;
}

const fnResult = fn(5);

console.log(fnResult());
