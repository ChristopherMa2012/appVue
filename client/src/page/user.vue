<template>
  <section class="bodyContain">
    <page-head page-title="个人中心"></page-head>
    <section class="content">
      <!-- 会员信息头 -->
      <div class="head clearfix">
        <img src="../assets/images/user/userHead.png" alt="用户头像" class="userImg fl">
        <div class="fl userInfo">
          <div class="userName">我是一条水里的鱼</div>
          <div class="userDegree">注册会员</div>
        </div>
      </div>
      <!-- 资产 -->
      <div class="asset clearfix">
        <router-link to="/myPoint" class="fl">
          <div class="">5000</div>
          <div>积分</div>
        </router-link>
        <router-link to="/userAssets/com/redPaper" class="fl">
          <div>12</div>
          <div>红包</div>
        </router-link>
        <router-link to="/userAssets/com/discount" class="fl">
          <div>43</div>
          <div>优惠券</div>
        </router-link>
      </div>
      <!-- 订单管理 -->
      <div class="orderM">
        <div class="clearfix">
          <span class="fl">订单管理</span>
          <router-link to="/myOrder" class="fr">
            <span>查看全部</span>
            <i class="rightArr"></i>
          </router-link>
        </div>
        <div class="clearfix">
          <router-link to="/myOrder" class="fl">
            <i></i>
            <span>待付款</span>
          </router-link>
          <router-link to="/myOrder" class="fr">
            <i></i>
            <span>待收货</span>
          </router-link>
        </div>
      </div>
      <!-- 服务列表 -->
      <div class="serviceList">
        <router-link class="addrM" to="/address">
          <i></i>
          <span>收货地址管理</span>
        </router-link>
        <router-link class="service" to="/home">
          <i></i>
          <span>联系客服</span>
        </router-link>
        <router-link class="about" to="/about">
          <i></i>
          <span>关于我们</span>
        </router-link>
      </div>
    </section>
  </section>
</template>
<script>
import pageHead from "@/components/header";

export default {
  components: {
    pageHead
  }
};

</script>
<style lang="scss" scoped>
$lightgrey: #c2c2c2;
$red: #e6186f;
$imgSrc: '/src/assets/images/user/';
.content {
  .head {
    background: url($imgSrc + "userCenterBg.png") no-repeat;
    background-size: cover;
    height: 1.6rem;
    padding-top: 0.3rem;
    margin-bottom: 0.1rem;
    img {
      display: block;
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      border: 0.03rem solid $lightgrey;
      margin-left: 0.58rem;
    }
    .userInfo {
      margin-top: 0.13rem;
      margin-left: 0.16rem;
      div {
        height: 0.38rem;
        light-height: 0.38rem;
      }
      div:last-child {
        color: white;
      }
    }
  }
  .asset {
    height: 1rem;
    margin-bottom: 0.2rem;
    padding: 0.08rem 0.1rem 0;
    a {
      width: 2.3rem;
      text-align: center;
      div {
        height: 0.4rem;
        light-height: 0.4rem;
        &:first-child {
          color: $red;
        }
        &:last-child {
          height: 0.44rem;
          light-height: 0.44rem;
        }
      }
    }
  }
  .orderM {
    padding: 0 0.22rem;
    margin-bottom: 0.2rem;
    div {
      &:first-child {
        padding-top: 0.1rem;
        height: 0.7rem;
        border-bottom: 0.01rem solid $lightgrey;
        overflow: hidden;
        span {
          display: inline-block;
          height: 0.6rem;
          line-height: 0.6rem;
        }
      }
      &:last-child {
        height: 1rem;
        a {
          display: block;
          width: 47.5%;
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          i {
            display: inline-block;
            width: 0.29rem;
            height: 0.29rem;
            background: url($imgSrc + "toPayIcon.png") no-repeat;
            background-size: cover;
            vertical-align: middle;
          }
          &:last-child {
            i {
              width: 0.3rem;
              height: 0.28rem;
              background: url($imgSrc + "toRecieveIcon.png") no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
  .serviceList {
    padding:0  0.32rem;
    a {
      display: block;
      width: 100%;
      border-bottom: 0.01rem solid $lightgrey;
      i {
        display: inline-block;
        width: 0.21rem;
        height: 0.27rem;
        margin-right:0.17rem;
        vertical-align:middle;
      }
      &:first-child {
        height: 0.83rem;
        line-height: 0.83rem;
        i {
          background: url($imgSrc + 'addrIcon.png') no-repeat;
          background-size: cover;
        }
      }
      &:nth-child(2) {
        height: 0.77rem;
        line-height: 0.77rem;
        i {
          width: 0.28rem;
          height: 0.28rem;
          background: url($imgSrc + 'serviceIcon.png') no-repeat;
          background-size: cover;
        }
      }
      &:last-child {
        height: 0.85rem;
        line-height: 0.85rem;
        border-bottom: none;
        i {
          width: 0.28rem;
          height: 0.28rem;
          background: url($imgSrc + 'aboutIcon.png') no-repeat;
          background-size: cover;
        }
      }
    }
  }
}

</style>
