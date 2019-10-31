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
  recommend() {
    return axios.get(`${apiUrl}/find/view`);
  },
  getAllStretchings() {
    return axios.get(`${apiUrl}/search/all`);
  },
  search(params) {
    return axios.get(`${apiUrl}/search?${params.category}=${params.value}`);
  },
  stretchingDetail(id) {
    return axios.get(`${apiUrl}/detail/${id}`);
  }
};
