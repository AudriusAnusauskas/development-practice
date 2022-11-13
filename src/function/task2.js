function transformText(text) {
  let str = "";
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      str += text.charAt(i).toUpperCase();
    } else {
      str += text.charAt(i).toLowerCase();
    }
  }
  console.log(str);
}

transformText("devMentor");
