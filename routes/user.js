/**
 * Created by albusdumble-dore on 3/8/17.
 */

var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
var passport = require('passport');
var Product = require('../models/products');

var csrfProtection = csrf();
router.use(csrfProtection);
router.get('/profile',isLoggedIn,function (req,res,next) {
    res.render('user/profile');
});
router.get('/logout',isLoggedIn,function (req,res,next) {
    req.logout();
    req.redirect('/');
});


router.use('/',function (req,res,next) {
    next();
});

router.get('/signup',function (req,res,next) {
    var messages = req.flash('error');
    res.render('user/signup',{csrfToken: req.csrfToken(),messages: messages,hasErrors : messages.length>0});

});
router.post('/signup',passport.authenticate('local-signup',{
    successRedirect: '/user/profile',
    failureRedirect : '/user/signup',
    failureFlash : true
}));

router.get('/signin',function (req,res,next) {
    var messages = req.flash('error');
    res.render('user/signin',{csrfToken: req.csrfToken(),messages: messages,hasErrors : messages.length>0});

});

router.post('/signin',passport.authenticate('local-signin',{
    successRedirect: '/user/profile',
    failureRedirect : '/user/signin',
    failureFlash : true
}));


function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function isNotLoggedIn(req,res,next) {
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

module.exports = router;

