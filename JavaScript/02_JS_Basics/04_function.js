// callback function

function calc(num1, num2, callback){
    return callback(num1, num2);
}
function add(num1, num2){
    return num1+num2;
}
console.log(calc(2, 4, add))

const numbers =[1,2,3,4,5,6]

const multiples = numbers.map((num)=>num*2)

console.log("multiples",multiples)
//console.log(numbers)

const oddNumbers = numbers.filter((num)=>num%2 != 0)

console.log(oddNumbers)

const sumOfNumbers = numbers.reduce((acc, num)=>acc+num)
console.log(sumOfNumbers)

const products = [
    { name: "Milk", price: 60, instock : true},
    { name: "Bread", price: 40, instock : false},
    { name: "Rice", price: 200, instock : true},
    { name: "Cheese", price: 150, instock : true},


    
];