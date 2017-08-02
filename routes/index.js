var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
var passport = require('passport');
var Product = require('../models/products');

router.use( csrfProtection);


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function (err,docs) {

    var productChunks = [];
      var chunkSixe = 3;
      for(i=0;i<docs.length;i+= chunkSixe)
      {
          productChunks.push(docs.slice(i,i + chunkSixe));
      }
      res.render('shop/index', { title: 'Shopping Cart',products: productChunks  });//   retreiving

      
  });
});
router.get('/user/signup',function (req,res,next) {
  res.render('user/signup',{csrfToken: req.csrfToken});
    
});
router.post('/user/signup',passport.authenticate('local-signup',{
  successRedirect: '/profile',
    failureRedirect : '/signup',
    failureFlash : true
}));

router.get('/user/profile',function (req,res,next) {
    res.render('user/profile');
});

module.exports = router;
