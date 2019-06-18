function backgroundChange() {
   document.body.style.background = 'pink';
   document.getElementById('secondHeader').innerHTML = "Interesting things...";
}


console.log("Hello World");

let tim = new Date();
// tim = tim.toDateString();
tim = tim.toLocaleDateString();


// Output
console.log(tim);
// document.body.innerHTML += tim;