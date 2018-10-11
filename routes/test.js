var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('web-rtc/index.html');
});

router.get('/create', function(req, res, next) {
  res.render('web-rtc/create.html');
});

router.get('/join', function(req, res, next) {
  res.render('web-rtc/join.html');
});

module.exports = router;
