const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URI)
        console.log("connected to MongoDB");
    } catch (err) {
        console.log("Error:", err);
    }
}

module.exports = dbConnect;