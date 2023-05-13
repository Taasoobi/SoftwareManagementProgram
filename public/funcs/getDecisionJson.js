//IMPORTANT: for "await" to work at line 20: must set script to "type='module'" on head of html file 
async function getTableData() {
    try{
    const tableData = await fetch('/processdec/getDecJson');
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
let p14 = document.createElement('p');
let p15 = document.createElement('p');

    p1.innerHTML = "Description: " + obj.description;
    p2.innerHTML = "Priority: " + obj.priority;
    p3.innerHTML = "Impact: " + obj.impact;
    p4.innerHTML = "Date Created: " + obj.datecreate;

    p5.innerHTML = "Date Needed: " + obj.dateneed;
p6.innerHTML = "Date Made: " + obj.datemade;
p7.innerHTML = "Resources: " + obj.resources;
p8.innerHTML = "Expected Completion Date: " + obj.excomdate;
p9.innerHTML = "Actual Completion Date: " + obj.accomdate;
p10.innerHTML = "Note Date: " + obj.notedate;
p11.innerHTML = "Note List: " + obj.meetNotelist;
p12.innerHTML = "Reference Documents: " + obj.refDoclist;
p13.innerHTML = "Status: " + obj.status;
p14.innerHTML = "Status Description: " + obj.statdesc;
p15.innerHTML = "Update Date: " + obj.upddate;

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
detailsdiv.appendChild(p14);
detailsdiv.appendChild(p15);
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
