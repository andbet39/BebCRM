'use strict';

/**
 * @ngdoc function
 * @name bebCrmApp.controller:ReservationCtrl
 * @description
 * # ReservationCtrl
 * Controller of the bebCrmApp
 */
angular.module('bebCrmApp')
  .controller('ReservationCtrl', function (Reservation,$scope,uiCalendarConfig,Room,$state) {

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
      filter: {
          where:{
             and:
                [{or:[{status: '1'}, {status: '4'}]},//or:[{status: '1'}, {status: '4'}],
                 {date_arrival: {between: [new Date(y-1,m,d),new Date(y+1,m,d)]}}]
          }
      }
    },function(data){
      $scope.reservations=	data;

      var events=[];

      data.forEach(function(res){

        var event = {'title':res.customer_name +" " +res.customer_surname,
          'start':new Date(res.date_arrival),
          'end':new Date(res.date_arrival),'allDay':true,stick : true,res_id:res.reservation_code};

        events.push(event);
      });

      angular.copy(events, $scope.events);
    });


    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
      $state.go('/reservation_detail',{id:date.res_id}); // go to loginconsole.log(date.res_id);
    };

    $scope.uiConfig = {
      calendar:{
        height: 700,
        editable:false,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick
      }
    };

  });
