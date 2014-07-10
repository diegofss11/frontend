'use strict';

describe('Controller: NavbarusermenuCtrl', function () {

  // load the controller's module
  beforeEach(module('projetobrasilFrontApp'));

  var NavbarusermenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarusermenuCtrl = $controller('NavbarusermenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
