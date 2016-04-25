'use strict';

describe('Component: CommentComponent', function () {

  // load the controller's module
  beforeEach(module('newsFullStackApp'));

  var CommentComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CommentComponent = $componentController('CommentComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
