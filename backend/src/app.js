const express = require("express");
const cors = require("cors");
const passport = require("passport");
const router = require("./router");

const app = express();

// use some application-level middlewares
// const whitelist = process.env.FRONTEND_URL.split(",") || [
//   "http://localhost:3000/",
// ];
// app.use(
//   cors({
//     origin(origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error(`Not allowed by CORS:${origin}`));
//       }
//     },
//     optionsSuccessStatus: 200,
//   })
// );
app.use(cors()); // ACHTUNG !! Fallback to bypass cors security

app.use(express.json());

app.use(passport.initialize());
require("./services/passport");

// API routes
app.use(router);

// ready to export
module.exports = app;
