const Package = require('../Models/Tour_package')

exports.getPackage = async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve packages" });
  }
};

exports.getPackagebyId = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    if (!package) return res.status(404).json({ error: "Package not found" });
    res.json(package);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve package" });
  }
};
