const mongoose = require('mongoose');

// const mobileSchema = new mongoose.Schema({
//     name: String,
//     type: String,
//     price: Number,
//     processor: String,
//     memory: String,
//     os: String
// });

const mobileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: String,
    type: String,
    processor: String,
    memory: Number,
    os: String,
});

const Mobile = mongoose.models.Mobile || mongoose.model('Mobile', mobileSchema);

module.exports = Mobile;