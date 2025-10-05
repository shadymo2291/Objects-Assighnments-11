console.log("#".repeat(30));
console.log(
  "%cObjects|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

document.writeln(`
<h1>Objects | Chalenges | Assighnments</h1>
<h2>Check The Console.</h2>
`);

// Assighnment_1

console.log("#".repeat(30));
console.log(
  "%cObjects|Chalenges|Assighnment_1",
  "color: #9c27b0; font-size: 14px; font-weight: bold"
);
console.log("#".repeat(30));

let member1 = {
  name1: "Elzero",
  age1: 38,
  country1: "Egypt",
  fullDetails1: function () {
    return `My Name Is ${member1.name1}, My Age Is ${member1.age1}, I Live in ${member1.country1}`;
  },
};

console.log(member1.name1); // Elzero
console.log(member1.age1); // 38
console.log(member1.country1); // Egypt
console.log(member1.fullDetails1());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// Assighnment_2

console.log("#".repeat(30));
console.log(
  "%cObjects|Chalenges|Assighnment_2",
  "color: #9c27b0; font-size: 14px; font-weight: bold"
);
console.log("#".repeat(30));

// Method One
let objMethodOne2 = {
  property2: "Method One",
};

console.log(objMethodOne2.property2); // "Method One"

// Method Two
let prop2 = {
  property2: "Method Two",
};
let objMethodTwo2 = Object.create(prop2);

console.log(objMethodTwo2.property2); // "Method Two"

// Method Three
let objMethodThree2 = Object({
  property2: "Method Three",
});

console.log(objMethodThree2.property2); // "Method Three"

// Method Four

let objMethodFour2 = Object.assign({}, { property2: "Method Four" });

console.log(objMethodFour2.property2); // "Method Four"

// Assighnment_3

console.log("#".repeat(30));
console.log(
  "%cObjects|Chalenges|Assighnment_3",
  "color: #9c27b0; font-size: 14px; font-weight: bold"
);
console.log("#".repeat(30));

let a3 = 1;

let threeNums = {
  b3: 2,
  c3: 3,
  d3: 4,
};

let twoNums = {
  e3: 5,
  f3: 6,
};

let finalObject3 = Object.assign({}, { a3: a3 }, threeNums, twoNums);

console.log(finalObject3);

console.log(Object.keys(twoNums).length);

// Assighnment_4

console.log("#".repeat(30));
console.log(
  "%cObjects|Chalenges|Assighnment_4",
  "color: #9c27b0; font-size: 14px; font-weight: bold"
);
console.log("#".repeat(30));

let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]]["publisher"]}`
  );
  console.log(
    `The Price Is ${myFavGames[Object.keys(myFavGames)[i]]["price"]}`
  );

  if (typeof myFavGames[Object.keys(myFavGames)[i]].bestThree === "object") {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"].one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"].two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"].three}`
    );
  }
  console.log("#".repeat(20));
}

// Other Solution

// let Mapfun = Object.keys(myFavGames).map(function (ele) {
//   console.log(`The Game Name Is ${ele}`);
//   console.log(`The Publisher Is ${myFavGames[ele]["publisher"]}`);
//   console.log(`The Price Is ${myFavGames[ele]["price"]}`);
//   if (typeof myFavGames[ele].bestThree === "object") {
//     console.log("- Game Has Releases");
//     console.log(`First => ${myFavGames[ele]["bestThree"].one}`);
//     console.log(`Second => ${myFavGames[ele]["bestThree"].two}`);
//     console.log(`Third => ${myFavGames[ele]["bestThree"].three}`);
//   }
//   console.log("#".repeat(20));
// });
