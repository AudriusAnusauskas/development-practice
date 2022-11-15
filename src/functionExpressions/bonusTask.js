const fn2 = (...args) => {
  let spaces = args.reduce((accumulator, currentValue) => {
    return currentValue.includes(" ") ? accumulator + 1 : accumulator;
  }, 0);
  console.log(spaces);
};

fn2("dev Mentor", "devMentor", " "); // 2
fn2("f", "a", "b ", "c", "d", "e"); // 0
