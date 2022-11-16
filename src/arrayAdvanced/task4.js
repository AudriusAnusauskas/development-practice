let fn = (objArr) => {
  const count = {};
  objArr.forEach((el) => {
    count[el.name] = (count[el.name] || 0) + 1;
  });
  console.log(count);
};

let peopleArr = [
  { name: "Tomas", age: 15 },
  { name: "Erika", age: 22 },
  { name: "Tomas", age: 17 },
  { name: "Audrius", age: 34 },
  { name: "Erika", age: 42 },
  { name: "Tomas", age: 19 },
];

fn(peopleArr);

// googled the algorythm, adapted to my solution
