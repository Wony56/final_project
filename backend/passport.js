import passport from "passport";
import User from "./models/User";

const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password"
    },

    async (username, password, done) => {
      console.log(username, password);
      let user = await User.findOne({ username: username });

      let isAuthorizedUser = null;

      if (user.password === password) {
        isAuthorizedUser = user;
      }

      if (isAuthorizedUser) {
        done(null, isAuthorizedUser);
      } else {
        done(null, false, { message: "Incorrect username or password" });
      }
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
