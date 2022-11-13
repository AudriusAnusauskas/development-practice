function firstFunction(a, b) {
  return function otherFunction() {
    return a + b;
  };
}

console.log(firstFunction(1, 2));
