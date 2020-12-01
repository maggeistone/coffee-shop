var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./dbConnect');

// Get all the userIDs from the users table
router.get('/', (req, res) => {
    console.log("Inside getallorders");
    var orders = {orders: []};
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
        conn.query(`SELECT * FROM orders ORDER BY date DESC;`, function (err, result) {
            if (err) throw err;
            result.forEach(row => {
                orders.orders.push({
                    id: row.orderID,
                    date: row.date,
                    status: row.status,
                    username: row.username,
                })
            });
            console.log(orders);
            res.status(200);
            res.send(orders);
        });
    })

});

module.exports = router;