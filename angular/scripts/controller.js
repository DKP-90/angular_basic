angular.module('ngcribs')
.controller('cribcontroller',function($scope, cribfactory){
	$scope.json_data= factory.getdata();
	})