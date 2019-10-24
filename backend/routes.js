const HOME = "/";

// User
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";

// Data Upload
const UPLOAD = "/upload";
const UPLOAD_MANY = "/upload/many";

// Data Search
const FIND_ALL = "/find/all";
const FIND = "/find";

// Data view
const VIEW = "/view/:id"

const routes = {
    home: HOME,
    login: LOGIN,
    logout: LOGOUT,
    join: JOIN,
    upload: UPLOAD,
    uploadMany: UPLOAD_MANY,
    findAll: FIND_ALL,
    find: FIND,
    view: VIEW
};

export default routes;