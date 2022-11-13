let a, b, c, d;
a = undefined;
b = null;
c = 0;
d = 5;
console.log(a || b || c || d); //5
console.log(a ?? b ?? c ?? d); //0