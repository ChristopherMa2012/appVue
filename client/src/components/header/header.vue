<template>
	<section class="header clearfix">
		  <span class="leftArr fl" @click="navBack"></span>
		  <h3 class="f18">{{pageTitle}}</h3>
		  <span class="more fr">
		  	<em>.</em>
		  	<em>.</em>
		  	<em>.</em>
		  </span>
	</section>
</template>
<script>
import router from "@/router/route"

export default {
  data() {
    return {
      pageTitle: "appVue"
    };
  },
  methods: {
    navBack: function() {
		router.go(-1);
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
  & em {
    display: inline-block;
    color: white;
    width: 0.18rem;
    height: 0.9rem;
    line-height: 0.72rem;
    vertical-align: middle;
    text-align: center;
    font-size: 18px;
  }
}
</style>