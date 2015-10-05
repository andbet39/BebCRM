'use strict';

/**
 * @ngdoc function
 * @name bebCrmApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the bebCrmApp
 */
angular.module('bebCrmApp')
  .controller('ReservationCtrl', function (Reservation,$scope,uiCalendarConfig,Room) {

    	$scope.events=[];
      $scope.roomList=[];

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();


    $scope.eventSources = [$scope.events];

        Room.find(function(rooms){
          $scope.roomList=rooms;
        });

  	    $scope.reservations = Reservation.find({
			        filter: { where:{status:1,date_arrival: {between: [new Date(y,m,1),new Date(y,m+1,1)]}},order: 'date_arrival ASC' }
			    },function(data){
  	            $scope.reservations=	data;

                var events=[];

                data.forEach(function(res){

                  var event = {'title':res.customer_name +" " +res.customer_surname,
                               'start':new Date(res.date_arrival),
                               'end':new Date(res.date_arrival),'allDay':true,stick : true};

                  events.push(event);
                });

                angular.copy(events, $scope.events);
  	  	});



  });
