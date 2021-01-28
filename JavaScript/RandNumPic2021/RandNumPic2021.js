/* JavaScript for RandNumPic2021.html */

var chosenNumbers = [];
var numberOfNumbers = 0;
var lowestNumber = 1;
var highestNumber = 100;
var duplicatesAllowed = true;

function pickRandNums(){
var non = document.getElementById("numberOfNumbers").value;
numberOfNumbers = parseInt(non);

var s100 = document.getElementById("start-100").value;
var s10 = document.getElementById("start-10").value;
var s1 = document.getElementById("start-1").value;

var e100 = document.getElementById("end-100").value;
var e10 = document.getElementById("end-10").value;
var e1 = document.getElementById("end-1").value;

var start100 = parseInt(s100) * 100;
var start10 = parseInt(s10) * 10;
var start1 = parseInt(s1);

var end100 = parseInt(e100) * 100;
var end10 = parseInt(e10) * 10;
var end1 = parseInt(e1);

var start = start100 + start10 + start1;
var end = end100 + end10 + end1;

var difference = end - start;

for (var i=0; i < numberOfNumbers; i++){
    chosenNumbers[i] = Math.floor(Math.random() * (difference + 1)) + start;
   
    var div = document.createElement('div');    
    div.setAttribute('class', 'number-box');
	div.textContent = chosenNumbers[i];
    document.getElementById('nbh').appendChild(div); 
   }
}

function clearNums(){
document.querySelectorAll('.number-box').forEach(e => e.remove());
}
