const uri = "mongodb+srv://carrental:Ilovestudy@carrental.apyuvls.mongodb.net/?retryWrites=true&w=majority";

const { MongoClient, ServerApiVersion } = require('mongodb');
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
        await client.connect();
        const database = client.db("carrental");
        const catalog = database.collection("cars");

        const condition = { availability: {$ne: true} };

        const options = {
            sort: { price: 1 },
            projection: {
                _id: 1,
                year: 1, 
                picture: 1, 
                maxChildren: 1,
                maxAdults: 1,
                pets: 1,
                price: 1
            }
        };

        const cursor = catalog.find(condition, options);

        for await (const car of cursor) {
            carList.push(car);
        }
    } finally {
        await client.close();
    }
}
getCars();
// const filePath = '../data/cars.json';
// const fileManager = require('fs');

// let carsList = JSON.parse(fileManager.readFileSync(filePath,"utf8"));

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/carList", function(req,res){
    res.json(carList);
});

app.listen(5000, function(){
    console.log(`Server is running into port 5000`)
});