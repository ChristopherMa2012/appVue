<template>
  <section class="footer clearfix">
    <router-link to="/search" class="fl">
      <figure>
        <svg version="1.1" baseProfile="full" width="0.37rem" height="0.37rem" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0.185rem" cy="0.175rem" r="0.175rem" stroke-width="0.03rem" stroke="grey" fill="white" />
          <line x1="0.3rem" x2="0.36rem" y1="0.3rem" y2="0.36rem" stroke="grey" stroke-width="0.04rem" />
        </svg>
        <figcaption class="f12">搜索药品</figcaption>
      </figure>
    </router-link>
    <div class="fr" @click="toMyOrder">
      <figure>
        <svg version="1.1" baseProfile="full" width="0.36rem" height="0.36rem" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0.01rem" width="0.36rem" height="0.35rem" rx="0.1rem" ry="0.1rem" stroke="grey" stroke-width="0.03rem" fill="white" />
          <line x1="0.12rem" x2="0.24rem" y1="0" y2="0" stroke-width="0.04rem" stroke="grey" />
          <line x1="0.09rem" x2="0.12rem" y1="0" y2="0" stroke-width="0.07rem" stroke="white" />
          <line x1="0.24rem" x2="0.28rem" y1="0" y2="0" stroke-width="0.07rem" stroke="white" />
          <line x1="0.08rem" x2="0.28rem" y1="0.1rem" y2="0.1rem" stroke-width="0.03rem" stroke="grey" />
          <line x1="0.08rem" x2="0.28rem" y1="0.1rem" y2="0.1rem" stroke-width="0.03rem" stroke="grey" />
          <line x1="0.08rem" x2="0.28rem" y1="0.16rem" y2="0.16rem" stroke-width="0.03rem" stroke="grey" />
          <line x1="0.08rem" x2="0.28rem" y1="0.23rem" y2="0.23rem" stroke-width="0.03rem" stroke="grey" />
        </svg>
        <figcaption class="f12">我的订单</figcaption>
      </figure>
    </div>
  </section>
</template>
<script>
import fetch from '@/utils/fetchData';
import { apiUrl } from '@/config/baseConfig';
export default {
  methods: {
    toMyOrder() {
      fetch({
        url: apiUrl + 'isLogin',
        method: 'get'
      }).then(res => {
        if(res.isLogin){
          this.$router.push('/myOrder');
        }else{
          this.$router.push('/login');
        }
      }).catch(e => {
        console.log(e);
      })
    }
  }
}

</script>
<style lang="scss" scoped>
$grey:grey;
section {
  width: 7.2rem;
  height: 0.85rem;
  border-top: 1px solid $grey;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 7;
  background-color: white;
  div,
  a {
    display: block;
    width: 50%;
    figure {
      display: inline-block;
      font-size: 0;
      width: 49%;
      padding-top: 0.08rem;
      figcaption {
        text-align: center;
        height: 0.41rem;
        line-height: 0.41rem;
      }
    }
  }
}

</style>
