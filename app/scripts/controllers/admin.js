'use strict';

/**
 * @ngdoc function
 * @name bebCrmApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the bebCrmApp
 */
angular.module('bebCrmApp')
  .controller('AdminCtrl', function ($scope,Token,Reservation,Room) {

    $scope.response="";

    $scope.date = {dtfrom:'01/01/2015',dto:'20/01/2015'};


    $scope.lastToken=Token.findOne({filter: {order: 'created ASC'}},function(token){
        $scope.lastToken = token;
    });

    $scope.renewToken = function(){
      Token.renewToken({username:"AT035",password:"Luglio2015",key:"bamboo:rome"},function(data){
           Token.findOne({filter: {order: 'created ASC'}},function(token){
                $scope.lastToken = token;
            })
      });
    };

    $scope.fetchNewRes=function(){
        Reservation.fetchnew({lcode:'1377875938'},function(data){

           console.log(data);
           $scope.response = JSON.stringify(data);
        });
    };

    $scope.getRemoteDate=function(date){


      Reservation.getremote({dto:date.dto,
                             dfrom:date.dtfrom,
                             lcode:'1377875938'},function(data){

        console.log(data);
        $scope.response = JSON.stringify(data);
      });
    };




  });
