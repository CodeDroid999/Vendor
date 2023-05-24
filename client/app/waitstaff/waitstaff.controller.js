'use strict';

angular.module('resturantPosApp')
  .controller('WaitstaffCtrl', function ($scope, $http, $location, socket) {
    $scope.tableList = [];
    
    $scope.myStyle = function (table) {
      return {'position': 'absolute', 'height': table.unit_height * 100 + 'px', 'width': table.unit_width * 100 + 'px', 'top': table.y + 'px', 'left': table.x + 'px'};
    };
    
    $scope.go = function(path) {
      $location.path(path);
    };
    
    $scope.toString = function (data) {return data.toString();}
    
    $scope.getTableClass = function (table) {
      var status = table.status;
      switch(table.status) {
      case 'available':
        return 'panel-info'; // Sets what the Available Table Panels look like
      case 'occupied':
        return 'panel-primary'; // Sets what the Occupied Table Panels look like 
      case 'uncleaned':
        return 'panel-warning'; // Sets what the Uncleaned Table Panels look like
      case 'reserved':
        return 'panel-danger'; // Sets what the Reserved Table Panels look like
      case 'disabled':
        return 'panel-danger'; // Sets what the Disabled Table Panels look like
      default:
        return 'panel-default'; // Sets what the Unknown Table Panels look like
      }
    };
    
    $scope.getTableStatusShort = function (table) {
      var status = table.status;
      switch(table.status) {
      case 'available':
        return 'Available';
      case 'occupied':
        return 'Occupied';
      case 'uncleaned':
        return 'Uncleaned';
      case 'reserved':
        return 'Reserved';
      case 'disabled':
        return 'Disabled';
      default:
        return 'Unknown';
      }
    };
    
    $scope.getTableStatus = function (table) {
      var status = table.status;
      switch(table.status) {
      case 'available':
        return 'Available: Ready for Patrons';
      case 'occupied':
        return 'Occupied: Table Occupied';
      case 'uncleaned':
        return 'Uncleaned: Requires Cleaning';
      case 'reserved':
        return 'Reserved: Unusable';
      case 'disabled':
        return 'Disabled: Unusable';
      default:
        return 'Unknown: The status of this table is currently unknown!';
      }
    };
    
    $http.get('/api/tables').success(function(tableList) {
      $scope.tableList = tableList;
      socket.syncUpdates('tables', $scope.tableList);
    });
    
    $scope.mouseDown = function(table) {
      
    }
    /*
    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
    */
  });
