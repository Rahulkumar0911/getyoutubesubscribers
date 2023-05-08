
const express = require('express');
const Subscriber=require("../src/models/subscribers.js");
const path=require("path");
const subscribers = require('../src/models/subscribers.js');

const app = express();
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"));
});

app.get("/subscribers",async(req,res,next)=>{
    try{
        let subscribers=await Subscriber.find();
        res.status(200).json(subscribers);
    }catch(error){
        res.status(500);
        next(error);
    }
})

app.get("/subscribers/names",async(req,res,next)=>{
    try{
        let subscribers=await Subscriber.find({},{name:1, subscribedChannel:1,_id:0});
        res.status(200).json(subscribers);
    }catch(error){
        res.status(500);
        next(error);
    }
});

app.get("/subscribers/:id", async(req,res,next)=>{
     try{
        let id=req.params.id;
        let subscribers=await Subscriber.findById(id);
        res.status(200).json(subscribers);
    }catch(error){
        res.status(400).json({message:error.message});
    }

});
module.export=app;

// Your code goes here





















module.exports = app;
