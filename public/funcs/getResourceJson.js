//IMPORTANT: for "await" to work at line 20: must set script to "type='module'" on head of html file 
async function getTableData() {
    try{
    const tableData = await fetch('/processreso/getResJson');
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
    addItemsIntoTable(newTableData[i]);
}

//Takes in id and name, then Creates a Table Item and adds it to the List in the Table
function addItemsIntoTable(obj){ 
    let superContainerDiv = document.createElement('div');
    superContainerDiv.onclick = toggleDetails;
    superContainerDiv.className = 'itemContainer';

    let containerDiv = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let xbtn = document.createElement('button');

    div1.innerHTML = obj.id;
    div1.className = 'innerDiv';

    div2.innerHTML = obj.name;
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

    //details div
    let detailsdiv = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');

    p1.innerHTML = "Title: " + obj.title;
    p2.innerHTML = "Available Dates: " + obj.avadate;
    p3.innerHTML = "Pay: " + obj.pay;
    p4.innerHTML = "Skills: " + obj.skills;

    detailsdiv.appendChild(p1);
    detailsdiv.appendChild(p2);
    detailsdiv.appendChild(p3);
    detailsdiv.appendChild(p4);
    detailsdiv.className = 'details';

    //end of details div

    superContainerDiv.appendChild(containerDiv);
    superContainerDiv.appendChild(detailsdiv);

    dataTableDiv.appendChild(superContainerDiv);
}

function toggleDetails() {
    let detailsContainer = this.querySelector('.details');
    detailsContainer.style.display = (detailsContainer.style.display === 'block') ? 'none' : 'block';//'none') ? 'block' : 'none';
}

//Takes all Items in Table, Deletes them, Then Refreshes with Updated List of Deliverable Items
const refreshButton = document.getElementById('refreshbtn');
refreshButton.addEventListener('click', async () =>{
    let removethisItems = document.querySelectorAll('.tableItemDiv');
    removethisItems.forEach(div => {div.remove();});
    let refreshedTableData = await getTableData();
    
    for(let i = 0; i<refreshedTableData.length; i++){
        addItemsIntoTable(refreshedTableData[i]);
        //console.log('Loop');    
    }
});
