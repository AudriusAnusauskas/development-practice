let fn = (obj) => {
  for (let prop in obj) {
    console.log(`field title: ${prop}, value: ${obj[prop]}`);
    if (typeof obj[prop] === "object" && obj[prop] !== null) {
      fn(obj[prop]);
    }
  }
};

fn({
  property: "value",
  other: "qqqq",
  third: {
    a: 1,
    b: 2,
  },
});

///////////////Other way /////////

let fn2 = (obj) => {
  for (let [key, value] of Object.entries(obj)) {
    console.log(`field title: ${key}, value: ${value}`);
    if (typeof value === "object" && value !== null) {
      fn2(value);
    }
  }
};

fn2({
  property: "value",
  other: "qqqq",
  third: {
    a: 1,
    b: 2,
  },
});
