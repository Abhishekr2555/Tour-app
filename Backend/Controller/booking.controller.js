const Booking = require('../Models/Tour_booking')
exports.book = async (req, res) => {
  try {
    const { packageId, customerName, customerEmail, phoneNumber } = req.body;
    const booking = new Booking({
      packageId,
      customerName,
      customerEmail,
      phoneNumber,
    });
    await booking.save();
    res
      .status(201)
      .json({ message: "Booking submitted successfully", booking });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit booking" });
  }
};
