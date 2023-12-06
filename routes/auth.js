const express = require("express");
const router = express.Router();
const passport = require("passport");

// @desc            Auth with Google
// @route           GET /auth/google

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// @desc            dashboard
// @route           GET/dashboard

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);
module.exports = router;
