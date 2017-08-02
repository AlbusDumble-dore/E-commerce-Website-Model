var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
var passport = require('passport');
var Product = require('../models/products');
var Cart = require('../models/cart');

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

router.get('/add-to-cart:id/',function (res,req,next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart?req.session.cart : {});                   // if already cart is present then pass cart else empty cart
    Product.findById(productId,function (err,product) {
        if(err) return res.redirect('/');
        cart.add(product,product.id())
        req.session.cart  = cart;
        res.redirect('/');
    });


});


module.exports = router;
