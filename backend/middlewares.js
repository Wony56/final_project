const locations = [
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

const targets = [
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
]

const occupations = [
    {
        key: "employee",
        value: "회사원"
    },
    {
        key: "student",
        value: "학생"
    },
    {
        key: "housewife",
        value: "주부"
    },
]



export const localsMiddleware = (req, res, next) => {
    res.locals.locations = locations;
    res.locals.targets = targets;
    res.locals.occupations = occupations;

    next();
}