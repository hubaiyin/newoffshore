<template >
  <dv-full-screen-container>
    <div class="screen">
      <div class="header">
        <div class="after">
          <router-link to="/before/monitor">监控画面</router-link>
        </div>
        <div class="after">
          <router-link to="/before/device">设备管理</router-link>
        </div>
        <div class="after">
          <router-link to="/before/data">数据监测</router-link>
        </div>
        <div class="main">
          <router-link to="/before/home">海上光伏数据大屏</router-link>
        </div>
        <div class="after">
          <router-link to="/before/warn">预警管理</router-link>
        </div>
        <div class="after">
          <router-link to="/before/report">报表管理</router-link>
        </div>
        <div class="after">
          <router-link to="/before/log">系统日志</router-link>
        </div>
      </div>
      <div class="middle">
        <div class="time">2023年11月4日 14:51</div>
        <div class="login">登录｜注册</div>
      </div>
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
    height: 9%;
    background: pink;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .main,
    .after {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 94%;
      background: rosybrown;
    }

    .main {
      font-size: 22px;
      width: 30%;
    }
    .after {
      height: 60%;
      width: 10%;
      background: skyblue;
    }
  }
  .middle {
    height: 4%;
    background: skyblue;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 2%;
    align-items: center;
    .time {
      height: 100%;
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .container {
    flex: 1;
    background: orange;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .router-link-active {
    text-decoration: none;
  }
}
</style>
