
//in this output will be undifined because foreach function can not return any value so we use filter
// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((value)=>{
//     console.log(value);
//     return value;
// })
// console.log(values);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers=numbers.filter((val)=>val>4);
const newNumbers = numbers.filter((val) => {
    return val > 4
});
console.log(newNumbers);

const newNums = [];
numbers.forEach((num) => {
    if (num > 4) {
        newNums.push(num);
    }
});

const books = [

    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },

    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008
    },

    {
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007
    },

    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010
    },

    {
        title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014
    },

    {
        title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010
    },

    {
        title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996
    },
];
let bookInfo = books.filter((bk) => bk.genre === 'History');

bookInfo = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History";
})
console.log(bookInfo);