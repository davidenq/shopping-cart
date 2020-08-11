"use strict";

const express = require('express')
const app = express()
const port = 8080

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const products = require('./data/products.json')

const ShoppingCart = require('./ShoppingCart.js')

app.get('/products/:code', (req, res) => res.json(products.find(x => x.code === req.params.code)))

app.get('/products', (req, res) => res.json(products.map(x => x.productCode)))

app.post('/checkout', (req, res) => {
	const items = req.body.map(x => products.find(product => product.productCode === x))
	const shoppingCart = new ShoppingCart(items)
	return res.json(shoppingCart.checkout())
})

app.listen(port, () => console.log(`Application is up and running on port ${port}!`))