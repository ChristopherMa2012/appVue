<template>
  <section class="bodyContain">
    <page-head></page-head>
    <section class="content">
      <section class="indexTop">
        <div>
          <svg version="1.1" baseProfile="full" width="0.37rem" height="0.37rem" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0.185rem" cy="0.175rem" r="0.175rem" stroke-width="0.03rem" stroke="grey" fill="white" />
            <line x1="0.3rem" x2="0.36rem" y1="0.3rem" y2="0.36rem" stroke="grey" stroke-width="0.04rem" />
          </svg>
          <input type="text" placeholder="请输入药品名" @click="searchAction">
        </div>
      </section>
      <section class="hotRecommend">
        <h3 class="f14">热销推荐</h3>
      </section>
      <ul class="tabBar clearfix">
        <li v-for="(item,index) in categoryArr" :class="{isActive:index == tabNum }" @click="tabChange(index)" :key="index">{{item}}</li>
      </ul>
      <section class="tabBarContent">
        <ul class="clearfix" v-for="(item,index) in categoryArr" v-show="index == tabNum" :key="index">
          <li v-for="item in goodsList[index]" :key="item.gdSN">
            <figure>
              <router-link :to="{path:'/goodDetail/'+ item.gdSN}">
                <div>
                  <img :src="item.imgUrl">
                </div>
                <figcaption>
                  <h3 class="f12">{{item.gdTitle}}</h3>
                  <div class="clearfix">
                    <span class="fl f18">{{item.price}}</span>
                    <span class="fr f18">{{item.originPrice}}</span>
                  </div>
                </figcaption>
              </router-link>
            </figure>
          </li>
        </ul>
      </section>
    </section>
    <page-foot></page-foot>
  </section>
</template>
<script>
import pageHead from '@/components/header'
import pageFoot from '@/components/footer'
import { mapState } from 'vuex'
import { apiUrl } from '@/config/baseConfig'

export default {
  data() {
    return {
      isActive: false,
      tabNum: 0,
      goodsList: []
    }
  },
  computed: {
    ...mapState({
      categoryArr: state => state.home.categoryArr
    })
  },
  created: function() {
    this.pageInit()
  },

  methods: {
    pageInit() {
      Ma.fetch({
        url: apiUrl + 'goodsList',
        method: 'get',
        callback: res => {
          this.goodsList = res.goodsList
        }
      })
    },
    searchAction() {
      this.$router.push('/search')
    },
    tabChange(index) {
      this.tabNum = index
    }
  },
  components: {
    pageHead,
    pageFoot
  }
}
</script>
<style lang="scss" scoped>
$lightgrey: lightgrey;
$red: #e6186f;
$imgSrc: '../../assets/images/index/';

.indexTop {
  height: 3.6rem;
  background: url($imgSrc+'topBg.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden;
  div {
    width: 6rem;
    height: 0.6rem;
    background-color: white;
    margin: 2.52rem auto 0;
    input {
      width: 5.3rem;
      height: 0.6rem;
      line-height: 0.6rem;
      vertical-align: top;
    }
    svg {
      margin: 0.12rem 0 0 0.18rem;
    }
  }
}

.hotRecommend {
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: 0.01rem solid $lightgrey;
  position: relative;
  h3 {
    display: block;
    position: absolute;
    height: 0.3rem;
    line-height: 0.3rem;
    width: 1.63rem;
    left: 0;
    right: 0;
    bottom: -0.15rem;
    margin: auto;
    text-align: center;
    background-color: white;
  }
}

ul.tabBar {
  border-bottom: 0.01rem solid $lightgrey;
  margin-top: 0.43rem;
  li {
    display: block;
    height: 0.6rem;
    line-height: 0.6rem;
    width: 25%;
    float: left;
    text-align: center;
    &.isActive {
      color: $red;
      border-bottom: 0.03rem solid $red;
    }
  }
}

.tabBarContent {
  ul {
    padding: 0.3rem 0 0 0.3rem;
    background-color: white;
    li {
      display: block;
      margin: 0.15rem;
      width: 3.02rem;
      float: left;
      figure > a > div {
        width: 2.98rem;
        height: 2.98rem;
        border: 0.02rem solid $lightgrey;
        margin: auto;
        padding: 0.3rem 0;
        img {
          display: block;
          width: 2.4rem;
          height: 2.4rem;
          margin: auto;
        }
      }
      figcaption h3 {
        height: 0.5rem;
        line-height: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      figcaption div span {
        display: block;
        height: 0.4rem;
        line-height: 0.4rem;
        color: $red;
        &:before {
          content: '￥';
          display: inline-block;
          color: $red;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
