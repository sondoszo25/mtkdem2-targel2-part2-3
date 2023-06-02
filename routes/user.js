const usercontrlloer = require('../controllers/user');
const express=require('express');
var router=express.Router();
router.route('/').post(usercontrlloer.createUser);
module.exports=router;