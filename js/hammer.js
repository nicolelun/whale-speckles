var wordArray = ["a", "tempest", "is", "the", "hammer", "of", "god."];
var letterArray = [
	"a",
	"t", "e", "m", "p", "e", "s", "t",
	"i", "s",
	"t", "h", "e",
	"h", "a", "m", "m", "e", "r",
	"o", "f",
	"g", "o", "d"
];

var mainSection = document.querySelector("#main-section");

window.setTimeout(hammer, 0);
window.setInterval(hammer, randNum(4000, 6000));

function hammer() {

	// NOTE: Create a link
	var nextPageLink = document.createElement("a");
	nextPageLink.href = "god.html";
	nextPageLink.className = "next-page-link";
	nextPageLink.style.top = randNum(0, 70) + "%";
	nextPageLink.style.left = randNum(0, 70) + "%";

	mainSection.appendChild(nextPageLink);
	console.log(nextPageLink);

	// NOTE: Create a div to hold the expression
	var expressionDiv = document.createElement("div");
	expressionDiv.className = "expression";
	expressionDiv.style.animation = "fade-in 1s both";

	nextPageLink.appendChild(expressionDiv);

	// NOTE: Create a background burst for the div that holds the expression
	var burstDiv = document.createElement("div");
	burstDiv.className="burst";
	
	var burstDelay = randNum(1, 2.5);
	burstDiv.style.animation = "burst-background-0 3s " + burstDelay + "s both";

	expressionDiv.appendChild(burstDiv);

	// NOTE: Create words for the div that holds the expression
	for (var i = 0; i < wordArray.length; i += 1) {

		var wordDiv = document.createElement("div");
		wordDiv.textContent = wordArray[i];
		wordDiv.className = "word";
		wordDiv.id = "word-" + i;
		// wordDiv.style.fontSize = randInt(25, 40) + "px";
		
		var smashAnimation = "smash-expression-" + randInt(0, 9) + " 1s " + burstDelay + "s both";
		wordDiv.style.animation = smashAnimation;	

		expressionDiv.appendChild(wordDiv);
	}

	// NOTE: Create extra letters for the div that holds the expression
	for (var i = 0; i < letterArray.length; i += 1) {
		
		var letterDiv = document.createElement("div");
		letterDiv.textContent = letterArray[i];
		letterDiv.className = "letter";
		letterDiv.id = "letter-" + i;
		
		var smashAnimation = "smash-expression-" + randInt(0, 9) + " 1s " + burstDelay + "s forwards";
		letterDiv.style.animation = smashAnimation;

		expressionDiv.appendChild(letterDiv);
	}
}