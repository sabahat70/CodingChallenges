var participants = ["ghfd",
"gcjbch",
"j",
"gagc",
"bihjcac",
"hfjc",
"ijh",
"gbcj",
"bjeh",
"efadgbagd",
"agb",
"fehgfg",
"dhefcfehee",
"ahig",
"iedbejcag",
"jcggejfae",
"hbhchccgb",
"g",
"fj",
"jajbh",
"bbfjhhgh",
"gfgd",
"eibcjdjaii",
"ajgdif",
"bbfjiei",
"ad",
"e",
"eehgd",
"hf",
"gcbhifhebi",
"jhfdii",
"bijg",
"dddig",
"e",
"iijhhgeda",
"ajcf",
"afjeg",
"ccehhfeibc",
"jdgiacbaf",
"ba",
"fagegcfig",
"ieh",
"eag",
"jja",
"bdbbadead",
"bjgjddiafg",
"eaaegcg",
"fgjihcic",
"jgachgbdcb",
"jjbejb",
"h",
"ihaeia",
"cjgba",
"cccaf",
"cjacid",
"aeajbjgcf",
"ejjdg",
"f",
"c",
"edfbhedbeg",
"eccgebciij",
"iii",
"ididddi",
"e",
"gijagihj",
"d",
"dhdc",
"fcgfihj",
"aebaeih",
"i",
"cehjdjc",
"dabhijbfe",
"cfhejjefjd",
"haibjj",
"icfdejac",
"b",
"gcbcahdbbj",
"f",
"hheageh",
"ificg",
"g",
"egcijga",
"ababdhhc",
"efcacja",
"jefbadhiig",
"e",
"hgajhfj",
"ifddidhj",
"hihe",
"ja",
"iifiedhbdi",
"j",
"jjdcedhb",
"cac",
"hf",
"he",
"hb",
"bh",
"e",
"i"];

var userNames = [];
var tempUserNames = [];

userNames.push(participants[0][0]);


for(var i = 1; i < participants.length; i++){

	for (var j = 0; j < i; j++ ){

		if(i!==j){
			var pi = participants[i];
			var pj = participants[j];
			var counter = 0;
			var min = 0;
			var uN = "";

			if (pi.length > pj.length) 
				min = pj.length;
			else
				min = pi.length;

			while(counter < min){
				if(pi === pj){
					uN = pi +" " + 2;
					break;
				}
				if(pi[counter] === pj[counter])
					uN = uN+pi[counter];
				else{
					uN = uN + pi[counter];
					break;
				}
				
				counter++;
			}
			if(counter === min && pi.length > min)
				uN = uN + pi[counter];
			//console.log(uN);
			
		}
		if (tempUserNames.length === 0)
			tempUserNames.push(uN);
		else{
			if (tempUserNames[0].length < uN.length)
				tempUserNames[0] = uN;
			else if (tempUserNames[tempUserNames.length-1] === uN.length){
				tempUserNames.push(uN);

			}
		}
	}
	if(tempUserNames.length > 1){
		uN = uN +" "+ tempUserNames.length+1;
		userNames.push(uN);
	}else
	userNames.push(tempUserNames.pop());
	
	tempUserNames = [];
}

console.log(userNames);