const pool = require("../db");

exports.getAnalytics = async (req,res)=>{

 try{

 const users = await pool.query("SELECT COUNT(*) FROM users");
 const subscriptions = await pool.query("SELECT COUNT(*) FROM subscriptions");

 res.json({
  total_users: users.rows[0].count,
  total_subscriptions: subscriptions.rows[0].count
 });

 }catch(error){

 res.status(500).send("Server error");

 }

};