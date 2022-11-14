const fn = (...args) => {
  let spaces = 0;
  for (let arg of args) {
    arg.includes(" ") ? spaces++ : spaces;
  }
  console.log(spaces);
};

fn("dev Mentor", "devMentor", " "); // 2
fn("f", "a", "b", "c", "d", "e"); // 0
