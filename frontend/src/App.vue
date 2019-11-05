<template>
  <v-app>
    <header-bar />
    <div class="main">
      <router-view />
    </div>
    <footer-bar />
  </v-app>
</template>

<script>
import header from "./components/header";
import footer from "./components/footer";

export default {
  
  components: {
    "header-bar": header,
    "footer-bar": footer
  }
};
/*

    console.log(this.$store.state.remindHour)
    console.log(this.$store.state.remindMin)  
*/
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: black;
}
.main {
  min-height: 700px;
}
</style>
