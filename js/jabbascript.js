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
document.getElementById("testButton").onclick = function() {
   valueExtraction()
};

/**I now know what this code right above me was not working:
 * I had placed my script tag with my JS source before anything else in the HTML loaded
 * 
 * In essense, what the js was looking for was not loaded in yet. So THAT'S why I have to call the script tag last. Huh. Well, lesson learned.
 */



// Output
console.log(tim);
// document.body.innerHTML += tim;