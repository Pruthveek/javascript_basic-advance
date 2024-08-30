// Stack(Primitive), Heap(Non-primitive/Reference)

//stack 
let myname = "Pruthveek"
let friendname = myname
friendname = "prince"
console.log(myname);
console.log(friendname);

//heap  
let customer = {
    name: "Parth",
    email: "parth123@gmail.com"
}
console.log()
let customer2 = customer
customer2.name = "Yugansh"
console.log(customer.name);
console.log(customer2.name);