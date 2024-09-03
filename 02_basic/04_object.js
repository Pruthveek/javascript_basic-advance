//const tinderUser=new Object() -> Singleton
const tinderUser = {}

tinderUser.id = "123@Pruthveek"
tinderUser.name = "Pruthveek"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const userInfo = {
    email: "pruthveek@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Pruthveek",
            lastName: "Malaviya"
        }
    }
}

console.log(`User first name is ${userInfo.fullName?.userFullName?.firstName}`)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

//const obj3=Object.assign(obj1,obj2) ->it change obj 1 so we use {} empty object
//const obj3=Object.assign({},obj1,obj2) -> {} target and other object is source
const obj3 = { ...obj1, ...obj2 }
console.log(obj3)
console.log(obj1)
console.log(obj2)

const user=[
    {
        id:1,
        email:"pruthveek@gmail.com"
    },
    {
        id:2,
        email:"parth@gmail.com"
    },
    {
        id:3,
        email:"prince@gmail.com"
    },
]

console.log(user[2].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course={
    coursename:"JS basic to advance",
    price:"999",
    courseInstructor:"Pruthveek"
}
// course.courseInstructor

const{courseInstructor:instructor}=course //De-structuring

console.log(instructor);

// react
// const navbar=({company}) => {
// }
// navbar(company="Azaato")

//API value come in json format
//in JSON key and value both are in String
//we use jsonformatter for understand a data in json  

// {
//     "name":"Pruthveek",
//     "coursename":"Javascript in basic",
//     "price": "free"
// }