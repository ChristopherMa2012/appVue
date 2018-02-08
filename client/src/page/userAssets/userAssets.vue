<template>
	<section class="bodyContain">
		<page-head></page-head>
		<section class="content">
			<div class="tabBar ">
				<router-link to="/userAssets/com/discount" class="curPos">商家优惠券</router-link>
				<router-link to="/userAssets/com/redPaper">红包</router-link>
				<router-link to="/userAssets/com/">不可用 (<em>0</em>)</router-link>
			</div>
			 <router-view></router-view>
		</section>
	</section>
</template>
<script>
	import pageHead from '@/components/header/header'

	export default {
		components:{
			pageHead
		}
	}
</script>
<style lang='scss' scoped>
$red : #e6186f;
	.content {
		.tabBar{
			font-size: 0;
            a{
            	display: inline-block;
            	width:33%;
            	height: 0.8rem;
            	line-height: 0.8rem;
            	text-align: center;
            	&.curPos{
            		color:$red;
            		border-bottom:0.03rem solid $red;
            	}
            }
		}
	}
</style>