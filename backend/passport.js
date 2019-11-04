import passport from "passport";
import User from "./models/User";
import passportLocal from "passport-local";

const LocalStrategy = passportLocal.Strategy;

passport.use(User.createStrategy());
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "username",
//       passwordField: "password"
//     },
//     (username, password, done) => {
//       console.log("Hello");
//       console.log(username, password);
//       // let user = User.find;

//       if (user) {
//         done(null, user);
//       } else {
//         done(null, false, { message: "Incorrect username or password" });
//       }
//     }
//   )
// );

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
