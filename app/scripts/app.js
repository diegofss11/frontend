'use strict';

angular
  .module('projetobrasilFrontApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/comparison', {
        templateUrl: 'views/comparison.html',
        controller: 'ComparisonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
