const express = require("express");
const passport = require("passport");
const boardgameControllers = require("./controllers/boardgameControllers");
const authControllers = require("./controllers/authControllers");

const router = express.Router();

router.post("/auth/signup", authControllers.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  authControllers.login
);

router.get("/boardgames", boardgameControllers.browse);
router.get("/boardgames/:id", boardgameControllers.read);

// ----------------------- AUTH WALL -----------------------
router.use(passport.authenticate("jwt", { session: false }));
// Routes protegees par JWT

router.put("/boardgames/:id", boardgameControllers.edit);
router.post("/boardgames", boardgameControllers.add);
router.delete("/boardgames/:id", boardgameControllers.destroy);

module.exports = router;
