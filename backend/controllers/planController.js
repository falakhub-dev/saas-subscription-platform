const pool = require("../db");

exports.getPlans = async (req,res) => {

 try {

  const result = await pool.query("SELECT * FROM plans");

  res.json(result.rows);

 } catch(error){

  console.error(error);
  res.status(500).send("Server error");

 }

};

exports.createPlan = async (req,res)=>{

 const { name, price, description } = req.body;

 const result = await pool.query(
  "INSERT INTO plans(name,price,description) VALUES($1,$2,$3) RETURNING *",
  [name,price,description]
 );

 res.json(result.rows[0]);

};