<template>
  <section class="popupMask">
    <section class="popup">
      <div class="title">提示</div>
      <div class="popupBody">
        <span>asdfsdafsadffffdasdfsdafsdf</span>
      </div>
      <div class="oper clearfix">
        <span class="fl">确定</span>
        <span class="fr">取消</span>
      </div>
    </section>
  </section>
</template>
<script>
export default {

}

</script>
<style lang='scss' scoped>
// 弹框
.popupMask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  .popup {
    position: absolute;
    z-index: 6;
    width: 5rem;
    height: 3.1rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: white;
    border-radius: 0.2rem;
    overflow: hidden;
    .title {
      width: 100%;
      text-align: center;
      height: 0.5rem;
      line-height: 0.5rem;
      color: white;
      background-color: cornflowerblue;
    }
    .popupBody {
      height: 1.8rem;
      text-align: center;
      line-height: 2rem;
      span {
        display: inline-block;
        min-height: 0.3rem;
        max-height: 2rem;
        line-height: 0.3rem;
        width: 3rem;
        word-wrap: break-word;
        overflow: hidden;
      }
    }
    .oper {
      border-top: 0.01rem solid #e5e5e5;
      span {
        display: block;
        width: 50%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        &:first-child {
          border-right: 0.01rem solid #e5e5e5;
        }
      }
    }
  }
}

</style>
