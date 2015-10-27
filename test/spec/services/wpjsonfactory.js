'use strict';

describe('Service: wpjsonFactory', function () {

  // load the service's module
  beforeEach(module('portfolioAppApp'));

  // instantiate service
  var wpjsonFactory;
  beforeEach(inject(function (_wpjsonFactory_) {
    wpjsonFactory = _wpjsonFactory_;
  }));

  it('should do something', function () {
    expect(!!wpjsonFactory).toBe(true);
  });

});
