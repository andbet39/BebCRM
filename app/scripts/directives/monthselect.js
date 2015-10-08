'use strict';

/**
 * @ngdoc directive
 * @name bebCrmApp.directive:monthSelect
 * @description
 * # monthSelect
 */
angular.module('bebCrmApp')
  .directive('monthSelect', function () {
    return {
      templateUrl: 'views/monthselector.html',
      scope:{
        selectedmonth : '=',
        selectedyear : '=',
        fnclick :'&',
        rnclick :'&'
      },
      restrict: 'E'
    };
  });
