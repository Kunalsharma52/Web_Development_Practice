// let val1 = 10;
// let val2 = 20;

// function addNumbers(num1, num2){
//     let total = num1 + num2;
//     return total;
// }
// let result = addNumbers(val1,val2)
// console.log(result)

console.log("I am task1"); // synchronous

setTimeout(() => {
    console.log("I am timer") // Asynchronous
},0);

console.log("I am task2") // synchronous

Promise.resolve().then(()=> console.log("I am Promise")) //Asynchronous