const academy = {
  title: "devMentor",
  course: "fundamentals",
  mentorship: true,
};
console.log(academy.title);
console.log(academy["course"]);
const propertyName = "mentorship";
console.log(academy[propertyName]);
delete academy.course;
console.log(academy["course"]);
