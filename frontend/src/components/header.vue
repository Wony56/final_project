<template>
  <div class="header">
    <v-toolbar color="#F8BBD0">
      <v-toolbar-title class="title-container">
        <v-avatar>
          <img src="../assets/logo.png" />
        </v-avatar>
        <router-link to="/">척추요정</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="loginCheck">
        <v-btn text to="/me">MyPage</v-btn>
        <v-btn text @click="logout">Logout</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn text to="/login">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "../api";

export default {
  computed: mapState({
    userInfo: state => state.user.userInfo,
    loginCheck: state => state.user.loginCheck
  }),
  methods: {
    logout: async function() {
      await api
        .logout()
        .then(res => {
          if (res.status === 200) {
            alert("로그아웃되었습니다.");
            this.$store.state.user.userInfo = {};
            this.$store.state.user.loginCheck = false;
            this.$router.go("/");
          }
        })
        .catch(err => {
          console.log(err);
          alert("로그아웃에 실패하였습니다.");
        });
    }
  }
};
</script>

<style lang="scss">
.header {
  margin-bottom: 10px;
  font-weight: 600;
  .title-container {
    display: flex;
    align-items: center;
    a {
      color: white;
      margin-left: 5px;
      font-size: 30px;
    }
  }
}
</style>