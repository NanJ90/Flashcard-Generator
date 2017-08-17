module.exports = ClozeCard;

var ClozeCard = function(text,cloze){
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();	
		if(!textToLower.includes(clozeToLower)){
			console.log('ERROR');
			return;
		}
	this.fullText = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
	}
	
// test case
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
// var brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log(firstPresidentCloze.text);