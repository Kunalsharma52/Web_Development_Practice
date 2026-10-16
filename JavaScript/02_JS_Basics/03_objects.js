const person1 ={
    userName:"user_123",
    email:"user@gmail.com",
    age:20,
    subscriptions:{
        netflix:"Gold",
        AmazonPrime:"Basic"
    },
    show: function showDetails(){
        console.log("this is user:" + this.userName + "age is :" + this.age)
    }
}
const person2 ={
    userName:"user_1234",
    email:"user2@gmail.com",
    age:21,
    subscriptions:{
        netflix:"Gold",
        AmazonPrime:"Free"
    },
    show: function showDetails(){
        // console.log("this is user:" + this.userName + "age is :" + this.age)
        return this.age
    }
}
console.log(person1.show())
const userInfo = person2.show()
console.log("this is person2 info:",userInfo)


person1.address = "Agra"
console.log(person1["email"])
delete person1.userName
console.log(person1)

// Object.keys()
// Object.values()

// objects de structuring:

const{userName, age , email} = person1

console.log(userName)

console.log(age)

console.log(email)

