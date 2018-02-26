<template>
	<section class="bodyContain">
	 <page-head page-title="搜索"></page-head>
	 <section class="content">
	 	  <section class="inputBox">
				   <div>
						<svg version="1.1" baseProfile="full" width="0.37rem" height="0.37rem" xmlns="http://www.w3.org/2000/svg">
							<circle cx="0.185rem" cy="0.175rem" r="0.175rem" stroke-width="0.03rem" stroke="grey" fill="white" />
							<line x1="0.3rem" x2="0.36rem" y1="0.3rem" y2="0.36rem" stroke="grey" stroke-width="0.04rem" />
						</svg>	 	  	    	
						<input type="text" placeholder="请输入药品名" autofocus>
						</div>
						<span @click="cancelBtn">取消</span>
	 	  </section>
			 <section class="title f16">大家都在搜</section>
			 <section class="keywordTitle">
				   <a href="javascript:;">金戈</a>
				   <a href="javascript:;">欧兰宁</a>
				   <a href="javascript:;">万艾可伟哥</a>
			 </section>
	 </section>
    <page-foot></page-foot>
	</section>
</template>
<script>
import pageHead from "@/components/header"
import pageFoot from "@/components/footer"

export default {
  // directives:{
  //   focus:{
  //     inserted:function(el){
  //       el.focus();
  //     }
  //   }
  // },
  components: {
    pageHead,
    pageFoot
  },
  methods:{
    cancelBtn(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
$lightgrey: lightgrey;

.content {
  margin-top: 0.9rem;
	padding: 0.2rem 0 0 0.3rem;
	background-color: #f0f2f5;
  .inputBox {
    div {
      border: 0.02rem solid $lightgrey;
      display: inline-block;
			overflow: hidden;
			background-color: white;
      svg {
        margin: 0.09rem 0.15rem;
        vertical-align: top;
      }
      input {
        width: 4.88rem;
        height: 0.56rem;
        line-height: 0.56rem;
        vertical-align: top;
      }
    }
    span {
      display: inline-block;
      width: 1rem;
      height: 0.63rem;
      line-height: 0.63rem;
      text-align: center;
      vertical-align: top;
    }
	}
	.title{
			height: 0.96rem;
			line-height: 0.96rem;
	}
  .keywordTitle {
    a {
      display: inline-block;
      padding: 0 0.3rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      background-color: white;
      border-radius: 0.1rem;
      margin-right: 0.26rem;
    }
  }
}
</style>
