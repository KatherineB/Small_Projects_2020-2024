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
   
   console.log(solnColourCodes);
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
  