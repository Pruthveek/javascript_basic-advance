//ssingleton
//Object.create

//object literals

const mySym= Symbol("Hello sir")
console.log(mySym)

const jsuser={
    name:"pruthveek",
    "full name":"Pruthveek Malaviya",
    [mySym]:"myKey1",//without [] this is string
    age:32,
    location:"Ahamedabad",
    email:"pruthveek@gmail.com",
    isLoggedin:false,
    lastLoggedinday:["Monday","Saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log(jsuser.mySym)
console.log(jsuser["mySym"])
console.log(jsuser[mySym])

jsuser.email="pruthveek123@gmail.com"
// Object.freeze(jsuser)
// jsuser.email="pruthveek@gmail.com"
// console.log(jsuser.email)

console.log(jsuser)

jsuser.greeting=function(){
    console.log(`Hello mr.${jsuser.name}, How are you?`)
}
console.log(jsuser.greeting)
console.log(jsuser.greeting())