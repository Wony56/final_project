<template>
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" v-model="signUpId" placeholder="id" />
        <input type="password" v-model="signUpPassword" placeholder="password" />
        <input type="password" v-model="signUpcheckPassword" placeholder="checkPassword" />
        <input type="text" v-model="signUpName" placeholder="name" />
        <input type="text" v-model="signUpJob" placeholder="job" />
        <input type="text" v-model="signUpAge" placeholder="age" />

        <v-combobox v-model="select" :items="items" label="part select" multiple chips></v-combobox>

        <button v-on:click="signUp">create</button>
        <p class="message">
          Already registered?
          <a href="#" v-on:click="clear">Sign In</a>
        </p>
      </form>

      <form class="login-form">
        <v-form>
          <v-text-field v-model="username" label="아이디" type="text"></v-text-field>
          <v-text-field v-model="password" label="비밀번호" type="password"></v-text-field>
        </v-form>

        <button v-on:click="signIn">login</button>
        <p class="message">
          Not registered?
          <a href="#" v-on:click="clear">Create an account</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
// import { mapState, mapActions } from "vuex";
import api from "../api";
// import { async } from "q";

export default {
  data: function() {
    return {
      username: "",
      password: "",
      signUpId: "",
      signUpName: "",
      signUpPassword: "",
      signUpcheckPassword: "",
      signUpJob: "",
      signUpAge: "",
      select: [],
      items: [
        "어깨",
        "손목",
        "팔",
        "등",
        "허리",
        "복근",
        "가슴",
        "종아리",
        "허벅지",
        "엉덩이"
      ]
    };
  },
  methods: {
    signIn: async function() {
      //로그인
      const loginInfo = {
        username: this.username,
        password: this.password
      };

      this.$store.state.user.userInfo = await api
        .login(loginInfo)
        .then(res => {
          console.log(res.data);
          if (res.status === 200) {
            alert("성공!");
            this.$router.push("/");
<<<<<<< Updated upstream
            localStorage.setItem("Mytime", 0);
=======
>>>>>>> Stashed changes
            return res.data.user;
          }
        })
        .catch(err => {
          alert("아이디 또는 패스워드가 틀렸습니다.");
          console.log(err);
        });
    },
    signUp: async function() {
      //회원가입
      // alert("바이");
      if (this.signUpPassword === this.signUpcheckPassword) {
        const newUserInfo = {
          username: this.signUpId,
          password: this.signUpPassword,
          name: this.signUpName,
          job: this.signUpJob,
          age: this.signUpAge,
<<<<<<< Updated upstream
          part: this.select,
          schedules: []
=======
          part: this.select
>>>>>>> Stashed changes
        };

        console.log(newUserInfo);

        const resp = await api
          .register(newUserInfo)
          .then(res => {
            console.log(res.data);
<<<<<<< Updated upstream
            alert("회원가입 성공");
            this.$router.go(-2);
          })
          .catch(err => {
            console.log(err);
            alert("회원가입 실패");
          });

=======
          })
          .catch(err => {
            console.log(err);
          });

        alert("회원가입 성공");
        this.$router.go(-1);
>>>>>>> Stashed changes
        console.log(resp);
      } else {
        alert("비밀번호 확인이 틀렸습니다.");
        this.signUpcheckPassword = "";
        return false;
      }
    },
    clear: function() {
      this.username = "";
      this.password = "";
      this.signUpName = "";
      this.signUpId = "";
      this.signUpPassword = "";
      this.signUpEmailAddress = "";
      this.signUpJob = "";
      this.signUpAge = "";
      this.select = [];
    }
  },
  mounted() {
    $(".message a").click(function() {
      $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
  }
};
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  max-width: 500px;
  padding: 2.5% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 500px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  // box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #f8bbd0;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  // background: #43a047;
  background: #fa86af;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 16px;
}
.form .message a {
  // color: #4caf50;
  color: #fa86af;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
