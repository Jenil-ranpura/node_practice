let mongoose = require("mongoose");

let menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    price: {
        type: Number,
        required: true
    },

    taste: {
        type: String,
        required: true,
        enum: ["spicy", "sweet", "buttery", "Salty"]
    },

    is_drink: {
        type: Boolean,
        required: true
    },

    num_sales: {
        type: Number,
        required: true
    }
})

let Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;

