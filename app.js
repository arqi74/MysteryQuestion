// === MODULES === //
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const sync = require('sync-request');
const routes = require('./controllers/pageController.js');

const passwords = require('./passwords.json');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(flash());

// === PASSWORDS CHECKING === //
app.post('/level1', function(req, res){ if(req.body.answer == passwords.level1) res.redirect('/hDE4Qbmf'); });
app.post('/hDE4Qbmf', function(req, res){ if(req.body.answer == passwords.level2) res.redirect('/'); });

app.use('/', routes);

module.exports = app;