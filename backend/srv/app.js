const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const session = require('express-session');
var createError = require('http-errors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');


const app=express()
const scriptRouter=require('./routers/script')
app.use('script',scriptRouter)