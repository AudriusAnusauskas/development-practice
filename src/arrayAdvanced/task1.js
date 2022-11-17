const fn = (arrObj, obj) => {
  let newArr = [];

  arrObj.map((e) => {
    if (e.id === obj.id) {
      e = obj;
    }
    newArr.push(e);
  });
  if (!newArr.includes(obj)) {
    newArr.push(obj);
  }
  return newArr;
};

const arr = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];

const object = { id: 3 };

console.log(fn(arr, object));
