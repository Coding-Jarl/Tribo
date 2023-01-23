const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// const JwtStrategy = require("passport-jwt").Strategy;
// const { ExtractJwt } = require("passport-jwt");
const { ExtractJwt, Strategy: JwtStrategy } = require("passport-jwt");

const bcrypt = require("bcrypt");
const models = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (formEmail, formPassword, done) => {
      models.user
        .findByMail({ email: formEmail })
        .then(([rows]) => {
          if (!rows.length)
            return done(null, false, { message: "Wrong username" });

          const [user] = rows; // const user = rows[0];
          const isPasswordOk = bcrypt.compareSync(formPassword, user.password);
          if (!isPasswordOk)
            return done(null, false, { message: "Wrong password" });

          delete user.password;
          return done(null, user);
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "passwordDeMionServeur",
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
