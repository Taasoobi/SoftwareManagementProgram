const express = require('express');
const router = express.Router();

router.post('/dec', (req, res)=>{

    const fdata = req.body;
    console.log(fdata);

    console.log("Decision Post Successful: Message from DecisionRoute.js(6)");
    res.send("Post acquired of Decision: from DecisionRoute.js(7)");
});

module.exports = router;