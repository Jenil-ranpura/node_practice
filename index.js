let express = require("express");
let PersonRouter = require("./Routes/PersonRoute.js");
let MenuRouter = require("./Routes/MenuItems.js");
let HostelRouter = require("./Routes/HostelStudents.js");
let body_parser = require("body-parser");
let db = require("./db");

let app = express();
app.use(body_parser.json());
app.use("/", PersonRouter);
app.use("/", MenuRouter);
app.use("/", HostelRouter);

app.get("/", (req, res) => {
    res.send("Hello This Is Home Page!");
})

app.get("/users", (req, res) => {
    res.send("You Are At Users");
})

app.get("/download", (req, res) => {
    let obj = {
        name: "jenil",
        surname: "soni",
        age: 17
    }
    res.send(obj);
})

let port = 3000;

app.listen(port, () => {
    console.log("Server Listening")
})