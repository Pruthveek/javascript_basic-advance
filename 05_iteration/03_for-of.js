//for of

//["", "", ""]
//[{}, {}, {}]

//console.log([1,2,3,[4,5,6,7],8,9,[10,11,12,[13,14,15]]].flat(Infinity));
const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myarray.push(20)
for (const num of myarray){
    console.log(num);
}

// const myObject={
//     game1:"GTA5",
//     game2:"Spiderman3",
//     game3:"WWE2k23"
// }

// for(const keyvalue of myObject){
//     console.log(keyvalue);
// }