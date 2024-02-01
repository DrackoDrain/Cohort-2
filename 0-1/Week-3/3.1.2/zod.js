const express = require("express");
const app = express();

 const zod = require("zod");
 const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup ",(req,res)=>{
    // kidneys = [1,2]

    const kidneys = req.body.kidneys;

})