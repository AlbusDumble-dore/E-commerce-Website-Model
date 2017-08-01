var express = require('express');
var router = express.Router();
var Product = require('../models/products');

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

module.exports = router;
