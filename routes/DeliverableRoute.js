
const express = require('express');
const router = express.Router();
const Deliverable = require('../classes/deliverable.js');
//import { Deliverable }from '../scripts/deliverable.js';

router.post('/del', (req, res) =>{
    console.log("Post acquired: Message from DeliverableRoute.js");
    const fodata = req.body;
    //console.log(fodata.id);
    console.log(fodata);

    let newitem = new Deliverable(fodata.id, fodata.name, fodata.description, fodata.duedate, fodata.requirements, fodata.taskInput);
    newitem.display();
    //newitem.pushtoJSON(fodata); //ignore for now
    newitem.pushtoJSON(newitem);

    res.send("form data recieved");

});

const fs = require('fs');
router.get('/getDelJson', (req, res) =>{
    console.log("Retrieved Deliverable JSON for table");
    const readDataFile = fs.readFileSync('data/del.json', 'utf-8', (error) =>{
        if(error){
            console.log(error);
            return;
        }    
      });
      let parsedData = JSON.parse(readDataFile);
      //let strungData = JSON.stringify(parsedData);
      res.json(parsedData);
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log("DELETE REQUEST RECIEVED");
    const readDataFile = fs.readFileSync('data/del.json', 'utf-8');
    let parsedData = JSON.parse(readDataFile);
  
    // Find the index of the item with the specified id
    const index = parsedData.findIndex(item => item.id === id);
    
    if (index !== -1) {
      // Remove the item at the specified index
      parsedData.splice(index, 1);
  
      // Write the updated data back to the file
      fs.writeFileSync('data/del.json', JSON.stringify(parsedData, null, 2), 'utf-8');
      
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
});

module.exports = router;
