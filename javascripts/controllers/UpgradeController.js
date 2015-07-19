app.controller("UpgradeController", ["$scope", "infoService", function($scope, infoService){
	
	$scope.upgrades = [
		{
			name: "LCD",
			cost: 5,
			info: "Not to be confounded by LSD. A thin new computer screen !",
			effect: "Your code shines in your new screen, programming power is increased by 5 Lines of Code for click.",
			increase: 5
		},
		{
			name: "Mechanical Keyboard",
			cost: 10,
			info: "Whats that ? I can't hear you over the sound of my new ...*clack* *clack* *clack*",
			effect: "A faster (and noisier) writing incrises your Lines of Code for click by 10.",
			increase: 10
		},
		{
			name: "Rubber Duck",
			cost: 15,
			info: "Who else would hear your debugging sessions ?",
			effect: "You solve your bugs faster, increasing your Lines of Code for click by 15",
			increase: 15
		},
		{
			name: "Ubuntu Linux ",
			cost: 0,
			info: "It's free and easy ! First step into becaming a hacker.",
			effect: "Just by using linux your programming power increases by 3 Lines of Code for click",
			increase: 3
		},
		{
			name: "Arch Linux",
			cost: 0,
			info: "It's free, but you have to know some things about programming to use it.",
			effect: "Your programming increases significally ! You program 15 extra Lines of Code for click",
			increase: 15
		}
	]

	$scope.buy = function(upgrade){
		if(infoService.getLC() >= upgrade.cost){
			updateVisual(upgrade.name);
			infoService.addLCbyClick(upgrade.increase);
			infoService.takeLC(upgrade.cost);
			var index = $scope.upgrades.indexOf(upgrade);
			$scope.upgrades.splice(index, 1);
		}
	};

	var updateVisual = function(name){
		switch(name) {
		    case "Ubuntu Linux ":
		    	changeOS("ubuntu");
		        break;
		    case "Arch Linux":
		    	changeOS("arch");
		    	break;
		    case "LCD":
		    	changeScreen("LCD");
		    	break;
		    default:
		        alert("something went wrong");
		        break;
		} 
	}

	var changeOS = function(name){
		var string = document.getElementById("screen").src;
		document.getElementById("screen").src=string.replace(string.substring(string.indexOf("_")+1), name+".png");
	}

	var changeScreen = function(name){
		var string = document.getElementById("screen").src;
		document.getElementById("screen").src=string.replace(string.substring(string.lastIndexOf("/")+1,string.indexOf("_")), name);
	}

}]);