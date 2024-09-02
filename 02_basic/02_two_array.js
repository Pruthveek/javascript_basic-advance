let marvelHeros=["ironman", "Spiderman", "Thor", "Loki", "Hulk"]
let dcHeros=["Batman", "Superman", "Blackadam"]

console.log(`MARVAL heros : ${marvelHeros}`);
console.log(`DC heros : ${dcHeros}`);

//let allHeros=marvelHeros.concat(dcHeros)
let allHeros=[...marvelHeros, ...dcHeros]
console.log(`All heros : ${allHeros}`)

console.log(`MARVAL heros : ${marvelHeros}`);
console.log(`DC heros : ${dcHeros}`);

const anotherarray=[1,2,3,[4,5],6,7,[8,9,[10,11,12,13]]]
console.log(anotherarray)
console.log(anotherarray.flat(Infinity))
console.log(anotherarray)
console.log(`this is array inside array : ${anotherarray}`)
console.log(Array.from("Pruthveek"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));
