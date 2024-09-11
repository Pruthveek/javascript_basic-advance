//while and do-while loop

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

// taking array element using while loop
let myarray = ["ironman", "batman", "superman", "shaktiman"]
index = 0
while (index < myarray.length) {
    const element = myarray[index]
    console.log(`${index}th index value is : ${element}`)
    index += 1//index=index+1
}

//do-while
let score=11
do{
    console.log(`score is ${score}`);
    score=score+1;
}while(score<=10);