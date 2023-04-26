const express = require('express');
const router = express.Router();

router.post('/task', (req, res)=>{
    console.log('Successful Task Route');
    res.send("Task Post acquired: Message from: TaskRoute.js line 5");
});


module.exports = router;