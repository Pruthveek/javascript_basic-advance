// Falsy values

// false, 0, -0, BigInt , navigator, "", null, undefined, NaN

// Truthy values

// true, "0", 'false', " ", [], {}, function () {}  


//------nullish coalescing operator (??):null undefined
let val1;
// val1=5??10
val1=null??20
console.log(val1);

//------Terniary Operator
//Condition ? true : False
let age=12
age < 18?console.log(`Your age is under 18`) : console.log(`Your age is above 18`)