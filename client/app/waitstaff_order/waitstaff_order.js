'use strict';

angular.module('resturantPosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('waitstaff_order', {
        url: '/waitstaff/order',
        templateUrl: 'app/waitstaff_order/waitstaff_order.html',
        controller: 'WaitstaffOrderCtrl'
      });
  });