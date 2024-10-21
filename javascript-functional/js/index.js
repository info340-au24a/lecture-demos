'use strict';

//an array of objects to work with
const peopleArray = [
  {name: 'Ada', height: 64, weight: 135},
  {name: 'Bob', height: 74, weight: 156},
  {name: 'Chris', height: 69, weight: 139, pronouns: 'they/them'},
  {name: 'Diya', height: 69, weight: 144},
  {name: 'Emma', height: 71, weight: 152}
]
console.log(peopleArray);

//assign function to variable
// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// console.log(typeof sayHello) // 'function'
// const other = sayHello;

// //prints "Hello, everyone"
// other('everyone'); 


// const msg = "hello";

// const myFunction = function(person) {
//   console.log("Hello, "+person);
// }

// myFunction("class!");


// function sayHello(name) { 
//   console.log("Hello, "+name);
// }

// function sayGoodbye(name) {
//   console.log("Goodbye, "+name);
// }

// //takes in a function
// function doWithWorld(aFunction) {
//   aFunction("world");
// }

// doWithWorld(sayHello); //"Hello world"
// doWithWorld(sayGoodbye);

// function sayHello() { //version with no args
//   return "Hello";
// }

// //print out the function
// console.log( sayHello );

// console.log( sayHello() );



function doTogether(firstCallback, secondCallback){
  //console.log("firstCallback:", firstCallback);
  firstCallback();  //execute the first function
  secondCallback();  //execute the second function
  console.log('at the "same time"!');
}

// function patHead() {
//   console.log('pat your head');
// }

// function rubBelly() {
//   console.log('rub your belly');
// }

// //pass in the callbacks to do them together
// doTogether(patHead, rubBelly());


// const sortByHeightFunction = function(personA, personB) {
//   if(personA.height < personB.height) {
//     return -1; //person A is shorter, so they come first
//   } else if(personB.height < personA.height) {
//     return 1; //person B is shorter, so they come first 
//   } else {
//     return 0;
//   }
// }

// peopleArray.sort(function(personA, personB) {
//   if(personA.height < personB.height) {
//     return -1; //person A is shorter, so they come first
//   } else if(personB.height < personA.height) {
//     return 1; //person B is shorter, so they come first 
//   } else {
//     return 0;
//   }
// });

// console.log(peopleArray);


const printName = function(personObj){
  console.log(personObj.name);
}

// peopleArray.forEach(function(personObj){
//   console.log(personObj.name);
// });

// for(const personObj of peopleArray) {
//   console.log(personObj.name);
// }

//TEMPLATE
// const newArray = oldArray.map(function(element) {
//   const transformed = element // DO SOMETHING TO IT
//   return transformed;
// });

//[{},{},{}] => [<>,<>,<>]
const peopleNameArray = peopleArray.map(function(personObj) {
  const transformed = personObj.name;
  return transformed;
})

console.log(peopleNameArray);

const peopleGreetingArray = peopleNameArray.map(function(name) {
  const transformed = "Howdy "+name+"!!";
  return transformed;
});
console.log(peopleGreetingArray);


// console.log("<ul>")
// for(const personName of peopleNameArray){
//    console.log("   "+personName);
// }
// console.log("</ul>")

const tallPeopleNames = peopleArray
  .filter(function(personObj) {
    return personObj.height > 70;
  })
  .map(function(personObj) {
    return personObj.name;
  })

console.log(tallPeopleNames);

//function reducer(acc, curr)
function addWeight(accumulation, personObj) {
  const newAcc = accumulation + personObj.weight;
  return newAcc;
}

const totalWeight = peopleArray.reduce(function(accumulation, personObj) {
  const newAcc = accumulation + personObj.weight;
  return newAcc;
}, 0);
console.log(totalWeight);






































