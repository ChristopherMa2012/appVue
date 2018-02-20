<template>
  <section class="bodyContain">
    <page-head page-title="地址编辑"></page-head>
    <section class="content">
      <ul class="contentBox">
        <li class="name">
          <span>收货人：</span>
          <input type="text" name="name" placeholder="收货人名称">
        </li>
        <li class="pho">
          <span>联系方式：</span>
          <input type="text" name="pho" placeholder="收货人联系方式">
        </li>
        <li class="province">
          <span>省：</span>
          <input type="text" name="province" placeholder="--请选择--">
        </li>
        <li class="city">
          <span>市：</span>
          <input type="text" name="city" placeholder="--请选择--">
        </li>
        <li class="area">
          <span>区：</span>
          <input type="text" name="area" placeholder="--请选择--">
        </li>
        <li class="addrDetail">
          <span>详细地址：</span>
          <input type="text" name="addrDetail" placeholder="请填写详细地址">
        </li>
      </ul>
      <section class="oper">
        <span>删除地址</span>
        <span>保存</span>
      </section>
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
$lightgrey: #eeeeee;
.content {
  ul {
    padding: 0.2rem 0.3rem 0;
    width: 100%;
    background-color: white;
    li {
      height: 0.72rem;
      border-bottom:0.01rem solid $lightgrey;
      span {
        display: inline-block;
        height: 0.72rem;
        line-height: 0.72rem;
        width: 1.55rem;
      }
    }
  }
  section{
  	text-align:center;
  	margin-top:0.3rem;
  	span{
  		display:inline-block;
  	    width:2.58rem;
  	    height:0.68rem;
  	    line-height:0.68rem;
  	    text-align:center;	
  	    border-radius:0.04rem;
  	    &:first-child{
  	    	border:0.01rem solid #lightgrey;
  	    	background-color:white;
  	    	margin-right:0.2rem;
  	    }
  	    &:last-child{
  	    	color:white;
  	    	background-color:#10a91e;
  	    }
  	}
  }
}

</style>
