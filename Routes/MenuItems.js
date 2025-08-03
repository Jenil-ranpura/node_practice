let express = require("express");
let Router = express.Router();
let Menu = require("./../Models/Menu");

Router.post("/menu", async (req, res) => {
    try {
        let data = req.body;

        let savedMenu = new Menu(data);
        let response = await savedMenu.save();

        console.log(response);
        res.status(200).json(response);
    } catch (err) {
        console.log("The Error Is : ", err);
        res.status(500).json(err);
    }
})

Router.get("/menu", async (req, res) => {
    try {
        let data = await Menu.find();

        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        console.log("The Error Is : ", err);
        res.status(500).json(err);
    }
})

Router.get("/menu/:taste", async (req, res) => {
    try{
        let dataName = req.params.taste;

        let data = await Menu.find({taste: dataName});

        if(data.length > 0) {
            console.log(data);
            res.status(200).json(data);
        }else{
            console.log("Cant Find That Endpoint!");
            res.status(404).json({error: "Cant Find That Endpoint!"});
        }
    }catch(err) {
        console.log("The Error Is : ", err);
        res.status(500).json(err);
    }
})

module.exports = Router;