// 1. const -> constant value this variable value can not be change
const customerId=102
//customerId=103 
//this line give you error because of const variable value can not be change

// 2. var -> var is dont know a scope ({}) so we don't use it.
var num1=20
if(true){
    var num1=30
}
console.log("num1 "+num1)

// 3. let -> lat is a replacement of a var for create a scope based variable 
let num2=100
if(true){
    let num2=200
    console.log("num2 in {} :" +num2)
}
console.log("num2 out of {} :" +num2)