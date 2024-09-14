//array.reduce() method

const mynums = [1, 2, 3, 4];

// const myTotal=mynums.reduce((acc,curr)=> acc+curr,0);

const myTotal = mynums.reduce((acc, curVal) => {
    console.log(`acc : ${acc} and curentValaue : ${curVal}`);
    return acc + curVal;
}, 0);

console.log(myTotal);

const shopingCart = [
    {
        itemName: "js Course",
        price: 299
    },
    {
        itemName: "python Course",
        price: 5299
    },
    {
        itemName: "mobile devlopment Course",
        price: 9299
    },
    {
        itemName: "Data science Course",
        price: 12299
    },
]

const totalPrice = shopingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);