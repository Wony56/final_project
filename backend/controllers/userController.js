import routes from "../routes";
import User from "../models/User";
import passport from "passport";
import { url } from "inspector";

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = async (req, res, next) => {
  const {
    body: { username, password, rePassword, name, job, age, part }
  } = req;

  if (password !== rePassword) {
    res.status(400);
    res.render("join");
  } else {
    try {
      const user = await User({
        username,
        name,
        job,
        age,
        part
      });

      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const postEditProfile = async (req, res) => {
  const {
    body: { name, age, job, part, schedules }
  } = req;

  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      age,
      job,
      part,
      schedules
    });

    res.status(201).json({ message: "Updated!" });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "Bad request" });
  }
};

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword }
  } = req;

  try {
    await req.user.changePassword(oldPassword, newPassword);
    res.status(201).json({ message: "Password Updated!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Password Not Changed!" });
  }
};

export const getLogin = (req, res) => res.render("login");

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const logout = (req, res) => {
  req.logout();
  res.redirect("login");
};

export const loggedUser = (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(200).json({ user: {} });
  }
};
