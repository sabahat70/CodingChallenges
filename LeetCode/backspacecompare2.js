var backspaceCompare = function(S, T) {
 let Slength = S.length;
 let Tlength = T.length;
 let newS = '';
 let newT = '';
 let backspace = 0;
 
 for(let i = Slength-1; i >= 0 ; i--){
 	if (S[i]!=='#' && backspace === 0){
 		newS += S[i];
 	}
 	else if (S[i]==='#') {
 		backspace++;
 		
 	}
 	else 
 		backspace--;
 }

backspace = 0

for(let i = Tlength-1; i >= 0 ; i--){
 	if (T[i]!=='#' && backspace === 0){
 		newT += T[i];
 	}
 	else if (T[i]==='#') {
 		backspace++;
 		
 	}
 	else 
 		backspace--;
 }

 return newT === newS;
}

backspaceCompare('ab#c','ad#c');
