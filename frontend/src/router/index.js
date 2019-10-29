import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import SearchList from "../views/SearchList.vue";
import UserDetail from "../views/UserDetail.vue";
import EditUser from "../views/EditUser.vue";
import ChangePassword from "../views/ChangePassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/search",
    name: "search",
    component: SearchList
  },
  {
    path: "/me",
    name: "userDetail",
    component: UserDetail
  },
  {
    path: "/edit/:id",
    name: "editUser",
    component: EditUser
  },
  {
    path: "/changePassword/:id",
    name: "changePassword",
    component: ChangePassword
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;