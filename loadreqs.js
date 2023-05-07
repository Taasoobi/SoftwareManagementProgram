const fs = require('fs');
//import * as fs from 'fs'; 

//const { response } = require("express");
/*
console.log("loadreq Commenced");

await fetch('reqnonfunc.json')
.then(response => response.json())
.then(data => {console.log(data);})


console.log("End of Fetch");
*/



const readDataFile = fs.readFileSync('data/reqnonfunc.json', 'utf-8', (error) =>{
  if(error){
      console.log(error);
      return;
  }    
});

console.log(readDataFile);


console.log("Read Data File^");
let parsedData = JSON.parse(readDataFile);

console.log(parsedData);
console.log("parsed Data^");

console.log("Below is for loop");
for(let i = 0; i<parsedData.length; i++){
  console.log(parsedData[i]);
}



