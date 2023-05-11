
async function getSkillsJson(){
    const skillFetch = await fetch('/retrieveSkills')
    const parsedSkill = await skillFetch.json();
    return parsedSkill;
}

const theSkills = await getSkillsJson();

const skillBox = document.getElementById('skillBox');

for(let i = 0; i<theSkills.length; i++){
    console.log(theSkills[i]);
    let skillspanitem = document.createElement('span');
    skillspanitem.innerHTML = theSkills[i];
    skillspanitem.className = "reqtag";
    skillBox.appendChild(skillspanitem);
}

const skilltags = document.querySelector(".reqtag");

skilltags.addEventListener('click', function(event){
    if(event.target.tagName === 'SPAN'){
        
    }
});