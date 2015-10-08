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

    var date = new Date();

    $scope.roomList=[];
    $scope.month = date.getMonth();
    $scope.year= date.getFullYear();


      $scope.reservations=[];
      $scope.earnings=0;
      $scope.room_nights=0;


    Room.find(function(rooms){
      $scope.roomList=rooms;
      console.log("Fetching reservation for" + $scope.month + " Anno" +$scope.year);

      Reservation.find({
        filter: {
          where:{
            and:
              [{or:[{status: '1'}, {status: '4'}]},//or:[{status: '1'}, {status: '4'}],
                {date_arrival: {between: [new Date(parseInt($scope.year),parseInt($scope.month),1),
                  new Date(parseInt($scope.year),parseInt($scope.month)+1,1)]}}]
          },
          order: 'date_arrival ASC' }}).$promise.then(function(data) {

          $scope.reservations=data;

          $scope.reservations.forEach(function(res){
            $scope.earnings +=parseFloat(res.amount);
            $scope.room_nights +=parseInt(res.roomnight);
          });

          $scope.average =  $scope.earnings/ $scope.room_nights;

        });

    });

    $scope.changeMonth = function(){
      console.log("Fetching reservation for" + $scope.month + " Anno" +$scope.year);
      Reservation.find({
        filter: {
          where:{
            and:
              [{or:[{status: '1'}, {status: '4'}]},//or:[{status: '1'}, {status: '4'}],
                {date_arrival: {between: [new Date(parseInt($scope.year),parseInt($scope.month),1),
                  new Date(parseInt($scope.year),parseInt($scope.month)+1,1)]}}]
          },
          order: 'date_arrival ASC' }}).$promise.then(function(data) {

          $scope.reservations=[];
          $scope.earnings=0;
          $scope.room_nights=0;


          $scope.reservations=data;

          $scope.reservations.forEach(function(res){
            $scope.earnings +=parseFloat(res.amount);
            $scope.room_nights +=parseInt(res.roomnight);
          });

          $scope.average =  $scope.earnings/ $scope.room_nights;

        });
    };

  })
;
