import express from "express";
import routes from "../routes";
import { home, upload, findAll, find, uploadMany } from "../controllers/dataController";
import { uploadImage } from "../middlewares";

const router = express.Router();

router.get(routes.home,  home);

// Data Upload
router.post(routes.upload, uploadImage, upload);
router.post(routes.uploadMany, uploadMany);

//Find Datas
router.get(routes.findAll, findAll);
router.get(routes.find, find);


export default router;