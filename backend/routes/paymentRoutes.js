const express = require("express");
const router = express.Router();

const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/checkout", verifyToken, async (req,res)=>{

 const { planId } = req.body;

 let price = 0;

 if(planId === 1) price = 1000;
 if(planId === 2) price = 2500;
 if(planId === 3) price = 5000;

 try{

  const session = await stripe.checkout.sessions.create({

   payment_method_types:["card"],

   line_items:[
    {
     price_data:{
      currency:"usd",
      product_data:{
       name:"SaaS Subscription Plan"
      },
      unit_amount:price
     },
     quantity:1
    }
   ],

   mode:"payment",

   success_url:"http://localhost:3000/dashboard",
   cancel_url:"http://localhost:3000/plans"

  });

  res.json({url:session.url});

 }catch(error){

  res.status(500).json({error:error.message});

 }

});

module.exports = router;