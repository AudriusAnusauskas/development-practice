const arr = ["abc", 12, true, "def"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((element) => {
  console.log(element);
});

const second = arr[1];

console.log(second);
