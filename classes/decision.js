class Decision{
    constructor(id, name, desc, prior, imp, dcreate, dneed, dmade,
         excomdate, accomdate, stat, statdesc) {
        this.Id = id;
        this.Name = name;
        this.Description = desc;
        this.Priority = prior;
        this.Impact = imp;
        this.DateCreated = dcreate;
        this.DateNeeded = dneed;
        this.DateMade = dmade;
        this.ExpectedCompletionDate = excomdate;
        this.ActualCompletionDate = accomdate;
        this.Status = stat;
        this.StatusDescription = statdesc;
    }

    displayDecision(){
        console.log(this.Id +" "+ this.Name +" "+ this.Description +" "+ this.Priority +" "+ this.Impact);
        console.log(this.DateCreated +" "+ this.DateNeeded +" "+ this.DateMade +" "+ this.ExpectedCompletionDate +" "+ this.ActualCompletionDate);
        console.log(this.Status +" "+ this.StatusDescription);
    }

}