'use strict';

/**
 * @ngdoc function
 * @name angularAirApp.controller:AuthcontrollerCtrl
 * @description
 * # AuthcontrollerCtrl
 * Controller of the angularAirApp
 */
angular.module('bebCrmApp')
  .controller('AuthCtrl', function ($rootScope,$scope,$location,User,Auth) {

	   $scope.signup = function(newUser){
       Auth.signup(newUser);
     };

  	 $scope.login = function(user){
  	 	Auth.login(user);
  	 };





  });
