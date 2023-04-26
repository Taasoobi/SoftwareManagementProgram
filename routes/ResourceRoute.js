const express = require('express');
const router = express.Router();

router.post('/reso', (req, res)=>{

    console.log("Resource post successful: ResourceRoutejs(6)");
    res.send("Resource Submitted: Message from ResourceRoute.js(7)");
});

module.exports = router;