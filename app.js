// --------------------------Coder's guild - Projects 1 ------------------

// Age Calculator
const birthYear = 1993;
const currentYear = 2022;
const age = currentYear - birthYear;

console.log(`They are either ${age} or ${age - 1}`);

// Fortune Teller
const children = Math.round(Math.random() * 100);
const partnerList = ["Beth", "Bill", "Bryan", "Carry", "Jane", "Janice"];
const partner = partnerList[Math.floor(Math.random() * partnerList.length)];
const locationList = ["England", "USA", "Spain", "France"];
const location = locationList[Math.floor(Math.random() * locationList.length)];
const jobList = ["Software Developer", "Pilot", "Astronaut", "Engineer"];
const job = jobList[Math.floor(Math.random() * jobList.length)];

console.log(
  `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids`
);

//  Temperature Converter
const tempCelcius = Math.round(Math.random() * 100);
const celciusToFahrenheit = (tempCelcius * 9) / 5 + 32 + "\u00B0F";
const fahrenheit = Math.round(Math.random() * 100);
const fahrenheitToCelcius = ((fahrenheit - 32) * 5) / 9 + "\u00B0C";

console.log(`${tempCelcius}"\u00B0C" is ${celciusToFahrenheit}`);
console.log(`${fahrenheit}"\u00B0F" is ${fahrenheitToCelcius}`);

// --------------------------Project 2 - Functions and Control Flow ------------------

// What number is bigger?
const num1 = Math.random() * 100;
const num2 = Math.random() * 200;

function biggestNumber() {
  if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}

console.log(biggestNumber());

// The Calculator
const squareNumber = (num) => {
  console.log(`The squared result is ${num * num}`);
  return num * num;
};
const halfNumber = (num) => {
  console.log(`half of ${num} is ${num / 2}`);
  return num / 2;
};
const percentOf = (num1, num2) => {
  console.log(`${num1} is ${(num1 / num2) * 100}% of ${num2}`);
  return (num1 / num2) * 100;
};
const areaOfCircle = (radius) => {
  console.log(
    `The area for a circle with a radius of ${radius} is ${(
      Math.PI *
      radius *
      radius
    ).toFixed(2)}`
  );
  return (Math.PI * radius * radius).toFixed(2);
};

// squareNumber(10);
// halfNumber(100);
// percentOf(10, 50);
// areaOfCircle(20);

const total = (num) => {
  const stepOne = squareNumber(halfNumber(num));
  const stepTwo = areaOfCircle(stepOne);
  return percentOf(stepOne, stepTwo);
};

console.log(total(20));

// Fix Start
function fixStart(string) {
  const firstChar = string[0];
  let str = string.split("");
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      newArr.push(firstChar);
    } else if (str[i] === firstChar) {
      newArr.push("*");
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
}

console.log(fixStart("babbidfidfobbbbble"));

// The Fortune Teller: With Functions!
function tellFortune(children, name, location, job) {
  return console.log(
    `You will be a ${job} in ${location}, and married to ${name} with ${children} kids`
  );
}

tellFortune(3, "Jane", "Jamaica", "Musician");

// Pluralise
function pluralise(num, animal) {
  if (animal === "sheep") {
    return console.log(`${num} ${animal}`);
  } else {
    return console.log(`${num} ${animal}'s`);
  }
}

pluralise(5, "sheep");


// mixUp
function mixUp(string1, string2){
const stringOneMixed = string2.slice(0 ,2) + string1.slice(2, string1.length);
const stringTwoMixed = string1.slice(0 ,2) + string2.slice(2, string2.length);

return stringTwoMixed + " " + stringOneMixed;
}

console.log(mixUp("hello", "world"))