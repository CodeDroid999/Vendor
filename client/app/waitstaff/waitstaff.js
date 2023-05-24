'use strict';

angular.module('resturantPosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('waitstaff', {
        url: '/waitstaff',
        templateUrl: 'app/waitstaff/waitstaff.html',
        controller: 'WaitstaffCtrl'
      });
  });