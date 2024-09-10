//for loop

for (let i = 1; i <= 5; i++) {
    const index = i;
    console.log(index);
    if (index === 5) {
        console.log(`${index} is last naumber`);
    }
}

//inner for loop -->outter loop is for a row and innerloop is for column
for(let i=1; i<=10;i++){
    console.log();
    console.log(`Table of ${i}`);
    for(let j=1; j<=10;j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

// taking array element using for loop
let myarray=["ironman", "batman", "superman", "shaktiman"]

for(let index=0; index<myarray.length;index++){
    const element=myarray[index];
    console.log(`${index}th index is : ${element}`);
}

//break keyword is used for stop a current process
for(let index=1;index<=10;index++){
    if(index == 5){
        console.log("break the process");
        break;
    }
    console.log(index);
}

// continue keyword is used for skip an element 
for(let index=1;index<=10;index++){
    if(index == 5){
        console.log(`${index} is skiped`);
        continue;
    }
    console.log(index);
}