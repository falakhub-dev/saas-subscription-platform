const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req,res)=>{

 try{

 const { plan_name, price } = req.body;

 const session = await stripe.checkout.sessions.create({

 payment_method_types:["card"],

 line_items:[
 {
  price_data:{
   currency:"usd",
   product_data:{
    name:plan_name
   },
   unit_amount: price * 100
  },
  quantity:1
 }
 ],

 mode:"payment",

 success_url:"http://localhost:3000/success",
 cancel_url:"http://localhost:3000/cancel"

 });

 res.json({ url: session.url });

 }catch(error){

 console.error(error);
 res.status(500).send("Payment error");

 }

};