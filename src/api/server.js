const filePath = '../data/cars.json';
const fileManager = require('fs');

let carsList = JSON.parse(fileManager.readFileSync(filePath,"utf8"));

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/cars-api", function(req,res){
    res.json(carsList);
})

app.listen(5000, function(){
    console.log(`Server is running into port 5000`)
})