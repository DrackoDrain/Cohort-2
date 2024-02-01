const express = require("express");
const app = express();

function userMiddleware(req,res,next){
    const userName = req.param.body;
    const pass = req.param.body;

    if(userName!= "ayush" && pass != "aryan"){
        res.status(404).json({
            msg:"Incorrect inputs"
        })
    } else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    // extract kidneys from the body

    if(kidneyId != 1 && kidneyId != 2){
        res.status(404).josn({
            msg:"Incorrect Inputs",
        })
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req,res){
    // do something with kidneys 

    res.send("Your heart is healthy");
});

