<template>
  <ul class="discountList">
    <li class="clearfix">
      <div class="discVal fl">100</div>
      <div class="discDet fl">
        <div>优惠券：满2000元使用</div>
        <div class="discShop">该券由金康大药房提供</div>
        <div>2016-05-18至2016-12-31</div>
      </div>
    </li>
    <li class="clearfix">
      <div class="discVal fl">100</div>
      <div class="discDet fl">
        <div>优惠券：满2000元使用</div>
        <div class="discShop">该券由金康大药房提供</div>
        <div>2016-05-18至2016-12-31</div>
      </div>
    </li>    
  </ul>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
$red: #f40e24;
$borderColor: #e7e7e7;
$bgColor: #f0f2f5;
ul {
  padding: 0.3rem 0.38rem 0 0.38rem;
  li {
    border: 0.01rem solid $borderColor;
    width: 100%;
    background-color: white;
    margin-bottom: 0.15rem;
    .discVal {
      width: 1.88rem;
      height: 1.58rem;
      line-height: 1.58rem;
      color: $red;
      font-size: 18px;
      text-align: center;
      position: relative;
      &:before {
        content: "￥";
        width: 0.2rem;
        display: inline-block;
        color: $red;
        font-size: 12px;
      }
      &:after {
        content: "";
        width: 0.18rem;
        height: 0.18rem;
        border-radius: 50%;
        position: absolute;
        background-color: $bgColor;
        right: -0.09rem;
        bottom: -0.09rem;
      }
    }
    .discDet {
      padding: 0.2rem 0 0 0.28rem;
      position: relative;
      height: 100%;
      div {
        height: 0.4rem;
        line-height: 0.4rem;
        width: 4.2rem;
        overflow: hidden;
        &:first-child {
          font-weight: bold;
        }
      }
      &:before {
        content: "";
        width: 0.18rem;
        height: 0.18rem;
        border-radius: 50%;
        position: absolute;
        background-color: $bgColor;
        left: -0.09rem;
        top: -0.09rem;
      }
    }
  }
}
</style>
