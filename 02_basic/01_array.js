//array - Array is a object,enables storing a collection of multiple items under a single variable name.
//in javascript array is resizable and can contain a mix of different datatypes.
// array-copy operations create shallow copies.->same refrence

const arrayNumbers=[1,12,3,34,5,61,17,8,19]
console.log(arrayNumbers);
console.log(`array 1 : ${arrayNumbers}`);
console.log(arrayNumbers[5]);

const arrayHero = new Array("Ironman", "Deadpool", "Spiderman", "Thor")
console.log(`array 2 : ${arrayHero}`);
console.log(arrayNumbers[0]);

//----------------- Methods ---------------------
//length - get length of an array
console.log(`length of an array is a : ${arrayNumbers.length}`);

//PUSH - add a value in array at last position 
arrayNumbers.push(77)
console.log(`push number : ${arrayNumbers}`);

//POP - remove a last value from array
arrayNumbers.pop()
console.log(`pop element : ${arrayNumbers}`)

//UNSHIFT - Add an element to the first position and it is a very time-consuming process because it shifts all the elements from their position.
arrayNumbers.unshift(10)
console.log(`unshift element : ${arrayNumbers}`);

//SHIFT - Remove an element to the first position.
arrayNumbers.shift()
console.log(`shift element : ${arrayNumbers}`);

//----------------- Qustion Methods ---------------------
//includes - I there an element in the array, it returns output in true and flase
console.log(`include 12 : ${arrayNumbers.includes(12)}`);

//indexOf - It gives an index of that element and if it is not available in an array then it gives a -1 value.
console.log(`indexof 12 : ${arrayNumbers.indexOf(12)}`);

//JOIN - add all the elements of an array into a string
const newArr = arrayNumbers.join()
console.log(`New array : ${newArr}`);
console.log(typeof newArr);

console.log(`Array sort : ${arrayNumbers.sort()}`)//sort using first cheracter in array
console.log(arrayNumbers);

//slice, splice
let arr=[1,22,3,14,5,36,7,98,9]
console.log(arr);
console.log(`arr : ${arr}`);

let arr1=arr.slice(1, 3)
console.log(`arr1 : ${arr1} `);
console.log(`arr : ${arr}`);

let arr2=arr.splice(1,3)
console.log(`arr2 : ${arr2}`);
console.log(`arr : ${arr}`);
