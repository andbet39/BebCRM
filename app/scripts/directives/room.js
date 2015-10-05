'use strict';

/**
 * @ngdoc directive
 * @name bebCrmApp.directive:rooom
 * @description
 * # rooom
 */
angular.module('bebCrmApp')
  .directive('room', function () {
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
        console.log(roomList);

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
