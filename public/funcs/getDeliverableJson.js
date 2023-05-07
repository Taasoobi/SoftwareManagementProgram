//IMPORTANT: for "await" to work at line 20: must set script to "type='module'" on head of html file 
async function getTableData() {
    try{
    const tableData = await fetch('/processDeliverable/getDelJson');
    const returnTableData = await tableData.json();
    return returnTableData;
    } catch (error) {
        console.error(error);
    }
    
    /*
    .then(data => {
        console.log("Hello from getDeliverableJson.js");
        console.log(data);
    })
    */
    
}

const newTableData = await getTableData();

console.log("Here is Table Data:");
console.log(newTableData);