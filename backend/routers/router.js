import express from "express";
import routes from "../routes";
import {
  home,
  postUpload,
  postUploadMany,
  getView,
  getAllStretchings,
  getStretchings,
  getStretchingsByViews,
  getAllStretchingsForAdmin,
  getDetail,
  getEdit,
  postEdit,
  getDelete,
  search,
  searchAll
} from "../controllers/dataController";
import {
  uploadImage,
  onlyAdmin,
  onlyPrivate,
  onlyPublic,
  authMiddleware
} from "../middlewares";
import {
  getJoin,
  postJoin,
  postLogin,
  getLogin,
  logout,
  postEditProfile,
  postChangePassword,
  loggedUser,
  postWebLogin,
  webLogout
} from "../controllers/userController";
import passport from "passport";

const router = express.Router();

router.get(routes.home, onlyAdmin, home);

//Join
router.get(routes.join, onlyPublic, getJoin);
router.post(routes.join, postJoin);

//Login
router.get(routes.login, onlyPublic, getLogin);
router.post(routes.login, onlyPublic, postLogin);
router.post(routes.loginWeb, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }

    req.login(user, err => {
      res.send("Logged in");
    });
  })(req, res, next);
});

//Logout
router.get(routes.logout, onlyPrivate, logout);
router.get(routes.logoutWeb, webLogout);

// Data Upload
router.post(routes.upload, onlyAdmin, uploadImage, postUpload);
router.post(routes.uploadMany, postUploadMany);

// Edit Data
router.get(routes.edit(), onlyAdmin, getEdit);
router.post(routes.edit(), onlyAdmin, postEdit);

// Delete Data
router.get(routes.delete(), onlyAdmin, getDelete);

//Search Datas
router.get(routes.findAll, getAllStretchings);
router.get(routes.findByView, getStretchingsByViews);
router.get(routes.find, getStretchings);
router.get(routes.findList, getAllStretchingsForAdmin);
router.get(routes.searchAll, searchAll);
router.get(routes.search, search);
router.get(routes.recommend, getAllStretchings);

//Views
router.get(routes.view(), getView);
router.get(routes.detail(), getDetail);

//Profile
router.post(routes.editProfile, postEditProfile);
router.post(routes.changePassword, postChangePassword);

router.get(routes.loggedUser, authMiddleware, loggedUser);

export default router;
