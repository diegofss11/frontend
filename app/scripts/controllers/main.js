'use strict';

var app = angular.module('projetobrasilFrontApp');

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app.directive('navbar', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/navbar.html'
	};
});

app.directive('sidebar', function(){
	return{
		restrict: 'E',
		templateUrl: 'views/sidebar.html'
	};
});
app.directive('profile', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/profile.html'
	};
});
app.directive('proposals', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/proposals.html'
	};
});
app.directive('comparison', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/comparison.html'
	};
});