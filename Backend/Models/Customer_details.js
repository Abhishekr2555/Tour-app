const mongoose = require("mongoose");

// Create a schema for the customer booking details
const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  numberOfTravelers: {
    type: Number,
    required: true,
  },
  specialRequests: {
    type: String,
    default: "",
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  packagePrice: {
    type: Number,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

const CustomerBooking = mongoose.model("CustomerBooking", customerSchema);

module.exports = CustomerBooking;
