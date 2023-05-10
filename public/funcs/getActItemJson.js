//IMPORTANT: for "await" to work at line 20: must set script to "type='module'" on head of html file 
async function getTableData() {
    try{
    const tableData = await fetch('/processactitem/getActJson');
    const returnTableData = await tableData.json();
    return returnTableData;
    } catch (error) {
        console.error(error);
    }
}

const newTableData = await getTableData();
//Checking if newTableData is being sent
console.log("Here is Table Data:");
console.log(newTableData); // if it is undefined then function did not work

//Initial Fill in table after page loads or reloads
const dataTableDiv = document.getElementById('tableDiv');
for(let i = 0; i<newTableData.length; i++){
    addItemsIntoTable(newTableData[i].id, newTableData[i].name);
}

//Takes in id and name, then Creates a Table Item and adds it to the List in the Table
function addItemsIntoTable(id, name){ 
    let containerDiv = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let xbtn = document.createElement('button');

    div1.innerHTML = id;
    div1.className = 'innerDiv';

    div2.innerHTML = name;
    div2.className = 'innerDiv';

    xbtn.className = 'deletebtn';
    xbtn.innerHTML = 'X';
    xbtn.title = 'Delete'
    div3.appendChild(xbtn);
    div3.className = 'innerDiv';

    containerDiv.className = 'tableItemDiv';
    containerDiv.appendChild(div1);
    containerDiv.appendChild(div2);
    containerDiv.appendChild(div3);

    dataTableDiv.appendChild(containerDiv);
}


//Takes all Items in Table, Deletes them, Then Refreshes with Updated List of Deliverable Items
const refreshButton = document.getElementById('refreshbtn');
refreshButton.addEventListener('click', async () =>{
    let removethisItems = document.querySelectorAll('.tableItemDiv');
    removethisItems.forEach(div => {div.remove();});
    let refreshedTableData = await getTableData();
    
    for(let i = 0; i<refreshedTableData.length; i++){
        addItemsIntoTable(refreshedTableData[i].id, refreshedTableData[i].name);
        //console.log('Loop');    
    }
});