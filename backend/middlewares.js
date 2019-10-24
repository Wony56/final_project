import multer from "multer";
import routes from "./routes";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const multerImage = multer({ storage })

export const localsMiddleware = (req, res, next) => {
    res.locals.routes = routes;
    next();
}

export const uploadImage = multerImage.array("imageFile");