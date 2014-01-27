var app = angular.module('ttsApp',['ngResource']);

app.controller("AppCtrl", ['$http','$scope','$resource', function($http, $scope, $resource) {
  $scope.makeCall = function(resc) {
	$http.defaults.useXDomain = true;
  	Something = $resource("https://api.mercadolibre.com/sites/MLA/search/:qs", {qs: "@qs"});
  	$scope.api = Something.get({q:resc});
  };

}]);
