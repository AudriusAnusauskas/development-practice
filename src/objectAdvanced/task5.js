let person = {
  name: "Paul",
  surname: "McCartney",
  age: 80,
  birthDate: "18 Jun 1942",
};

let fn = (person) => {
  let {
    name,
    surname,
    age,
    fullName = `${name} ${surname}`,
    nickame = `${surname} ${age}`,
  } = person;

  console.log({
    fullName,
    nickame,
  });
};

let transformedPerson = fn(person);
