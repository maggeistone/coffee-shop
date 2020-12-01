var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var db = require('./routes/dbConnect');

var app = express();

var indexRouter = require('./routes/index');
var getUsersRouter = require('./routes/getUsers');
var verifyRouter = require('./routes/verify');
var getAllProductsRouter = require('./routes/getAllProducts');
var submitOrderRouter = require('./routes/submitOrder');
var addProductRouter = require('./routes/addProduct');
var getAllOrdersRouter = require('./routes/getAllOrders');
var changeStatusRouter = require('./routes/changeStatus');
var getMyOrdersRouter = require('./routes/getMyOrders');
var cancelOrderRouter = require('./routes/cancelOrder');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

db.init();

app.use('/', indexRouter);
app.use('/getUsers', getUsersRouter);
app.use('/verify', verifyRouter);
app.use('/getAllProducts', getAllProductsRouter)
app.use('/submitOrder', submitOrderRouter)
app.use('/addProduct', addProductRouter);
app.use('/getAllOrders', getAllOrdersRouter);
app.use('/changeStatus', changeStatusRouter);
app.use('/getMyOrders', getMyOrdersRouter);
app.use('/cancelOrder', cancelOrderRouter);


module.exports = app;
