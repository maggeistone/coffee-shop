var mysql = require('mysql');

var conn;
var users = "CREATE TABLE IF NOT EXISTS users (" +
    "userID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
    "username VARCHAR(30) NOT NULL," +
    "password VARCHAR(30) NOT NULL" +
");"
var employees = "CREATE TABLE IF NOT EXISTS employees (" +
    "employeeID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
    "username VARCHAR(30) NOT NULL," +
    "name VARCHAR(100) DEFAULT 'no name added'," +
    "password VARCHAR(30) NOT NULL" +
    ");"
var orders = "CREATE TABLE IF NOT EXISTS orders (" +
    "orderID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
    "date TIMESTAMP NOT NULL," +
    "status VARCHAR(100)," +
    "username VARCHAR(100)" +
    ");"
var users_orders = "CREATE TABLE IF NOT EXISTS users_orders (" +
    "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
    "userID INT(6) UNSIGNED NOT NULL," +
    "orderID INT(6) UNSIGNED NOT NULL," +
    "FOREIGN KEY (userID) REFERENCES users(userID)," +
    "FOREIGN KEY (orderID) REFERENCES orders(orderID)" +
    ");"
var products = "CREATE TABLE IF NOT EXISTS products (" +
    "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
    "name VARCHAR(100)," +
    "img VARCHAR(300) DEFAULT 'default image' NOT NULL," +
    "options VARCHAR(300)," +
    "size VARCHAR(300)," +
    "qty INT(6) DEFAULT 1," +
    "description VARCHAR(300) DEFAULT 'no current description NOT NULL'" +
    ");"
var orders_products = "CREATE TABLE IF NOT EXISTS orders_products (" +
    "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
    "orderID INT(6)," +
    "productID INT(6)," +
    "qty INT(6) DEFAULT 1" +
    ");"

function init() {
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "satuMare2013!"
    });
    conn.connect(function(err) {
        if (err) throw err;
        console.log("Connected to MySQL");
        // Create Database
        conn.query("CREATE DATABASE IF NOT EXISTS coffee_shop;", function (err) {
           if (err) throw err;
           console.log("coffee_shop was created or already exists");
        });
        // Use database
        conn.query("USE coffee_shop;", function (err) {
            if (err) throw err;
            console.log("coffee_shop was created or already exists");
        });
        // Create all necessary tables
        //create users table
        conn.query(users, function (err) {
            if (err) throw err;
            console.log("users was created or already exists");
        });
        //create employees table
        conn.query(employees, function (err) {
            if (err) throw err;
            console.log("employees was created or already exists");
        });
        //create orders table
        conn.query(orders, function (err) {
            if (err) throw err;
            console.log("orders was created or already exists");
        });
        //create users_orders table
        conn.query(users_orders, function (err) {
            if (err) throw err;
            console.log("users_orders was created or already exists");
        });
        //create products table
        conn.query(products, function (err) {
            if (err) throw err;
            console.log("products was created or already exists");
        });
        //create orders_products table
        conn.query(orders_products, function (err) {
            if (err) throw err;
            console.log("orders_products was created or already exists");
        });
    })
}

module.exports = {
    conn,
    init
}