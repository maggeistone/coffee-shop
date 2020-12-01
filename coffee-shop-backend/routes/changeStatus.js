var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.post('/', (req, res) => {

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
        conn.query(`UPDATE orders SET status="${req.body.status}"
        WHERE orderID="${req.body.orderID}";`, function (err) {
            if (err) throw err;
        });
        res.status(200);
        res.send()
    })
});

module.exports = router;