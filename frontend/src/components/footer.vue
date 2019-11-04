<template>
  <div class="footer">
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center" color="#F8BBD0 !important" width="100%">
        <v-card-text
          class="white--text pt-0"
        >
        <div>team : 척추 요정</div>
        <div>gitlab : https://lab.ssafy.com/jupang/final_project/</div>
        <div>address : SSAFY Gumi</div>
        <div>members : 이석원, 권주광, 문용성, 김정환, 석주연, 이수경</div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<style lang="scss">
.footer {
  margin-top: 10px;
}
</style>