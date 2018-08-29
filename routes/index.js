var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Iqraa Center',text: 'Arabic Language Centre for kids' });
});

module.exports = router;
