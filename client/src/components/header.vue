<template>
	<section class="header clearfix">
		  <span class="leftArr fl" @click="navBack"></span>
		  <h3 class="f18">{{title}}</h3>
		  <span class="more fr" v-show="moreStatus">
       ...
		  </span>
      <span class="oper fr" v-show="editStatus"  @click="edit()">
         编辑
      </span>
      <span class="oper fr" v-show="completeStatus"  @click="complete()">
         完成
      </span>      
	</section>
</template>
<script>
import router from "@/router/route";
// import { bus } from "@/common/bus";

export default {
  data() {
    return {
      moreStatus: false,
      editStatus: false,
      completeStatus: false,
      title: ""
    };
  },
  props: ["pageTitle"],
  created() {
    this.pageInit();
  },
  methods: {
    pageInit() {
      let Rname = this.$route.name;
      if (Rname == "shopCar") {
        this.editStatus = true;
      }
      let title = "";
      switch (Rname) {
        case "login":
          title = "用户登录";
          break;
        case "register":
          title = "用户注册";
          break;
        case "passwordChange":
          title = "密码修改";
          break;
        case "goodDetail":
          title = "商品详情";
          break;
        case "search":
          title = "商品搜索";
          break;
        case "searchRes":
          title = "搜索结果";
          break;
        case "address":
          title = "地址管理";
          break;
        case "addressEdit":
          title = "地址编辑";
          break;
        case "orderConfirm":
          title = "订单确认";
          break;
        case "user":
          title = "用户中心";
          break;
        case "myOrder":
          title = "我的订单";
          break;
        case "orderDetail":
          title = "订单详情";
          break;
        case "myPoint":
          title = "我的积分";
          break;
        case "userAssets":
          title = "用户资产";
          break;
        case "shopCar":
          title = "购物车";
          break;
        default:
          title = "首页";
          break;
      }
      this.title = title;
    },
    navBack() {
      router.go(-1);
    },
    edit() {
      this.editStatus = false;
      this.completeStatus = true;
      this.$emit("headEdit");
    },
    complete() {
      this.editStatus = true;
      this.completeStatus = false;
      this.$emit("headEditComplete");
    }
  }
};
</script>
<style  lang="scss" scoped>
section {
  width: 7.2rem;
  height: 0.9rem;
  line-height: 0.9rem;
  position: fixed;
  background-color: #134aaf;
  z-index: 5;
  left: 0;
  top: 0;
  & .leftArr {
    margin: 0.32rem 0 0 0.2rem;
  }
  & h3 {
    display: inline-block;
    max-width: 5rem;
    text-align: center;
    color: white;
    height: 0.9rem;
    line-height: 0.9rem;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 7;
    margin: auto;
  }
  & .more {
    display: inline-block;
    width: 0.54rem;
    font-size: 0;
    margin-right: 0.3rem;
  }
  & .oper {
    display: inline-block;
    height: 0.9rem;
    line-height: 0.9rem;
    padding: 0 0.2rem;
    color: white;
  }
  // & em {
  //   display: inline-block;
  //   color: white;
  //   width: 0.18rem;
  //   height: 0.9rem;
  //   line-height: 0.72rem;
  //   vertical-align: middle;
  //   text-align: center;
  //   font-size: 18px;
  // }
}
</style>