'use strict';

/**
 * @ngdoc overview
 * @name bebCrmApp
 * @description
 * # bebCrmApp
 *
 * Main module of the application.
 */
angular
  .module('bebCrmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lbServices',
    'angularMoment',
    'ui.calendar',
    'ui.bootstrap'
  ]) .config(function(LoopBackResourceProvider,$httpProvider) {
 
   LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');

    // Inside app config block
    $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
      return {
        responseError: function(rejection) {
          if (rejection.status === 401) {
            //Now clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });
 
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/reservation', {
        templateUrl: 'views/reservation.html',
        controller: 'ReservationCtrl',
        controllerAs: 'reservation'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
