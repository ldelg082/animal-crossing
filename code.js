/***
 ***	Replace this with a full list of characters and pictures!
 ***/
characters = [
	{name: "isabelle", image: "isabelle.png"},
	{name: "tom Nook", image: "tomnook.png"},
	{name: "K.K.Slider", image: "kkslider.png"},
	{name: "Daisy Mae", image: "daisymae.png"},
	{name: "Blathers", image: "blathers.png"},
	{name: "Leif", image: "leif.png"},
	{name: "Wilbur", image: "Wilbur.png"},
	{name: "Timmy and Tommy", image: "timmy_and_tommy.png"},
	{name: "Saharah", image: "saharah.png"},
	{name: "Flick", image: "flick.png"}
];

/***
 ***	Replace this with the number of characters you end up having
 ***  after you update the array above!
 ***/
 let numberOfCharacters = 10;


 var points = 0;
 var rounds = 0;
 var roundMax = 10;
 var mTitle = document.querySelector("#menu-title");
 var sTitle = document.querySelector("#sTitle");
 var gDiv = document.querySelector("#game-div");
 var body = document.querySelectorAll("body");

 function startGame() {
   var startMenu = function () {
     document.querySelector("#menu-title").style.display = "none";
     document.querySelector("#sTitle").style.display = "flex";
     document.body.removeEventListener("keypress", startMenu);
     document.body.removeEventListener("click", startMenu);
   };

   document.body.addEventListener("keypress", startMenu);
   document.body.addEventListener("click", startMenu);
 }

 function whoIsThatCharacter() {
   document.querySelector("#points").innerHTML = points;
   document.querySelector("#rounds").innerHTML = rounds;
   if (rounds === roundMax) {
     mDiv.innerHTML = "";
     mDiv.insertAdjacentHTML(
       "beforeend",
       `<h2 id=${"endTitle"}>${
         "You got " + points + " out of " + roundMax + "!"
       }</h2>`
     );
     mDiv.insertAdjacentHTML(
       "beforeend",
       '<button id="mEnd" class="back-btn">Back to menu</button>'
     );
     rounds = 0;
     points = 0;

     var endGame = function () {
       gDiv.style.display = "none";
       startGame();
     };

     var endBtn = document.querySelector("#mEnd");
     endBtn.addEventListener("click", endGame);
   } else {
     gDiv.style.display = "block";
     var randomNum = function () {
       randomNumber = Math.floor(Math.random() * (numberOfCharacters-1));
       return randomNumber;
     };

     var rNum = randomNum();
     getThatCharacter(rNum);
   }
 }

 function getThatCharacter(rNum) {
   console.log("playing now!");



 	/***
 	 *** Replace "character" with a random character from the characters array!
 	 *** So that it is not always Isabelle
 	 *** Use rNum - the random number variable that we already have
 	 *** hint: characters[rNum]
 	 ***/



	 		let character = {
	 	name: "isabelle",
	  image: "isabelle.png"
	 	 	  }


	/*** indexing array attempt 1
	 let character = rNum {
		isabelle: {
			name: "Isabelle",
			image: "isabelle.png"
		},
		TomNook: {
			name: "Tom Nook",
			image: "tomnook.png"
		},
		KKSlider: {
			name: "K.K. Slider",
			image: "kkslider.png"
		},
		DaisyMae: {
			name: "Daisy Mae",
			image: "daisymae.png"
		},
		Blathers: {
			name: "Blathers",
			image: "blathers.png"
		},
		Leif: {
			name: "Leif",
			image: "leif.png"
		},
		Wilbur: {
			name: "Wilbur",
			image: "wilbur".png"
		},
		TimmyAndTommy: {
			name: "Timmy and Tommy",
			image: "timmy_and_tommy.png"
		},
		Saharah: {
			name: "Saharah",
			image: "saharah.png"
		},
		Blathers: {
			name: "Flick",
			image: "flick.png"
		}
	};
	***/


/*** indexing array attempt 2
		 let character = function (whoIsThatCharacter) {
		 	   "Isabelle": {
		 	     name: "isabelle",
		 	     image: "isabelle.png"
		 	   },
		 	   "Tom Nook": {
		 	     name: "Tom Nook",
		 	     image: "tomnook.png"
		 	   },
		 	   "K.K. Slider": {
		 	     name: "K.K. Slider",
		 	     image: "kkslider"
		 	   },
		 	   "Daisy Mae": {
		 	     name: "Daisy Mae",
		 	    image: "daisymae.png"
		 	   },
		 	   "Blathers": {
		 	     name: "Blathers",
		 	     image: "blathers.png"
				 },
				"Leif": {
					name: "Leif",
					image: "leif.png"
				},
				"Wilbur": {
					name: "Wilbur",
					image: "wilbur.png"
				},
				"Timmy and Tommy": {
					name: "Timmy and Tommy",
					image: "timmy_and_tommy.png"
				},
				"Saharah": {
					name: "Saharah",
					image: "saharah.png"
				},
				"Flick": {
					name: "Flick",
					image: "flick.png"
				}
		 	 };

	***/


	/*** indexing an array attempt 3
	let character = function getThatCharacter(rNum) {
 	 switch (character) {
 		 case "Isabelle":
 			 characters.isabelle.image;
 			 break;
 		 case "Tom Nook":
 			characters.tomnook.image;
 			 break;
 		 case "K.K. Slider":
 				characters.kkslider.image;
 			 break;
 			 case "Daisy Mae":
 					characters.daisymae.image;
 				 break;
 				 case "Blathers":
 						characters.blathers.image;
 					 break;
 					 case "Leif":
 						 characters.leif.image;
 						break;
 						case "Wilbur":
 						 characters.wilbur.image;
 						break;
 						case "Timmy and Tommy":
 						 characters.timmy_and_tommy.image;
 						break;
 						case "Saharah":
 						 characters.Saharah.image;
 						break;
 						case "Flick":
 						 characters.flick.image;
 						break;
 		 default:
 			 console.error("Character not included");
 	 };
  };

	***/


	/*** indexing an array attempt 4
 let character = function getThatCharacter(rNum) {
	 name: "isabelle",
	 image: "isabelle.png"
	}
	***/


   const mDiv = document.querySelector("#mDiv");
   mDiv.innerHTML = "";
   mDiv.insertAdjacentHTML(
     "afterbegin",
     `<img id=${"pokemon-image"} src=${
       character.image
     } height=${300} width=${200}>`
   );
   mDiv.insertAdjacentHTML(
     "beforeend",
     `<h3 id=${"mHeader"}>${"Who's that Character?"}</h3>`
   );

   mDiv.insertAdjacentHTML("beforeend", `<div id=${"iDiv"}></div>`);
   const iDiv = document.querySelector("#iDiv");
   iDiv.insertAdjacentHTML("beforeend", `<input type="text" id=${"mInput"}>`);
   iDiv.insertAdjacentHTML(
     "beforeend",
     `<button id=${"mButton"}>Submit</button>`
   );

   const mButton = document.querySelector("#mButton");
   var input = "";

   var getInput = function () {
     mButton.removeEventListener("click", getInput);
     input = document.querySelector("#mInput").value;

     if (input.toLowerCase() === character["name"]) {
       points++;
     }
     rounds++;

     document.querySelector("#points").innerHTML = points;
     document.querySelector("#rounds").innerHTML = rounds;

     const pImage = document.querySelector("#pokemon-image");
     var imageA = pImage.animate(
       [
         {
           filter: "brightness(-2)",
         },
         {
           filter: "brightness(-2)",
         },
       ],
       {
         duration: 2000,
         iterations: 1,
       }
     );

     var aAnim = function () {
       imageA.pause();
       pImage.style.filter = "brightness(1)";

       var imageA_2 = pImage.animate(
         [
           { transform: "rotate(0)" },
           { transform: "rotate(-20deg)" },
           { transform: "rotate(20deg)" },
           { transform: "rotate(-20deg)" },
           { transform: "rotate(0)" },
         ],
         {
           duration: 2000,
         }
       );

       mDiv.insertAdjacentHTML(
         "beforeend",
         `<h3 id=${"sHeader"}>${"It's " + character.name + "!"}</h3>`
       );
       var header2 = document.querySelector("#sHeader");
       var header_2 = header2.animate(
         [{ fontSize: "0px" }, { fontSize: "28px" }],
         {
           duration: 500,
         }
       );
     };

     setTimeout(aAnim, 100);
     setTimeout(whoIsThatCharacter, 2500);
   };

   mButton.addEventListener("click", getInput);
 }

 startGame();
