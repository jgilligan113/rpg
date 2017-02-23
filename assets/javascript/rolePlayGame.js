
$(document).ready(function() {

	var character = [ 

		{	id: "char1",
			name: "Dustin",
			picture: {
				src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=DUSTIN&w=175&h=175",
				alt: "Dustin"
					 },
			strength: 120,
			hitPwr: 25
		},

		{	id: "char2",
			name: "Will",
			picture: {
				src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=WILL&w=175&h=175",
				alt:"Will"
					 },
			strength: 100,
			hitPwr: 20
		},

		{	id: "char3",
			name: "Mike",
			picture: {
				src: "https://placeholdit.imgix.net/~text?txtsize=33&txt=MIKE&w=175&h=175",
				alt: "Mike"
					 },
			strength: 180,
			hitPwr: 20
		},	

		{	id: "char4",
			name: "Lucas",
			picture: {
				src: "assets/images/stranger-things-starter-lucas.png",
				alt:"Lucas"},
			strength: 140,
			hitPwr: 20
		}
	];
	
	var activeCharacters = ["", ""];
	var	defeatedCharacters = [];
	var activeAttackerLife = 0;
	var activeAttackerHit = 0;
	var activeAttackerName = "";

	for ( i = 0; i < character.length; i++ ) {

		activeAttackerLife = character[i].strength;
		activeAttackerHit = character[i].hitPwr;
		activeAttackerName = character[i].name;
		
		
		var caption = $("<figurecaption>");
		var images = $("<figure>");

		//images.append( caption );
		caption.html("Name:  <strong>"+character[i].name +"</strong><br>Strength: <strong>"+activeAttackerLife+"</strong><br>HP: <strong>"+activeAttackerHit +"</strong><br>")
		images.attr("class" , "character-selection character"+[i]);
		images.html("<img" + " src=" + '"' + character[i].picture.src + '" height="175px" width="175px"/><br>').append ( caption );

		$( ".character-select" ).append( images );


		
	};

	$(".character-selection").on("click", function() {

		$(".activeAttackChar").append(this).attr("class", "activeAttackChar");
	}



	)

	//$(".character-selection").on("click" function() {
		
	//	activeAttackChar.append(this.html);

	//})



});


	//on.("Click", function() {

	//	activeCharacters.push(this.character);
		//disply strength in div below image from object










	








