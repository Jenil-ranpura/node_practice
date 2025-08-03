let mongoose = require("mongoose");

let mongoURL = "mongodb://localhost:27017/cp";

mongoose.connect(mongoURL);


let db = mongoose.connection;

db.on("connected", () => {
    console.log("The Mongoose Server Is Now Connected To MongoDB Server");
})

db.on("error", (err) => {
    console.log("The Error Is : ", err);
})

module.exports = db;