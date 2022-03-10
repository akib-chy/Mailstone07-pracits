// NO 01
// HOW TO DICLUR LET CONST VARIABLE
const name = "Minhajul Alam";
let year = 2020;
// name = akib;    I WILL NOT CHAING CONST VARIABLW;
year = 2022; //I WILL CHAING LET VARIAVLE;
// console.log(name);
// console.log(year);

// NO 02
// HOW TO DICLUR A 6WAY CONDITION IN JAVASCRIPT
const phonePrice = 5000;

// FIRS > CONDITION
if (phonePrice > 4000) {
  //   console.log("i will bye a phone");
} else {
  //   console.log("oh shit i will try a next time");
}
// SECOND < CONDITION
if (phonePrice < 6000) {
  //   console.log("yeh i will bye a new mibile");
} else {
  //   console.log("i will try next time");
}
// THIRD  === CONDITION
if (phonePrice === 5000) {
  //   console.log("yea i have a new phone");
} else {
  //   console.log("shit this is bed time");
}

// FORTH !== CONDITION
if (phonePrice !== 2000) {
  //   console.log("yes");
} else {
  //   console.log("no");
}
// FIVE >= CONDITION
if (phonePrice >= 4000) {
  //   console.log("yeah this is valid");
} else {
  //   console.log("this is wrong");
}
// six <= CONDITION
if (phonePrice <= 4000) {
  //   console.log("you win ");
} else {
  //   console.log("you loss");
}

// NOM 03
// HOW TI DICLURE AN ATRREY
const febNum = [20, 54, 62, 65, 65, 20];
// CHECK ARREY LENGTH
// console.log(febNum.length);
// CHECK ARREY INDEX
// console.log(febNum[3]);
// CHECK ARREY INDEXOf
// console.log(febNum.indexOf(65));
// CHECK ARREY PUSH
// console.log(febNum.push(10));
// CHECK ARREY pop
// console.log(febNum.pop());
// CHECK ARREY INCLUDES
// console.log(febNum.includes(65));
// console.log(febNum);

// NO 04
// HOW TO WORK FOR LOOP IN ARREY AND SHOW ARRAY ELEMENT
for (let i = 0; i < febNum[i]; i++) {
  const num = febNum[i];
  // console.log(num);
}

// PRACTIS WHILE LOOP
// const i = 0;
// while (i < febNum[i]) {
//   const num = febNum[i];
//   // i += num;
//   console.log(num);
// }

// HOW TO DICLURE A FUNCTION
// NO PERAMITER FUNCTION
const myNum = () => {
  const nam1 = 25;
  const nam2 = 87;
  // console.log(nam1 + nam2);
};
// myNum();

// FUNCTION DICLURE ON PERAMITER
const fabNumMy = (num1, num2) => {
  const total = num1 + num2;
  // console.log(total);
};
// fabNumMy(20, 20);

const totalNum = (num1, num2) => {
  const total = num1 + num2;
  const sum = total * 5;
  // console.log(sum);
};
// totalNum(20, 20);

// DICLURE A OBJECT
const school = {
  student: 150,
  open: "9AM",
  close: "4PM",
  teacher: {
    total: 7,
    selary: 7800,
    work: "teaching",
  },
};

// console.log(school.teacher.selary);
// console.log(selary);
const mobile = [
  { name: "samsung", color: "black", price: 40000, ram: 4, rom: 64 },
  { name: "redmi", color: "blue", price: 70000, ram: 8, rom: 256 },
  { name: "vivo", color: "white", price: 8000, ram: 2, rom: 16 },
  { name: "sampony", color: "black", price: 10000, ram: 4, rom: 64 },
  { name: "iphone", color: "black", price: 120000, ram: 6, rom: 128 },
];
// ARRAY MAP USES MAP RETURN KORE
const names = mobile.map((name) => name.name);
// console.log(names);
const prices = mobile.map((price) => price.price);
// console.log(prices);

// ARRAY FOREACH USEG FOREACH RETURN KORENA

// mobile.forEach((ram) => console.log(ram.ram));
// mobile.forEach((rom) => console.log(rom.rom));

// FILTER USEG FILTER SOBSOMOI EKTA ARRAY RETURN KORE
const cheps = mobile.filter((price) => price.price < 11000);
// console.log(cheps);
const sameName = mobile.filter((name) => name.name.includes("a"));
console.log(sameName);

const naeNum = [...febNum, 54, 84];
// console.log(febNum);
// console.log(naeNum);
