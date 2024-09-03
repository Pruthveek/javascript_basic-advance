// parameters
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
// arguments
addTwoNumbers(4, 5)

function addition(number1, number2) {
    let result = (number1 + number2)
    return result //last
}
let number1 = 20, number2 = 30
console.log(`${number1} + ${number2} = ${addition(number1, number2)}`)

// function loginUserMessage(username="new user") -> give a default name
function loginUserMessage(username) {
    if (!username) {
        return `Please enter your name`
    } else {
        return `${username} just logged in`
    }
}

console.log(loginUserMessage())
console.log(loginUserMessage("Pruthveek"))

//Array
function calculateCartPrice(...num1) {
    let total = num1.length
    let totalPrice = 0
    for (i = 0; i < total; i++) {
        totalPrice = totalPrice + num1[i]
    }
    return totalPrice
}

console.log(calculateCartPrice(200, 100, 300, 400, 160, 40, 225))

//Object
const user = {
    username: "Pruthveek",
    age: 32
}

function handleObject(anyobject){
    console.log(`His name is ${anyobject.username} and his age is ${anyobject.age}.`)
}

//handleObject(user)
handleObject({
    username: "Pruthveek",
    age: 32
})

const myNewArray =[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))