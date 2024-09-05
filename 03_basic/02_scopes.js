//var
console.log(`var`)
var varVariable=10
if(varVariable){
    varVariable=20
    var varVariable2=40
}
console.log(varVariable)
console.log(varVariable2)

//let
console.log(`let`)
let letVariable=10
if(letVariable){
    letVariable=20
    let letVariable2=40
}
console.log(letVariable)
//console.log(letVariable2) //this variable give you error

// const
console.log(`const`)
const constVariable=10
//constVariable=50
if (constVariable){
    //constVariable=20
    const constVariable2=40
}
console.log(constVariable)
//console.log(constVariable2)

//Scop of function
function one(){
    const userName="Pruthveek"
    function two(){
        const website="Github"
        console.log(userName);

    }
    //console.log(website); -> it can't acesses out of box
    two()
}
one()

// scope of if
if(true){
    const userName="Pruthveek"
    if(userName === "Pruthveek"){
        const website="Github"
        console.log(`${userName} on a ${website}`)
    }
    //console.log(website);
}
//console.log(userName);

console.log(addNumber(2,5,7))
function addNumber(num1,num2,num3){
    return num1+num2+num3
}

// console.log(addTwoNumber(2,5))
// const addTwoNumber =function(num1,num2){
//     return num1+num2
// }
