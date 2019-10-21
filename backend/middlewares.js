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

const places = [
    {
        key: "home",
        value: "집"
    },
    {
        key: "company",
        value: "회사"
    },
    {
        key: "school",
        value: "학교"
    },
    {
        key: "inner",
        value: "실내"
    },
    {
        key: "chair",
        value: "의자"
    },
    {
        key: "car",
        value: "차"
    },
]

const parts = [
    {
        key: "neck",
        value: "목"
    },
    {
        key: "shoulder",
        value: "어깨"
    },
    {
        key: "wrist",
        value: "손목"
    },
    {
        key: "waist",
        value: "허리"
    },
    {
        key: "up",
        value: "상체"
    },
    {
        key: "down",
        value: "하체"
    },
    {
        key: "all",
        value: "전신"
    },
    {
        key: "pelvis",
        value: "골반"
    },
    {
        key: "thigh",
        value: "허벅지"
    },
    {
        key: "calf",
        value: "종아리"
    },
    {
        key: "back",
        value: "등"
    },
    {
        key: "arm",
        value: "팔"
    },
    {
        key: "eye",
        value: "눈"
    },
    {
        key: "hip",
        value: "엉덩이"
    },
    {
        key: "chin",
        value: "턱"
    },
    {
        key: "hip-joint",
        value: "고관절"
    },
    {
        key: "spine",
        value: "척추"
    },
    {
        key: "chest",
        value: "가슴"
    },
    {
        key: "side",
        value: "옆구리"
    },
    {
        key: "core",
        value: "코어"
    },
    {
        key: "wing-bone",
        value: "날개뼈"
    },
    {
        key: "leg",
        value: "다리"
    },
]

export const localsMiddleware = (req, res, next) => {
    res.locals.places = places;
    res.locals.parts = parts;

    next();
}

export const uploadImage = multerImage.array("imageFile");