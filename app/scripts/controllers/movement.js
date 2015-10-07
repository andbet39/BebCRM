'use strict';

/**
 * @ngdoc function
 * @name bebCrmApp.controller:MovementCtrl
 * @description
 * # MovementCtrl
 * Controller of the bebCrmApp
 */
angular.module('bebCrmApp')
  .controller('MovementCtrl', function ($scope,Movement,Auth) {

    $scope.preview=[];

    $scope.importCSV =  function(csv){
      console.log("Start import");
       processData(csv);

    };


    $scope.movements = Movement.find(function(data){

      $scope.movements = data;
    });

    function processData(allText) {
      var allTextLines = allText.split(/\r\n|\n/);

      allTextLines.forEach(function(line){

        var entry={};
        var fields = line.split('|');
        if(fields[0]){
            entry.payment_date = moment(fields[0],"DD/MM/YYYY").toDate();
        }
        if(fields[1]) {
          entry.reason = fields[1];
        }
        if(fields[2]){
          entry.amount = parseFloat(fields[2].replace(/,/g, '.'));
        }
        if(fields[3]){
          if(fields[3]==='Y') fields[3]=1 //Bank
          if(fields[3]==='C') fields[3]=2 //Cash
          if(fields[3]==='P') fields[3]=3 //Paypal

          entry.accountId = fields[3];
        }

          entry.user = Auth.currentUser.id;
          entry.created= new Date();

        console.log(entry);
        Movement.create(entry);

      });

    }

  });
