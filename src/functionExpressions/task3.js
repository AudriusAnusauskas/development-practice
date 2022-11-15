const fn = () => () => console.log("devMentor short function");

const fn2 = (p) => p();

fn2(fn());
