const fn = (arrObj, obj) => {
  const newArr = arrObj.map((e) => (e.id !== obj.id ? e : obj));

  if (!newArr.includes(obj)) {
    newArr.push(obj);
  }

  return newArr;
};

const arr = [
  { id: 4, name: "Lecturer" },
  { id: 36, title: "devMentor" },
  { id: 5 },
];

const object = { id: 3 };

console.log(fn(arr, object));
