/**
 * Created by albusdumble-dore on 2/8/17.
 */


var passport = require('passport');
var user = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user,done) {                  // how to store user using id
done(null,user.id)
});

passport.deserializeUser(function (id,done) {
User.findById(id,function (err,user) {                    // retrieve user from id
    done(err,user);
});
});

passport.use('local-signup',new LocalStrategy({                   //  to signup new users
    userField : 'email',
    password : 'password',
    passReqToCallback: true
},function (req,email,password,done) {
    User.findOne({'email':email},function (err,user) {
        if(err) return done(err);
        if(user) return  done(null,false,{message : 'email already in use.'});
        var newUser = new User();
        newUser.email =email;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function (err,result) {
            if(err)
                return done(err);
            return done(null,newUser);
        });

    });
}));
