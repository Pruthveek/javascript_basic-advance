// IIFI(Immediately Invoked Function Expressions)

(function addTwoNumber(num1, num2) {
    console.log(`Database connected`)
    console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`)
})(2, 3);

((name) => {
    console.log(`Database connected by ${name}`)
})("Pruthveek")

// let countloop=0
// function one() {
//     countloop+=1
//     console.log(`function 1 is run`);
//     console.log(`Number : ${countloop}`)
//     function two() {
//         console.log(`function 2 is run`);
//         function three() {
//             console.log(`function 3 is run`);
//             one()
//         }
//         three()
//     }
//     two()
// }
// one()