'use strict';

var mongoose = require('mongoose');

var Reservation = mongoose.model('Reservation', {
  name:{first: String, last: String},
  date: Date,
  time: Number,
  ampm: String,
  size: Number,
  allergies: String,
  checkin: Boolean
});

module.exports = Reservation;
