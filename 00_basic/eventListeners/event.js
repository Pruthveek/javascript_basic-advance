function eventlisteners(){
	counter=0;
	document.getElementById("clickme").addEventListener("click",function(){
    console.log("button clicked ",++counter , " times");
	})	
}
eventlisteners();