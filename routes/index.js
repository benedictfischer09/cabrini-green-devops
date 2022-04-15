var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/skills', function(req, res, next) {
  res.render('skills');
});
router.get('/terms', function(req, res, next) {
  res.render('terms');
});
router.get('/modules/*', function(req, res, next) {
  res.render(`.${req.path}`);
});

module.exports = router;
