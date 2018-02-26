<template>
  <section class="bodyContain">
      <page-head page-title="我的订单"></page-head>
      <section class="content">
           <div class="tabBar">
               <span v-for="(item,index) in tabBarArr" v-bind:class="{isActive: curNum == index}" @click="tabChange(index)">{{item}}</span>
           </div>
           <div class="orderListCon">
               <ul v-for="(item,index) in tabBarArr" v-show="curNum == index">
                   <li>
                       <router-link to="/orderDetail" class="clearfix orderStatus">
                           <div class="fl ">
                                 <div class="shopName">济南健民大药房</div>
                                 <div class="dataTime">2015-23-12 23：23：00</div>
                           </div>
                           <div class="fr">
                                待付款
                           </div>
                       </router-link>
                       <ul class="gdListCon">
                           <li class="clearfix">
                                <img src="/src/assets/images/myOrder/gdImg.png" alt="" class="fl">
                                <div class="gdInfo fl">
                                     <h3>陈李济舒筋健腰丸舒经活络腰间盘腰椎痛白云山</h3>
                                     <div class="spec">规格：<span>0.9g/片*6片*3板</span></div>
                                </div>
                                <div class="priceNum fr">
                                    <div class="priceAll">213.23</div>
                                    <div class="num">X123</div>
                                </div>
                           </li>
                           <li class="clearfix">
                                <img src="/src/assets/images/myOrder/gdImg.png" alt="" class="fl">
                                <div class="gdInfo fl">
                                     <h3>陈李济舒筋健腰丸舒经活络腰间盘腰椎痛白云山</h3>
                                     <div class="spec">规格：<span>0.9g/片*6片*3板</span></div>
                                </div>
                                <div class="priceNum fr">
                                    <div class="priceAll">213.23</div>
                                    <div class="num">X123</div>
                                </div>
                           </li>                           
                       </ul>
                       <div class="balanceBar clearfixd">
                           <div class="total fl">合计：<span>132432.23</span>(含运费￥<span>0.00</span>)</div>
                           <router-link to='/orderPay' class="goToPay fr">去付款</router-link>
                       </div>
                   </li>                 
               </ul>
           </div>
      </section>
  </section>
</template>
<script>
import pageHead from "@/components/header";

export default {
  data() {
    return {
      tabBarArr: ["全部订单", "待付款", "待收货"],
      curNum:0
    };
  },
  methods:{
      tabChange(index){
          this.curNum = index;
      }
  },
  components: {
    pageHead
  }
};
</script>
<style lang="scss" scoped>
$borderGrey: #dfdfdf;
$imgSrc: "/src/assets/images/myOrder/";
$red: #e6186f;
.content {
  .tabBar {
    font-size: 0;
    border-bottom: 0.01rem solid $borderGrey;
    span {
      display: inline-block;
      width: 33%;
      height: 0.77rem;
      line-height: 0.77rem;
      text-align: center;
      &.isActive {
        color: $red;
        border-bottom: 0.03rem solid $red;
      }
    }
  }
  .orderListCon {
    margin-top: 0.2rem;
    background-color: white;
    & > ul {
      background-color: #f0f2f5;
    }
    & > ul > li {
      padding: 0.3rem;
      padding-bottom: 0;
      margin-bottom: 0.2rem;
      background-color: white;
      .orderStatus {
        .shopName {
          height: 0.33rem;
          line-height: 0.33rem;
          font-weight: bold;
        }
        & > div:last-child {
          color: $red;
        }
      }
      .gdListCon {
        background-color: #fafafa;
        li {
          padding: 0.1rem 0;
          border-bottom: 0.03rem solid white;
          img {
            width: 0.98rem;
            height: 0.98rem;
            margin-right: 0.17rem;
          }
          h3 {
            display: block;
            width: 4rem;
            line-height: 0.33rem;
            max-height: 0.66rem;
            overflow: hidden;
            font-weight: bold;
          }
          .priceAll {
            font-weight: bold;
          }
          .num {
            text-align: right;
            margin-top: 0.3rem;
          }
        }
      }
      .balanceBar {
        overflow: hidden;
        .total {
          span {
            display: inline-block;
            height: 1.15rem;
            line-height: 1.15rem;
          }
          & > span:first-child {
            color: $red;
          }
          & > span:first-child:before {
            content: "￥";
            display: inline-block;
            height: 1.15rem;
            line-height: 1.15rem;
            color: $red;
          }
        }
        a {
          display: inline-block;
          width: 1.3rem;
          height: 0.5rem;
          line-height: 0.5rem;
          text-align: center;
          color: white;
          background-color: $red;
          border-radius: 0.05rem;
          margin-top: 0.3rem;
        }
      }
    }
  }
}
</style>
