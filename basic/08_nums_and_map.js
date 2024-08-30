// ----------------NUMBER----------------
const score = 200
console.log(score);

const rank = new Number(212)
console.log(rank);

console.log(rank.toString().length);
console.log(rank.toFixed(2));

const othernumber = 123.8989
console.log(othernumber.toPrecision(4));//this is used when we know the number of digits

const indeancount = 10000000
console.log(indeancount.toLocaleString('en-IN'));

// ---------------- MATH ----------------
console.log(Math);
console.log(Math.abs(-40));//convert only nagative value to positive value
console.log(Math.round(9.5));//it gives number without decimal
console.log(Math.ceil(4.6));//it gives 4
console.log(Math.floor(4.3));//it gives 5
console.log(Math.min(4, 5, 6, 2, 8));
console.log(Math.max(4, 5, 6, 2, 8));

console.log(Math.random())//it always give value beetween 0 and 1
console.log(math.floor(Math.random() * 10) + 1);

const min =1
const max=6
Math.random()