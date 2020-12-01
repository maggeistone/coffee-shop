var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./dbConnect');

// Get all the userIDs from the users table
router.get('/', (req, res) => {
   var users = {items: []};
   var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
   });

   conn.connect(function (err) {
       if (err) throw err;
       console.log("Connected to database through getUsers")
       conn.query("USE coffee_shop;", function (err, result) {
           if (err) throw err;
           console.log("Using coffee_shop");
       });
       conn.query(`SELECT * FROM users`, function (err, result) {
           console.log(result);
           if (err) throw err;
           result.forEach(row => {
               users.items.push({
                   id: row.id,
                   username: row.username,
                   password: row.password
               })
               console.log(result);
           });
           res.send(users);
       });
   })

});

module.exports = router;