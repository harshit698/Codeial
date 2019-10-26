const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const crypto = require('crypto');
const User = require('../models/user');

passport.use(new FacebookStrategy({
    clientID:"407240089942342",
    clientSecret:"7ae76efe19c94ccd3150a7326da2eb8c",
    callbackURL:"http://localhost:8000/users/auth/facebook/callback"

},
    function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in facebook strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, function(err, user){
                    if (err){console.log('error in creating user facebook strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }


));


module.exports = passport;
