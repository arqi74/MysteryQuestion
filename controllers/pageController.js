const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/rules', (req, res) => {
    res.render('rules');
});

router.get('/level1', (req, res) => {
    res.render('level1');
});

router.get('/hDE4Qbmf', (req, res) => {
    res.render('level2');
});

module.exports = router;