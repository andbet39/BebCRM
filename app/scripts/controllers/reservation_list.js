'use strict';

/**
 * @ngdoc function
 * @name bebCrmApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the bebCrmApp
 */
angular.module('bebCrmApp')
  .controller('ReservationListCtrl', function ( Reservation,$scope,Room) {


    $scope.roomList=[];
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

      $scope.reservations=[];
      $scope.earnings=0;
      $scope.room_nights=0;


    Room.find(function(rooms){
      $scope.roomList=rooms;

      Reservation.find({
        filter: { where:{
          status:1,
          date_arrival: {between: [new Date(y,m,1),new Date(y,m+1,1)]}},
          order: 'date_arrival ASC' }}).$promise.then(function(data) {
          $scope.reservations=data;

          $scope.reservations.forEach(function(res){
            $scope.earnings +=parseFloat(res.amount);
            $scope.room_nights +=parseInt(res.roomnight);
          });

          $scope.average =  $scope.earnings/ $scope.room_nights;

        });

    });


  })
;
