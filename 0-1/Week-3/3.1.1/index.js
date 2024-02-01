// Middleware function 

// Middleware functions are functions that have access to the request object(res) and the response object(res), and the next function in the application's request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succedding the current middleware


const express = require("express");

const app = express();

app.use(express.json());

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  
  app.use(myLogger)
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(3000, ()=>{
    console.log(`App is running successfully at port no 3000`);
})