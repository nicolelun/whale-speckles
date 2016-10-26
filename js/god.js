var wordArray = ["god", "is", "the", "speck", "of", "light", "on", "a", "window."];
var letterArray = [
	"g", "o", "d",
	"i", "s", " ",
	"t", "h", "e",
	"s", "p", "e", "c", "k",
	"o", "f",
	"l", "i", "g", "h", "t",
	"o", "n",
	"a",
	"w", "i", "n", "d", "o", "w"
];
var mainSection = document.querySelector("#main-section");

// NOTE: Retrieve the div to hold the expression
var expressionDiv = document.querySelector("#expression-1");

// NOTE: Create words for the div that holds the expression
for (var i = 0; i < wordArray.length; i += 1) {
	var wordDiv = document.createElement("div");
	wordDiv.textContent = wordArray[i];
	wordDiv.className = "word";
	wordDiv.style.animationDuration = (randNum(6, 6.5) + "s");
	wordDiv.style.animationDelay = (randNum(0, 0.4) * i) + "s";
	
	expressionDiv.appendChild(wordDiv);
}

