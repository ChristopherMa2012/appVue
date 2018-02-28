<template>
	<section class="bodyContain">
		<page-head page-title="个人资产"></page-head>
		<section class="content">
			<div class="tabBar">
				<span  v-bind:class="{isActive: curNum == 0 }" @click="tabChange(0)">商家优惠券</span>
				<span  v-bind:class="{isActive: curNum == 1 }" @click="tabChange(1)">红包</span>
				<span  v-bind:class="{isActive: curNum == 2 }" @click="tabChange(2)">不可用 (<em>0</em>)</span>
			</div>
			 <div class="containBox">
				   <ul class="discountList" v-show="curNum == 0">
						<li class="clearfix">
						<div class="discVal fl">100</div>
						<div class="discDet fl">
							<div>优惠券：满2000元使用</div>
							<div class="discShop">该券由金康大药房提供</div>
							<div>2016-05-18至2016-12-31</div>
						</div>
						</li> 
					</ul>
					  <ul class="redPaperList" v-show="curNum == 1">
						<li class="clearfix">
						<div class="redPaperVal fl">100</div>
						<div class="redPaperDet fl">
							<div>平台红包：满200元使用</div>
							<div>2016-05-18至2016-12-31</div>
						</div>
						</li>
						<li class="clearfix">
						<div class="redPaperVal fl">100</div>
						<div class="redPaperDet fl">
							<div>平台红包：满200元使用</div>
							<div>2016-05-18至2016-12-31</div>
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
      curNum: 0
    };
  },
  watch:{
    $route(to,from){
      if(to.name == 'userAssets'){
        this.pageInit();
      }
    }
  },
  created: function() {
     this.pageInit();
  },
  methods: {
    pageInit(){
    if (this.$route.params.module == "redPaper") {
      this.curNum = 1;
    } else {
      this.curNum = 0;
    }
    },
    tabChange(index) {
      this.curNum = index;
    }
  },
  components: {
    pageHead
  }
};
</script>
<style lang='scss' scoped>
$red: #f40e24;
$borderColor: #e7e7e7;
$bgColor: #f0f2f5;
.content {
  .tabBar {
    font-size: 0;
    span {
      display: inline-block;
      width: 33%;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      &.isActive {
        color: $red;
        border-bottom: 0.03rem solid $red;
      }
    }
  }
  .containBox {
    background-color: #f0f2f5;
    .discountList {
      padding: 0.3rem 0.38rem 0 0.38rem;
      li {
        border: 0.01rem solid $borderColor;
        width: 100%;
        background-color: white;
        margin-bottom: 0.15rem;
        .discVal {
          width: 1.88rem;
          height: 1.58rem;
          line-height: 1.58rem;
          color: $red;
          font-size: 18px;
          text-align: center;
          position: relative;
          &:before {
            content: "￥";
            width: 0.2rem;
            display: inline-block;
            color: $red;
            font-size: 12px;
          }
          &:after {
            content: "";
            width: 0.18rem;
            height: 0.18rem;
            border-radius: 50%;
            position: absolute;
            background-color: $bgColor;
            right: -0.09rem;
            bottom: -0.09rem;
          }
        }
        .discDet {
          padding: 0.2rem 0 0 0.28rem;
          position: relative;
          height: 100%;
          div {
            height: 0.4rem;
            line-height: 0.4rem;
            width: 4.2rem;
            overflow: hidden;
            &:first-child {
              font-weight: bold;
            }
          }
          &:before {
            content: "";
            width: 0.18rem;
            height: 0.18rem;
            border-radius: 50%;
            position: absolute;
            background-color: $bgColor;
            left: -0.09rem;
            top: -0.09rem;
          }
        }
      }
    }
  }
  .redPaperList {
    padding: 0.3rem 0.38rem 0 0.38rem;
    li {
      border: 0.01rem solid $borderColor;
      width: 100%;
      background-color: white;
      margin-bottom: 0.15rem;
      .redPaperVal {
        width: 1.88rem;
        height: 1.58rem;
        line-height: 1.58rem;
        color: $red;
        font-size: 18px;
        text-align: center;
        position: relative;
        &:before {
          content: "￥";
          width: 0.2rem;
          display: inline-block;
          color: $red;
          font-size: 12px;
        }
        &:after {
          content: "";
          width: 0.18rem;
          height: 0.18rem;
          border-radius: 50%;
          position: absolute;
          background-color: $bgColor;
          right: -0.09rem;
          bottom: -0.09rem;
        }
      }
      .redPaperDet {
        padding: 0.35rem 0 0 0.28rem;
        position: relative;
        height: 100%;
        div {
          height: 0.4rem;
          line-height: 0.4rem;
          width: 4.2rem;
          overflow: hidden;
          &:first-child {
            font-weight: bold;
          }
        }
        &:before {
          content: "";
          width: 0.18rem;
          height: 0.18rem;
          border-radius: 50%;
          position: absolute;
          background-color: $bgColor;
          left: -0.09rem;
          top: -0.09rem;
        }
      }
    }
  }
}
</style>