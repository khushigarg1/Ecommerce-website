// require("dotenv").config();

// //HERE WE are requiring the files or essentially importimg in the library and we are running config which will essentially attach all of thos esecret variables on th .env fil onto our process environment 
// //stripe require from stripe afte getting this we are going to dp os we are going to pass it our secret variables
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// exports.handler = async (event) => {
//     //fro payment i need to knwo currency and payment method and going to accept as well as the amount
//     try {
//         const { amount } = JSON.parse(event.body);
//         //making a request to a stripe server i want to amke this payment 
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount,
//             currency: "usd",
//             payment_method_types: ["card"],
//         });
//         return {
//             statusCode: 200,
//             body: JSON.stringify({ paymentIntent }),
//         };
//     }
//     catch (error) {
//         console.log(error);

//         return {
//             statusCode: 400,
//             body: JSON.stringify({ error }),
//         };
//     }
// };


require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// console.log("adsada");

exports.handler = async (event) => {

    try {
        const { amount } = JSON.parse(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"]
            // description: 'Description of the export transaction',
        });
        console.log("adsada");
        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log("error", { error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};






// // Specify Stripe secret api key here
// const stripe = require("stripe")("sk_test_51MJZDYSGTrVOcod7WItzIriCWghFRiZ1zTGyOTwPhhAU0vR0EbBwnBWdvjtfXRNKdwTyTJU882DvCd3XTJBhT7SB00KSy0pYFr");
// // Create a PaymentIntent with the order amount and currency
// const paymentIntent = stripe.paymentIntents.create({
//     amount: 1200, // Specify amount here
//     currency: "usd", // Specify currency here
//     payment_method_types: ["card"],
// });
// // Return client secret
// // res.send({
// //     clientSecret: paymentIntent.client_secret
// // });