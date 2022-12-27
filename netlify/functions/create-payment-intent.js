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

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};