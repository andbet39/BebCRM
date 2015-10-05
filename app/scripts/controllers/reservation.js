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

    	$scope.reservations =[];
    	$scope.events=[];
      $scope.roomList=[];

      Room.find(function(rooms){
        $scope.roomList=rooms;
      });

  	    Reservation.find({
			  filter: {where:{status:1},order: 'date_arrival ASC' }
			    },function(data){
  	    	$scope.reservations=data;
  	    		var events=[];

  	    		data.forEach(function(res){

  	    			var event = {'title':res.customer_name +" " +res.customer_surname,
                           'start':new Date(res.date_arrival),
                           'end':new Date(res.date_arrival),'allDay':true,stick : true,};

  	    			events.push(event);
  	    		});

  	    		angular.copy(events, $scope.events);
  		});

    		$scope.eventSources = [$scope.events];

		$scope.uiConfig = {
		      calendar:{
		        height: 700,
		        editable: false,
		        header:{
		          left: 'Arrivi',
		          center: 'Arrivi',
		          right: 'today prev,next'
		        }
		      }
		    };

  });
