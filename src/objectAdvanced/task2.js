let fn = (obj) => {
  let { title } = obj;
  console.log(title);
};

let a = {
  a: 1,
  title: "one",
  c: true,
};

let b = {
  title: "anothe one",
  d: false,
};

fn(a);
fn(b);
