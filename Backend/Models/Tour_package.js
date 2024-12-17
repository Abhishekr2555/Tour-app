const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    availableDates: [{
        type: Date,
        required: true,
    }],
    image: {
        type: String, 
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('TourPackage', packageSchema);

