const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res, next) {
  res.render('jsondata', { req });
});

module.exports = router;