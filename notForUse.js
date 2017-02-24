
$(document).ready(function() {

	var character [ 

		{	id: "char1"
			name: "Dustin",
			picture: "https://placeholdit.imgix.net/~text?txtsize=33&txt=DUSTIN&w=200&h=200",
			strength: 120;
			hitPwr: 25;
		},

		{	id: "char2"
			name: "Will",
			picture: "https://placeholdit.imgix.net/~text?txtsize=33&txt=WILL&w=200&h=200",
			strength: 100;
			hitPwr: 20;
		},

		{	id: "char3"
			name: "Mike",
			picture: "https://placeholdit.imgix.net/~text?txtsize=33&txt=MIKE&w=200&h=200",
			strength: 180;
			hitPwr: 20;
		},	

		{	id: "char4"
			name: "Lucas",
			picture: "https://placeholdit.imgix.net/~text?txtsize=33&txt=LUCAS&w=200&h=200",
			strength: 140;
			hitPwr: 20;
		}
	];
	
	var activeCharacters [];
	var	defeatedCharacters [];

	for (i=0; i<character.length; i++) {
		$(".character-select").html(character[index].picture);
		};



	on.("Click", function() {

		activeCharacters.push(this.character);
		//disply strength in div below image from object

	}









	








});
