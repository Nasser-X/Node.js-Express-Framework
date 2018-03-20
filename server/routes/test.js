var express = require('express');
var router = express.Router();

/* GET example page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

router.get('/example', function(req, res, next) {
    res.render('index', { title: 'Test Example' });
  });

module.exports = router;