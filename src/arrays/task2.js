let arr = [];

let str = "devMentor - path to the developer career";
for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    arr.push(str[i]);
  }
}

console.log(arr);

let store = [];
let primes = [];
for (let i = 2; i <= str.length; ++i) {
  if (!store[i]) {
    primes.push(str[i]);
    for (let j = i << 1; j <= str.length; j += i) {
      store[j] = true;
    }
  }
}
console.log(primes);
///googled the algorythm for primes and adapted to my task
