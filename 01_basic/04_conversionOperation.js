//-----------------------  Conversion  -----------------------
let score = "33"
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/*if value is
"33" -> 33
"33abc" -> NaN(not a Number)
true -> 1
false -> 0 */

let isLoggedIn ="Pruthveek"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// If value is 0, false, undefined, null, NaN, document then it give false otherwise it give true

//-----------------------  Operation  -----------------------

let value=3
let nagValue=-value
console.log(nagValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**4);
console.log(2/4);
console.log(2%4);

let firstName="Pruthveek"
let lastName=" Malaviya"
let fullName= firstName + lastName
console.log(fullName);

console.log("1"+2);
console.log("2"+2+1); 
console.log(2+2+"1"); //4+"1"

let num1=10
console.log("num1 : "+num1)
let num2=num1++;
console.log("num1 : "+num1)
console.log("num2 : "+num2)
let num3=++num1;
console.log("num1 : "+num1)
console.log("num2 : "+num2)
console.log("num3 : "+num3)
