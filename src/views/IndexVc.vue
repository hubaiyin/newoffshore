<template >
  <dv-full-screen-container>
    <div class="screen">
      <div class="header">
        <div class="after" @click="check = 'monitor'">
          <router-link to="/before/monitor"
            ><div :class="check === 'monitor' ? 'underline' : ''">
              监控画面
            </div></router-link
          >
        </div>
        <div class="after" @click="check = 'device'">
          <router-link to="/before/device"
            ><div :class="check === 'device' ? 'underline' : ''">
              设备管理
            </div></router-link
          >
        </div>
        <div class="after" @click="check = 'data'">
          <router-link to="/before/data"
            ><div :class="check === 'data' ? 'underline' : ''">
              数据监测
            </div></router-link
          >
        </div>
        <div class="main">
          <div style="border-bottom: 2px solid #bbbbbb">海上光伏数据大屏</div>
          <div style="font-size: 14px">Offshore photovoltatics</div>
        </div>
        <div class="after" @click="check = 'warn'">
          <router-link to="/before/warn"
            ><div :class="check === 'warn' ? 'underline' : ''">
              预警管理
            </div></router-link
          >
        </div>
        <div class="after" @click="check = 'report'">
          <router-link to="/before/report"
            ><div :class="check === 'report' ? 'underline' : ''">
              报表管理
            </div></router-link
          >
        </div>
        <div class="after" @click="check = 'log'">
          <router-link to="/before/log"
            ><div :class="check === 'log' ? 'underline' : ''">
              系统日志
            </div></router-link
          >
        </div>
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
  data() {
    return {
      check: "",
    };
  },
  mounted() {
    console.log(this.$route.path);
    let str = this.$route.path;
    let arr = str.split("/");
    console.log(arr);
    this.check = arr[2];
    console.log(this.check);
  },
};
</script>
<style lang="scss" scoped>
.screen {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(#143bae, #132d78);
  .header,
  .middle,
  .container {
    box-sizing: border-box;
  }
  .header {
    height: 9%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #b7c0d5;

    .main,
    .after {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 94%;
    }

    .main {
      flex-direction: column;
      font-size: 23px;
      width: 30%;
      background: #464dd2;
    }
    .after {
      height: 60%;
      width: 10%;
      .underline {
        border-bottom: 3px solid #4b77d5;
      }
    }
  }
  .container {
    flex: 1;
  }

  a {
    text-decoration: none;
    color: #b7c0d5;
  }

  .router-link-active {
    text-decoration: none;
  }
}
</style>
