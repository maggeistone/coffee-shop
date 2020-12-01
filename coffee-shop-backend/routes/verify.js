var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Get all the userIDs from the users table
router.get('/', (req, res) => {
    var verified = {verified: false, message: '', id: '',};
    console.log(req.query.username);
    console.log(req.query.password);

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
        conn.query(`SELECT * FROM users WHERE username="${req.query.username}"`, function (err, result) {
            if (err) throw err;
            // check if the username provided exists in the users table
            if (result.length === 0) {
                // verified = false;
                verified.message = 'incorrect username';
            } else if (result[0].password !== req.query.password) {
                verified.message = 'incorrect password'
            } else {
                verified.verified = true;
                verified.id = result[0].id;
            }
            res.status(200);
            res.send(verified);
            console.log("verified:" + JSON.stringify(verified));
        });
    })

});

module.exports = router;