const express = require('express');
const planetsRouter = require('./routes/planets/planets.router')
const app = express();
app.use((req,res,next)=>{
    console.log(`The request registered to ${req.url}`);
    let startTime = Date.now();
    next();
    let endTime = Date.now();
    let delta = endTime - startTime ;
    console.log(`The request took ${delta}ms time to complete`)
})
app.use(express.json());
app.use(planetsRouter);

module.exports = app;