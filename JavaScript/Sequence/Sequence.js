// JavaScript for Sequence.html

squareIds = [ ['a1', 'a2', 'a3', 'a4', 'a5'],
			 ['b1', 'b2', 'b3', 'b4', 'b5'],
			 ['c1', 'c2', 'c3', 'c4', 'c5'],
			 ['d1', 'd2', 'd3', 'd4', 'd5'],
			 ['e1', 'e2', 'e3', 'e4', 'e5']  ];
			 
squareColours = [ [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0]  ];

solnColourCodes = [0, 0, 0, 0, 0];

pickSoln();

function pickSoln(){

   for(var i=0; i<5; i++){
   solnColourCodes[i] = (Math.floor(Math.random() * 3)) + 1;
   }
   
//console.log(solnColourCodes);
}

function setColourChoice(x, y, colour){

   if(colour == 1){
       document.getElementById(squareIds[x][y]).style.backgroundColor = '#ee8833';   
   }
   else if(colour == 2){
       document.getElementById(squareIds[x][y]).style.backgroundColor = 'cyan';
   }
   else if(colour == 3){
       document.getElementById(squareIds[x][y]).style.backgroundColor = 'purple';
   }
   
   squareColours[x][y] = colour;
}

function getGuess(row){

	var totalCorrect = 0;
	
	if(squareColours[row][0] == solnColourCodes[0] && squareColours[row][1] == solnColourCodes[1]){
		totalCorrect++;
	}
	
	if(squareColours[row][0] == solnColourCodes[0] && squareColours[row][1] == solnColourCodes[1] && squareColours[row][2] == solnColourCodes[2]){
		totalCorrect++;
	}
	
	if(squareColours[row][1] == solnColourCodes[1] && squareColours[row][2] == solnColourCodes[2] && squareColours[row][3] == solnColourCodes[3]){
		totalCorrect++;
	} 
	
	if(squareColours[row][2] == solnColourCodes[2] && squareColours[row][3] == solnColourCodes[3] && squareColours[row][4] == solnColourCodes[4]){
		totalCorrect++;
	} 
	
	if(squareColours[row][3] == solnColourCodes[3] && squareColours[row][4] == solnColourCodes[4]){
		totalCorrect++;
	}
	
	switch(row){
	    case 0: 
			 document.getElementById('a-result').innerHTML = totalCorrect;
			 document.getElementById('a-result').className = "result-display";
			 break;
		case 1: 
			 document.getElementById('b-result').innerHTML = totalCorrect;	
             document.getElementById('b-result').className = "result-display";			 
			 break;
		case 2: 
			 document.getElementById('c-result').innerHTML = totalCorrect;
			 document.getElementById('c-result').className = "result-display";
			 break;
		case 3: 
			 document.getElementById('d-result').innerHTML = totalCorrect;		
             document.getElementById('d-result').className = "result-display";			 
			 break;
		case 4: 
			 document.getElementById('e-result').innerHTML = totalCorrect;
			 document.getElementById('e-result').className = "result-display";
			 break;
		default: 
			 alert("Error: Nothing matched in switch.");
	}
	
	if(totalCorrect == 5){
		//alert("You Win !!!");
		document.getElementById('win').style.display = 'block';
	}
	
	if(row == 4 && totalCorrect < 5){
		//alert("Sorry. You have lost. You did not guess the sequence");
		document.getElementById('loss').style.display = 'block';
	}
}
  
function startNewGame(){
	squareColours = [ [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0]  ];

	solnColourCodes = [0, 0, 0, 0, 0];
	
	for(var i=0; i<5; i++){
		for(var j=0; j<5; j++){
			document.getElementById(squareIds[i][j]).style.backgroundColor = '#ffffff';
		}
	}
	
	document.getElementById('a-result').className = "result-square";
	document.getElementById('a-result').innerHTML = "DISPLAY LINE 1 RESULT";
	
	document.getElementById('b-result').className = "result-square";
	document.getElementById('b-result').innerHTML = "DISPLAY LINE 2 RESULT";
	
	document.getElementById('c-result').className = "result-square";
	document.getElementById('c-result').innerHTML = "DISPLAY LINE 3 RESULT";
	
	document.getElementById('d-result').className = "result-square";
	document.getElementById('d-result').innerHTML = "DISPLAY LINE 4 RESULT";
	
	document.getElementById('e-result').className = "result-square";
	document.getElementById('e-result').innerHTML = "DISPLAY LINE 5 RESULT";
	
	document.getElementById('win').style.display = 'none';
	document.getElementById('loss').style.display = 'none';

	pickSoln();
}