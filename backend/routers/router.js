import express from "express";
import routes from "../routes";
import { home, postUpload, postUploadMany, getView, getAllStretchings, getStretchings } from "../controllers/dataController";
import { uploadImage } from "../middlewares";

const router = express.Router();

router.get(routes.home,  home);

// Data Upload
router.post(routes.upload, uploadImage, postUpload);
router.post(routes.uploadMany, postUploadMany);

//Search Datas
router.get(routes.findAll, getAllStretchings);
router.get(routes.find, getStretchings);

//Views
router.get(routes.view, getView);

export default router;