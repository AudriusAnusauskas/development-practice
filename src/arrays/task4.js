let fn = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum / arr.length);
};

let newArray = new Array(10);

for (let i = 0; i < newArray.length; i++) {
  newArray[i] = Math.floor(Math.random() * 100);
}

console.log(newArray);
fn(newArray);
