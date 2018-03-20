var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/post', function(req, res, next) {
  res.render('post', { name: req.body.name, title: 'Post' });
});

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express', username:req.body.username });
});

module.exports = router;
