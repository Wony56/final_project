import multer from "multer";
import routes from "./routes";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const multerImage = multer({ storage });

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

export const onlyAdmin = (req, res, next) => {
  if (req.user) {
    if (req.user.isStaff) {
      next();
    } else {
      console.log("관리자 권한이 없는 계정입니다.");
      res.redirect(routes.login);
    }
  } else {
    console.log("관리자 권한이 없습니다.");
    res.redirect(routes.login);
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const authMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).send("You are not authenticated");
  } else {
    return next();
  }
};

export const uploadImage = multerImage.array("imageFile");
