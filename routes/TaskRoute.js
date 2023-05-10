const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/task', (req, res)=>{
    
    const fdata = req.body;
    console.log(fdata);

    console.log('Successful Task Route');
    res.send("Task Post acquired: Message from: TaskRoute.js line 5");
});

router.get('/getTaskJson', (req, res) =>{
    console.log("Retrieved Task JSON for table");
    const readDataFile = fs.readFileSync('data/tas.json', 'utf-8', (error) =>{
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