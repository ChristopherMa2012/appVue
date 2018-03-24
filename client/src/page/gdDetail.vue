<template>
  <section class="bodyContain">
    <page-head></page-head>
    <section class="content">
      <!-- 轮播图 -->
      <div class="carousel">
        <ul class="imgList">
          <li>
            <img :src="imgUrl">
          </li>
        </ul>
        <ul class="point">
          <li></li>
          <li class="curPos"></li>
        </ul>
      </div>
      <!-- 商品信息 -->
      <div class="gdInfo">
        <h3>{{gdTitle}}</h3>
        <div class="price">
          <span>价格：<em>{{price}}</em></span>
          <span>{{originPrice}}</span>
          <span>货到付款</span>
        </div>
        <div class="SN">
          编码： <span>{{gdSN}}</span>
        </div>
        <div class="guaruntee">
          保障:
          <span>正品</span>
          <span>7天退换</span>
          <span>保障隐私</span>
        </div>
      </div>
      <!-- 商家保障  -->
      <div class="shopGuarantee">
        <div class="deliveryTo">
          <span>配送至: <em>广东省广州市</em></span>
        </div>
        <div class="deliveryFee">
          <span>最低快递价:<em>圆通速递6元</em></span>
        </div>
        <div class="shopTip">本商品由
          <span>佰川堂大药房旗舰店</span>
          <span>广西壮族自治区桂平市</span> 发货
        </div>
        <!-- <img src="~@/assets/images/gdDetail/guarantee.jpg"> -->
      </div>
      <!-- 购买信息 -->
      <div class="buyInfo">
        <div class="activity">
          <span>活动:</span>
          <em>优惠券</em>
        </div>
        <div class="specification">
          <span>规格:</span>
          <select>
            <option v-for="(item,index) in specifications" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="num">
          <span>数量:</span>
          <div class="inputBox clearfix">
            <i class="fl" @click="minus()">-</i>
            <input type="text" name="gdNum" :value="num" class="fl">
            <i class="fl" @click="plus()">+</i>
          </div>
          <span class="store">库存 <em>23432</em>件</span>
        </div>
      </div>
      <!-- 商品说明书/图文详情 -->
      <div class="gdInstructions">
        <div class="tab">
          <span :class="{isActive:curNum == 0}" @click="tabChange(0)">商品简介</span>
          <span :class="{isActive:curNum == 1}" @click="tabChange(1)">图文详情</span>
        </div>
        <div class="instructions" v-show="curNum == 0" >
          <ul>
            <li v-for="(item,index) in goodInstructions" :key="index">
              <span>{{item.name}}:</span>
              <span>{{item.value}}</span>
            </li>                                 
          </ul>
          <!-- <img src="~@/assets/images/gdDetail/checkPass.jpg"> -->
        </div>
        <div class="imgDetail" v-show="curNum == 1">
          <img :src="imgUrl">
        </div>
      </div>
    </section>
     <section class="operBar clearfix">
         <router-link to="/shopCar" class="fl">
         <i></i>
         购物车
         </router-link>
         <router-link to="/orderConfirm" class="fr">立即购买</router-link>
         <span class="fr" @click="addShopCar()">加入购物车</span>
     </section>
  </section>
</template>
<script>
import pageHead from "@/components/header";
import { apiUrl } from "@/config/baseConfig";

export default {
  data() {
    return {
      curNum: 0,
      specifications: [],
      goodInstructions:[],
      gdTitle: "",
      price: 0.0,
      originPrice: 0.0,
      gdSN: "",
      imgUrl: "",
      num: 1,
      storage: 200
    };
  },
  created: function() {
    this.pageInit();
  },
  watch: {
    $route(to, from) {
      if (to.name !== "gdDetail") return;
      this.pageInit();
    }
  },
  methods: {
    pageInit() {
      let gdSN = this.$route.params.gdSN;
      Ma.fetch({
        url: apiUrl + "gdDetail",
        method: "get",
        body: { gdSN: gdSN },
        callback: res => {
          let G = res.goodsInfo;
          this.gdTitle = G.gdTitle;
          this.price = G.price;
          this.specifications = G.specifications;
          this.originPrice = G.originPrice;
          this.gdSN = G.gdSN;
          this.imgUrl = G.imgUrl;
          this.goodInstructions = G.goodInstructions;
        }
      });
    },
    tabChange(index) {
      this.curNum = index;
    },
    addShopCar() {
      Ma.fetch({
        url: apiUrl + "addShopCar",
        method: "post",
        body: {
          gdSN: this.gdSN,
          gdTitle: this.gdTitle,
          price: this.price,
          specifications: this.specifications,
          imgUrl: this.imgUrl,
          num: this.num
        },
        callback: res => {
          Ma.pop({
            content: res.msg,
            btnArr: ["确定"]
          });
        }
      });
    },
    minus() {
      if (this.num == 1) {
        this.num = 1;
      } else {
        this.num--;
      }
    },
    plus() {
      if (this.num >= this.storage) {
        this.num = this.storage;
      } else {
        this.num++;
      }
    }
  },
  components: {
    pageHead
  }
};
</script>
<style lang="scss" scoped>
$imgBg: #eeeeee;
$red: #df064e;
$fontGrey: #cccccc;
$borderGrey: #8d8d8d;

$imgSrc: "../assets/images/gdDetail/";
.content {
  background-color: #f0f2f5;
  .carousel {
    padding: 0 0.2rem;
    height: 6.77rem;
    overflow: hidden;
    position: relative;
    .imgList {
      li {
        width: 6.8rem;
        height: 6.8rem;
        background-color: $imgBg;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .point {
      position: absolute;
      bottom: 0.2rem;
      left: 3.3rem;
      li {
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        background-color: #d8d8d8;
        &.curPos {
          background-color: $red;
        }
      }
    }
  }
  .gdInfo {
    padding: 0 0.2rem;
    h3 {
      padding-left: 0.75rem;
      background: url($imgSrc + "rxIcon.jpg") no-repeat;
      background-size: 7%;
      background-position: 3% 12%;
      margin: 0.25rem 0;
      min-height: 0.35rem;
      line-height: 0.35rem;
    }
    .price {
      span,
      em {
        display: inline-block;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      span:first-child {
        margin-right: 0.35rem;
        em {
          color: $red;
          &:before {
            content: "￥";
            display: inline-block;
            height: 0.6rem;
            line-height: 0.6rem;
            color: $red;
          }
        }
      }
      span:nth-child(2) {
        color: $fontGrey;
        &:before {
          content: "￥";
          display: inline-block;
          height: 0.6rem;
          line-height: 0.6rem;
        }
      }
      span:last-child {
        vertical-align: text-bottom;
        background-color: $red;
        color: white;
        padding: 0 0.05rem;
        border-radius: 0.05rem;
        height: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
        margin-left: 0.3rem;
        margin-top: 0.4rem;
      }
    }
    .SN {
      span {
        display: inline-block;
        height: 0.55rem;
        line-height: 0.55rem;
      }
    }
    .guaruntee {
      background-color: #f5f5f5;
      span {
        display: inline-block;
        height: 0.55rem;
        line-height: 0.55rem;
        margin-left: 0.25rem;
        &:before {
          display: inline-block;
          height: 0.28rem;
          width: 0.28rem;
          border-radius: 50%;
          border: 0.01rem solid $borderGrey;
          line-height: 0.28rem;
        }
        &:first-child:before {
          content: "正";
        }
        &:nth-child(2):before {
          content: "退";
        }
        &:last-child:before {
          content: "保";
        }
      }
    }
  }
  /*  <!-- 商家保障 -->*/
  .shopGuarantee {
    padding: 0 0.2rem;
    overflow: hidden;
    .deliveryTo {
      span,
      em {
        display: inline-block;
        height: 0.58rem;
        line-height: 0.58rem;
      }

      em {
        font-weight: bold;
        &:before {
          content: "";
          display: inline-block;
          width: 0.2rem;
          height: 0.28rem;
          background: url($imgSrc + "location.png") no-repeat;
          background-size: cover;
          vertical-align: middle;
          margin: 0 0.1rem 0 0.3rem;
        }
      }
    }
    .deliveryFee {
      .span,
      em {
        display: inline-block;
        height: 0.54rem;
        line-height: 0.54rem;
      }
      em {
        margin: 0 0.2rem;
        font-weight: bold;
        &:after {
          content: "!";
          display: inline-block;
          width: 0.26rem;
          height: 0.26rem;
          line-height: 0.26rem;
          text-align: center;
          border-radius: 50%;
          border: 0.03rem solid #177ae1;
          color: #177ae1;
          margin-left: 0.2rem;
        }
      }
    }
    .shopTip {
      span {
        display: inline-block;
        height: 0.54rem;
        line-height: 0.54rem;
      }
    }
    img {
      width: 6.6rem;
      height: 0.6rem;
      margin-bottom: 0.32rem;
    }
  }
  /*购买信息*/
  .buyInfo {
    margin-top: 0.2rem;
    padding: 0 0.2rem;
    .activity {
      span {
        display: inline-block;
        height: 0.7rem;
        line-height: 0.7rem;
        width: 0.8rem;
      }
      em {
        display: inline-block;
        width: 0.76rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
        background-color: $red;
        color: white;
        border-radius: 0.04rem;
        vertical-align: middle;
      }
    }
    .specification {
      span {
        display: inline-block;
        width: 0.8rem;
        height: 0.68rem;
        line-height: 0.68rem;
      }
      select {
        margin-top: 0.02rem;
        width: 3.62rem;
        height: 0.57rem;
        line-height: 0.57rem;
        border: 0.02rem solid $borderGrey;
      }
    }
    .num {
      padding-bottom: 0.2rem;
      margin-bottom: 0.2rem;
      span {
        display: inline-block;
        width: 0.8rem;
        height: 0.7rem;
        line-height: 0.7rem;
      }
      .inputBox {
        display: inline-block;
        border: 0.02rem solid $borderGrey;
        width: 2.03rem;
        vertical-align: middle;
        i {
          display: inline-block;
          width: 0.59rem;
          height: 0.58rem;
          line-height: 0.58rem;
          text-align: center;
        }
        input {
          width: 0.81rem;
          line-height: 0.58rem;
          height: 0.58rem;
          text-align: center;
          display: inline-block;
          border-left: 0.01rem solid $borderGrey;
          border-right: 0.01rem solid $borderGrey;
        }
      }
      .store {
        width: unset;
      }
    }
  }
  /*商品说明书/图文详情*/
  .gdInstructions {
    .tab {
      border-bottom: 0.01rem solid #e5e5e5;
      span {
        display: inline-block;
        width: 49%;
        height: 0.67rem;
        line-height: 0.67rem;
        text-align: center;
        &.isActive {
          color: $red;
          border-bottom: 0.03rem solid $red;
        }
      }
    }
    .instructions {
      padding: 0.25rem 0.2rem 0;
      position: relative;
      li {
        border-bottom: 0.01rem dotted #e5e5e5;
        span {
          display: inline-block;
          height: 0.5rem;
          line-height: 0.5rem;
          &:first-child {
            width: 1.4rem;
          }
        }
      }
      img {
        position: absolute;
        right: 1rem;
        top: 0.35rem;
        width: 1.04rem;
        height: 1.04rem;
        z-index: 2;
      }
    }
    .imgDetail {
      img {
        width: 6.8rem;
      }
    }
  }
}
.operBar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 7.2rem;
  background-color: white;
  border-top: 0.01rem solid $borderGrey;
  a,
  span {
    display: inline-block;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    width: 27%;
  }
  span {
    width: 35%;
    background-color: #7c89de;
    color: white;
  }
  & > *:nth-child(2) {
    width: 35%;
    background-color: #454ab3;
    color: white;
  }
}
</style>
