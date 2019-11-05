<template>
  <div class="header">
    <v-toolbar color="#F8BBD0">
      <v-toolbar-title class="title-container">
        <v-avatar>
          <img src="../assets/logo.png" />
        </v-avatar>
        <router-link to="/">척추요정</router-link>
      </v-toolbar-title>
      <v-row v-if="this.$store.state.user.timecheck!=0"
      align="center"
      justify="center"
      style="color:gray">
        <h1>{{parseInt(this.$store.state.user.timecheck/60)}} : {{this.$store.state.user.timecheck%60}} 후 스트레칭!!</h1>
      </v-row>
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
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
export default {
  data(){
   return{
     timerCount:  this.$store.state.user.timecheck,
     timer: ''
   }
 },
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
    },
   fetchEventsList: function() {
     if(this.$store.state.user.timecheck>1){
       this.$store.state.user.timecheck--;
       localStorage.setItem('Mytime',this.$store.state.user.timecheck)
     }else if(this.$store.state.user.timecheck==1){
       this.$store.state.user.timecheck--;
       localStorage.setItem('Mytime',this.$store.state.user.timecheck)
       this.alertDisplay();
       this.$router.push("/me");
     }
   },
   cancelAutoUpdate: function() {
     console.log("?@")
     clearInterval(this.timer)
   },
   alertDisplay() {
        this.$swal({
          title: '잠시 쉬고 스트레칭 시-작!!',
          text: 'mypage로 가요~',
          imageUrl: 'https://lab.ssafy.com/jupang/final_project/raw/develop/images/Spine_fairy.png',
          imageWidth: 250,
          imageHeight: 250,
          imageAlt: 'Custom image',
        })
      }

  },
 mounted() {
        this.timer = setInterval(this.fetchEventsList,1000)
    },
};
</script>

<style lang="scss">
.header {
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
