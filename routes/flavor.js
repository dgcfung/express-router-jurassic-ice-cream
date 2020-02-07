const express = require('express');
const{Flavor}= require('../models/index')

const flavorRouter = express.Router();
// Import your Flavor Model

// Create a route that displays all flavors
const getAllFlavors= async(req, res)=>{
    try{
        const flavors= await Flavor.findAll({
            model: Flavor
        })
        return res.status(200).json({flavors})
    }catch(error){
        return res.status(500).send(error.message);
    }
}

flavorRouter.get('/', getAllFlavors)


// Create a route that displays a single flavor by id Ex: /id/1 should display json of the flavor with an id of 1

const getFlavorId= async(req, res)=>{
    try{
        const index= req.params.id
        const flavors= await Flavor.findOne({
            where:{
                id: index
            }
        })
        return res.status(200).json({flavors})
    }catch(error){
        return res.status(500).send(error.message);
    }
}

flavorRouter.get('/id/:id', getFlavorId)


// Create a route that displays a single flavor by name Ex: /name/lemon should display json of the lemon flavor

const getFlavorName= async(req, res)=>{
    try{
        const name= req.params.name
        const flavors= await Flavor.findOne({
            where:{
                name: name
            }
        })
        return res.status(200).json({flavors})
    }catch(error){
        return res.status(500).send(error.message);
    }
}

flavorRouter.get('/name/:name', getFlavorName)


module.exports = {
    flavorRouter
}
