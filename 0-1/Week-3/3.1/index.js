const express = require("express");
const app = express();

app.use(express.json());


app.post("/health-checkup",  (req,res)=>{   // if not using global cathes use async await in try catch block
    // try{
    //     const kidneys = await req.body.kidneys;
    // if(!kidneys){
    //     res.json({
    //         msg: "wrong inputs",
    //     })
    // } else{
    //     const kidneyLength = kidneys.length;

    //     res.send("You have" + " " + kidneyLength + " " + "kidneys");

    // }

    // }catch(error){
    //     console.log(error);
    //   res.send(500)
    //   .json({
    //     msg: " couldnot fetch ",
    //   })
    // }   
    const kidneys =  req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You have" + " " + kidneyLength + " " + "kidneys");
    
})

// global catches -> help you give the user a better error message 
// it is also called Error Handeling Middleware : (err, req, res, next)
app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something is up with our server",
    })
})



// app.get('/api', (req,res)=>{
//     res.send("hi");

// })

app.listen(3000, ()=>{
    console.log(`app is listining at port 3000`);
})