let fn = (obj, field, value) => console.log({ ...obj, [field]: value });

fn({ name: "Rutenis", surname: "Turcinas", age: 33 }, "surname", "lecturer");
