const router= require('express').Router();
const {registerUser, loginUser,hello}=require('../controllers/userController');

router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/hello', hello);


module.exports=router;