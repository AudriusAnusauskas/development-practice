let arr = [];

let str = "devMentor - path to the developer career";
for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    arr.push(str[i]);
  }
}

console.log(arr);

let primes = [];

let isPrime = (num) => {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
};

let pushPrime = (primeFn, str) => {
  for (let i = 0; i < str.length; i++) {
    if (primeFn(i)) {
      primes.push(str[i]);
    }
  }
};
pushPrime(isPrime, str);
console.log(primes);
