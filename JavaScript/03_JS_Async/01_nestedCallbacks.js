function placeOrder(callback) {
    setTimeout(() => {
        console.log("1. Order is placed");
        callback();
    }, 1000);
}

function makePayment(callback) {
    setTimeout(() => {
        console.log("2. Payment is done");
        callback();
    }, 1000);
}

function orderConfirmed(callback) {
    setTimeout(() => {
        console.log("3. Order is confirmed");
        callback();
    }, 1000);
}

function assignDeliveryPartner(callback) {
    setTimeout(() => {
        console.log("4. Delivery partner is Assigned");
        callback();
    }, 1000);
}


placeOrder(function () {
    makePayment(function () {
        orderConfirmed(function () {
            assignDeliveryPartner(function () {
                console.log("5. Order is Delivered");
            });
        });
    });
});