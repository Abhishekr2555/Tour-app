const custmore_details = require("../Models/Customer_details");

exports.customerDetail = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const {
      customerName,
      packageName,
      email,
      phoneNumber,
      numberOfTravelers,
      totalPrice,
      bookingDate,
      specialRequests,
      packagePrice,
    } = req.body;

    if (
      !customerName ||
      !packageName ||
      !email ||
      !phoneNumber ||
      !numberOfTravelers ||
      !totalPrice ||
      !specialRequests ||
      !bookingDate ||
      !packagePrice
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const Details = new custmore_details({
      customerName,
      packageName,
      email,
      phoneNumber,
      numberOfTravelers,
      specialRequests,
      bookingDate,
      packagePrice,
      totalPrice,
    });

    await Details.save();

    res.status(201).json({
      message: "Details save successfully",
      package: Details,
    });
  } catch (err) {
    console.error("Error saving package:", err);
    res.status(500).json({
      error: "Failed to add package. Please try again later.",
      details: err.message,
    });
  }
};
