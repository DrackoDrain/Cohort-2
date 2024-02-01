const express = require("express")

const zod = require("zod")
const app = express();

 const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup1 ", function(req,res){
    // kidneys = [1,2]

    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        res.json({
          msg:"valid"
        })       
    }
});

  
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(3000, ()=>{
    console.log(`Your port started at 3000`)
});