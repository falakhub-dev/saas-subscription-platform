const pool = require("../db");

exports.createSubscription = async (req, res) => {

    try {

        const { user_id, plan_id } = req.body;

        const result = await pool.query(
            "INSERT INTO subscriptions(user_id,plan_id,status) VALUES($1,$2,$3) RETURNING *",
            [user_id, plan_id, "active"]
        );

        res.json({
            message: "Subscription created",
            subscription: result.rows[0]
        });

    } catch (error) {

        console.error(error);
        res.status(500).send("Server error");

    }

};