function backgroundChange() {
   document.body.style.background = 'pink';
   document.getElementById('secondHeader').innerHTML = "Interesting things...";
}


console.log("Hello World");

let tim = new Date();
// tim = tim.toDateString();
tim = tim.toLocaleDateString();

// testing how value extraction works
function valueExtraction() {
   var calcTest = document.getElementById("testValue").value;
   console.log(calcTest);
}
// document.getElementById("testButton").onclick = function() {
//    valueExtraction();
// };

/* So I don't yet get why this commented code up here doesn't work properly, but setting the code to activate on the HTML side worked fine so... ??? This solution is not good for data abstraction, I need to work on getting the commented code to work */



// Output
console.log(tim);
// document.body.innerHTML += tim;