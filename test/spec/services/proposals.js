'use strict';

describe('Service: proposals', function () {

  // load the service's module
  beforeEach(module('projetobrasilFrontApp'));

  // instantiate service
  var proposals;
  beforeEach(inject(function (_proposals_) {
    proposals = _proposals_;
  }));

  it('should do something', function () {
    expect(!!proposals).toBe(true);
  });

});
