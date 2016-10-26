var wordArray = ["the", "sea", "is", "the", "blood", "of", "a", "tempest."];
var letterArray = [
	"t", "h", "e",
	"s", "e", "a",
	"i", "s", " ",
	"t", "h", "e",
	"b", "l", "o", "o", "d",
	"o", "f",
	"a",
	"t", "e", "m", "p", "e", "s", "t",
];
var mainSection = document.querySelector("#main-section");

// NOTE: Retrieve the div to hold the expression
var expressionDiv = document.querySelector("#expression-1");

// NOTE: Create words for the div that holds the expression
for (var i = 0; i < wordArray.length; i += 1) {
	var wordDiv = document.createElement("div");
	wordDiv.textContent = wordArray[i];
	wordDiv.className = "word";
	wordDiv.style.animationDelay = (3 + randNum(0.1, 0.2) * i) + "s";
	
	expressionDiv.appendChild(wordDiv);
}

// NOTE: Retrieve divs to hold the random letters
var floodBackgroundDiv = document.querySelector("#flood-background");
var bubbleContainerDiv = document.querySelector("#bubble-container");

// NOTE: Call the function to create the random letters
window.setTimeout(bubble, 1000);

// NOTE: Create the random letters
function bubble() {

	var numLetters = 300;

	for (var i = 0; i < numLetters; i += 1) {
		var letterDiv = document.createElement("div");
		letterDiv.id = "letter-" + i;
		letterDiv.textContent = letterArray[randInt(0, letterArray.length)];
		letterDiv.style.fontSize = randInt(14, 40) + "px";
		letterDiv.style.left = randNum(0, 100) + "vw";
		
		if (i < numLetters * .2) {
			letterDiv.className = "letter-bubble";
			letterDiv.style.animationName = "gurgle-letter-" + randInt(1, 4);
			letterDiv.style.animationDuration = "1.5s";
			letterDiv.style.animationDelay = (randNum(0.2, 0.3) * i) + "s";
			letterDiv.style.animationIterationCount = "infinite";
			letterDiv.style.animationFillMode = "backwards";
			bubbleContainerDiv.appendChild(letterDiv);

		} else {
			letterDiv.className = "letter-background";
			letterDiv.style.bottom = randNum(0, 100) + "vh";
			letterDiv.style.opacity = randNum(0.25, 0.75);
			floodBackgroundDiv.appendChild(letterDiv);
		}
		
	}
}
