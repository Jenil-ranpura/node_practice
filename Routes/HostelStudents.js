let express = require("express");
let Router = express.Router();
let Hostel = require("./../Models/Hostelstd");

Router.post("/hostel", async (req, res) => {
    try{
        let data = req.body;
        let newData = new Hostel(data);
        let response = await newData.save();

        res.status(200).json(response);
        console.log(response);

    }catch(err) {

        console.log("The Error Is : ", err);
        res.status(500).json(err);

    }
})

Router.get("/hostel", async (req, res) => {
    try{

        let data = await Hostel.find();
        res.status(200).json(data);
        console.log(data);

    }catch(err) {

        console.log("The Error Is : ", err);
        res.status(500).json(err);

    }
})

Router.get("/hostel/:city", async (req, res) => {
    try{
        let cityName = req.params.city;

        let data = await Hostel.find({city: cityName});
        
        if(data.length > 0) {
            res.status(200).json(data);
            console.log(data);
        }else{
            res.status(404).json({error: "Hostel Student Data Not Found"});
        }

    }catch(err) {

        console.log("The Error Is : ", err);
        res.status(500).json(err);

    }
})

Router.put("/hostel/update/:id", async (req, res) => {
    try{
        let updateId = req.params.id;
        let updateBody = req.body;

        let response = await Hostel.findByIdAndUpdate(updateId, updateBody);
        res.status(200).json(response);

    }catch(err) {

        console.log("The Error Is : ", err);
        res.status(500).json(err);

    }
})

Router.delete("/hostel/delete/:id", async (req, res) => {
    try{
        let deleteId = req.params.id;
        let response = await Hostel.findByIdAndDelete(deleteId);

        res.status(200).json(response);

    }catch(err) {

        console.log("The Error Is : ", err);
        res.status(500).json(err);

    }
})

module.exports = Router;