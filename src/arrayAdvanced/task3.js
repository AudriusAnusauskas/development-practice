// let fn = (objArr) => {
//   let newArr = [];
//   for (el of objArr) {
//     el.age >= 18 ? newArr.push(el.name) : 0;
//   }
//   console.log(newArr);
// };

let fn = (objArr) => {
  let newArr = [];
  objArr.forEach((el) => {
    el.age >= 18 ? newArr.push(el.name) : 0;
  });
  console.log(newArr);
};

let peopleArr = [
  { name: "Tomas", age: 15 },
  { name: "Erika", age: 22 },
  { name: "Saulius", age: 17 },
  { name: "Audrius", age: 34 },
];

fn(peopleArr);
