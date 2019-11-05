import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = async (req, res) => {
  const {
    body: {
      params: { username, password, name, job, age, part,schedules }
    }
  } = req;

  try {
    const user = await User({
      username,
      name,
      job,
      age,
      part,
      schedules
    });

    await User.register(user, password);
    res.status(201).json({ message: "Register success!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Register fail..." });
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

export const postWebLogin = passport.authenticate("local", {
  failureRedirect: routes.loginFail,
  successRedirect: routes.loggedUser
});

export const logout = (req, res) => {
  req.logout();
  res.redirect("login");
};

export const webLogout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout Success!" });
};

export const loggedUser = (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(200).json({ user: {} });
  }
};

export const loginFail = (req, res) => {
  res.status(401).json({ message: "아이디 또는 패스워드가 틀렸습니다." });
};
