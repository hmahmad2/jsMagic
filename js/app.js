function backgroundChange() {
   document.body.style.background = 'pink';
   document.getElementById('secondHeader').innerHTML = "Interesting things...";
}


console.log("Hello World");

let tim = new Date();
// tim = tim.toDateString();
tim = tim.toLocaleDateString();

// let's do some basic arithmatic as a warm-up
let retValue;
function valueExtraction(steve) {
   steve = Number(document.getElementById("testValue").value);
   console.log(steve);
}

// function strangeMath(x) {
//    var num = valueExtraction(x);
//    num += 5;
//    num *= 8;
//    console.log(num);
// }

document.getElementById("testButton").onclick = function() {
   valueExtraction(retValue)
};

/**I now know what this code right above me was not working:
 * I had placed my script tag with my JS source before anything else in the HTML loaded
 * 
 * In essense, what the js was looking for was not loaded in yet. So THAT'S why I have to call the script tag last. Huh. Well, lesson learned.
 */



// Output
console.log(tim);
// document.body.innerHTML += tim;