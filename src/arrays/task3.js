const fn = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr[0]);
};

const newArray = new Array(10);

for (let i = 0; i < newArray.length; i++) {
  newArray[i] = Math.floor(Math.random() * 100);
}

console.log(newArray);
fn(newArray);
fn([10, 2, 3]);
