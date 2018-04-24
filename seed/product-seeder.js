/**
 * Created by albusdumble-dore on 1/8/17.
 */

var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');



var products =[ new Product({
    imagePath:'http://www.allabouttabletennis.com/images/xrecommended-table-tennis-racket.jpg.pagespeed.ic.sXCs6YPrQW.jpg',
    title:' Racket',
    description:'Awesome spin and speed.',
    price:'10'

}),
    new Product({
        imagePath:'http://ecx.images-amazon.com/images/I/71s9JXVNwrS._SL1265_.jpg',
        title:' Ball',
        description:'Good bounce.',
        price:'2'

    }),
    new Product({
        imagePath:'https://media.decathlon.in/115968/ft720-indoor-table-tennis-table-blue.jpg',
        title:' TT table',
        description:'Smooth, easy to move and stable.',
        price:'50'

    }),
    new Product({
        imagePath:'http://ecx.images-amazon.com/images/I/315vzMiQ6EL.jpg',
        title:' Racket cover',
        description:'Multi compartment with foam padding.',
        price:'1'

    }),
    new Product({
        imagePath:'http://www.wigglestatic.com/product-media/5360112955/GripGrab-Aero-Short-Finger-Gloves-Short-Finger-Gloves-White-Black-1034.jpg?w=2000&h=2000&a=7',
        title:' Gloves',
        description:'Super slim and maximum aerodynamic advantage.',
        price:'5'

    }),
    new Product({
        imagePath:'http://ecx.images-amazon.com/images/I/51af3MeyHQL._SL1000_.jpg',
        title:' Racket blade',
        description:'Five layered offensive blade.',
        price:'1'

    })
];
var done = 0;


for(var i=0;i<products.length;i++)
{
    products[i].save(function (err,result) {
        done++;
        if(done===products.length)
            exit();
        
    });
}
function exit() {
    mongoose.disconnect();
}


