//ctrl+shift+p/ to open command

class Deliverable {
    constructor(id, name, desc, dueDate){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
    }
    
    display(){
        console.log("Beginning");
        console.log(Deliverable);
        console.log(this.id);
        console.log(this.name);
        console.log(this.desc);
        console.log(this.dueDate);
        console.log("End");
        console.log(this);
    }

    pushtoJSON(input){
        const fs = require('fs');
        // Read the existing data from the file
        const data = fs.readFileSync('data.json', 'utf-8');
        // Parse the data into a JavaScript object
        const parsedData = JSON.parse(data);
        // Add a new object to the array
        parsedData.push(input);
        // Write the updated data back to the file
        fs.writeFileSync('data.json', JSON.stringify(parsedData));
        }

};

//let test1 = new Deliverable("12", "NameTest", "TestDescription", "Today");
//let parsject = JSON.stringify(test1);
//fs.writeFile('data/deldata.json', parsject);
module.exports = Deliverable;