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
    $scope.movements=[];

    var date =  new Date();
    $scope.month = date.getMonth();
    $scope.year= date.getFullYear();


    $scope.importCSV =  function(csv){
      console.log("Start import");
       processData(csv);

    };


    $scope.getAll= function() {
       Movement.find(function (data) {

        $scope.movements = data;

        $scope.totaleCassa = 0;
        $scope.totaleBanca = 0;
        $scope.totaleCash = 0;

        $scope.movements.forEach(function (mov) {
          if (mov.accountId == '2') {
            $scope.totaleCash += parseFloat(mov.amount);
          }
          if (mov.accountId == '1') {
            $scope.totaleBanca += parseFloat(mov.amount);
          }

          $scope.totaleCassa += parseFloat(mov.amount);
        });


      });
    };

    $scope.getAll();

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

    $scope.changeMonth = function(){
      Movement.find({
        filter: {
          where:{
            payment_date: {between: [new Date(parseInt($scope.year),parseInt($scope.month),1),
                  new Date(parseInt($scope.year),parseInt($scope.month)+1,1)]}},
          order: 'paid_on ASC' }}).$promise.then(function(data) {

          $scope.movements = data;

          $scope.totaleCassa=0;
          $scope.totaleBanca=0;
          $scope.totaleCash=0;

          $scope.movements.forEach(function(mov){
            if(mov.accountId=='2'){
              $scope.totaleCash +=parseFloat(mov.amount);
            }
            if(mov.accountId=='1'){
              $scope.totaleBanca +=parseFloat(mov.amount);
            }

            $scope.totaleCassa +=parseFloat(mov.amount);
          });

        });
    };

  });
