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

// googled the algorythm, adapted to my solution

const fn2 = (objArr) => {
  return objArr.reduce((accumulator, currentValue) => {
    const key = currentValue.name;
    if (!accumulator[key]) {
      accumulator[key] = 0;
    }
    accumulator[key]++;
    return accumulator;
  }, {});
};

console.log(fn2(peopleArr)); // 0
