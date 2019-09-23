const express = require('express');
const router = express.Router();
const passport=require('passport');
const usersConrtoller = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication, usersConrtoller.profile);

router.get('/signUp',usersConrtoller.signUp);
router.get('/signIn',usersConrtoller.signIn);

router.post('/create',usersConrtoller.create);

// use passport as a middleware authentication
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sinIn'},
),usersConrtoller.createSession);

router.get('/signOut', usersConrtoller.destroySession);

module.exports = router;