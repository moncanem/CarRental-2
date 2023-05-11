/**
 * File Management
 */
const filePath = '../data/users.json';
const fileManager = require('fs');
let usersList = JSON.parse(fileManager.readFileSync(filePath,"utf8"));

/**
 * Server settings
 */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
/**
 * Server assigning
 */
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

/**
 * Get Api
 */
app.get("/users-api",function(req,res){
    res.json(usersList);
});

/**
 * Form Post
 */
app.post("/form-submit",function(req,res){
    const formContent = req.body;
    usersList.push(formContent);
    fileManager.writeFileSync(filePath,JSON.stringify(usersList));
    console.log(usersList)
    // return res.redirect(3000,"/login");
});

/**
 * Listen Server
 */
app.listen(5000, function(){
    console.log(usersList);
});
