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

      <v-toolbar-items>
        <v-btn text to="/me">MyPage</v-btn>
        <v-btn text @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      alert("Logout!");
      this.$router.push("/");
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