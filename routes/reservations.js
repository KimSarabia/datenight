'use strict';

var express = require('express');

var router = express.Router();

var Reservation = require('../models/reservation');

router.get('/', function(req,res){
  Reservation.find({}, function(err,reservations){
    if(err){
      res.status(400).send(err);
      return;
    }
    res.send(reservations);
  });
});

router.put('/:id', function(req,res){
  Reservation.findById(req.params.id, function(err,reservation){
    reservation.restaurant = 'McDonalds';

    reservation.save(function(err){

    });
  });
});

module.exports = router;
