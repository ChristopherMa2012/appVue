<template>
  <section class="bodyContain">
      <page-head page-title='购物车'></page-head>
      <section class="content">
            <ul>
              <li class="clearfix" v-for="(item,index) in goodsList" :key="index">
                   <i class="circle fl"></i>
                   <img :src="item.imgUrl" class="fl">
                   <div class="gdInfo fl">
                       <h4>{{item.gdTitle}}</h4>
                       <div class="specifi">{{item.specifications}}</div>
                       <div class="clearfix">
                            <span class="price fl">￥{{item.price}}</span>
                            <div class="num fr">
                                <i class="minus" @click="minus(index)">-</i>
                                <input type="text" :value="item.num">
                                <i class="plus"  @click="plus(index)">+</i>
                            </div>
                       </div>
                   </div>
              </li>       
            </ul>
            <div class="settlementBar clearfix">
                <div class="fl">
                   <i class="circle"></i>
                   <span>全选</span>
                   <span class="total">合计：<em>￥000000.0000</em></span>
                </div>
                <div class="settleBtn fr">去结算</div>
            </div>
            <div class="editBar clearfix">
                <div class="fl">
                  <i class="circle"></i>
                  <span>全选</span>
                </div>
                <div class="fr">
                  <button>分享</button>
                  <button>移入关注</button>
                  <button>删除</button>
                </div>
            </div>
      </section>
  </section>
</template>
<script>
import pageHead from "@/components/header";
import { apiUrl } from "@/config/baseConfig";

export default {
  data() {
    return {
      goodsList: []
    };
  },
  created: function() {
    this.pageInit();
  },
  watch: {
    $route(to, from) {
      if(from.name=='shopCar') return;
      this.pageInit();
    }
  },
  methods: {
    pageInit() {
      Ma.fetch({
        url: apiUrl + "shopCarList",
        method: "get",
        callback: res => {
          this.goodsList = res.goodsList;
        }
      });
    },
    minus(index) {
      let num   = this.goodsList[index].num;
      if ( num == 1) {
        num = 1;
      } else {
        this.shopCarNumMod(1, index);
      }
    },
    plus(index) {
      let num   = this.goodsList[index].num;
      if (num >= this.storage) {
        num = this.storage;
      } else {
        this.shopCarNumMod(2, index);
      }
    },
    shopCarNumMod(way, index) {
      Ma.fetch({
        url: apiUrl + "shopCarNumMod",
        method: "get",
        body: { modifyWay: way, gdSN: this.goodsList[index].gdSN },
        callback: res => {
          if (res.status == 200 && way == 1) {
            this.goodsList[index].num--;
          } else if (res.status == 200 && way == 2) {
           this.goodsList[index].num++;
          } 
        }
      });
    }
  },
  components: {
    pageHead
  }
};
</script>
<style lang="scss" scoped>
$borderGrey: #8d8d8d;
$red: #df064e;
.circle {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  border: 0.02rem solid $borderGrey;
  margin: 0.3rem 0.2rem 0;
}
.content {
  ul {
    li {
      margin-top: 0.2rem;
      background-color: white;
      padding: 0.2rem 0;

      img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.2rem;
      }
      .gdInfo {
        h4 {
          width: 4.5rem;
          line-height: 0.3rem;
          max-height: 0.6rem;
          overflow: hidden;
          word-break: break-all;
        }
        .specifi {
          margin-bottom: 0.1rem;
        }
        .price {
          color: $red;
        }
        .num {
          width: 1.42rem;
          font-size: 0;
          border: 0.01rem solid $borderGrey;
          i {
            display: inline-block;
            width: 0.4rem;
            height: 0.4rem;
            line-height: 0.4rem;
            vertical-align: middle;
            text-align: center;
          }
          input {
            width: 0.6rem;
            height: 0.37rem;
            line-height: 0.37rem;
            text-align: center;
            border-left: 0.01rem solid $borderGrey;
            border-right: 0.01rem solid $borderGrey;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .settlementBar {
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 7.2rem;
    i {
      margin: 0 0.2rem;
    }
    span,
    em {
      display: inline-block;
      height: 0.8rem;
      line-height: 0.8rem;
      vertical-align: middle;
      &.total {
        font-weight: bold;
        margin-left: 0.2rem;
        em {
          font-weight: bold;
          color: $red;
        }
      }
    }

    .settleBtn {
      height: 0.8rem;
      line-height: 0.8rem;
      width: 1.8rem;
      background-color: $red;
      color: white;
      text-align: center;
    }
  }
  .editBar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 7.2rem;
    z-index: 5;
    background-color: white;
    i {
      margin: 0 0.2rem;
    }
    span {
      display: inline-block;
      height: 0.8rem;
      line-height: 0.8rem;
    }
    button {
      width: 1.2rem;
      height: 0.5rem;
      line-height: 0.5rem;
      border: 0.02rem solid $borderGrey;
      background-color: white;
      margin: 0.15rem 0.06rem 0 0;
    }
  }
}
</style>
