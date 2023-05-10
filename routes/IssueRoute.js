const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/iss', (req, res) => {

    const fdata = req.body;
    console.log(fdata);

    console.log("post issue: Issue Route.js");
    res.send("issue posted: Message from IssueRoutejs:(7)");
});

router.get('/getIssJson', (req, res) =>{
    console.log("Retrieved Issue JSON for table");
    const readDataFile = fs.readFileSync('data/iss.json', 'utf-8', (error) =>{
        if(error){
            console.log(error);
            return;
        }    
      });
      let parsedData = JSON.parse(readDataFile);
      //let strungData = JSON.stringify(parsedData);
      res.json(parsedData);
});

module.exports = router;