import axios from "axios";

const apiUrl = "/api";

export default {
  login(params) {
    return null;
  },
  register(params) {
    return null;
  },
  logout() {
    return null;
  },
  userDetail(params) {
    return null;
  },
  getAllStretchings() {
    return axios.get(`${apiUrl}/find/all`);
  },
  search(keyword) {
    return axios.get(`${apiUrl}/search?keyword=${keyword}`);
  },
  stretchingDetail(params) {
    return null;
  }
};
