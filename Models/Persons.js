let mongoose = require("mongoose");

let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    work: {
        type: String,
        enum: ["chef", "owner", "waiter"],
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    }
})

let Person = mongoose.model("Person", personSchema);

module.exports = Person;
