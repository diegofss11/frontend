'use strict';

angular.module('projetobrasilFrontApp')
  .directive('usermenu', function () {
    return {
      templateUrl: 'views/navbarusermenu.html',
      restrict: 'E'
    };
  });
