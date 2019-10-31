import axios from "axios";

const apiUrl = "/api";

export default {
  login(params) {
    return axios.post(`${apiUrl}/login`, { params });
  },
  register(params) {
    return axios.post(`${apiUrl}/join`, { params });
  },
  logout() {
    return axios.get(`${apiUrl}/logout`);
  },
  getAllStretchings() {
    return axios.get(`${apiUrl}/search/all`);
  },
  search(keyword) {
    return axios.get(`${apiUrl}/search?keyword=${keyword}`);
  },
  stretchingDetail(id) {
    return axios.get(`${apiUrl}/detail/${id}`);
  }
};
