// parameters
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
// arguments
addTwoNumbers(4,5)

function addition(number1, number2){
    let result=(number1+number2)
    return result //last
}
let number1=20,number2=30
console.log(`${number1} + ${number2} = ${addition(number1,number2)}`)

// function loginUserMessage(username="new user") -> give a default name
function loginUserMessage(username){
    if(!username){
        return `Please enter your name`
    }else{
        return `${username} just logged in`
    }    
}

console.log(loginUserMessage())
console.log(loginUserMessage("Pruthveek"))