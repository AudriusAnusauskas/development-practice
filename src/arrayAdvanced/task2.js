const fn = (arrObj, arrIds) => arrObj.filter((e) => !arrIds.includes(e.id));

const objectArray = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];

const idsArray = [1, 7, 3, 2, 10, 4];

console.log(fn(objectArray, idsArray));
