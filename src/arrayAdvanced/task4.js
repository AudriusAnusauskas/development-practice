// let fn = (objArr) => {
//   const count = {};
//   objArr.forEach((el) => {
//     count[el.name] = (count[el.name] || 0) + 1;
//   });
//   console.log(count);
// };

const peopleArr = [
  { name: "Tomas", age: 15 },
  { name: "Erika", age: 22 },
  { name: "Tomas", age: 17 },
  { name: "Audrius", age: 34 },
  { name: "Erika", age: 42 },
  { name: "Tomas", age: 19 },
];

// fn(peopleArr);

const fn2 = (objArr) => {
  return objArr.reduce((accumulator, currentValue) => {
    const key = currentValue.name;

    accumulator[key] = (accumulator[key] ?? 0) + 1;

    return accumulator;
  }, {});
};

console.log(fn2(peopleArr));
