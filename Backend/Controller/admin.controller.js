const Package = require("../Models/Tour_package"); // Adjust path as necessary

exports.getPackage = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve packages" });
  }
};

exports.postPackage = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { title, description, price, availableDates, image } = req.body;

    if (!title || !description || !price || !availableDates || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPackage = new Package({
      title,
      description,
      price,
      availableDates,
      image,
    });

    await newPackage.save();

    res.status(201).json({
      message: "Package added successfully",
      package: newPackage,
    });
  } catch (err) {
    console.error("Error saving package:", err);
    res.status(500).json({
      error: "Failed to add package. Please try again later.",
      details: err.message,
    });
  }
};

exports.postPackageId = async (req, res) => {
  try {
    const { title, description, price, availableDates, image } = req.body;

    // Update the package
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      { title, description, price, availableDates, image },
      { new: true, runValidators: true } // Ensure validation is applied
    );

    if (!updatedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.json({
      message: "Package updated successfully",
      package: updatedPackage,
    });
  } catch (err) {
    console.error("Error updating package:", err);
    res.status(500).json({
      error: "Failed to update package. Please try again later.",
      details: err.message,
    });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);

    if (!deletedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }

    res.json({ message: "Package deleted successfully" });
  } catch (err) {
    console.error("Error deleting package:", err);
    res.status(500).json({
      error: "Failed to delete package. Please try again later.",
      details: err.message,
    });
  }
};
