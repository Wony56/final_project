const HOME = "/";

// User
const LOGIN = "/login";
const LOGIN_WEB = "/api/login";
const LOGOUT = "/logout";
const LOGOUT_WEB = "/api/logout";
const JOIN = "/api/join";
const EDIT_PROFILE = "/api/edit-profile";
const CHANGE_PASSWORD = "/api/change-password";
const LOGGEDUSER = "/api/user";

// Data Upload
const UPLOAD = "/upload";
const UPLOAD_MANY = "/upload/many";

// Data Search
const FIND_ALL = "/find/all";
const FIND_LIST = "/find/list";
const FIND_BY_VIEWS = "/find/view";
const FIND = "/find";

// API
const SEARCH_ALL = "/api/search/all";
const SEARCH = "/api/search";
const RECOMMEND = "/api/search/recommend";

// Update data
const EDIT = "/edit/:id";
const DELETE = "/delete/:id";

// Data view
const VIEW = "/view/:id";

const DETAIL = "/detail/:id";

const routes = {
  home: HOME,
  login: LOGIN,
  loginWeb: LOGIN_WEB,
  logout: LOGOUT,
  logoutWeb: LOGOUT_WEB,
  join: JOIN,
  upload: UPLOAD,
  uploadMany: UPLOAD_MANY,
  findAll: FIND_ALL,
  findList: FIND_LIST,
  findByView: FIND_BY_VIEWS,
  find: FIND,
  searchAll: SEARCH_ALL,
  search: SEARCH,
  recommend: RECOMMEND,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  loggedUser: LOGGEDUSER,
  view: id => {
    if (id) {
      return `/view/${id}`;
    } else {
      return VIEW;
    }
  },
  detail: id => {
    if (id) {
      return `/detail/${id}`;
    } else {
      return DETAIL;
    }
  },
  edit: id => {
    if (id) {
      return `/edit/${id}`;
    } else {
      return EDIT;
    }
  },
  delete: id => {
    if (id) {
      return `/delete/${id}`;
    } else {
      return DELETE;
    }
  }
};

export default routes;
