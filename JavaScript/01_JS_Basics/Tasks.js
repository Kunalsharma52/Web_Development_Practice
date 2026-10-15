// Calculate the subtotal using ticket price * quantity
// if the quantity is 5 or more apply a 15 % dicount
// otherwise if the quantity is 3 or more apply a 10% discount
//otherwise no quantity-based discount is applied
// if the coupon code id valid apply an additional 5 % discount to the amount remaining after the quality discount
//round the final amount using Math.round().
//Print the subtotal discount and final payable amount
// example : if the ticket price is rupees 250 and the quantity is 3 the subtotal is rupees 750
//the quantity discount is rupees 75 and the coupon discount is rupees 33.75
//the final payable amount is rupees 641 after rounding



let ticketPrice = 250;
let quantity = 3;
let couponCode = "SAVE5";

// Calculate subtotal
let subtotal = ticketPrice * quantity;

// Calculate quantity discount
let quantityDiscount = 0;

if (quantity >= 5) {
    quantityDiscount = subtotal * 0.15;
} else if (quantity >= 3) {
    quantityDiscount = subtotal * 0.10;
}

// Amount after quantity discount
let remainingAmount = subtotal - quantityDiscount;

// Calculate coupon discount
let couponDiscount = 0;
let validCoupon = "SAVE5";

if (couponCode === validCoupon) {
    couponDiscount = remainingAmount * 0.05;
}

// Calculate final payable amount
let finalAmount = Math.round(
    remainingAmount - couponDiscount
);

// Print results
console.log("Subtotal: ₹" + subtotal);
console.log("Quantity Discount: ₹" + quantityDiscount);
console.log("Coupon Discount: ₹" + couponDiscount);
console.log("Final Payable Amount: ₹" + finalAmount);
