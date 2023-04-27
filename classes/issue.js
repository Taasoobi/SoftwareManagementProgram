class Issue {
    constructor(id, name, desc, priority, sev, dateraise, dateassign, excomdate, accomdate, stat, statdesc, upddate){
        this.Id=id;
        this.Name=name;
        this.Description=desc;
        this.Priority=priority;
        this.Severity=sev;
        this.DateRaised=dateraise;
        this.DateAssigned=dateassign;
        this.ExpectedCompletionDate=excomdate;
        this.ActualCompletionDate=accomdate;
        this.Status=stat;
        this.StatusDescription=statdesc;
        this.UpdateDate=upddate;
    }

    displayIssue(){
        console.log(this.Id + this.Name + this.Description + this.Priority + this.Severity);
        console.log(this.DateRaised + this.DateAssigned + this.ExpectedCompletionDate + this.ActualCompletionDate);
        console.log(this.Status + this.StatusDescription + this.UpdateDate);
    }
}

module.exports = Issue;