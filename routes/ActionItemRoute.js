const express = require('express');
const router = express.Router();

router.post('/actitem', (req, res)=>{

    const fdata = req.body;
    console.log(fdata);

    console.log("action item post successful: Action ItemRoute.js");
    res.send("Post from Action Item Route.js: Successful(line 7)");
});

module.exports = router;