// const user = {
//     userName: "Pruthveek",
//     printThis: this,
//     age: 32,
//     welcomeMessage: function () {
//         console.log(`${this.userName}, Welcome to this file.`);
//         console.log(this);
//     }
// }
// console.log(user.printThis)
// user.welcomeMessage()
// user.userName = "Parth"
// user.welcomeMessage()

// console.log(this); // -> {}

// function printThis() {
//     let userName = "Yugansh"
//     // console.log(this.userName); -> undifined
//     console.log(this)
// }
// printThis()

// ---------------------------------function using arrow
const chai = () => {
    let userName = "Pruthveek"
    console.log(this)
}
chai()

// //type=>1
// const addTwoNumber =(num1,num2)=>{
//     return num1+num2
// }

// //type=>2
// const addTwoNumber = (num1, num2) => num1 + num2

//type=>3
const addTwoNumber = (num1, num2) => (num1 + num2)

console.log(addTwoNumber(2, 5));