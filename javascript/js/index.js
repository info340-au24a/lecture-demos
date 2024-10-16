'use strict';

console.log("Hello world");

// console.log("It is far too early");
// console.log("Where is the coffee??");

// const x = "hello";
// console.log(typeof x);

// let hoursSlept;
// console.log(hoursSlept);

// const num = 10
// const str = '10'

// // What are the values of each expression?
// // (they will all be booleans, true/false)
// const bool1 = (num == str)
// const bool2 = (num === str)
// const bool3 = ('' == 0) //empty String compare to 0

// console.log(bool3)

// const lettersArray = ['a', 'b', 'c'];
// console.log(lettersArray);

// console.log(lettersArray[4]);

// lettersArray[1] = 'B';
// console.log(lettersArray);
// lettersArray[4] = 'f';
// console.log(lettersArray);

// const agesObj = {sarah:42, amit:35, zhang:13}
// console.log(agesObj);

// const numWordsObj = {1:'one', 2:'two', 3:'three'}
// const numWordsKeysArray = Object.keys(numWords);
// console.log(numWordsKeysArray);

// const myObj = {};
// myObj['name'] = "Joel";
// console.log(myObj);

// console.log("myObj values: ", myObj);

// numWordsObj + 1;

const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]

peopleArray[2].name;


// for i in range(0, array.length)

// for(let i=0; i<peopleArray.length; i++) {
//   const personObj = peopleArray[i]
//   console.log(personObj.name);
// }

//for(String name : myArray)
//for name in myArray:
for(const personObj of peopleArray){
  console.log(personObj.name);
}


function greet(greeting, name){
  return greeting  + ", " + name;
}

console.log(greet("Good morning", "class"));









