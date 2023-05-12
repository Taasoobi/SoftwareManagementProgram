const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/reso', (req, res)=>{

    const fdata = req.body;
    console.log(fdata);
    //console.log(fdata.skills);
    //console.log(fdata.pay);
    const readDataFile = fs.readFileSync('data/res.json', 'utf-8', (error) =>{
        if(error){
            console.log(error);
            return;
        }    
      });
    let parsedData = JSON.parse(readDataFile);
    parsedData.push(fdata);
    fs.writeFileSync('data/res.json', JSON.stringify(parsedData));

    console.log("Resource post successful: ResourceRoutejs(6)");
    res.send("Resource Submitted: Message from ResourceRoute.js(7)");
});

router.get('/getResJson', (req, res) =>{
    console.log("Retrieved Resource JSON for table");
    const readDataFile = fs.readFileSync('data/res.json', 'utf-8', (error) =>{
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