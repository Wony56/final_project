import express from "express";
import routes from "../routes";
import { home, upload, findAll, find } from "../controllers/dataController";
import { uploadImage } from "../middlewares";

const router = express.Router();

router.get(routes.home,  home);
router.post(routes.upload, uploadImage, upload);
router.get(routes.findAll, findAll);
router.get(routes.find, find);

export default router;