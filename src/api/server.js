const filePath = '../data/cars.json';
const fileManager = require('fs');

const uri = "mongodb+srv://carrental:Ilovestudy@carrental.apyuvls.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let carList = [];

async function getCars(){
    try {
        //Create and open connection
        await client.connect();

        //Select the database
        const database = client.db("carrental");

        //Select the collection from the specific db
        const collection = database.collection("cars");

        const condition = { availability: {$ne: true} };

        const options = {
            sort: { price: 1 },
            projection: {
                _id: 1, 
                year: 1, 
                picture: 1, 
                maxChildren: 1,
                maxAdults: 1,
                pets: 1
            }
        };

        const cursor = collection.find(condition, options);

        for await (const car of cursor) {
            // console.log(car);
            carList.push(car);
        }
    } finally {
        await client.close();
    }
}

getCars();

// let carsList = JSON.parse(fileManager.readFileSync(filePath,"utf8"));

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/carlist", function(req,res){
    res.json(carsList);
})

app.listen(6000, function(){
    console.log(`Server is running into port 6000`)
})