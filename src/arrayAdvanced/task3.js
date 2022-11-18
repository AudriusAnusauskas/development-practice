// const fn = (objArr) => {
//   const newArr = [];
//   objArr.forEach((el) => {
//     if (el.age >= 18) {
//       newArr.push(el.name);
//     }
//   });

//   return newArr;
// };

const fn = (objArr) => {
  const newArr = [];

  objArr.forEach(({ name, age }) => {
    if (age >= 18) {
      newArr.push(name);
    }
  });

  return newArr;
};

const peopleArr = [
  { name: "Tomas", age: 15 },
  { name: "Erika", age: 22 },
  { name: "Saulius", age: 17 },
  { name: "Audrius", age: 34 },
];

console.log(fn(peopleArr));
