# Introduction

This codebase is used during in-office pairing session (Code Laundry) for JOI initiative in North America.
It's focused on identifying code smells, refactoring, testing legacy codebase while promoting
conversations around various testing strategies, design strategies etc.

## Problem Statement
We have an existing shopping cart application, with a small set of eCommerce/shopping cart rules. Rules include calculation of total price, discount and loyalty points calculation. Most of the business logic is implemented in single method ShoppingCart.checkout.

## Existing Business Rules
Application code currently has following rules:
* Calculates total price and total loyalty points earned by the customer.
* Products with product code starting with DIS_10 have a 10% discount applied.
* Products with product code starting with DIS_15 have a 15% discount applied.
* Loyalty points are earned more when the product is not under any offer.
    - Customer earns 1 point on every $5 purchase.
    - Customer earns 1 point on every $10 spent on a product with 10% discount.
    - Customer earns 1 point on every $15 spent on a product with 15% discount.

## Extension tasks
1. Implement a discount of 20%, the products eligible for which will be identified by the product code starting with "DIS_20". On purchase of each such product, the customer earns, 1 loyalty point for every $20 spent

2. Implement an offer on group of products, eg. "Buy 2 get 1 free" on specific products identified by product code starting with "BULK_BUY_2_GET_1"

3. Implement a discount of 5% which is applicable on total purchase above $500

## IDE Notes

We recommend using [Sublime](https://www.sublimetext.com/3) or [Atom](https://atom.io/) as an editor, and running the tests in the terminal. (If you're on a Mac, I'd suggest [iTerm](https://www.iterm2.com/downloads.html))

## Requirements
* [Node](https://nodejs.org/en/)

## Usage

Setup project ```npm install```

Run tests: ```npm test```

### Start the application

Run index.js: ```npm start```

That would launch an web application on port `8080` by default, if you're running into port conflict, just modify the port in `src/index.js` or stop the existing application one on `8080`.

After the launch, you could access the application via sending http requests to the following endpoint.

- GET `/products/` to fetch all the product code
- GET `/products/{code}` to get a particular product by its code
- POST `/checkout` with `product-code` in an array will invoke the actual checkout

```sh
$ curl -X POST http://localhost:8080/checkout -d"[\"CHAIR_RED\",\"DIS_10-CHAIR_BLUE\"]" -H "Content-Type: application/json"
```

would get something like:

```sh
{"totalPrice":47.480999999999995,"loyaltyPoints":7.496999999999999}
```

Note that the header `Contnet-Type: application/json` is required.