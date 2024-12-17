const mongoose = require("mongoose");

// Define the booking schema
const bookingSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      match: [/^\+?[0-9]{10,15}$/, "Please provide a valid phone number"],
    },
    numberOfTravelers: {
      type: Number,
      required: true,
      min: [1, "There must be at least one traveler"],
    },
    specialRequests: {
      type: String,
      trim: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
    packagePrice:{
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = bookingSchema;
