
const express = require('express');
const router = express.Router();
const Deliverable = require('../classes/deliverable.js');
//import { Deliverable }from '../scripts/deliverable.js';

router.post('/del', (req, res) =>{
    console.log("Post acquired: Message from DeliverableRoute.js");
    const fodata = req.body;
    //console.log(fodata.id);
    console.log(fodata);

    let newitem = new Deliverable(fodata.id, fodata.name, fodata.description, fodata.duedate);
    newitem.display();
    
    res.send("form data recieved");

});

module.exports = router;
