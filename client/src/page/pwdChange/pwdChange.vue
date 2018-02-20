<template>
  <section class="bodyContain">
    <page-head page-title="密码更改"></page-head>
    <section class="content">
      <div class="formBox">
        <div class="userName">
          <span>账号：</span>
          <input type="text" name="name" placeholder="用户名/邮箱/已验证手机">
        </div>
        <div class="pwd">
          <span>密码：</span>
          <input type="text" name="password" placeholder="请输入密码">
          <i></i>
        </div>
        <div class="pwdConfirm">
          <span>密码：</span>
          <input type="text" name="password" placeholder="请再次输入密码">
          <i></i>
        </div>        
      </div>
      <div class="pwdChgBtn">确认修改</div>
    </section>
  </section>
</template>
<script>
import pageHead from '@/components/header/header'

export default {
  components: {
    pageHead
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
    .userName,.pwd{
      margin-bottom: 0.2rem;
    }
    .userName,
    .pwd,.pwdConfirm{
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
  }
  .pwdChgBtn {
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
