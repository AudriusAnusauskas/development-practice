let fn = (arrObj, arrIds) => {
  for (let j = 0; j < arrIds.length; j++) {
    for (let i = 0; i < arrObj.length; i++) {
      arrIds[j] === arrObj[i].id
        ? arrObj.splice(arrObj.indexOf(arrObj[i]), 1)
        : 0;
    }
  }
  console.log(arrObj);
};

let objectArray = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];

let idsArray = [1, 7, 3, 2, 10, 4];

fn(objectArray, idsArray);
