const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  destination: String,
  date: String,
  email: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
