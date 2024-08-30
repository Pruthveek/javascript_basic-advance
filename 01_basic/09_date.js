let birthday=new Date()
console.log("1 "+birthday);
console.log("3 "+birthday.toString());
console.log("4 "+birthday.toDateString());
console.log("5 "+birthday.toISOString());
console.log("6 "+birthday.toJSON());
console.log("7 "+birthday.toLocaleDateString());
console.log("8 "+birthday.toLocaleString());

let myborndate=new Date(2002,0,5)
console.log(`My born day is a ${myborndate.toDateString()}`);


console.log("10 "+birthday.toLocaleString('default',{weekday:"long"}));
