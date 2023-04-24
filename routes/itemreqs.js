
const express = require('express');
const router = express.Router();
const Deliverable = require('../scripts/deliverable.js');
//import { Deliverable }from '../scripts/deliverable.js';

router.post('/del', (req, res) =>{
    console.log("Post acquired");
    const fodata = req.body;
    console.log(fodata.id);

    let newitem = new Deliverable(fodata.id, fodata.name, fodata.description, fodata.duedate);
    newitem.display();
    
    res.send("form data recieved");

});

module.exports = router;
