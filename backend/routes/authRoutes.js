const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { body } = require("express-validator");

router.post(
  "/register",
  body("email").isEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be 6 characters"),
  registerUser
);

router.post("/login", loginUser);

module.exports = router;