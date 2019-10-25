import express from "express";
import routes from "../routes";
import { home, postUpload, postUploadMany, getView, getAllStretchings, getStretchings, getStretchingsByViews } from "../controllers/dataController";
import { uploadImage, onlyAdmin, onlyPrivate, onlyPublic } from "../middlewares";
import { getJoin, postJoin, postLogin, getLogin, logout } from "../controllers/userController";

const router = express.Router();

router.get(routes.home, onlyAdmin, home);

//Join
router.get(routes.join, onlyPublic, getJoin);
router.post(routes.join, onlyPublic, postJoin, postLogin);

//Login
router.get(routes.login, onlyPublic, getLogin);
router.post(routes.login, onlyPublic, postLogin);

//Logout
router.get(routes.logout, onlyPrivate, logout);

// Data Upload
router.post(routes.upload, onlyAdmin, uploadImage, postUpload);
router.post(routes.uploadMany, postUploadMany);

//Search Datas
router.get(routes.findAll, getAllStretchings);
router.get(routes.findByView, getStretchingsByViews);
router.get(routes.find, getStretchings);

//Views
router.get(routes.view, getView);

export default router;