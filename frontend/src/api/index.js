import axios from "axios";

export default {
  login() {
    return null;
  },
  register() {
    return null;
  },
  logout() {
    return null;
  },
  userDetail() {
    return null;
  },
  getAllStretchings() {
    return axios.get(`/search/all`);
  },
  search(keyword) {
    return axios.get(`/search?keyword=${keyword}`);
  },
  stretchingDetail() {
    return null;
  }
};
