'use strict';

/**
 * @ngdoc function
 * @name bebCrmApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the bebCrmApp
 */
angular.module('bebCrmApp')
  .controller('TodayCtrl', function ( Reservation,$scope,Room) {



    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

      $scope.checkin=[];
      $scope.checkout=[];

    $scope.roomList = Room.find(function(rooms){
      $scope.roomList=rooms;

    });

    Reservation.find({
      filter: { where:{
        status:1,
        date_arrival: {between: [new Date(y,m,d),new Date(y,m,d)]}},
        order: 'date_arrival ASC' }},function(data) {
      $scope.checkin=data;
    });

    Reservation.find({
      filter: { where:{
        status:1,
        date_departure: {between: [new Date(y,m,d),new Date(y,m,d)]}},
        order: 'date_arrival ASC' }},function(data) {
        $scope.checkout=data;
    });




  });
