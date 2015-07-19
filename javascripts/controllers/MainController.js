app.controller("MainController", ["$scope", "$timeout", "infoService", function($scope, $timeout, infoService){
	
	$scope.LC = infoService.getLC();
	$scope.LCbyClick = infoService.getLCbyClick();
	$scope.LCbySecond = infoService.getLCbySecond();

	$scope.click = function(){
		infoService.addLC(infoService.getLCbyClick());
		$scope.update();
	}

	$scope.update = function(){
		infoService.addLC(infoService.getLCbySecond());
		$scope.LC = infoService.getLC();
		$scope.LCbyClick = infoService.getLCbyClick();
		$scope.LCbySecond = infoService.getLCbySecond();
		$timeout($scope.update, 1000);
	}

}]);