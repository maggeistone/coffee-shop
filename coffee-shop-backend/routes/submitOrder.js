var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/', (req, res) => {
    var order = req.body.order;
    var products = req.body.order.products;
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var orderID;

    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected to database through verify")
        conn.query("USE coffee_shop;", function (err, result) {
            if (err) throw err;
            console.log("Using coffee_shop");
        });
        // insert order into orders]
        conn.query(`INSERT INTO orders (date, status, username)` +
            `VALUES ("${date}", "confirmed", "${order.username}");`, function (err) {
            if (err) throw err;
            console.log("added order to orders")
            // get the orderID
            conn.query(`SELECT max(orderID) from orders;`, function (err, result) {
                if (err) throw err;
                orderID = result[0]["max(orderID)"];
                console.log(`grabbed orderID: ${JSON.stringify(orderID)}`)
                products.forEach(row => {
                    conn.query(`INSERT INTO orders_products (orderID, productID, qty)` +
                        `VALUES ("${orderID}", "${row.id}", "${row.qty}");`, function (err) {
                        if (err) throw err;
                        console.log("Added order_product pair");
                    });
                });
            });
        });


        res.status(200);
        res.send()
    })
});

module.exports = router;