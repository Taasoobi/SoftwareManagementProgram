class Resource{
    constructor(id, name, title, avadate, pay){
        this.Id=id;
        this.Name=name;
        this.Title=title;
        this.AvailableDates=avadate;
        this.Pay=pay;
    }

    displayResource(){
        console.log(this.Id +" "+ this.Name +" "+ this.Title);
        console.log(this.AvailableDates +" "+ this.Pay);
    }
}

module.exports = Resource;