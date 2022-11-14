const human = {
  firstName: "John",
  lastName: "Lennon",
  age: 82,
  isDeveloper: false,
};
const printHuman = (obj) => {
  obj.isDeveloper === true
    ? console.log(`${obj.firstName}  ${obj.lastName} (${obj.age}) is developer`)
    : console.log(
        `${obj.firstName}  ${obj.lastName} (${obj.age}) is not a developer`
      );
};
printHuman(human);
