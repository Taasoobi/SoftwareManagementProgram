class Task {
    constructor(id, name, desc, resass, exstartdate, exenddate, exdur, exeff, acstartdate, acenddate, acdur, effcompleted,
         aceffort, percomp, predtask, succtask){
        this.Id = id;
        this.Name = name;
        this.Description = desc;
        this.ResourceAssigned = resass;
        this.ExpectedStartDate = exstartdate;
        this.ExpectedEndDate = exenddate;
        this.ExpectedDuration = exdur;
        this.ExpectEffort = exeff;
        this.ActualStartDate = acstartdate;
        this.ActualEndDate = acenddate;
        this.ActualDuration = acdur;
        this.EffortCompleted = effcompleted;
        this.ActualEffort = aceffort;
        this.PercentageCompleted = percomp;
        this.PredecessorTasks = predtask;
        this.SuccessorTasks = succtask;
    }

    displayTasks(){
        console.log(this.Id +" "+ this.Name +" "+ this.Description +" "+ this.ResourceAssigned);
        console.log(this.ExpectedStartDate +" "+ this.ExpectedEndDate +" "+ this.ExpectedDuration +" "+ this.ExpectEffort +" "+ this.EffortCompleted);
        console.log(this.ActualStartDate +" "+ this.ActualEndDate +" "+ this.ActualDuration +" "+ this.ActualEffort);
        console.log(this.PercentageCompleted +" "+ this.PredecessorTasks +" "+ this.SuccessorTasks);
    }
};

module.exports = Task;