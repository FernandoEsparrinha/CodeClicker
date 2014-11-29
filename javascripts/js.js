
var score = 0;
var multiplier = 1;

var cost1 = 5;
var cost2 = 25;
var cost3 = 30;

function clickKeyboard(){
	addScore();
	scoreUpdate();

	if(score >= cost1){
		document.getElementsByClassName("upgrade")[0].className = "upgrade enabled";
	} else {
		document.getElementsByClassName("upgrade")[0].className = "upgrade disabled";
	}

}

function addScore(){
	score += multiplier;
}

function scoreUpdate(){
	document.getElementById("score").innerHTML = "Lines of Code : " + score;
}


function buy1(){
	if(score >= cost1){
		score -= cost1;
		multiplier += 3;
		scoreUpdate();
		cost1 *= 2;
		document.getElementById("ug1Cost").innerHTML = "IT Student - \"My favorite programming language its HTML !\" Cost: "+cost1+" LC";	
	} else {
		alert("Cant buy it yet !");
	}
	
};