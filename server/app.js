const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const xmlParser = require('express-xml-bodyparser');
const session = require('express-session');
const passport = require('passport');
const logger = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(xmlParser());
app.use(session({ secret: 'shhhhhhhhh', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../public')));

/* CATCH ALL ROUTES */
app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;