const pool = require("../db");

exports.getDashboard = async (req,res)=>{

 try{

  const result = await pool.query(
   `SELECT users.name,
           users.email,
           plans.name AS plan,
           plans.price,
           subscriptions.status,
           subscriptions.start_date
    FROM subscriptions
    JOIN users ON subscriptions.user_id = users.id
    JOIN plans ON subscriptions.plan_id = plans.id`
  );

  res.json(result.rows);

 }catch(error){

  console.error(error);
  res.status(500).send("Server error");

 }

};