
const router= require('express').Router();
const {scheduleCall}=require('../controllers/callController');

router.post('/call',scheduleCall);


module.exports=router;