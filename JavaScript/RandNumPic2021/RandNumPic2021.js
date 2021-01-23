/* JavaScript for RandNumPic2021.html */

var chosenNumbers = [];
var numberOfNumbers = 20;
var lowestNumber = 1;
var highestNumber = 100;
var duplicatesAllowed = true;

function pickRandNums(){

for (var i=0; i < numberOfNumbers; i++){
    chosenNumbers[i] = Math.floor(Math.random() * highestNumber) + 1;
   
    var div = document.createElement('div');    
    div.setAttribute('class', 'number-box');
	div.textContent = chosenNumbers[i];
    document.getElementById('nbh').appendChild(div); 
   }
}

function clearNums(){
document.querySelectorAll('.number-box').forEach(e => e.remove());
}
