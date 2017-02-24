
$(document).ready(function() {

	var character = [ 

		{	id: "char0",
			name: "Will",
			picture: {
				src: "assets/images/stranger-things-starter-will.png",
				alt: "Will"
					 },
			strength: 100,
			hitPwr: 20
		},

		{	id: "char1",
			name: "Dustin",
			picture: {
				src: "assets/images/stranger-things-starter-dustin.png",
				alt:"Dustin"
					 },
			strength: 120,
			hitPwr: 30
		},

		{	id: "char2",
			name: "Eleven",
			picture: {
				src: "assets/images/stranger-things-starter-eleven.png",
				alt: "Eleven"
					 },
			strength: 180,
			hitPwr: 80
		},	

		{	id: "char3",
			name: "Mike",
			picture: {
				src: "assets/images/stranger-things-starter-mike.png",
				alt:"Mike"},
			strength: 140,
			hitPwr: 40
		},

		{	id: "char4",
			name: "Lucas",
			picture: {
				src: "assets/images/stranger-things-starter-lucas.png",
				alt:"Lucas"},
			strength: 160,
			hitPwr: 50
		}

	];
	
	var activeCharacters = ["", ""];
	var	defeatedCharacters = [];
	
	var activeAttackerLife = 0;
	var activeAttackerHit = 0;
	var activeAttackerName = "";
	
	var activeOpponentLife = 0;
	var activeOpponentHit = 0;
	var activeOpponentName = "";
	
	var charLife = [];
	var charHP = [];
	var charName = [];

	for ( i = 0; i < character.length; i++ ) {

		charLife.push(character[i].strength);
		console.log(charLife);
		charHP.push(character[i].hitPwr);
		console.log(charHP);
		charName.push(character[i].name);
		console.log(charName);
		
		//var caption = $("<figurecaption>");
		var images = $("<div>").attr("class", "characters character-selection char" +[i]); 
		images.html("<img" + " src=" + '"' + character[i].picture.src + '" height="175px" width="175px"/>')

		$( ".character-select" ).append( images );
		
	};
//select your players...

	$("body").on("click", ".characters", function() {

		if ($(this).hasClass("opponent-selection")) {

			$(".opponentPanel").html(this);
			$(".characters").removeClass("opponent-selection").addClass("opponents");
			alert("Quick, attack your opponent before the demogorgon takes you to the upsidedown!");
			$(".opponent-selection").addClass("noMoreSelect");
			$(".character-selection").removeClass("characters");
			//console.log(this);
			
				if ($(this).hasClass("char0")) { activeOpponentLife = charLife[0];
							  activeOpponentHit = charHP[0];
							  activeOpponentName = charName [0];
								}
				else if ($(this).hasClass("char1")) { activeOpponentLife = charLife[1];
					 					activeOpponentHit = charHP[1];
					 					activeOpponentName = charName [1];
									  }
				else if ($(this).hasClass("char2")) { activeOpponentLife = charLife[2];
					 					activeOpponentHit = charHP[2];
					 					activeOpponentName = charName [2];
									  }
				else if ($(this).hasClass("char3")) { activeOpponentLife = charLife[3];
					 					activeOpponentHit = charHP[3];
					 					activeOpponentName = charName [3];
									  }	
				else { activeOpponentLife = charLife[4];
			 		   activeOpponentHit = charHP[4];
			 		   activeOpponentName = charName [4];
								}										

				console.log (activeOpponentName, activeOpponentHit, activeOpponentLife);
		}
		
		else if ($(".characters").hasClass("character-selection")) {

		$(this).addClass(".activeAttackChar");
		$(".attackerPanel").html(this);
		$(this).removeClass("character-selection");
		$(".select").text("Select your opponent");
		$(".characters").addClass("opponent-selection");
		
				if ($(this).hasClass("char0")) { activeAttackerLife = charLife[0];
							 activeAttackerHit = charHP[0];
							 activeAttackerName = charName [0];
								  }
				else if ($(this).hasClass("char1")) { activeAttackerLife = charLife[1];
					 activeAttackerHit = charHP[1];
					 activeAttackerName = charName [1];
								  }
				else if ($(this).hasClass("char2")) { activeAttackerLife = charLife[2];
					 activeAttackerHit = charHP[2];
					 activeAttackerName = charName [2];
								  }
				else if ($(this).hasClass("char3")) { activeAttackerLife = charLife[3];
					 activeAttackerHit = charHP[3];
					 activeAttackerName = charName [3];
									  }	
				else { activeAttackerLife = charLife[4];
			 		 activeAttackerHit = charHP[4];
			 		 activeAttackerName = charName [4];
									  }									

				console.log (this);
				console.log (activeAttackerName, activeAttackerHit, activeAttackerLife);
		
		
	} else {}


//attack your opponent...
$("body").on("click", "#attack-button", function() { 

	activeOpponentLife = activeOpponentLife - activeAttackerHit;
	activeAttackerLife = activeAttackerLife - activeOpponentHit;
	console.log (activeAttackerName, activeAttackerHit, activeAttackerLife);
	console.log (activeOpponentName, activeOpponentHit, activeOpponentLife);	

	if (activeAttackerLife > 1 && activeOpponentLife < 1) {

		$(".opponentPanel").html("");
		$(".characters").addClass("characters opponent-selection");
		alert("Well done! Select your next opponent!");
	}

		else if ( activeAttackerLife < 1 ) {

			alert("Best of luck in the UPSIDEDOWN! Click restart to try again!");

		}

			else {}

	});

});

//get next opponent loop...


//when no more opponents and strength >0 you win

//when strength =< 0 and opponent is still >0, you LOSE Cue 11 to come find you!	



});
	

	

	//$(".character-selection").on("click" function() {
		
	//	activeAttackChar.append(this.html);

	//})




	//on.("Click", function() {

	//	activeCharacters.push(this.character);
		//disply strength in div below image from object










	








