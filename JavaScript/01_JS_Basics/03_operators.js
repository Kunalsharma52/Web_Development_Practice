//console.log(2 + 2);   // arithmetic operatiors
//console.log(2 - 2);    // arithmetic operatiors
//console.log(2 * 2);     // arithmetic operatiors
//console.log(2 / 2);     // arithmetic operatiors

//console.log(2 > 1);  // comparison operatior

//if( 2 > 1 && 3 > 2){
    //console.log("hello")
//}
 
//console.log(2 +"203") // 2203 string
//console.log(2 + 204)    // 206
//console.log(403 - "203")    // 200
//console.log(2* "5")     //10

// Task : Calculate Booking Amount of movie tickets ,

// if tickets quantity > 3 then apply discount of 50 rupees
// 1. Age should be > 18.



 const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Enter your age: ", (ageInput) => {
    let age = Number(ageInput);

    rl.question("Enter the number of tickets: ", (quantityInput) => {
        let quantity = Number(quantityInput);
        let ticketPrice = 200;
        let discount = 0;

        if (age > 18) {
            if (Number.isInteger(quantity) && quantity > 0) {
                let totalAmount = quantity * ticketPrice;

                if (quantity > 3) {
                    discount = 50;
                }

                let finalAmount = totalAmount - discount;

                console.log("\n--- Movie Booking Details ---");
                console.log("Ticket Price: ₹" + ticketPrice);
                console.log("Quantity: " + quantity);
                console.log("Total Amount: ₹" + totalAmount);
                console.log("Discount: ₹" + discount);
                console.log("Final Amount: ₹" + finalAmount);
            } else {
                console.log("Please enter a valid ticket quantity.");
            }
        } else {
            console.log("Sorry! Your age must be greater than 18.");
        }

        rl.close();
    });
});


