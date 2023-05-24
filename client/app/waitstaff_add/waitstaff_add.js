'use strict';

angular.module('resturantPosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('waitstaff_add', {
        url: '/waitstaff/add',
        templateUrl: 'app/waitstaff_add/waitstaff_add.html',
        controller: 'WaitstaffAddCtrl'
      });
  });