'use strict';

var express = require('express');
var router = express.Router();

var Reservation = require('../models/reservation.js');

router.get('/', function(req,res) {
  Reservation.find({}, function(err,reservations){
    if(err){
      res.status(400).send(err);
      return;
    }
    res.send(reservations);
  });
});


router.get(function(req, res) {
  // Use the Beer model to find a specific beer
  Reservation.findById(req.params.id, function(err, reservation) {
    if (err)
    res.send(err);

    res.send(reservation);
  });
});

router.post(function(req, res) {
  // Create a new instance of the reservation model
  var reservation = new Reservation();

  // Set the reservation properties that came from the POST data
  reservation.name = req.body.name;
  reservation.time = req.body.time;
  reservation.ampm = req.body.ampm;
  reservation.size = req.body.size;
  reservation.allergies =  req.body.allergies;
  reservation.checkin = req.body.checkin;

  // Save the reservation and check for errors
  reservation.save(function(err) {
    if (err)
      res.status(400).send(err);
      return;
    res.send(reservation);
  });
});

module.exports = router;
