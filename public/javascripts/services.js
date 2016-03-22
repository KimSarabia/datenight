
'use strict';

var app = angular.module("reservationApp");

app.service('reservationService', function($http) {
    this.curActiv = [];
    this.currentReservationsList = [];
    this.numReservations=0;

    this.getAll = () => {
        $http.get('/reservations').then(res => {
            this.allRs = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getById = (id) => {
        $http.get(`/reservations/reservation/${id}`).then(res => {
            this.curReserve = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.create = (newReservation) => {
        $http.post('/reservations', newReservation).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getNames = () => {
        $http.get('/reservations/names').then(res => {
            console.log(res);
            this.names = res.data;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.update = (editReservation) => {
        $http.put(`/reservations/${editReservation.id}`, editReservation).then(res => {
            console.log("success");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.getByName = (detination) => {
        $http.get(`reservations/name/${name}`).then(res => {
            this.currentReservationsList = res.data;
            this.numReservations = res.data.length;
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

    this.deleteReservation = function(reservation) {
        $http.delete(`/reservations/${reservation.id}`).then(res => {
            console.log("Successfully deleted");
        }, err => {
            if (err) {
                console.log(err);
            }
        });
    };

});
