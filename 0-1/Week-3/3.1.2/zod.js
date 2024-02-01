// Zod - TypeScript first schema declaration and validation library

const express = require("express")

const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());

const schema1 = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

app.use(express.json());

app.post("/health-checkup1", function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{
        // res.json({
        //   msg:"valid"
        // })   
        res.send({
            response
        })    
    }
});

  
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(3000, ()=>{
    console.log(`Your port started at 3000`)
});