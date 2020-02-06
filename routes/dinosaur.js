const express = require('express');
const {Dinosaur}= require(`../models/index`)

const dinosaurRouter = express.Router();
// Import your Dinosaur Model

// Create a route that displays all dinos
const getAllDinos= async (req, res)=>{
    try{
        const dinosaurs= await Dinosaur.findAll({
            model: Dinosaur
        })
        return res.status(200).json({dinosaurs})
    }catch(error){
        return res.status(500).send(error.message);
    }
}

dinosaurRouter.get('/', getAllDinos)


// Create a route that displays a single dino by id Ex: /id/1 should display json of the dino with an id of 1

const getDinoId= async (req, res)=>{

    try{
        const index= req.params.id
        const dinosaurs= await Dinosaur.findOne({
            where:{
                id: index
            }
        })
        return res.status(200).json({dinosaurs})
    }catch(error){
        return res.status(500).send(error.message);
    }
}

dinosaurRouter.get('/id/:id', getDinoId)

// Create a route that displays a single dino by name Ex: /name/barney should display json of barney the dinosaur

const getDinoByName= async(req, res)=>{
    try{
        const name= req.params.name
        const dinosaurs= await Dinosaur.findOne({
            where:{
                name: name
            }
        })
        return res.status(200).json({dinosaurs})
    }catch(error){
        return res.status(500).send(error.message);
    }
}

dinosaurRouter.get('/name/:name', getDinoByName)


module.exports = {

    dinosaurRouter
}
