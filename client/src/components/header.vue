<template>
	<section class="header clearfix">
		  <span class="leftArr fl" @click="navBack"></span>
		  <h3 class="f18">{{params.pageTitle}}</h3>
		  <span class="more fr" v-show="params.moreBtnStatus">
       ...
		  </span>
      <span class="oper fr" v-if="params.editMode || false"  @click="edit()">
         编辑
      </span>
      <span class="oper fr" v-else  @click="complete()">
         完成
      </span>      
	</section>
</template>
<script>
import router from "@/router/route";
import {bus} from '@/common/bus';

export default {
  data(){
     return{
     }
  },
  props: ["params"],
  methods: {
    navBack: function() {
      router.go(-1);
    },
    edit(){
      bus.$emit('headEdit');
    },
    complete(){
      bus.$emit('headEditComplete')
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
  z-index: 7;
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
  & .oper{
    display: inline-block;
    height: 0.9rem;
    line-height: 0.9rem;
    padding: 0 0.2rem;
    color:white;
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