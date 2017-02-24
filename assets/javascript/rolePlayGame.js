
$(document).ready(function() {

	var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/01-Stranger-Things.m4a");

    $(".theme-button").click(function() {
    	audioElement.play();
    });

    $(".pause-button").click(function() {
    	audioElement.pause();
    });
    
	

	var character = [ 

		{	id: "char0",
			name: "Will",
			picture: {
				src: "assets/images/stranger-things-starter-will.png",
				alt: "Will"
					 },
			strength: 120,
			hitPwr: 10
		},

		{	id: "char1",
			name: "Dustin",
			picture: {
				src: "assets/images/stranger-things-starter-dustin.png",
				alt:"Dustin"
					 },
			strength: 120,
			hitPwr: 10
		},

		{	id: "char2",
			name: "Eleven",
			picture: {
				src: "assets/images/stranger-things-starter-eleven.png",
				alt: "Eleven"
					 },
			strength: 180,
			hitPwr: 15
		},	

		{	id: "char3",
			name: "Mike",
			picture: {
				src: "assets/images/stranger-things-starter-mike.png",
				alt:"Mike"},
			strength: 140,
			hitPwr: 12
		},

		{	id: "char4",
			name: "Lucas",
			picture: {
				src: "assets/images/stranger-things-starter-lucas.png",
				alt:"Lucas"},
			strength: 160,
			hitPwr: 10
		}

	];
	
	//var activeCharacters = ["", ""];
	//var	defeatedCharacters = [];
	var attackCount = 0;
	
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
			$(".attackerStats").html("Name:  <strong>" +activeAttackerName+ "</strong> <br>Life:  <strong>" +activeAttackerLife+ "</strong>");
			console.log (activeOpponentName, activeOpponentHit, activeOpponentLife);
			
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

				$(".opponentStats").html("Name:  <strong>" +activeOpponentName+ "</strong> <br>Life:  <strong>" +activeOpponentLife+ "</strong>");
				console.log (activeOpponentName, activeOpponentHit, activeOpponentLife);
		}
		
		else { /*($(".characters").hasClass("character-selection"))*/ 

		$(this).addClass(".activeAttackChar");
		$(".attackerPanel").html(this);
		$(this).removeClass("character-selection");
		$(".select").text("Select your opponent");
		$(".characters").addClass("opponent-selection");
		$(".opponentStats").html("Name:  <strong>" +activeAttackerName+ "</strong> <br>Life:  <strong>" +activeAttackerLife+ "</strong>");

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
				$(".attackerStats").html("Name:  <strong>" +activeAttackerName+ "</strong> <br> Life: <strong>" +activeAttackerLife+ "</strong>");
		
	} 

//attack your opponent...
	$("body").on("click", "#attack-button", function() { 

		attackCount = attackCount++;
		console.log(attackCount);
		activeOpponentLife = activeOpponentLife - activeAttackerHit;
		activeAttackerLife = activeAttackerLife - activeOpponentHit;
		activeOpponentHit = activeOpponentHit-1;
		console.log (activeAttackerName, activeAttackerHit, activeAttackerLife);
		console.log (activeOpponentName, activeOpponentHit, activeOpponentLife);	
		$(".attackerStats").html("Name:  <strong>" +activeAttackerName+ "</strong> <br> Life: <strong>" +activeAttackerLife+ "</strong>");
		$(".opponentStats").html("Name:  <strong>" +activeOpponentName+ "</strong> <br> Life: <strong>" +activeOpponentLife+ "</strong>");

		if (attackCount = 6 && activeAttackerLife < activeOpponentLife) {

			//activeOpponentLife = activeOpponentLife - 7;
			activeAttackerHit = activeAttackerHit + 3;
			//alert("Your oppenent is weakening!");
		} else {}

		if (attackCount = 7 && activeAttackerLife < activeOpponentLife) {

			activeAttackerLife = activeAttackerLife + 3;
			//alert("Eleven has given you a boost");
		} else {}


		if (activeAttackerLife > 1 && activeOpponentLife < 1) {

			$(".opponentPanel").html("");
			attackCount = 0;
			activeOpponentLife = 0;
			activeOpponentHit = 0;
			activeOpponentName = "";
			activeAttackerLife = activeAttackerLife+3;
			$(".opponentStats").html("<strong>SELECT ANOTHER OPPONENT!</strong>");
			$(".opponents").addClass("characters opponent-selection");
			
			

			if (!$(".character-selection").hasClass("opponents")) {
				alert("You've Won!!! You're living in the RIGHTSIDEUP!")

				} 
					else  { //alert("Well done! Select your next opponent!");
					}

			}
			else if ( activeAttackerLife < 1 ) {

				alert("Best of luck in the UPSIDEDOWN! Click restart to try again!");

			}
			else {}

		});
		
		});
	
	
//restart button to refresh the game...

	$("#restart-button").on("click", function () {


	attackCount = 0;
	
	activeAttackerLife = 0;
	activeAttackerHit = 0;
	activeAttackerName = "";
	
	activeOpponentLife = 0;
	activeOpponentHit = 0;
	activeOpponentName = "";
	
	charLife = [];
	charHP = [];
	charName = [];

	$(".character-selection").html("");
	$(".select").text("Select your player!");
	$(".opponentStats").html("Opponent");
	$(".attackerStats").html("Player");
	$(".opponentPanel").html("");
	$(".attackerPanel").html("");

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
	})

});










	








