const express = require('express');
const router = express.Router();
const passport=require('passport');
const usersController = require('../controllers/users_controller');


router.get('/profile/:id',passport.checkAuthentication, usersController.profile);
router.post('/update/:id',passport.checkAuthentication,usersController.update);

router.get('/signUp',usersController.signUp);
router.get('/signIn',usersController.signIn);

router.post('/create',usersController.create);

// use passport as a middleware authentication
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/signIn'},
),usersController.createSession);

router.get('/signOut', usersController.destroySession);

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/users/signIn'}),usersController.createSession);

router.get('/auth/facebook',passport.authenticate('facebook',{scope:['profile','email']}));
router.get('/auth/facebook/callback',passport.authenticate('facebook',{failureRedirect:'/users/signIn'}),usersController.createSession);


module.exports = router;