function validate(data){

	var sudoku = [[0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0,0]
				 ];

	for(let i = 0; i<data.length; i++){

		sudoku[data[i][0]-1][data[i][1]-1] = data[i][2];
	}
	
	let count = {};
	let value = 0;

	for(let i =0; i <sudoku.length; i++){
		for(let j =0; j<sudoku[i].length;j++){
			value = sudoku[i][j];
			if(value !==0 ){
				if(!count[value])
					count[value] = 1
				else
					
			}
		}
	}
}

validate([ [3, 1, 3],
[2, 8, 3],
[1, 4, 3],
[7, 2, 3],
[6, 3, 3],
[5, 5, 3],
[4, 7, 3],
[8, 6, 3],
[9, 9, 3]]);