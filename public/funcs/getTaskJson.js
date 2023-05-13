//IMPORTANT: for "await" to work at line 20: must set script to "type='module'" on head of html file 
async function getTableData() {
    try{
    const tableData = await fetch('/processtask/getTaskJson');
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
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let p8 = document.createElement('p');
    let p9 = document.createElement('p');
    let p10 = document.createElement('p');
    let p11 = document.createElement('p');
    let p12 = document.createElement('p');
    let p13 = document.createElement('p');

    p1.innerHTML = "Description: " + obj.description;
    p2.innerHTML = "Resources: " + obj.resources;
    p3.innerHTML = "Expected Due Date: " + obj.expduedate;
    p4.innerHTML = "Expected End Date: " + obj.expenddate;
    p5.innerHTML = "Expected Effort: " + obj.expeffort;
    p6.innerHTML = "Actual Start Date: " + obj.actstartdate;
    p7.innerHTML = "Actual End Date: " + obj.actenddate;
    p8.innerHTML = "Effort Completed: " + obj.effcompleted;
    p9.innerHTML = "Actual Effort: " + obj.acteffort;
    p10.innerHTML = "Percent Complete: " + obj.percomplete;
    p11.innerHTML = "Predecessor Tasks: " + obj.predTasks;
    p12.innerHTML = "Successor Tasks: " + obj.succTasks;
    p13.innerHTML = "Issues: " + obj.issues;


    detailsdiv.appendChild(p1);
    detailsdiv.appendChild(p2);
    detailsdiv.appendChild(p3);
    detailsdiv.appendChild(p4);
    detailsdiv.appendChild(p5);
    detailsdiv.appendChild(p6);
    detailsdiv.appendChild(p7);
    detailsdiv.appendChild(p8);
    detailsdiv.appendChild(p9);
    detailsdiv.appendChild(p10);
    detailsdiv.appendChild(p11);
    detailsdiv.appendChild(p12);
    detailsdiv.appendChild(p13);
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
