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

// @desc    Logout User
// @route    /auth/logout

router.get("/logout", (req, res) => {
  req.logout((error) => {
    if (error) return next(error);
    res.redirect("/");
  });
});
module.exports = router;
