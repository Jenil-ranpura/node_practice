let mongoose = require("mongoose");

let HostelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    study: {
        type: String || Number,
        required: true
    },

    city: {
        type: String,
        required: true
    }
})

let Hostel = mongoose.model("Hostel", HostelSchema);

module.exports = Hostel;