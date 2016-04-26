'use strict';

describe('Service: hnService', function () {

  // load the service's module
  beforeEach(module('newsFullStackApp.hnService'));

  // instantiate service
  var hnService;
  beforeEach(inject(function (_hnService_) {
    hnService = _hnService_;
  }));

  it('should do something', function () {
    expect(!!hnService).toBe(true);
  });

});
