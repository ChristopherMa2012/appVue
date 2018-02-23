<template>
  <section class="bodyContain">
    <page-head :page-title= 'pageTitle'></page-head>
    <section class="content">
      <ul class="contentBox">
        <li class="name">
          <span>收货人：</span>
          <input type="text" name="name" placeholder="收货人名称" v-model="name">
        </li>
        <li class="pho">
          <span>联系方式：</span>
          <input type="text" name="pho" placeholder="收货人联系方式" v-model="phone">
        </li>
        <li class="province">
          <span>省：</span>
          <input type="text" name="province" placeholder="--请选择--" v-model="province">
        </li>
        <li class="city">
          <span>市：</span>
          <input type="text" name="city" placeholder="--请选择--" v-model="city">
        </li>
        <li class="area">
          <span>区：</span>
          <input type="text" name="area" placeholder="--请选择--" v-model="area">
        </li>
        <li class="addrDetail">
          <span>详细地址：</span>
          <input type="text" name="addrDetail" placeholder="请填写详细地址" v-model="addrDetail">
        </li>
      </ul>
      <section class="oper">
        <span @click="deleteAction" v-show="showDelBtn">删除地址</span>
        <span @click="saveAction">保存</span>
      </section>
    </section>
  </section>
</template>
<script>
import pageHead from "@/components/header/header";
import {apiUrl} from '@/config/baseConfig';

export default {
  data() {
    return {
      pageTitle: "修改收货地址",
      showDelBtn: true,
      name: "",
      phone: "",
      province: "",
      city: "",
      area: "",
      addrDetail: ""
    };
  },
  created: function() {
    this.watchReactAction();
  },
  watch: {
    $route(to, from) {
      this.watchReactAction();
    }
  },
  methods: {
    deleteAction: function(e) {},
    saveAction: function(e) {
      if(this.name && this.phone && this.province && this.city && this.area && this.addrDetail){
        Ma.fetch({
          url: apiUrl + 'addAddress',
          method: 'post',
          body:{
            name: this.name,
            phone: this.phone,
            province: this.province,
            city: this.city,
            area: this.area,
            addrDetail: this.addrDetail
          }
        }).then(res=>{
           Ma.pop({
             content: res.msg
           })
        }).catch(e=>{
          console.log(e);
        })
      }else{
        Ma.pop({
          content:'请填写完整再提交',
          btnArr: ['确定']
        })
      }
    },
    watchReactAction: function() {
      let funWay = this.$route.params.funway;
      if (funWay == "newAdd") {
        this.pageTitle = "新增收货地址";
        this.showDelBtn = false;
      } else {
        this.pageTitle = "修改收货地址";
        this.showDelBtn = true;
      }
    }
  },
  components: {
    pageHead
  }
};
</script>
<style lang="scss" scoped>
$lightgrey: #eeeeee;
$red: #df064e;
.content {
  ul {
    padding: 0.2rem 0.3rem 0;
    width: 100%;
    background-color: white;
    li {
      height: 0.72rem;
      border-bottom: 0.01rem solid $lightgrey;
      span {
        display: inline-block;
        height: 0.72rem;
        line-height: 0.72rem;
        width: 1.55rem;
        &:before {
          content: "*";
          display: inline-block;
          color: $red;
          vertical-align: middle;
          margin-right: 0.02rem;
        }
      }
    }
  }
  section {
    text-align: center;
    margin-top: 0.3rem;
    span {
      display: inline-block;
      width: 2.58rem;
      height: 0.68rem;
      line-height: 0.68rem;
      text-align: center;
      border-radius: 0.04rem;
      &:first-child {
        border: 0.01rem solid $lightgrey;
        background-color: white;
        margin-right: 0.2rem;
      }
      &:last-child {
        color: white;
        background-color: #10a91e;
      }
    }
  }
}
</style>
