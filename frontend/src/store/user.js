import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  userInfo: "",
  loginCheck: false,
  timecheck: localStorage.getItem('Mytime'),
};

export default {
  state
};
