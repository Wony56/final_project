import multer from "multer";

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
    next();
}

export const uploadImage = multerImage.array("imageFile");