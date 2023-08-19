<template>
  <div class="surface">
    <div class="left">
      <div class="header"></div>
      <div class="footer"></div>
    </div>
    <div class="center">
      <div class="showModel" ref="model"></div>
      <div class="inform"></div>
    </div>
    <div class="right">
      <div class="header"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeVc",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.surface {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0.5%;
  .left,
  .right {
    width: 18%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    .header {
      background: yellow;
      height: 32%;
      width: 100%;
    }
    .footer {
      height: 67%;
      background: rebeccapurple;
      width: 100%;
    }
  }

  .center {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 0.5%;
    justify-content: space-between;
    .showModel {
      height: 79.5%;
      background: pink;
    }
    .inform {
      height: 19.5%;
      background: skyblue;
    }
  }

  .right {
    .header,
    .footer {
      height: 49.5%;
      width: 100%;
      background: yellow;
    }
  }
}
</style>
