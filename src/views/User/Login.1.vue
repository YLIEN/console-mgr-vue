<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>运营后台管理</span>
    </div>
    <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class="box-form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="password" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login({username, password})">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        // if (this.loginForm.checkUser !== '') {
        //   this.$refs.loginForm.validateField('checkUser');
        // }
        callback();
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不少于5位'));
      } else {
        // if (this.loginForm.checkPass !== '') {
        //   this.$refs.loginForm.validateField('checkPass');
        // }
        callback();
      }
    }
    return {
      // loginForm: {
        username: 'root',
        password: '987654'
      ,
      loginRules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      },
      pwdType: 'password'
    }
  },
  methods: {
    ...mapActions(['login']),
    // showPwd () {
    //   if (this.pwdType === 'password') {
    //     this.pwdType = ''
    //   } else {
    //     this.pwdType = 'password'
    //   }
    // },
  }
}
</script>
<style lang="scss" scoped>
.clearfix:before, .clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  text-align: center;
}
.box-card {
  width: 480px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.box-form {
  margin-right: 30px;
}
</style>