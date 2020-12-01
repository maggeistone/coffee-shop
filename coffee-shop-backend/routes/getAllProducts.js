var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./dbConnect');

// Get all the userIDs from the users table
router.get('/', (req, res) => {
    var products = {items: []};
    var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected to database through getAllProducts")
        conn.query("USE coffee_shop;", function (err, result) {
            if (err) throw err;
            console.log("Using coffee_shop");
        });
        conn.query(`SELECT * FROM products`, function (err, result) {
            console.log(result);
            if (err) throw err;
            result.forEach(row => {
                products.items.push({
                    id: row.id,
                    name: row.name,
                    img: row.img,
                    options: row.options,
                    size: row.size,
                    qty: row.qty,
                    description: row.description,
                })
                console.log(result);
            });
            res.status(200);
            res.send(products);
        });
    })

});

module.exports = router;