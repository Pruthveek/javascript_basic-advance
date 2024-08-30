let name = "Pruthveek"
let age = "32"
console.log("Hello my name is " + name + " and my age is " + age);//old way
console.log(`Hello my name is ${name.toUpperCase()} and my age is ${age}`);//morden way

const gamename = new String("PUBG and freefire")
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(10));
console.log(gamename.indexOf('p'));

const substring = gamename.substring(0, 4) //4 index of character is not count do not enter negative value
console.log(substring)

const slicestring = gamename.slice(3, -3)
console.log(slicestring);

console.log(gamename.replace('P','B'));

const newname = new String("           PUBG     ")
console.log(newname);
console.log(newname.trim())

