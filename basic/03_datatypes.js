"Use strict";//treat all js code as newer version
// 1. Primitive - String, Number, Boolean, null, undefined, Symbol, BigInt
// 2. Nonprimitive (Reference) - Array, Object, function
//alert(3+3)
//We are using nodejs, not browser

console.log(3+3)
console.log(7+" Pruthveek")

let name="Pruthveek" //string
let age=32 //number
let mobileNo=7433993937n //bigint
let active=false //boolean
let temp=null //null but it's type is object
let car; //nudefined
// symbol => unique

//object

console.log(typeof temp) //object
console.log(typeof car) //undefined
console.log(typeof mobileNo)
console.log(mobileNo)

const colour=["red", "yellow", "green", "blue", "orenge"]//array
let userInfo={
    name:"Pruthveek",
    age:32,
    city:"Ahmedabad",
}//object
const hellofunction=function(){
    console.log("Hello this is a function")
}//this is a function which is stored in variable