var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hailun', function(req, res, next) {
  // load family views
  res.render('hailun');
});
router.get('/yu', function(req, res, next) {
  // load family views
  res.render('yu');
});
router.get('/guoying', function(req, res, next) {
  // load family views
  res.render('guoying');
});
module.exports = router;
