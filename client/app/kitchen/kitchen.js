'use strict';

angular.module('resturantPosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kitchen', {
        url: '/kitchen',
        templateUrl: 'app/kitchen/kitchen.html',
        controller: 'KitchenCtrl'
      });
  });