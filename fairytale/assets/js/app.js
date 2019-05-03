
$(".hidden").first().fadeIn().removeClass("hidden");


$(".gonext").click(function() {
	$(".hidden").first().fadeIn().removeClass("hidden");
})

$("span").click(function() {

	if (!$(this).hasClass('after-click')) {
		console.log($(this).parent().find(".click").length);

		if ($(this).parent().find(".click").length == 1) {

			$(".hidden").first().fadeIn();
			setTimeout(function(){
			$('html, body').animate({scrollTop: '+=680px'}, 600);
			}, 1000);


			if ($(".hidden").first().find(".click").length == 0) {
				console.log($(this).parent().find(".click").length);
				console.log("first length zero");
				$(".hidden").first().removeClass("hidden");
				setTimeout(function(){ 
					$(".hidden").first().fadeIn().removeClass("hidden");

					console.log("fading in");
					}, 2000);
					setTimeout(function(){
					$('html, body').animate({scrollTop: '+=1280px'}, 600);
					}, 3000);

				
			} else {
				$(".hidden").first().removeClass("hidden");
				setTimeout(function(){
				$('html, body').animate({scrollTop: '+=680px'}, 600);
				}, 1000);
			}
		}
	} // close after-click check
});


$(".last").click(function() {
	// setTimeout(function(){
	$(".print").removeClass("gone").fadeIn(3000);
	$(".download").removeClass("gone").fadeIn(3000);
	// }, 2000);
})



		// if ($(".section").find(".click").length == 0) {
		// 	$(".hidden").next().removeClass("hidden");
		// 	setTimeout(function(){ 
		// 		$(".hidden").first().fadeIn().removeClass("hidden");
		// 		}, 2000);
		// 		setTimeout(function(){
		// 		$('html, body').animate({scrollTop: '+=1280px'}, 600);
		// 		}, 3000);
		// 	};



$(".print").hover(
	function() {
		$(this).toggleClass('animated bounce');

});

$(".download").hover(
	function() {
		$(this).toggleClass('animated bounce');

});



$("span").hover(
	function() {
		$(this).toggleClass('animated pulse');

		

});




var creature = new Array (
	 "Dragon", "Mermaid", "Unicorn",  "Fairy", "Troll", "Yeti",  "Pegasus", "Griffin", "Centaur",  "Giant Snake", "Leprechaun", "Ghoul",
	  "Gnome", "Pixie", "Sea Serpant",  "Werewolf", "Pheonix", "Vampire", "Wizard"
	);


var distance = new Array (
	 "miles", "feet", "inches", "meters", "kilometers", "centimeters"
	);

var response = new Array (
	 "Yes", "No", "Definitely not", "Absolutely", "Nope", "Of course"
	);



var verbIng = new Array (
	"burning", "feeling", "hunting", "drawing", "being" 
	);



var place = new Array (
	"bank", "office", "church", "lake", "plains", "village", "building", "ocean", "garden", "bridge", "cemetery",
	"field", "city", "desert", "sea", "town", "mountains", "land", "farm", "sun", "beach", "store", "volcano", "cafe",
	"school", "house", "forest", "grassland", "island", "river", "market", "port", "park", "stream", "hill", "valley",

	);

var direction = new Array (
	 "northern", "forward", "southern", "ahead", "western"

	);

var seasonOrTime = new Array (
	"evening",  "spring", "century", "summer", "week", "years", "months", "hours", "moment", "winter",  "minutes", "morning",
	 "night",  
	);


var main = new Array (
	"Sir", "Chief", "Doctor", "Lady", "Child", "Uncle", "God", "Captain","President", "Cat", "Bear", "Baby", 
	"Teacher", "Farmer", "Scientist", "Fish", "King",  "Bird", "Dog", "Horse", "Tree", "Cow", "Soldier", 

	);




var adjective = new Array (
	 "British", "difficult", "steel", "Greek", "afraid", "dead", "huge", "similar", "various", "pretty", 
	 "fresh", "fair", "current", "sharp", "necessary",  "particular", "rich", "Japanese", "exciting", "thick", "fun", "loud", "thin",
	 "flat", "interesting", "famous", "valuable", "safe", "silent", "modern", "electric", "strange", "single", "cool", "bad", 
	 "poor", "French", "tiny", "quiet", "natural", "broken", "bright", "free", "tall", "beautiful", "soft", "wild", "happy", "ugly",
	 "gone", "simple", "dark", "special", "heavy", "fine", "full", "hot", "warm", "dry", "round", "deep", "clear", "strong", "lovely",
	 "cold", "fast", "better", "best", "young", "important", "hard", "kind", "different", "large", "big", "old", "small", "cute",
	 "good", "great", "little",  "metal", "early", "careful", "straight", "trouble", "ready", "quick", "English", "short", "imaginary"


	);

var adjectiveLy = new Array (
	"carefully", "quickly", 
	)

var color = new Array ( "yellow", "brown", "blue", "green", "red", "white",  "magenta", "orange", "teal", "violet", "gray", "auburn",

	);

var number = new Array ( "eight", "seven", "one", "two", "three", "four", "five",  "six", "nine",  "ten", "one thousand", "one billion", "one million",  

	);


var thing = new Array(
	"seat", "hoe", "rope", "cotton", "apple", "corn", "substance",  "tool", "match", "computer", "coffee", "mug", "pencil",
	"rose", "chart", "triangle", "column",  "radio", "truck", "jeans", "sweater", "sneaker", "headphones", "wallet", "umbrella",
	"shoulder", "industry", "block", "science", "tube", "meat", "army", "hat", "lullaby", "necklace", "ring", "toilet", "sock", 
	"fruit", "dollar", "branch", "blood", "spot", "bell", "string", "wing", "pole", "calculator", "pants", "underwear", "bag",
	"poem", "bone", "board", "art", "corner", "insect", "crop", "tone", "sand",
	"team", "stick", "seed", "wire", "information", "mouth", "decimal", "shoe","nose", "sugar", "fig",
	"gun", "cloud", "symbol", "engine", "foot", "ear", "glass", "skin", "cent", "key", "finger",
	"hole", "melody", "bottom", "gold", "milk", "stone", "iron", "dictionary", "hair",  
	"scale", "case", "soil", "bed", "ice", "snowball", "cloth", "flower", "root", 
	"instrument", "store", "job", "edge", "sign", "record", "arm", "window", "heart", "wall", 
	"leg", "cell", "rain", "egg", "train", "square", "bill", "test", "ball", "material",
	"rule", "language", "shape", "equation", "machine", "base", "plane", "boat", "game", 
	"note", "wheel", "island", "box", "star", "wood", "fire", "ground", "pattern", "numeral", 
	"table", "money", "map", "wind", "rock", "wave", "door", "music", "list", "song",  "face", "book",
	"eye", "light", "head", "plant", "paper", "home", "air",  "hand", "picture", "page", "letter", "oil", "movement", 
	"food", "problem", "element", "level", "chance", "guess", "row", "lot", "war", "voice", 
	"car",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    
	);

var pluralThing = new Array(
	"seats", "hoes", "ropes", "cotton", "apples", "details", "corns", "substances",  "tools", "conditions",  "matches", "scores", 
	"roses", "workers", "oxygens", "charts", "solutions", "shops", "triangles", "molecules", "columns",  "radios", "factories", "trucks",
	"shoulders", "industries", "blocks", "cattle", "companies", "sciences", "majors", "tubes",  "meats", "armies", "hats", "properties",
	"fruits", "dollars", "sights", "streams", "planets", "rhythms", "branches", "bloods", "spots", "bells", "strings", "wings", "poles", 
	"poems", "bones", "malls", "boards", "compounds", "arts", "corners", "insects", "crops", "tones", "sands", "gardens",
	"teams", "statements", "sticks", "seeds","coasts", "wires", "information", "mouths", "yards", "decimals", "shoes","noses", "sugars", "figs",
	"guns", "clouds", "symbols", "engines", "feet", "laws", "ears", "glasses", "skins", "cents", "keys", "fingers",
	"holes", "consonants", "angles", "fractions", "melodys", "bottoms", "golds", "milks", "stones", "irons", "dictionaries", "hairs", "ages", 
	"scales", "pounds", "cases", "everything", "soils", "beds", "copies", "ices", "snowballs", "floors", "hills", "clothes", "flowers", "roots", 
	"instruments", "stores", "jobs", "weathers", "edges", "signs", "records", "skies", "grasses", "arms", "windows", "hearts", "walls", 
	"legs", "cells", "rains", "eggs", "trains", "energies", "subjects", "squares", "syllables", "bills", "tests", "balls", "materials",
	"governments", "heats", "rules", "languages", "shapes", "equations", "machines", "bases", "planes", "systems", "boats", "games", 
	"notes", "nothings", "wheels", "islands", "classes", "boxes", "stars", "woods", "fires", "roads", "grounds", "vowels", "patterns", "numerals", 
	"tables", "moneys", "maps", "winds", "rocks",  "products", "waves", "doors", "lists", "songs",  "faces", "books", 
	"eyes", "lights", "heads", "plants", "papers", "homes", "airs",  "hands", "pictures", "pages", "letters",  "sentences", "oils", "movements", "win",
	"foods", "problems", "elements", "levels", "chances", "guesses", "businesses",  "historys", "rows", "lots", "reasons", "wars", "voices", 
	"friends", "questions", "ideas",  "cars",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    
	);


var verb = new Array( 
	"make", "be", "have", "write", "see", "sit", "find", "get", "take", "work", "know", "live", "give",
	"help", "tell", "follow", "want", "show", "form", "turn", "ask", "need", "move", "try", "change", "play", "spell", "study", "learn",
	"add", "keep", "start", "close", "open", "begin", "run", "walk", "grow", "carry", "hear", "eat", "watch",
	"cut", "leave", "stand", "order",  "listen", "hold", "draw", "plan", "notice", "sing", "fall", "figure",
	"travel", "fly", "wait", "feel", "stay", "know", "force", "return", "believe", 
	"dance", "paint", "love", "exercise", "drop", "race", "meet", "represent", "describe", "drive",
	"speak", "solve", "appear", "sleep", "ride", "care", "buy",  "hope", "lead", "act", "build", "count", "sail", "wonder", "trip",
	"fight", "surprise", "beat", "remain", "dress", "catch", "design", "wear", "save", "experiment", "choose",  "express", "control", 
	"practice","rise", "party", "pay", "clean", "please", "direct", "serve", "increase", "separate", "break",
	"supply", "hit", "provide", "cook", "fit", "expect", "blow", "lie", "observe", "send", "process", "swim", "sell", "wash",
	"spread", "experience", "allow", "fear",  "march", "create", "determine", "smell", "track","underline", "view", "win", "shop", "consider",
	"circle", "power", "caught", "trade", "think", "indicate", "belong", "compare", "lay", "correct", 
	"step", "talk", "walk", 
	);


var pastTenseVerb = new Array( "said", "had", "been", "called", "made", "did", "came", "went", "read", "found", "thought", "saw", "left",
	"heard",  "reached", "covered", "passed","pulled", "cried",  "gave", "became", "shown", "decided", "stood",  "ran", "brought", "built",
	"filled", "felt", "divided", "picked",  "developed", "written",  "kept", "raised", "held", "jumped",  "rolled", "smiled", "killed",
	"died", "climbed", "wrote", "shouted", "continued",  "joined", "grew", "lost", "sent", "received", "fell", "tied", "settled",
	"repeated", "agreed", "stretched", "bought", "led", "arrived", "located", "prepared", "lifted", "suggested", "printed",
	"pushed", "laughed", "finished", "discovered", "sat", "seen", "knew", 

	);



// creatures

var pastRand = false;

$(".creature").click(function() {
	pastRand = Math.floor(Math.random()*creature.length);
	$(".creature").html(creature[pastRand]);
	$(".creature").removeClass( "click" ).addClass("after-click");
});


$("p").html(creature[Math.floor(Math.random()*creature.length)]);
$("p").append(" ");






// distance
var pastRand = false;

$(".distance").click(function() {
	pastRand = Math.floor(Math.random()*distance.length);
	$(this).html(distance[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(distance[Math.floor(Math.random()*distance.length)]);
$("p").append(" ");





// verbIng

var pastRand = false;

$(".verbIng").click(function() {
	pastRand = Math.floor(Math.random()*verbIng.length);
	$(this).html(verbIng[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(verbIng[Math.floor(Math.random()*verbIng.length)]);
$("p").append(" ");




// $('html, body').animate({
//           scrollTop: 200
//    }, 1000);

// places


var pastRand = false;

$(".place").click(function() {
	pastRand = Math.floor(Math.random()*place.length);
	$(this).html(place[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	

 });


$("p").html(place[Math.floor(Math.random()*place.length)]);
$("p").append(" ");



var pastRand = false;

$(".goal-place").click(function() {
	pastRand = Math.floor(Math.random()*place.length);
	$(".goal-place").html(place[pastRand]);
	$(".goal-place").removeClass( "click" ).addClass("after-click");	
});


$("p").html(place[Math.floor(Math.random()*place.length)]);
$("p").append(" ");




// direction
var pastRand = false;

$(".direction").click(function() {
	pastRand = Math.floor(Math.random()*direction.length);
	$(this).html(direction[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(direction[Math.floor(Math.random()*direction.length)]);
$("p").append(" ");




// seasonOrTime
var pastRand = false;

$(".seasonOrTime").click(function() {
	pastRand = Math.floor(Math.random()*seasonOrTime.length);
	$(this).html(seasonOrTime[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(seasonOrTime[Math.floor(Math.random()*seasonOrTime.length)]);
$("p").append(" ");





// main
var pastRand = false;
var mainClicked = false;
$(".main").click(function() {
	mainClicked = true;
	pastRand = Math.floor(Math.random()*main.length);
	$(".main").html(main[pastRand]);
	$(".main").removeClass( "click" ).addClass("after-click");	
});


$("p").html(main[Math.floor(Math.random()*main.length)]);
$("p").append(" ");


// goal
var pastRand = false;

$(".goal").click(function() {
	pastRand = Math.floor(Math.random()*main.length);
	$(".goal").html(main[pastRand]);
	$(".goal").removeClass( "click" ).addClass("after-click");	
});


$("p").html(main[Math.floor(Math.random()*main.length)]);
$("p").append(" ");


// companion
var pastRand = false;

$(".companion").click(function() {
	pastRand = Math.floor(Math.random()*main.length);
	$(".companion").html(main[pastRand]);
	$(".companion").removeClass( "click" ).addClass("after-click");	
});


$("p").html(main[Math.floor(Math.random()*main.length)]);
$("p").append(" ");


// companion
var pastRand = false;

$(".companion2").click(function() {
	pastRand = Math.floor(Math.random()*main.length);
	$(".companion2").html(main[pastRand]);
	$(".companion2").removeClass( "click" ).addClass("after-click");	
});


$("p").html(main[Math.floor(Math.random()*main.length)]);
$("p").append(" ");




// adjective
var pastRand = false;

$(".adjective").click(function() {
	pastRand = Math.floor(Math.random()*adjective.length);
	$(this).html(adjective[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(adjective[Math.floor(Math.random()*adjective.length)]);
$("p").append(" ");


// adjective
var pastRand = false;

$(".adjective-ly").click(function() {
	pastRand = Math.floor(Math.random()*adjectiveLy.length);
	$(this).html(adjectiveLy[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(adjectiveLy[Math.floor(Math.random()*adjective.length)]);
$("p").append(" ");




// color
var pastRand = false;

$(".color").click(function() {
	pastRand = Math.floor(Math.random()*color.length);
	$(this).html(color[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(color[Math.floor(Math.random()*color.length)]);
$("p").append(" ");






// number
var pastRand = false;

$(".number").click(function() {
	pastRand = Math.floor(Math.random()*number.length);
	$(this).html(number[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(number[Math.floor(Math.random()*number.length)]);
$("p").append(" ");




// things

var pastRand = false;

$(".thing").click(function() {
	pastRand = Math.floor(Math.random()*thing.length);
	$(this).html(thing[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});

$("p").html(verb[Math.floor(Math.random()*thing.length)]);
$("p").append(" ");




var pastRand = false;

$(".specific-thing").click(function() {
	pastRand = Math.floor(Math.random()*thing.length);
	$(".specific-thing").html(thing[pastRand]);
	$(".specific-thing").removeClass( "click" ).addClass("after-click");	
});

$("p").html(thing[Math.floor(Math.random()*thing.length)]);
$("p").append(" ");


var pastRand = false;

$(".plural-thing").click(function() {
	pastRand = Math.floor(Math.random()*pluralThing.length);
	$(this).html(pluralThing[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});

$("p").html(pluralThing[Math.floor(Math.random()*pluralThing.length)]);
$("p").append(" ");



// verbs

var pastRand = false;

$(".verb").click(function() {
	pastRand = Math.floor(Math.random()*pastTenseVerb.length);
	$(this).html(verb[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");
});

$("p").html(verb[Math.floor(Math.random()*verb.length)]);
$("p").append(" ");






// pastTenseVerb
var pastRand = false;

$(".past-tense-verb").click(function() {
	pastRand = Math.floor(Math.random()*pastTenseVerb.length);
	$(this).html(pastTenseVerb[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(pastTenseVerb[Math.floor(Math.random()*pastTenseVerb.length)]);
$("p").append(" ");



// pastTenseVerb
var pastRand = false;

$(".response").click(function() {
	pastRand = Math.floor(Math.random()*response.length);
	$(this).html(response[pastRand]);
	$(this).removeClass( "click" ).addClass("after-click");	
});


$("p").html(response[Math.floor(Math.random()*pastTenseVerb.length)]);
$("p").append(" ");








function myFunction() {
    window.print();
}



$('#cmd').click(function () {
    doc.fromHTML($('.story').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});





var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

























