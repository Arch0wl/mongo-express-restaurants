require('dotenv/config') // needed to use .env file to store our MONGO_URL link
const express = require('express')
const mongoClient = require('mongodb').MongoClient
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const url = process.env.MONGO_URL
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

let menudb, customersdb

console.log(url)
mongoClient.connect(url, options, (err, mongoClient) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('We are connected!')

    app.listen(3000, () => {
    console.log('App is listening on port 3000')
    });

    const db = mongoClient.db('restaurant')
    customersdb = db.collection('customers')
    menudb = db.collection('menu')
})

// get 
app.get('/', (req, res) => res.status(200).send('Here is my api on AWS!!!'))

// post

app.post ('/', (req, res) => {
    menudb.insertOne(req.body)
    res.status(201).send('item was added')
})

// patch 
app.patch('/,', (req, res) => {
    menudb
    .updateOne({name: 'leche de tigre'}, 
        { $set: 
        { name: 'tequila', cost: 30, stock: true}
    }
    )
    .then(() => res.status(200).send('item was updated'))
})

// delete
app.delete('/', (req, res) => {
    menudb.deleteOne({name: req.body.name })
    .then(() => res.send('item was deleted'))
})



