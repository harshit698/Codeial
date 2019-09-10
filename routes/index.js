const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
const aboutController=require('../controllers/about_controller');

console.log('router loaded');

router.get('/',homeController.home);
router.get('/about',aboutController.about);
router.use('/users',require('./users'));

// for any further routes,access from here
// router.use('/routerName',require('./routerFile'));

module.exports=router;
