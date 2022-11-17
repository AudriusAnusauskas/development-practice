// let fn = (arrObj, arrIds) => {
//   let res;
//   res = arrObj.filter((e) => {
//     for (let i = 0; i < arrIds.length; i++) {

//       if (e.id == arrIds[i]) {
//         return false;
//       }
//     }
//     return true;
//   });
//   return res;
// };

let fn = (arrObj, arrIds) => arrObj.filter((e) => !arrIds.includes(e.id));

let objectArray = [
  { id: 4, name: "Lecturer" },
  { id: 3, title: "devMentor" },
  { id: 5 },
];

let idsArray = [1, 7, 3, 2, 10, 4];

console.log(fn(objectArray, idsArray));
