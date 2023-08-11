<template >
  <dv-full-screen-container>
    <div class="screen">
      <div class="header">this is header</div>
      <div class="middle">this is middle</div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </dv-full-screen-container>
</template>
<script>
export default {
  name: "IndexVc",
};
</script>
<style lang="scss" scoped>
.screen {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .header,
  .middle,
  .container {
    box-sizing: border-box;
  }
  .header {
    height: 7%;
    background: pink;
  }
  .middle {
    height: 4%;
    background: skyblue;
  }
  .container {
    flex: 1;
    background: orange;
  }
}
</style>