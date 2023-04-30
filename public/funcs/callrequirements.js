
const fs = require('fs');

console.log('call req script successfully run');

function getJsonData(){
let ddata = fs.readFile('./data/reqnonfunc.json', 'utf-8', (error) =>{
        if(error){
            console.log(error);
            return;
        }    
    });

let parsedData = JSON.parse(ddata);
return parsedData;
    
}

function jsonner2() {
    
    // Read the existing data from the file
    let data = fs.readFileSync('./data/reqnonfunc.json', 'utf-8');
    // Parse the data into a JavaScript object
    // let parsedData = JSON.parse(data);
    // Add a new object to the array
    //parsedData.push(input);
    // Write the updated data back to the file
    //fs.writeFileSync('data/del.json', JSON.stringify(parsedData));
    return data;
}

function jsonpusher(dataobject) {
    fs.writeFileSync('data/reqnonfunc.json', JSON.stringify(dataobject));
}


let d = jsonner2();

const parseData = JSON.parse(d);

parseData.push({"id": "4", "reqname": "Requirement 4"});

jsonpusher(parseData);

console.log('Data after function');
console.log(d);