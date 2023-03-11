const express = require("express");
const passport = require("passport");
const boardgameControllers = require("./controllers/boardgameControllers");
const authControllers = require("./controllers/authControllers");
const userControllers = require("./controllers/userControllers");
const eventControllers = require("./controllers/eventControllers");
const searchControllers = require("./controllers/searchControllers");

const router = express.Router();

router.post("/auth/signup", authControllers.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  authControllers.login
);
router.get("/search", searchControllers.simple);
router.get("/boardgames", boardgameControllers.browse);
router.get("/boardgames/:id", boardgameControllers.read);
router.get("/boardgamesPerUser", boardgameControllers.browsePerUser);

// ----------------------- AUTH WALL -----------------------
router.use(passport.authenticate("jwt", { session: false }));

// Routes protegees par JWT
router.put("/boardgames/:id", boardgameControllers.edit);
router.post("/boardgames", boardgameControllers.add);
router.delete("/boardgames/:id", boardgameControllers.destroy);

router.post("/events", eventControllers.add);

router.get("/friends", userControllers.getFriends);

module.exports = router;
