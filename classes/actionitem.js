class ActionItem{
    constructor(id, name, desc, createdate, assigndate, resourceassign, excomdate, accomdate, statdesc, upddate){
        this.Id = id;
        this.Name = name;
        this.Description = desc;
        this.DateCreated = createdate;
        this.DateAssigned = assigndate;
        this.ResourceAssigned = resourceassign;
        this.ExpectedCompletionDate = excomdate;
        this.ActualCompletionDate = accomdate;
        this.StatusDescription = statdesc;
        this.UpdateDate = upddate;
    }

    displayActionItem(){
        console.log(this.Id +" "+ this.Name +" "+ this.Description);
        console.log(this.DateCreated +" "+ this.DateAssigned +" "+ this.ExpectedCompletionDate +" "+ this.ActualCompletionDate);
        console.log(this.ResourceAssigned +" "+ this.StatusDescription +" "+ this.UpdateDate);
    }

};

module.exports = ActionItem;