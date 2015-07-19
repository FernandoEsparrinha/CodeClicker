app.controller("ProgrammerController", ["$scope","infoService", function($scope, infoService){

	$scope.programmers = [
		{
			name: "IT Student",
			info: "His favorite programming language is HTML.",
			image: "resources/itStudent.png",
			cost: 5,
			increase: 1
		},
		{
			name: "Advanced Developer",
			info: "He programmed some things in his life.",
			image: "resources/AdvancedDeveloper.png",
			cost: 25,
			increase: 2
		},
		{
			name: "Crazy Programmer",
			info: "That crazy guy no one talks to.",
			image: "resources/CrazyProgrammer.png",
			cost: 60,
			increase: 4
		}
	]


	$scope.buy = function(programmer){
		if(infoService.getLC() >= programmer.cost){
			infoService.addLCbySecond(programmer.increase);
			infoService.takeLC(programmer.cost);
			programmer.cost += programmer.cost*0.80;
		}
	};
	
	
	
}]);