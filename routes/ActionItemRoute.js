const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/actitem', (req, res)=>{

    const fdata = req.body;
    console.log(fdata);

    console.log("action item post successful: Action ItemRoute.js");
    res.send("Post from Action Item Route.js: Successful(line 7)");
});

router.get('/getActJson', (req, res) =>{
    console.log("Retrieved Action Item JSON for table");
    const readDataFile = fs.readFileSync('data/act.json', 'utf-8', (error) =>{
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