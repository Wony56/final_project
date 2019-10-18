import express from "express";
import routes from "../routes";
import { home, upload } from "../controllers/dataController";
import { uploadImage } from "../middlewares";

const router = express.Router();

router.get(routes.home,  home);
router.post(routes.upload, uploadImage, upload);

export default router;