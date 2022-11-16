let fn = (obj1, obj2) => console.log({ ...obj1, ...obj2 });

let a = {
  a: 1,
  b: 2,
};
let b = {
  c: 3,
  d: 4,
};

fn(a, b);
