require('dotenv').config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

const productCtrl = require('./controllers/controller') //12a
const inventoryUrl = '/api/inventory' //12a ii so that you dont mess up the url in the endpoints
// const productUrl = '/api/products'

app.use(cors()) 
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db) //order of 'db' and db matters
    console.log('db running')
    app.listen(SERVER_PORT, () => console.log(`server dog is crushin on ${SERVER_PORT}`))
}) .catch(err => console.log(err))

//endpoints
app.get(inventoryUrl, productCtrl.getProducts)
app.post(inventoryUrl, productCtrl.postProduct)
app.put(`${inventoryUrl}/:product_id`, productCtrl.putProduct)
app.delete(`${inventoryUrl}/:product_id`, productCtrl.deleteProduct)
// app.delete(`${inventoryUrl}/:product_id`, productCtrl.deleteProduct)


//db table = inventory
//get inventory
// post, put, delete from product