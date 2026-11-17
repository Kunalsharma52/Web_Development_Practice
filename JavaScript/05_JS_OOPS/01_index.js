// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     showInfo(){
//         console.log(`Name: ${this.name}`);
//     }

// }
// class Student extends person{
//     constructor(name,age,branch){
//         super(name,age);
//         this.branch=branch;
//     }
//     showInfo(){
//         console.log(`Name: ${this.name}, Age: ${this.age}, Branch: ${this.branch}`);
//     }
// }
// const s1 = new Student("User3CB", 24 , "CSE")
// s1.showInfo();

class BankAccount{
    #balance;
    constructor(accountHolder, initialAmount){
        this.accountHolder=accountHolder;
        this.#balance=initialAmount;
    }
    deposit(amount){
        this.#balance += amount;
    }
    withdrawl(amount){
        this.#balance -= amount;
    }
        
    getBalance(){
        console.log(`${this.accountHolder} has balance : ${this.#balance}`);
    }
}
const acc = new BankAccount("User3CB", 10000);
acc.deposit(2300);
acc.getBalance();