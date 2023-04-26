const express = require('express');
const app = express();


app.use(express.static('public'));
//app.use(express.urlencoded({ extended: true })); did not work with json data? Maybe data that is recieved is utf?
app.use(express.json()); //seems to work with json data

/*
app.post('/processitem/del', (req, res) => {
    //console.log(req);
    const {id, name} = req.body;
    const formData = req.body;
    const dataname = req.body.name;
    console.log(formData.id+ " + " +dataname);
    console.log({id, name});
    res.send("form data recieved");
});
*/

const deliverableRouter = require('./routes/DeliverableRoute');
app.use('/processDeliverable', deliverableRouter);

const taskRouter = require('./routes/TaskRoute');
app.use('/processtask', taskRouter);

const actionitemRouter = require('./routes/ActionItemRoute');
app.use('/processactitem', actionitemRouter);

const issueRouter = require('./routes/IssueRoute');
app.use('/processiss', issueRouter);

const resourceRouter = require('./routes/ResourceRoute');
app.use('/processreso', resourceRouter);

const decisionRouter = require('./routes/DecisionRoute');
app.use('/processdec', decisionRouter);

app.listen(3000, () =>{console.log('Server is listening on Port 3000');} );

//app.use('/', express.static(__dirname + '/public')); works, but __dirname is not necessary though
/* Doesnt work:
app.get('/', (req, res) =>{
    res.send(express.static('public'));
});*/
/* Works but sends single file instead of static public folder.
app.post('/processitem/del', (req, res) => {
    res.sendFile(__dirname + '/public/del.html');
});
*/