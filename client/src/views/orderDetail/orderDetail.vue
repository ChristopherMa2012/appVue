<template>
  <section class="bodyContain">
    <page-head></page-head>
    <section class="content">
      <div class="receiverInfo">
        <div class="name">李先生 13580563555</div>
        <div class="addr">
          广东省广州市番禺区大学城广东工业大学下一站广东省广州市海珠赤岗分拣
        </div>
      </div>
      <div class="rule"></div>
      <div class="expressProgress">
        <h3>物流状态</h3>
        <div class="express">顺丰速运</div>
        <div class="statusInfo">
          <ul>
            <li>
              <div class="info">[广州运转中心]已发出，下一站广东省广州市海珠赤岗分拣站下一站广东省广州市海珠赤岗分拣站</div>
              <div class="date">2016-01-25 15:26:20</div>
            </li>
            <li>
              <div class="info">[广州运转中心]已发出，下一站广东省广州市海珠赤岗分拣站</div>
              <div class="date">2016-01-25 15:26:20</div>
            </li>
          </ul>
        </div>

      </div>
      <div class="orderStatus">
        <div>
          <span>状态：</span>
          <span style="color:#e6186f">待收货</span>
        </div>
        <div>
          <span>支付方式：</span>
          <span>微信支付</span>
        </div>
        <div>
          <span>订单编号：</span>
          <span>1324234234324</span>
        </div>
        <div>
          <span>下单时间：</span>
          <span>2017-8-8 12:23:00</span>
        </div>
        <button>确认收货</button>
      </div>
      <div class="orderInfo">
        <div class="shopName">
          <span>济南健民大药房</span>
          <span>联系客服</span>
        </div>
        <ul class="gdListCon">
          <li class="clearfix">
            <img src="~@/assets/images/myOrder/gdImg.png" alt="" class="fl">
            <div class="gdInfo fl">
              <h3>陈李济舒筋健腰丸舒经活络腰间盘腰椎痛白云山</h3>
              <div class="spec">规格：
                <span>0.9g/片*6片*3板</span>
              </div>
            </div>
            <div class="priceNum fr">
              <div class="priceAll">213.23</div>
              <div class="num">X123</div>
            </div>
          </li>
          <li class="clearfix">
            <img src="~@/assets/images/myOrder/gdImg.png" alt="" class="fl">
            <div class="gdInfo fl">
              <h3>陈李济舒筋健腰丸舒经活络腰间盘腰椎痛白云山</h3>
              <div class="spec">规格：
                <span>0.9g/片*6片*3板</span>
              </div>
            </div>
            <div class="priceNum fr">
              <div class="priceAll">213.23</div>
              <div class="num">X123</div>
            </div>
          </li>
        </ul>
        <div class="invoice">发票抬头：
          <span>个人</span>
        </div>
        <div class="note">备注：
          <span>无</span>
        </div>
      </div>
      <div class="total">
        <ul>
          <li>
            <span>合计：</span>
            <span>￥0.00</span>
          </li>
          <li>
            <span>运费：</span>
            <span>￥0.00</span>
          </li>
          <li>
            <span>红包：</span>
            <span>￥0.00</span>
          </li>
          <li>
            <span>优惠券：</span>
            <span>￥0.00</span>
          </li>
          <li>
            <span>积分兑现：</span>
            <span>￥0.00</span>
          </li>
          <li>
            <span>可获积分：</span>
            <span>23</span>
          </li>
        </ul>
        <div class="totalPrice">实付总额：
          <span>0.00</span>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import pageHead from '@/components/header'

export default {
  components: {
    pageHead
  }
}
</script>
<style lang="scss" scoped>
$red: #e6186f;
$borderGrey: #cdd3ce;
$imgSrc: '../../assets/images/orderDetail/';
.content {
  .receiverInfo {
    padding-bottom: 0.2rem;
    .name {
      height: 0.52rem;
      line-height: 0.52rem;
      font-weight: bold;
      padding-left: 0.8rem;
    }
    .addr {
      line-height: 0.3rem;
      max-height: 0.6rem;
      width: 6.4rem;
      overflow: hidden;
      padding-left: 0.8rem;
      background: url($imgSrc+'location.png') no-repeat;
      background-size: 0.25rem 0.3rem;
      word-break: break-all;
      background-position: 0.2rem 0;
    }
  }
  .rule {
    width: 7.5rem;
    height: 0.05rem;
    background: url($imgSrc+'borderImg.png') repeat;
  }
  .expressProgress {
    margin-top: 0.2rem;
    padding: 0.2rem 0;
    h3 {
      height: 0.6rem;
      line-height: 0.6rem;
      padding-left: 0.48rem;
      font-weight: normal;
    }
    .express {
      height: 0.64rem;
      line-height: 0.64rem;
      padding-left: 0.48rem;
      font-weight: bold;
    }
    .statusInfo {
      width: 6.8rem;
      margin: 0 auto;
      background-color: #f9f9f9;
      padding: 0.26rem 0 0.26rem 0.38rem;
      ul {
        padding-left: 0.3rem;
        border-left: 0.01rem solid $borderGrey;
        li {
          position: relative;
          &:first-child:before {
            background-color: #0bb92c;
            border: 0.04rem solid #adffca;
            left: -0.39rem;
          }
          &:before {
            content: '';
            width: 0.1rem;
            height: 0.1rem;
            border-radius: 50%;
            background-color: $borderGrey;
            position: absolute;
            z-index: 2;
            left: -0.35rem;
            top: 0.1rem;
          }
          .info {
            line-height: 0.31rem;
          }
          .date {
            line-height: 0.43rem;
            height: 0.43rem;
          }
        }
      }
    }
  }
  .orderStatus {
    margin: 0.2rem 0;
    padding: 0.18rem 0.3rem 0.25rem;
    div span {
      display: inline-block;
      height: 0.52rem;
      line-height: 0.52rem;
    }
    button {
      width: 6.58rem;
      height: 0.62rem;
      line-height: 0.62rem;
      text-align: center;
      background-color: white;
      border: 0.01rem solid #787b7e;
      margin-top: 0.2rem;
      border-radius: 0.2rem;
    }
  }
  .orderInfo {
    padding: 0 0.3rem 0.15rem;
    margin-bottom: 0.2rem;
    .shopName span {
      display: inline-block;
      height: 0.7rem;
      line-height: 0.7rem;
      font-weight: bold;
    }
    .gdListCon {
      background-color: #fafafa;
      li {
        padding: 0.1rem 0;
        border-bottom: 0.03rem solid white;
        img {
          width: 0.98rem;
          height: 0.98rem;
          margin-right: 0.17rem;
        }
        h3 {
          display: block;
          width: 4rem;
          line-height: 0.33rem;
          max-height: 0.66rem;
          overflow: hidden;
          font-weight: bold;
        }
        .priceAll {
          font-weight: bold;
        }
        .num {
          text-align: right;
          margin-top: 0.3rem;
        }
      }
    }
    .invoice,
    .note {
      margin-top: 0.15rem;
      span {
        display: inline-block;
        height: 0.5rem;
        line-height: 0.5rem;
      }
    }
  }
  .total {
    padding: 0.12rem 0.3rem 0;
    ul {
      border-bottom: 0.02rem solid $borderGrey;
      li {
        height: 0.5rem;
        line-height: 0.5rem;
        clear: both;
        & > span:first-child {
          float: left;
        }
        & > span:last-child {
          float: right;
          color: $red;
        }
      }
    }
    .totalPrice {
      text-align: right;
      height: 0.8rem;
      line-height: 0.8rem;
      font-weight: bold;
      span {
        display: inline-block;
        height: 0.8rem;
        line-height: 0.8rem;
        font-weight: bold;
        color: $red;
        &:before {
          content: '￥';
          display: inline-block;
          width: 0.2rem;
          line-height: 0.8rem;
        }
      }
    }
  }
}
</style>
