'use strict';

describe('Directive: usermenu', function () {

  // load the directive's module
  beforeEach(module('projetobrasilFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<usermenu></usermenu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the usermenu directive');
  }));
});
