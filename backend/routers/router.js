import express from "express";
import routes from "../routes";
import { home, upload } from "../controllers/dataController";

const router = express.Router();

router.get(routes.home,  home);
router.post(routes.upload, upload);

export default router;