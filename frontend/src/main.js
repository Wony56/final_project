import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";
import api from "./api";

Vue.config.productionTip = false;

api
  .onAuthUser()
  .then(res => {
    console.log(JSON.stringify(res.data.user));
    if (res.status === 200) {
      if (Object.keys(res.data.user).length !== 0) {
        store.state.user.userInfo = res.data.user;
        store.state.user.loginCheck = true;
      } else {
        store.state.user.userInfo = {};
        store.state.user.loginCheck = false;
      }
    }

    new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  })
  .catch(err => {
    console.log(err);
  });
