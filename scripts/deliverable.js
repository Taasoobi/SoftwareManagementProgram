class Deliverable {

    constructor(id, name, desc, dueDate){
        this.id = del_Id;
        this.name = del_Name;
        this.desc = del_Desc;
        this.dueDate = del_DueDate;
    }

    display(){
        console.log("Beginning");
        console.log(Deliverable);
        console.log(this.id);
        console.log(this.name);
        console.log(this.desc);
        console.log(this.dueDate);
        console.log("End");
    }
}

let test1 = new Deliverable("12", "NameTest", "TestDescription", "Today");
test1.display();
console.log(test1.del_Id);
console.log(test1.del_Name);
console.log(test1.del_Desc);
console.log(test1.del_DueDate);

