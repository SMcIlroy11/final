// Add module and controller here.
var app=angular.module('final');

app.controller('loginCtrl', function($scope, $location, loginService){
console.log('controller 1 is loading');
$scope.submitWords=function(userInfo){
  loginService.checkLogin(userInfo)
  $location.path('/profile');
}


})
