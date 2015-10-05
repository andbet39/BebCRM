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
      template: '<div></div>',
      restrict: 'E',
      scope: {
        roomList: '=roomList',
        room:'=room'
      },
      controller: ['$scope', '$http', function($scope, $http) {

        var room_id_list = $scope.room.split(",");
        $scope.roomsInfo=[];
        room_id_list.forEach(function(room)
        {
          $scope.roomList.forEach(function (r) {
            if (r.id == room) {
              $scope.roomsInfo.push(r);
            }
          })
        });
      }],
      link: function postLink(scope, element, attrs) {
        
        element.text(scope.roomsInfo[0].name);
      }
    };
  });
