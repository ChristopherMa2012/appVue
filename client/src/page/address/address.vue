<template>
  <section class="bodyContain">
    <page-head page-title="地址管理"></page-head>
    <section class="content">
      <ul class="addrList">
        <li class="clearfix">
          <div class="fl setDef">
            <span class="circle"></span>
            <span>设为默认</span>
          </div>
          <div class="fl userAddr">
            <div>
              <span>马友友</span>
              <span>1358000500</span>
            </div>
            <div class="addrDetail">
              广东省广州市大学城广东工业大学
            </div>
          </div>
          <router-link to="/addrEdit" class="oper fl">
            编辑
          </router-link>
        </li>
        <li class="clearfix">
          <div class="fl setDef">
            <span class="circle"></span>
            <span>设为默认</span>
          </div>
          <div class="fl userAddr">
            <div>
              <span>马友友</span>
              <span>1358000500</span>
            </div>
            <div class="addrDetail">
              广东省广州市大学城广东工业大学
            </div>
          </div>
          <router-link to="/addrEdit" class="oper fl">
            编辑
          </router-link>
        </li>
      </ul>
      <div class="newAddr">
      	   <router-link to="/addrEdit">新增地址</router-link>
      </div>
    </section>
  </section>
</template>
<script>
import pageHead from '@/components/header/header';
export default {
  components: {
    pageHead
  }
}

</script>
<style lang="scss" scoped>
$lightgrey: #8e8e8e;
$red: #e6186f;
.content {
  ul li {
    height: 1.8rem;
    background-color: white;
    margin-bottom: 0.2rem;
    .setDef {
      text-align: center;
      width: 1.53rem;
      padding-top: 0.57rem;

      span {
        display: block;
        height: 0.58rem;
        line-height: 0.58rem;
      }
      .circle {
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        border: 0.01rem solid $lightgrey;
      }
    }
    .userAddr {
      width: 4.5rem;
      padding-top: 0.16rem;
      div:first-child span {
        display: inline-block;
        height: 0.68rem;
        line-height: 0.68rem;
        font-weight: bold;
      }
      div:last-child {
        height: 0.54rem;
        line-height: 0.27rem;
        overflow: hidden;
      }
    }
    .oper {
      width: 1.1rem;
      text-align: center;
      height: 1.8rem;
      line-height: 1.8rem;
      color: $red;
    }
  }
  .newAddr {
  	position:fixed;
  	left:0;
  	bottom:0;
  	z-index:4;
  	width:100%;
  	height:0.88rem;
  	padding-top:0.1rem;
  	text-align:center;
  	a{
  		display:inline-block;
  		width:3.7rem;
  		height:0.7rem;
  		line-height:0.7rem;
  		text-align:center;
  		color:white;
  		background-color:$red;
  	}
  }
}

</style>
