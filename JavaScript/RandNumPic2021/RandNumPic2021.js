/* JavaScript for RandNumPic2021.html */

var chosenNumbers = [];
var numberOfNumbers = 0;

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

	if(uon.checked && numberOfNumbers > difference + 1){
		 alert("It is not possible to produce more unique numbers than the number of numbers that are in the range. Please uncheck the no duplicates checkbox or change the number of numbers or the range and then try again.");
	}
	else{
		for (var i=0; i < numberOfNumbers; i++){
		 if(uon.checked){
			allowNoDuplicates(difference, start);
		 }
		 else{
			chosenNumbers[i] = Math.floor(Math.random() * (difference + 1)) + start;
		 } 
		}
		
		var choice = document.getElementById('asc');
	    if( choice.checked ){
			alert('ascending is checked');
			chosenNumbers.sort(function(a, b){return a-b});
		}
		
		var choice = document.getElementById('des');
	    if( choice.checked ){
			alert('descending is checked');
			chosenNumbers.sort(function(a, b){return b-a});
		}
				
		for (var i=0; i < numberOfNumbers; i++){
		 var div = document.createElement('div');    
		 div.setAttribute('class', 'number-box');
		 div.textContent = chosenNumbers[i];
		 document.getElementById('nbh').appendChild(div); 		 
		}
		
    }
}
function allowNoDuplicates(difference, start){

	var pick = Math.floor(Math.random() * (difference + 1)) + start;
	
	if(chosenNumbers.indexOf(pick) > -1){
	
		while(chosenNumbers.indexOf(pick) > -1){
			pick = Math.floor(Math.random() * (difference + 1)) + start;			
		}
		
	}
	
	chosenNumbers.push(pick);

}

function clearNums(){
document.querySelectorAll('.number-box').forEach(e => e.remove());
chosenNumbers = [];
}