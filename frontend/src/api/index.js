import axios from "axios";

const apiUrl = "/api";

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
    return axios.get(`${apiUrl}/search/all`);
  },
  search(keyword) {
    return axios.get(`${apiUrl}/search?keyword=${keyword}`);
  },
  stretchingDetail() {
    return null;
  }
};
