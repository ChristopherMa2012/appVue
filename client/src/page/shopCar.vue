<template>
  <section class="bodyContain">
      <page-head :params="paramsObj"></page-head>
      <section class="content">
            <ul>
              <li class="clearfix" v-for="(item,index) in goodsList" :key="index" v-show="item.gdItemShow">
                   <i class="circle fl" :class="{checkedCircle: item.checked }" @click="select(index)" v-show="paramsObj.editMode"></i>
                   <i class="circle fl" :class="{checkedCircle: item.editChecked }" v-show="!paramsObj.editMode" @click="editSelect(index)"></i>
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
            <div class="settlementBar clearfix"   v-if="paramsObj.editMode">
                <div class="fl">
                   <i class="circle" :class="{checkedCircle:checkedAll}"  @click="select(-1)"></i>
                   <span>全选</span>
                   <span class="total">合计：<em>￥{{totalPrice}}</em></span>
                </div>  
                <div class="settleBtn fr">去结算</div>
            </div>
            <div class="editBar clearfix" v-else>
                <div class="fl">
                  <i class="circle" :class="{checkedCircle:editCheckedAll}" @click="editSelect(-1)"></i>
                  <span>全选</span>
                </div>
                <div class="fr">
                  <button>分享</button>
                  <button>移入关注</button>
                  <button @click="gdDeleteAction()">删除</button>
                </div>
            </div>
      </section>
  </section>
</template>
<script>
import pageHead from "@/components/header";
import { apiUrl } from "@/config/baseConfig";
import { bus } from "@/common/bus";

export default {
  data() {
    return {
      operMode: true, //true为 正常结算模式；false为编辑模式
      checkedAll: false, //全选
      editCheckedAll: false, //编辑模式下的全选
      goodsList: [],
      totalPrice: "0.00",
      paramsObj: {
        pageTitle: "购物车",
        moreBtnStatus: false,
        editMode: true
      }
    };
  },
  created: function() {
    this.pageInit();
    bus.$on("headEdit", () => {
      this.paramsObj.editMode = false;
    });
    bus.$on("headEditComplete", () => {
      this.paramsObj.editMode = true;
    });
  },
  watch: {
    $route(to, from) {
      if (from.name == "shopCar") return;
      this.pageInit();
    }
  },
  methods: {
    pageInit() {
      Ma.fetch({
        url: apiUrl + "shopCarList",
        method: "get",
        callback: res => {
          res.goodsList.forEach(item => {
            item.checked = false;
            item.editChecked = false;
            item.gdItemShow  = true;
          });
          this.goodsList = res.goodsList;
        }
      });
    },
    minus(index) {
      let num = this.goodsList[index].num;
      if (num == 1) {
        num = 1;
      } else {
        this.shopCarNumMod(1, index);
        if (!this.goodsList[index].checked) return;
        this.totalPrice = (
          Number(this.totalPrice) - this.goodsList[index].price
        ).toFixed(2);
      }
    },
    plus(index) {
      let num = this.goodsList[index].num;
      if (num >= this.storage) {
        num = this.storage;
      } else {
        this.shopCarNumMod(2, index);
        if (!this.goodsList[index].checked) return;
        this.totalPrice = (
          Number(this.totalPrice) + this.goodsList[index].price
        ).toFixed(2);
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
    },
    select(index) {
      if (index != -1) {
        if (this.goodsList[index].checked) {
          this.goodsList[index].checked = false;
          this.checkedAll = false;
          this.totalPrice = (
            Number(this.totalPrice) -
            this.goodsList[index].price * this.goodsList[index].num
          ).toFixed(2);
        } else {
          this.goodsList[index].checked = true;
          this.checkedAll = this.goodsList.every(item => item.checked == true);
          this.totalPrice = (
            Number(this.totalPrice) +
            this.goodsList[index].price * this.goodsList[index].num
          ).toFixed(2);
        }
        return;
      }

      if (this.checkedAll) {
        this.checkedAll = false;
        this.goodsList.forEach(item => {
          item.checked = false;
        });
        this.totalPrice = 0.0;
      } else {
        this.checkedAll = true;
        this.goodsList.forEach(item => {
          item.checked = true;
        });
        let temPrice = 0;
        this.goodsList.forEach(item => {
          temPrice += item.price * item.num;
        });
        this.totalPrice = temPrice.toFixed(2);
      }
    },
    editSelect(index) {
      if (index == -1) {
        if (this.editCheckedAll) {
          this.editCheckedAll = false;
          this.goodsList.forEach(item => {
            item.editChecked = false;
          });
        } else {
          this.editCheckedAll = true;
          this.goodsList.forEach(item => {
            item.editChecked = true;
          });
        }
      } else {
        if (this.goodsList[index].editChecked) {
          this.goodsList[index].editChecked = false;
          this.editCheckedAll = false;
        } else {
          this.goodsList[index].editChecked = true;
          this.editCheckedAll = this.goodsList.every(item => item.editChecked == true);
        }
      }
    },
    gdDeleteAction(){
      let gdSNArr = [];
      let self = this;
      this.goodsList.forEach(item=>{
        if(item.editChecked) gdSNArr.push(item.gdSN);
      })
      Ma.fetch({
        url: apiUrl + 'gdDelete',
        method:'post',
        body:{
          gdSNArr
        },
        callback(res){
          if(res.status == 200){
              gdSNArr.forEach((item,index)=>{
                self.goodsList[index].gdItemShow = false;
              })
          }
        }
      })
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
  line-height: 0.3rem;
  border-radius: 50%;
  border: 0.02rem solid $borderGrey;
  margin: 0.3rem 0.2rem 0;
}
.checkedCircle {
  position: relative;
  border: 0.02rem solid $red;
  background-color: $red;
  text-align: center;
  &:before {
    content: "✓";
    display: block;
    color: white;
  }
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
