let value;
value = undefined;
let result = (typeof value === "boolean") ? console.log(`Variable is boolean: ${value}`) :
      (typeof value === "number") ? console.log(`Variable is a number. It's square is: ${value**2}`) :
      (typeof value === "string") ? console.log(`Variable is a string: ${value}`) :
      console.log(`Variable type is: ${typeof value}`);