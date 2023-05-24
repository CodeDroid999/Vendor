'use strict';

angular.module('resturantPosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('greeter', {
        url: '/greeter',
        templateUrl: 'app/greeter/greeter.html',
        controller: 'GreeterCtrl'
      });
  });