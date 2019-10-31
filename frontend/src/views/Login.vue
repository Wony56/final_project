<template>
  <div class="login-page">
    <div class="form">
      <form class="register-form">
        <input type="text" v-model="signUpId" placeholder="id" />
        <input type="password" v-model="signUpPassword" placeholder="password" />
        <input type="text" v-model="signUpName" placeholder="name" />
        <input type="text" v-model="signUpEmailAddress" placeholder="email address" />
        <input type="text" v-model="signUpJob" placeholder="job" />
        <input type="text" v-model="signUpAge" placeholder="age" />
        <!-- <v-text-field
          v-validate="'required|min:4|max:20'"
          v-model="signUpName"
          :counter="20"
          :error-messages="errors.collect('id')"
          label="아이디"
          data-vv-name="id"
          required
        ></v-text-field>-->
        <!--
        <v-text-field
          v-validate="'required|min:6|max:40'"
          v-model="signUpPassword"
          :counter="40"
          :error-messages="errors.collect('pwd')"
          label="비밀번호"
          data-vv-name="pwd"
          required
          type="password"
        ></v-text-field>
        <v-text-field
          v-validate="'required|min:1|max:40'"
          v-model="form.name"
          :counter="40"
          :error-messages="errors.collect('name')"
          label="이름"
          data-vv-name="name"
          required
        ></v-text-field>-->

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

export default {
  name: "login",

  data: function() {
    return {
      username: "",
      password: "",
      signUpId: "",
      signUpName: "",
      signUpPassword: "",
      signUpEmailAddress: "",
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
    signIn: function() {
      //로그인
      // alert("하이");
      apiUrl.login(this.username, this.password).then(async );
    },
    signUp: function() {
      //회원가입
      alert("바이");
      // alert(this.select);
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
  width: 500px;
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
