class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showInfo(){
        console.log(`Name: ${this.name}`);
    }

}
class Student extends person{
    constructor(name,age,branch){
        super(name,age);
        this.branch=branch;
    }
    showInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Branch: ${this.branch}`);
    }
}
const s1 = new Student("User3CB", 24 , "CSE")
s1.showInfo();

