var express = require('express');
var router = express.Router();
var auth = require('../middlewares/auth')

/* GET home page. */
router.get('/lala', auth,function(req, res, next) {
  res.render('home');
});



module.exports = router;
