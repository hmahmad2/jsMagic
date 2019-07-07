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
function valueExtraction(numVal) {
   numVal = Number(document.getElementById("testValue").value);
   console.log("Value retrieved from user is $" + numVal);
   return numVal;
}

function standardTip(saleTotal) {
   var noTip = valueExtraction(saleTotal);
   // tipCalc += 5;
   // tipCalc *= 8;
   var tipCalc = Number(noTip * 0.15);
   // console.log(typeof(tipCalc));
   tipCalc = Number(tipCalc.toFixed(2));
   var totalPayment = tipCalc + Number(noTip.toFixed(2));
   
   console.log("Calculated tip is $" + tipCalc);
   console.log("Calculated total is $" + totalPayment);
   document.getElementById("tipDisplay").innerHTML = `$${tipCalc} is how much tip you owe.`;
   // document.getElementById("tipDisplay").innerHTML += "\n";
   document.getElementById("totalDisplay").innerHTML += `$${totalPayment} is how much you owe in total.`;
   return totalPayment;
}

// function totalPayment(tipVal) {
   
// }

document.getElementById("testButton").onclick = function() {
   // valueExtraction(retValue)
   standardTip(retValue)
};

/**I now know what this code right above me was not working:
 * I had placed my script tag with my JS source before anything else in the HTML loaded
 * 
 * In essense, what the js was looking for was not loaded in yet. So THAT'S why I have to call the script tag last. Huh. Well, lesson learned.
 */



// Output
console.log(tim);
// document.body.innerHTML += tim;