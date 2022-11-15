const human = {
  firstName: "John",
  lastName: "Lennon",
  age: 82,
  isDeveloper: false,
};
const printHuman = (obj) => {
  let string = `${obj.firstName}  ${obj.lastName} (${obj.age}) is not a developer`;
  obj.isDeveloper === true
    ? console.log(string.replace("not a", ""))
    : console.log(string);
};
printHuman(human);
