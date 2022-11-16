let fn = (arrObj, obj) => {
  let el;
  for (el of arrObj) {
    el.id === obj.id ? arrObj.splice(arrObj.indexOf(el), 1, obj) : 0;
  }
  arrObj.includes(obj) ? 0 : arrObj.push(obj);
  console.log(arrObj);
};

let arr = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];

let object = { id: 3 };

fn(arr, object);
