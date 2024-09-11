//maps

const mymap=new Map();
mymap.set('IN',"india");
mymap.set('USA',"united states of america");
mymap.set('FR',"france");
mymap.set('CN',"canada");
mymap.set('IN',"india");
console.log(mymap);
console.log(mymap.size);

for(const [key,value] of mymap){
    console.log(key, ':', value);
}

for(const [key] of mymap){
    console.log(key);
}