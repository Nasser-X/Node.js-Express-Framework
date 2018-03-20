var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function (req, res, next) {
  res.render('register', {
    i18n: req.i18n
    // username: req.body.username,
    // email: req.body.email,
    // password: req.body.password,
    // repeat_password: req.body.repeat_password
  });
});


router.post('/register', function (req, res, next) {
  res.render('register', {
    i18n: req.i18n,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    repeat_password: req.body.repeat_password
  });
});
module.exports = router;
