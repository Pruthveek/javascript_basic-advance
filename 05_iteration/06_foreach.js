//forEach
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function (val) {
    console.log(val);
})

//arow function
console.log("fatch data from array using forEatch with arrow function");
coding.forEach((val) => { console.log(val) });

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFilename: "js"
    },
    {
        languageName: "java",
        languageFilename: "java"
    },
    {
        languageName: "python",
        languageFilename: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName, "=>", item.languageFilename);
})