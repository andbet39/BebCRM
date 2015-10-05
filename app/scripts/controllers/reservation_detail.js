'use strict';

/**
 * @ngdoc function
 * @name bebCrmApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the bebCrmApp
 */
angular.module('bebCrmApp')
  .controller('ReservationDetailCtrl', function ( Reservation,$scope,Room,$stateParams) {


    $scope.roomList=[];
    $scope.reservation={};

    console.log($stateParams.id);
    Reservation.findById({id:$stateParams.id},function(data){
            console.log(data);
            $scope.reservation=data;
          });


    Room.find(function(rooms){
      $scope.roomList=rooms;
    });


  })
