// ----------------------------Coder's guild ------------------
// -------------------------JavaScript Projects 1-------------------

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

// --------------------------JavaScrip Project 2 - Functions and Control Flow ------------------

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
function mixUp(string1, string2) {
  const stringOneMixed = string2.slice(0, 2) + string1.slice(2, string1.length);
  const stringTwoMixed = string1.slice(0, 2) + string2.slice(2, string2.length);

  return stringTwoMixed + " " + stringOneMixed;
}

console.log(mixUp("hello", "world"));

// -----------------JavaScript Projects 3 -  Loops, Arrays, and Objects --------------------

// Even/odd counter
for (let i = 0; i < 21; i++) {
  if (i % 2 === 0) {
    console.log("even", i);
  } else {
    console.log("odd", i);
  }
}

// The Reading List
let readingList = [
  {
    title: "The Last Kingdom Series",
    author: "Bernard Cornwell",
    readStatus: true,
  },
  {
    title: "The Hitch Hikers Guide to the Galaxy",
    author: "Douglas Adams",
    readStatus: true,
  },
  {
    title: "Emperor Series",
    author: "Conn Iggulden",
    readStatus: true,
  },
  {
    title: "Harry Potter and the Prisoner of Askaban",
    author: "J.K Rowling",
    readStatus: true,
  },
  {
    title: "One Flew Over the Coockoo's Nest",
    author: "Ken Kesey",
    readStatus: true,
  },
  {
    title: "Game of Thrones Series",
    author: "George R Martin",
    readStatus: false,
  },
];

for (let i = 0; i < readingList.length; i++) {
  if (readingList[i].readStatus === true) {
    console.log(
      `You already read ${readingList[i].title} by ${readingList[i].author}`
    );
  } else if (readingList[i].readStatus === false) {
    console.log(
      `You still need to read ${readingList[i].title} by ${readingList[i].author}`
    );
  }
}

// Recipe
let favRecipe = 
  {
    recipeTitle: "Hairy Biker's Chicken Korma",
    servings: 2,
    ingredients: [
      "Onion",
      "Chilli Powder",
      "Chicken",
      "Natural Yoghurt",
      "Cumin",
      "Turmeric",
      "Coriander",
      "Cardamon pods",
      "garlic",
      "cloves",
      "Bay leaf",
      "cream",
    ],
    directions:
      "slice onions, and cook on medium heat. One cooked, add spice mix prepared in a mortar and pestle. Add cream and season for taste.",
    letsCook: function() {
      console.log(`I'm hungry!Let's cook ${this.recipeTitle}`)
    }
  };

function recipeIngredientList() {
  for (let i = 0; i < favRecipe.ingredients.length; i++) {
    console.log(favRecipe.ingredients[i])
  }
}

recipeIngredientList();


// Function
favRecipe.letsCook();


// Times Tables
for (let i = 0; i < 13; i++){
  console.log(9 * i)
};

