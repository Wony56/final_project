import Vue from "vue";
import Vuex from "vuex";
import stretching from "./stretching.js";
import user from "./user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stretching,
    user,
    timecheck: 0,
  }
});
