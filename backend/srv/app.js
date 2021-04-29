const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const session = require('express-session');
var createError = require('http-errors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
require('dotenv').config();


const scriptRouter = require('./routers/script');
const app = express();
const port = process.env.NODE_ENV === 'test' ? process.env.SERVER_PORT_TEST || 3001 : process.env.SERVER_PORT || 3000;
const apiPath = process.env.API_PATH + '/' + process.env.API_VERSION;

//中间件
app.all('*', function (req, res, next) {
    // 设置cors
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', 'true'); // 允许发送Cookie数据
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
})

//路由
app.use(apiPath+'/',scriptRouter)