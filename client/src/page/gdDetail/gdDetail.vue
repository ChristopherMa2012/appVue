<template>
  <section class="bodyContain">
    <page-head></page-head>
    <section class="content">
      <!-- 轮播图 -->
      <div class="carousel">
        <ul class="imgList">
          <li>
            <img src="/src/assets/images/gdDetail/gdImg.jpg">
          </li>
          <li>
            <img src="/src/assets/images/gdDetail/gdImg.jpg">
          </li>
        </ul>
        <ul class="point">
          <li></li>
          <li class="curPos"></li>
        </ul>
      </div>
      <!-- 商品信息 -->
      <div class="gdInfo">
        <h3>西洋参片吉林敖东长白山西洋参切片含片花旗参片包邮</h3>
        <div class="price">
          <span>价格：<em>123.34</em></span>
          <span>123.23</span>
          <span>货到付款</span>
        </div>
        <div class="SN">
          编码： <span>345345345</span>
        </div>
        <div class="guaruntee">
          保障:
          <span>正品</span>
          <span>7天退换</span>
          <span>保障隐私</span>
        </div>
      </div>
      <!-- 商家保障  -->
      <div class="shopGuarantee">
        <div class="deliveryTo">
          <span>配送至: <em>广东省广州市</em></span>
        </div>
        <div class="deliveryFee">
          <span>最低快递价:<em>圆通速递6元</em></span>
        </div>
        <div class="shopTip">本商品由
          <span>佰川堂大药房旗舰店</span>
          <span>广西壮族自治区桂平市</span> 发货
        </div>
        <img src="/src/assets/images/gdDetail/guaruntee.jpg">
      </div>
      <!-- 购买信息 -->
      <div class="buyInfo">
        <div class="activity">
          <span>活动:<em>优惠券</em></span>
        </div>
        <div class="specification">
          <span>规格:</span>
          <select>
            <option>6瓶*10g</option>
            <option>6瓶*10g</option>
          </select>
        </div>
        <div class="num">
          <span>数量:</span>
          <div class="inputBox">
            <i>-</i>
            <input type="text" name="gdNum" value="1">
            <i>+</i>
          </div>
          <span>库存 <em>23432</em>件</span>
        </div>
      </div>
      <!-- 商家信息 -->
      <div class="shopInfo clearfix">
        <div class="fl">
          <div class="shopName">广州博爱要点</div>
          <div>广东省广州市</div>
          <div class="starClass">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div class="fr">
          <img src="/src/assets/images/gdDetail/telephoneIcon.jpg"> 4008855171
        </div>
      </div>
      <!-- 商品说明书/图文详情 -->
      <div class="gdInstructions">
        <div class="tab">
          <span>药品说明书</span>
          <span>图文详情</span>
        </div>
        <div class="instuctions">
          <ul>
            <li>
              <span>药品名称:</span>
              <span>同仁堂六味地黄丸</span>
            </li>
          </ul>
          <img src="/src/assets/images/gdDetail/checkPass.jpg">
        </div>
        <div class="imgDetail">
          <img src="/src/assets/images/gdDetail/gdImg.jpg">
        </div>
      </div>
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
$imgBg: #eeeeee;
$red:#df064e;
$fontGrey:#cccccc;
$borderGrey:#8d8d8d;

$imgSrc: '/src/assets/images/gdDetail/';
.content {
  background-color: white;
  .carousel {
    width: 6.8rem;
    height: 6.77rem;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    .imgList {
      li {
        width: 6.8rem;
        height: 6.8rem;
        background-color: $imgBg;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .point {
      position: absolute;
      bottom: 0.2rem;
      left: 3.3rem;
      li {
        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        background-color: #d8d8d8;
        &.curPos {
          background-color: $red;
        }
      }
    }
  }
  .gdInfo {
    width: 6.8rem;
    margin: 0 auto;
    h3 {
      padding-left: 0.75rem;
      background: url($imgSrc + 'rxIcon.jpg') no-repeat;
      background-size: 7%;
      background-position: 3% 12%;
      margin: 0.25rem 0;
      min-height: 0.35rem;
      line-height: 0.35rem;
    }
    .price{
      span,em{
        display: inline-block;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      span:first-child{
        margin-right: 0.35rem;
        em{
          color:$red;
          &:before{
            content:'￥';
            display: inline-block;
            height: 0.6rem;
            line-height: 0.6rem;
            color:$red;
          }
        }
      }
      span:nth-child(2){
        color:$fontGrey;
        &:before{
            content:'￥';
            display: inline-block;
            height: 0.6rem;
            line-height: 0.6rem;
        }
      }
      span:last-child{
            vertical-align: text-bottom;
        background-color: $red;
        color:white;
        padding: 0 0.05rem;
        border-radius: 0.05rem;
        height: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
        margin-left: .3rem;
        margin-top: 0.4rem;
      }
    }
    .SN{
      span{
        display: inline-block;
        height: .55rem;
        line-height: .55rem;
      }
    }
    .guaruntee{
      background-color: #f5f5f5;
        span{
          display: inline-block;
          height: .55rem;
          line-height: .55rem;
          margin-left: .25rem;
          &:before{
            display: inline-block;
            height: .28rem;
            width: .28rem;
            border-radius: 50%;
            border:0.01rem solid $borderGrey;
            line-height: .28rem;
          }
          &:first-child:before{
            content:'正';
          }
          &:nth-child(2):before{
            content:'退';
          }   
          &:last-child:before{
            content:'保';
          }                   
        }
    }
  }
}

</style>
