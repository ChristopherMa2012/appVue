<template>
  <section class="bodyContain">
    <page-head></page-head>
    <section class="content">
      <div class="outline">
        <span>您现有积分：<i>234</i></span>
        <span>可抵扣：<i>12.23</i></span>
      </div>
      <h1>积分问题</h1>
      <div class="question">
        <h4>Q1：怎么获得积分？</h4>
        <p>
          在appvue每消费1元即可获1积分，订单整单金额（含运费）整取（四舍五入）计入会员积分；积分在订单状态变为“已完成”后发放至账户。
        </p>
        <h4>Q2：提交订单的时候使用了积分，但是后来订单取消了，积分会返还吗？</h4>
        <p>
          会的，订单关闭后积分会在三个工作日内返还到您的账户里；订单在交易成功前发生部分退款，需扣减退款金额产生的等额积分。
        </p>
        <h4>Q3：积分如何使用？</h4>
        <p>
          <ul>
            <li>积分可用于在appVue进行消费时抵扣部分金额，订单付款方式选择在线支付和货到付款均可使用；</li>
            <li>每200积分可抵扣1元；</li>
            <li>积分不能兑换现金，不能抵扣运费；</li>
            <li>积分使用不设找零，如积分可抵扣金额大于订单金额，则该订单需支付0.01元.</li>
          </ul>
        </p>
      </div>
      <div class="right">积分制度最终解释权归appVue所有。</div>
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
<style lang='scss' scoped>
$red: #f40e24;
$borderColor: #e7e7e7;
$bgColor:#f0f2f5;
$imgSrc: '/src/assets/images/myPoint/';
.content {
  h1 {
    background-color: white;
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.3rem;
  }
  .outline {
    padding-left: 1.45rem;
    background: url($imgSrc + 'pointIcon.png') no-repeat;
    background-size: 0.5rem 0.5rem;
    background-position: 0.5rem 0.4rem;
    background-color: white;
    span {
      display: inline-block;
      height: 1.36rem;
      line-height: 1.36rem;
      i {
        margin-right: 0.6rem;
        color: $red;
      }
      &:last-child i {
        &:before {
          content: '￥';
          display: inline-block;
          width: 0.2rem;
          color: $red;
        }
      }
    }
  }
  .question {
    padding: 0 0.3rem;
    overflow: hidden;
    h4 {
      line-height: 0.4rem;
    }
    p {
      margin-bottom: 0.4rem;
      ul {
        padding-left: 0.4rem;
        li {
          list-style-type: disc;
          line-height: 0.4rem;
        }
      }
    }
  }
  .right {
    margin-bottom: 0.65rem;
    padding-left: 0.3rem;
    height: 0.8rem;
    line-height: 0.3rem;
  }
}

</style>
