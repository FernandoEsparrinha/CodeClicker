

var score = 0;
var miliscore = 0 

var lcByClick = 1;
var lcBySecond = 0.2;

var cost1 = 5;
var cost2 = 25;
var cost3 = 30;
var cost4 = 60;

function clickKeyboard(){
	addScore();
	scoreUpdate();
}

function addScore(){
	score += lcByClick;
}

function scoreUpdate(){
	document.getElementById("score").innerHTML = "Lines of Code : " + Math.round(score*100)/100;
	updateAll();
}


function buy1(){
	if(score >= cost1){
		score -= cost1;
		lcBySecond += 0.5;
		scoreUpdate();
		cost1 *= 2;
		document.getElementById("ug1Cost").innerHTML = "IT Student - \"My favorite programming language its HTML !\"<br>Cost: "+cost1+" LC";
		updateAll();	
	} 
	
};

function buy2(){
	if(score >= cost2){
		score -= cost2;
		lcByClick += 2;
		scoreUpdate();
		cost2 *= 2;
		document.getElementById("ug2Cost").innerHTML = "Advanced Developer - He programmed some things in his life.<br>Cost: "+cost2+"LC";
		updateAll();	
	} 
	
};

function buy3(){
	if(score >= cost3){
		score -= cost3;
		lcByClick += 9;
		scoreUpdate();
		cost3 *= 3;
		document.getElementById("ug3Cost").innerHTML = "Nerd - He read all the JQuery documentation.<br>Cost: "+cost3+"LC";
		updateAll();	
	} 
	
};

function buy4(){
	if(score >= cost4){
		score -= cost4;
		lcBySecond += 5;
		scoreUpdate();
		cost4 *= 4;
		document.getElementById("ug4Cost").innerHTML = "Crazy Programmer - that crazy guy no one talks to.<br>Cost: "+cost4+"LC";
		updateAll();	
	} 
	
};

function updateLvl1(){
	if(score >= cost1){
		document.getElementsByClassName("upgrade")[0].className = "upgrade enabled";
	} else  {
		document.getElementsByClassName("upgrade")[0].className = "upgrade disabled";
	}
}

function updateLvl2(){
	if(score >= cost2){
		document.getElementsByClassName("upgrade")[1].className = "upgrade enabled";
	} else {
		document.getElementsByClassName("upgrade")[1].className = "upgrade disabled";
	}
}

function updateLvl3(){
	if(score >= cost3){
		document.getElementsByClassName("upgrade")[2].className = "upgrade enabled";
	} else {
		document.getElementsByClassName("upgrade")[2].className = "upgrade disabled";
	}
}

function updateLvl4(){
	if(score >= cost4){
		document.getElementsByClassName("upgrade")[3].className = "upgrade enabled";
	} else {
		document.getElementsByClassName("upgrade")[3].className = "upgrade disabled";
	}
}

function updateClickAmount(){
	document.getElementById("clickAmount").innerHTML = "LC By Click : " + lcByClick;
}

function updateSecondAmount(){
	document.getElementById("secondAmount").innerHTML = "LC By Second : " + lcBySecond;
}


function updateAll(){
	updateLvl1();
	updateLvl2();
	updateLvl3();
	updateLvl4();
	updateClickAmount();
	updateSecondAmount();
}

//Score function

function implementScore(){ 
 if (miliscore>=10){ 
    	miliscore=0 
    	score+=1 
    	scoreUpdate();
    	setTimeout("implementScore()",1000);
 } else {
 		//if (lcBySecond >= 10) {
 		//	score+=(lcBySecond/10);
 		//	miliscore+=(lcBySecond%10);
 		//	scoreUpdate();
 		//	setTimeout("implementScore()",100);
 		//} else {
    	//miliscore+=lcBySecond; 
    	score+=lcBySecond;
    	scoreUpdate();
    	setTimeout("implementScore()",1000);
    	//} 
} 
}

