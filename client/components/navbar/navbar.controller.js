'use strict';

angular.module('resturantPosApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
	    'title': 'Greeter',
	    'link': '/greeter'
	  },{
	    'title': 'Waitstaff',
	    'link': '/waitstaff'
	  },{
	    'title': 'Kitchen',
	    'link': '/kitchen'
	  }
	  ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });