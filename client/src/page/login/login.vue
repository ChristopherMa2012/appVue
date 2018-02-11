<template>
  <section class="bodyContain">
    <page-head></page-head>
    <section class="content">
      <div class="formBox">
        <div class="userName">
          <span>账号：</span>
          <input type="text" name="name" placeholder="用户名/邮箱/已验证手机" v-model='userName'>
        </div>
        <div class="pwd">
          <span>密码：</span>
          <input type="text" name="password" placeholder="请输入密码" v-model='password'>
          <i></i>
        </div>
        <div class="loginTip">{{loginTip}}</div>
      </div>
      <div class="loginBtn" @click='loginAction'>登录</div>
      <div class="accOper clearfix">
        <router-link to="/pwdChange" class="forgetPwd fl">忘记密码</router-link>
        <router-link to="/register" class="toRegister fr">立即注册</router-link>
      </div>
    </section>
  </section>
</template>
<script>
import pageHead from '@/components/header/header';
import fetch from '@/utils/fetchData';
import {apiUrl} from '@/config/baseConfig';
import popup from '@/components/common/popup';

let loginResHandle = status =>{
   switch(status){
    case 200: this.$router.push('/');
    case 202: this.loginTip = '该用户已登录，无须重复登录';
    case 300: alert('');
   }
}
export default {
  data() {
    return {
      userName:'',
      password:'',
      loginTip: ''
    }
  },
  components: {
    pageHead,
    popup
  },
  methods: {
    loginAction() {
      this.loginTip = '';
      fetch({
        url: apiUrl + 'login',
        method: 'post',
        body: {
          name: this.userName,
          password: this.password
        }
      }).then(res => {
        if (res.success) {
          this.$router.push('/')
        } else {
          this.loginTip = '用户名或密码不正确'
        }
      }).catch(e => {
        console.log(e);
      })
    }
  }
}

</script>
<style lang="scss" scoped>
$borderGrey:#eeeeee;
$red:#e6186f;
.content {
  overflow: hidden;
  background-color: white;
  .formBox {
    width: 6rem;
    margin: .4rem auto 0;
    .userName {
      margin-bottom: 0.2rem;
    }
    .userName,
    .pwd {
      border-bottom: 0.02rem solid $borderGrey;
      span {
        display: inline-block;
        width: 0.8rem;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      input {
        width: 4.4rem;
        height: 0.6rem;
        line-height: 0.6rem;
      }
    }
    .loginTip {
      color: $red;
      text-align:right;
    }
  }
  .loginBtn {
    width: 6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background-color: $red;
    color: white;
    margin: 0.5rem auto 0.2rem;
  }
  .accOper {
    width: 6rem;
    margin: 0 auto 3rem;
    .forgetPwd {
      display: inline-block;
    }
  }
}

</style>
