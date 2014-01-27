var app = angular.module('ttsApp',['ngResource']);

app.controller("AppCtrl", ['$http','$scope','$resource', function($http, $scope, $resource) {
  $scope.changed = function(e) {
    console.log(e);
  };
  $scope.$watch('search', function(querystr) {
    Something = $resource("https://api.mercadolibre.com/sites/MLA/search/:qs", {q: "@q"});
    $scope.api = Something.get({q:querystr});
  });

}]);
