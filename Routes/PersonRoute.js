let express = require("express");
let Router = express.Router();
let Person = require("./../Models/Persons");

Router.post("/person", async (req, res) => {
    try {
        let data = req.body;

        let newPerson = new Person(data);

        let savedPerson = await newPerson.save();

        console.log(savedPerson);
        res.status(201).json(savedPerson);

    } catch (err) {
        console.log("The Eroor Is : ", err);
        res.status(500).json({ error: err.message });
    }
})

Router.get("/person", async (req, res) => {
    try {
        let data = await Person.find();

        console.log(data)
        res.status(200).json(data);

    } catch (err) {
        console.log("The Error Is : ", err);
        res.status(500).json(err);
    }
})

Router.get("/person/:work", async (req, res) => {
    try {
        let workType = req.params.work;

        let response = await Person.find({work: workType});

        if(response.length > 0) {
            res.status(200).json(response);
            console.log(response);
        }else{
            res.status(404).json({error: "Person Data Not Found"});
        }
    }catch(err) {
        console.log("The Error Is : ", err);
        res.status(500).json(err);
    }
})

Router.put("/person/update/:id", async (req, res) => {
    try{

        let updateId = req.params.id;

        let updateBody = req.body;

        let response = await Person.findByIdAndUpdate(updateId, updateBody);

        if(!response) {
            res.status(404).json({error: "Person Not Found"});
            return;
        }

        res.status(200).json(response);

    }catch(err) {

        console.log("The Error Is : ", err);
        res.status(500).json(err);

    }
})

Router.delete("/person/delete/:id", async (req, res) => {
    try{
        let delId = req.params.id;

        let response = await Person.findByIdAndDelete(delId);

        if(!response) {
            res.status(404).json({error: "Person Not Found"});
            return;
        }

        res.status(200).json(response);
        console.log(response);
    }catch(err) {
        console.log("The Error Is : ", err);
        res.status(500).json(err);
    }
})

module.exports = Router;