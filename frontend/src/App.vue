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
</script>
<style lang="scss">
@font-face { font-family: 'netmarbleB'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.1/netmarbleB.woff') format('woff'); font-weight: normal; font-style: normal; }
a {
  text-decoration: none;
  color: black;
}
.main {
  min-height: 700px;
}
*{
  font-family: 'netmarbleB';

}
</style>
