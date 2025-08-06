let mongoose = require("mongoose");
require("dotenv").config();

let mongoURL = process.env.URL;
// let mongoURL = "mongodb+srv://user:jenil567@cluster0.acsauj2.mongodb.net/";
mongoose.connect(mongoURL);


let db = mongoose.connection;

db.on("connected", () => {
    console.log("The Mongoose Server Is Now Connected To MongoDB Server");
})

db.on("error", (err) => {
    console.log("The Error Is : ", err);
})

module.exports = db;