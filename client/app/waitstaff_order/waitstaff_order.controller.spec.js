'use strict';

describe('Controller: WaitstaffOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('resturantPosApp'));

  var WaitstaffOrderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaitstaffOrderCtrl = $controller('WaitstaffOrderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
