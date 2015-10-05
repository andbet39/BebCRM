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



    Room.find(function(rooms){
      $scope.roomList=rooms;

      Reservation.find({
        filter: { where:{
          status:1,
          date_arrival: {between: [new Date(y,m,1),new Date(y,m+1,1)]}},
          order: 'date_arrival ASC' }}).$promise.then(function(data) {
          $scope.reservations=data;
        });

    });


  }) .directive('room', function () {
    return {
      templateUrl: 'views/room_list.html',
      restrict: 'E',
      scope: {
        roomList: '=roomList',
        room:'=room'
      },
      controller: ['$scope', '$http', function($scope) {
        var room_id_list = $scope.room.split(",");
        $scope.roomsInfo=[];
        room_id_list.forEach(function(room)
        {
          $scope.roomList.forEach(function (r) {
            if (r.id === room) {
              $scope.roomsInfo.push(r);
            }
          });
        });
      }]
    };
  });
;
