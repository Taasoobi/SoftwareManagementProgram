const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/dec', (req, res)=>{
    const fdata = req.body;
    console.log(fdata);

    const readDataFile = fs.readFileSync('data/dec.json', 'utf-8', (error) =>{
        if(error){
            console.log(error);
            return;
        }    
      });
    let parsedData = JSON.parse(readDataFile);
    parsedData.push(fdata);
    fs.writeFileSync('data/dec.json', JSON.stringify(parsedData));

    console.log("Decision Post Successful: Message from DecisionRoute.js(6)");
    res.send("Post acquired of Decision: from DecisionRoute.js(7)");
});

router.get('/getDecJson', (req, res) => {
    console.log("Retrieved Decisions JSON for table");
    const readDataFile = fs.readFileSync('data/dec.json', 'utf-8', (error) => {
        if(error){
            console.log(error);
            return;
        }
    });
    let parsedData = JSON.parse(readDataFile);
    res.json(parsedData);
});

module.exports = router;