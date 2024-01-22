const express = require("express")

const bodyParser = require("body-parser");
const app = express()

// const port = 3001

const port = process.env.PORT || 3006  // create environmental port

app.use(bodyParser.json());

app.post('/backend-api/conversation', function(req,res){
    // res.send("Hello World !");
    const message = req.body.message;
    console.log(message);
    // machine learning thing 
    res.json ({
        output: "2 + 2 =  4"
    })   
})

app.listen(port, ()=>{
    console.log(`Hi There from the port ${port}`);
})


