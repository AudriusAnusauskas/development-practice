const complexObject = {};

complexObject.person = {
  name: "Jonas",
  email: "jonas@gmail.com",
  birthDate: "1988-01-19",
};

complexObject["academy"] = {
  title: "Best Academy",
  numberOfStudents: 999,
};

const fn = (obj) => {
  console.log(`${complexObject.person.name} - ${complexObject.academy.title}`);
};
fn(complexObject);
