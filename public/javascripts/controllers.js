'use strict';

var app = angular.module("travelApp");

app.controller("mainCtrl", function($scope, $state, reservationService) {
    $scope.reservationShow = false;
    $scope.revNote = false;
    console.log("controller works");

    reservationService.getNames();

    $scope.getReservations = function($this) {
        console.log($this.item);
        $scope.reservationShow = true;
        reservationService.getByName($this.item.name);
    };

    //////UPDATE
    $scope.editActiv = function($this) {
        console.log($this.item);
        reservationService.getByName($this.item.name);
    };

    $scope.revealNote = function(val) {
        $scope.revNote= true;
    }

    $scope.returnToHome = function() {
        $scope.reservationShow = false;
        $scope.revNote= false;
    }

    $scope.nextNote = function(val) {
        var curIndex = $scope.reservationsList.indexOf(val);
        console.log(val);
        if (curIndex + 1 < $scope.numReservations) {
            $scope.revNote= false;
            $scope.reserve = $scope.reservationsList[curIndex + 1];
        } else {

            console.log("No more reservations");
            $scope.reservationShow = false;
            $scope.revNote= false;
        }

    }

    $scope.$watch(function() {
        return reservationService.names;
    }, function(curVal, preVal) {
        $scope.names = curVal;
    });

    $scope.$watch(function() {
        return reservationService.currentReservationsList;
    }, function(curVal, preVal) {

        $scope.numReservations = reservationService.numReservations;
        $scope.reservationsList = curVal;
        $scope.reserve = curVal[0];
    });


});

app.controller("adminCtrl", function($scope, $state, reservationService) {
    console.log("adminCtrl works");
    angular.element('#name').trigger('change');
    angular.element('#reservation').trigger('change');
    angular.element('#detail').trigger('change');
    angular.element('#note').trigger('change');
    reservationService.getAll();
    $scope.modShow = false;
    $scope.allShow = true;

    $scope.$watch(function() {
        return reservationService.allRs;
    }, function(curVal, preVal) {
        console.log(curVal);
        $scope.allReserves = curVal;
    });

    $scope.deleteR = function(input) {
        console.log(input.reserve);
        reservationService.deleteReservation(input.reserve);
        reservationService.getAll();
    }

    $scope.modifyR = function(input) {
        $scope.modShow = true;
        $scope.allShow = false;
        console.log(input);
        $scope.update = input.reserve;

    }

    $scope.updateR = function(input) {
        console.log(input);
        console.log(input.update.id);
        reservationService.update(input.update);
        reservationService.getAll();
    }

    $scope.quitUpdate = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
    }

    $scope.addNewActiv = function() {
        $scope.addShow = true;
        $scope.modShow = false;
        $scope.allShow = false;
        console.log($scope.newR);
    }

    $scope.addNewR = function(input) {
        reservationService.create(input);
        reservationService.getAll();
    }

    $scope.quitAdd = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
        $scope.newR = {};
    }

});

app.controller("instCtrl", function($scope, $state, reservationService) {
    console.log("instCtrl works");

});

app.controller("playCtrl", function($scope, $state, reservationService) {
    console.log("playCtrl works");

});
