const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controller');

router.get('/profile', usersConrtoller.profile);

router.get('/signUp', usersConrtoller.signUp);
router.get('/signIn', usersConrtoller.signIn);

router.get('/create',usersConrtoller.create);
router.get('/create-session',usersConrtoller.createSession);

module.exports = router;