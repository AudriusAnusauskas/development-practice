function fn1() {
  console.log("Function declaration");
}

const fn2 = function () {
  console.log("AnonymusAnonymous function expression");
};

const fn3 = () => console.log("Arrow based function");

fn1();
fn2();
fn3();
