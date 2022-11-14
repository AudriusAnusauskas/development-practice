const fn = (...args) => {
  let spaces = 0;
  for (let arg of args) {
    for (let i = 0; i < arg.length; i++) {
      arg.charAt(i) === " " ? spaces++ : spaces;
    }
  }
  console.log(spaces);
};

fn("dev Mentor", "devMentor", " "); // 2
fn("f", "a", "b", "c", "d", "e"); // 0
