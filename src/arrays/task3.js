let fn = (arr) => {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr[0]);
};

let newArray = new Array(10);

for (let i = 0; i < newArray.length; i++) {
  newArray[i] = Math.floor(Math.random() * 100);
}

console.log(newArray);
fn(newArray);
