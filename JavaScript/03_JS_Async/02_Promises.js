const promisesOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task is completed")
        resolve()
    }, 2000)
    
})

const promisesTwo = new Promise(function(resolve, reject){
   
    let data = {username: "John", password: "1234"}
    if(data){
        resolve(data)
    }else{
        reject("error: Something went wrong")
    }

})

promisesOne.then(function(data){
    console.log("Promise is resolved")
    console.log(data)

})
.catch(function(){
    console.log("Promise is rejected")
})
.finally(function(){
    console.log("Promise is either rejected or resolved")
})

promisesTwo.then(function(data){
    console.log(data)
})
.catch(function(err){
    console.log(err)
})
.finally(function(){
    console.log("Promise is either rejected or resolved")
})