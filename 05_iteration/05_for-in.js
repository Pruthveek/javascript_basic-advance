//for in

//Array
const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myarray.push(20)
for (const num in myarray){
    console.log(num);
}

//Object
const myObject={
    game1:"GTA5",
    game2:"Spiderman3",
    game3:"WWE2k23"
}

for(const key in myObject){
    console.log(`${key} is a ${myObject[key]}`);
}

//map that can not give an output
const mymap=new Map();
mymap.set('IN',"india");
mymap.set('USA',"united states of america");
mymap.set('FR',"france");
mymap.set('CN',"canada");
mymap.set('IN',"india");

for(const [key,value] in mymap){
    console.log(key, ':', value);
}