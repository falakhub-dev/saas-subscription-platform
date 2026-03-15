const express = require("express");
const router = express.Router();

const { getPlans } = require("../controllers/planController");
const { createPlan } = require("../controllers/planController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getPlans);
router.post("/create", verifyToken, isAdmin, createPlan);

module.exports = router;