'use strict';

export const monsterArray = [
  {name: 'Dracula', type: 'vampire', height: 64},
  {name: 'Frankenstein', type: 'zombie', height: 74},
  {name: 'Mr. Hyde', type: 'mad scientist', height: 69},
  {name: 'Mummy', type: 'mummy', height: 69},
  {name: 'Creature from the Black Lagoon', type: 'fish', height: 71}
]
console.log("index monsters", monsterArray);

export function sayHello(name) {
  return "Hello " + name;
}

// const sayHello = (name) => "Hello " + name;

// const printHello = () => console.log("Hello ")

// console.log(sayHello("class"));

// const myArray = [1, 2];
// const [y, x, z] = myArray; 
// // const x = myArray[0];
// // const y = myArray[1];
// // const z = myArray[2];

// console.log("x", x);
// console.log("y", y);
// console.log("z", z);

// const myObject = {a: 1, c: 3, b: 2, d: 4};
// const {a, b, c, e} = myObject;
// console.log("a", a);
// console.log("b", b);
// console.log("c", c);
// console.log("e", e);

// //a function that expects a person object
// function getBMI(personObj) {
//   const {height, weight} = person;

//   return 703*weight/(height*height);
// }

// function getFullName({first, last}) {
//   return first + " " + last;
// }


// const originalArray = ['a', 'b', 'c', 'd'];
// const newArray = ['0', ...originalArray, 'e', 'f'];
// // originalArray.push('z');

// console.log(newArray);


// const person = {name: 'Ada', height: 64, weight: 135}

// const copyOfPerson = {...person}; //clone an object!
// console.log(person === copyOfPerson); //false! different objects!

// //all off the properties are "spread" into the new object
// const personWithHat = {hat: 'bowler', ...person}
// console.log(person); //has name, height, weight
// console.log(personWithHat); //has name, height, weight, hat











