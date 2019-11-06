import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const getJoin = (req, res) => {
  res.render("join");
};

export const postJoin = async (req, res) => {
  const {
    body: {
      params: { username, password, name, job, age, part }
    }
  } = req;

  try {
    console.log(username, password);

    const existedUser = await User.findOne({ username });

    if (existedUser) {
      throw new Error("이미 존재하는 아이디입니다.");
    }

    await User.create({
      username,
      password,
      name,
      job,
      age,
      part,
      schedules: []
    });

    res.status(201).json({ message: "Register success!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
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
    const user = await User.findById(req.session.passport.user);

    if (user.password !== oldPassword) {
      throw new Error("기존 패스워드가 틀렸습니다.");
    }
    await User.findByIdAndUpdate(req.session.passport.user, {
      password: newPassword
    });

    res.status(201).json({ message: "Password Updated!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
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

export const webLogout = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout Success!" });
};

export const loggedUser = async (req, res) => {
  let user = await User.findById({ _id: req.session.passport.user });

  console.log([user, req.session]);

  res.status(200).json({ user });
};

export const loginFail = (req, res) => {
  res.status(401).json({ message: "아이디 또는 패스워드가 틀렸습니다." });
};
