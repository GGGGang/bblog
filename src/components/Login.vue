<template lang="pug">
.login-bg
  .login-container
    .login-logo BBlog
    el-form.login-form(:rules="rules" label-position="left" label-width="0px" v-loading="loading")
      h3.login_title 系统登录
      el-form-item(prop="account")
        el-input(type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号")
      el-form-item(prop="checkPass")
        el-input(type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码")
      el-checkbox.login_remember(v-model="checked" label-position="left") 记住密码
      el-form-item(style="width: 100%")
        el-button(type="primary" @click="submitClick" style="width: 100%") 登录
</template>
<script>
export default {
  data() {
    return {
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      checked: true,
      loginForm: {
        username: "sang",
        password: "123",
      },
      loading: false,
    };
  },
  methods: {
    submitClick: function () {
      this.$router.replace({ path: "/HomePage" });
      // var _this = this;
      // this.loading = true;

      // this.$https
      //   .postRequest("/login", {
      //     username: this.loginForm.username,
      //     password: this.loginForm.password,
      //   })
      //   .then(
      //     (resp) => {
      //       _this.loading = false;
      //       if (resp.status == 200) {
      //         //成功
      //         var json = resp.data;
      //         if (json.status == "success") {
      //           _this.$router.replace({ path: "/home" });
      //         } else {
      //           _this.$alert("登录失败!", "失败!");
      //         }
      //       } else {
      //         //失败
      //         _this.$alert("登录失败!", "失败!");
      //       }
      //     },
      //     (resp) => {
      //       this.loading = false;
      //       _this.$alert("找不到服务器⊙﹏⊙∥!", "失败!");
      //     }
      //   );
    },
  },
};
</script>
<style scoped lang="scss">
.login {
  &-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-image: url("@/assets/login-bg.png");
  }
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: calc((100vh - 720px) / 2);
  }
  &-logo {
    font-size: 100px;
    color: #fff;
    font-weight: bolder;
  }
  &-form {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 24px auto;
    width: 400px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
</style>
