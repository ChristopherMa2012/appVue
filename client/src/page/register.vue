<template>
  <section class="bodyContain">
    <page-head></page-head>
    <section class="content">
      <div class="formBox">
        <div class="userName">
          <span>账号：</span>
          <input type="text" name="name" placeholder="用户名/邮箱/已验证手机" v-model="userName">
        </div>
        <div class="pwd">
          <span>密码：</span>
          <input type="text" name="password" placeholder="请输入密码" v-model="password">
          <i></i>
        </div>
        <div class="pwdConfirm">
          <span>确认密码：</span>
          <input type="text" name="pwdConfirm" placeholder="请再次输入密码" v-model="pwdConfirm">
          <i></i>
        </div>
      </div>
      <div class="regNow" @click='regNow'>立即注册</div>
      <router-link to="/login" class="toLogin">已有账号？立即登录</router-link>
    </section>
  </section>
</template>
<script>
import pageHead from '@/components/header'
import fetch from '@/utils/fetchData'
import {apiUrl} from '@/config/baseConfig'

export default {
  data() {
    return {
      userName: '',
      password: '',
      pwdConfirm: ''
    }
  },
  components: {
    pageHead
  },
  methods: {
    regNow() {
      fetch({
        url: apiUrl + 'register',
        method: 'post',
        body: {
          'userName': this.userName,
          'password': this.password,
          'pwdConfirm':this.pwdConfirm
        }
      }).then(res => {
        if(res.success){
          let result = confirm('恭喜你注册成功');
          result && this.$router.push('/');
        } else{
          alert('注册失败。请稍后再试')
        }
      }).catch(e => {
        log(e.message);

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
    .userName,
    .pwd {
      margin-bottom: 0.2rem;
    }
    .userName,
    .pwd,
    .pwdConfirm {
      border-bottom: 0.02rem solid $borderGrey;
      span {
        display: inline-block;
        width: 1.4rem;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      input {
        width: 4.4rem;
        height: 0.6rem;
        line-height: 0.6rem;
      }
    }
  }
  .regNow {
    width: 6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    background-color: $red;
    color: white;
    margin: 0.5rem auto 0.2rem;
  }
  .toLogin{
    margin-left:0.55rem;
    color:#6c6cad;
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
