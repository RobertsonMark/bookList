var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var book = require('../models/bookModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
