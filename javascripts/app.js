var app = angular.module("CodeClicker", []);

app.service('infoService',function(){
	var LC = 0;
	var LCbyClick = 1;
	var LCbySecond = 0;

	return {
		getLC: function(){
			return LC;
		},
		addLC: function(value){
			LC += value;
			return LC;
		},
		takeLC: function(value){
			LC -= value;
			return LC;
		},
		getLCbyClick: function(){
			return LCbyClick;
		},
		addLCbyClick: function(value){
			LCbyClick += value;
			return LCbyClick;
		},
		getLCbySecond: function(){
			return LCbySecond;
		},
		addLCbySecond: function(value){
			LCbySecond += value;
			return LCbySecond;
		}
	}
})
