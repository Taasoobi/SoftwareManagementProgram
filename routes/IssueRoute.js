const express = require('express');
const router = express.Router();

router.post('/iss', (req, res) => {

    const fdata = req.body;
    console.log(fdata);

    console.log("post issue: Issue Route.js");
    res.send("issue posted: Message from IssueRoutejs:(7)");
})

module.exports = router;