<template >
  <dv-full-screen-container>
    <div class="screen">
      <div class="header">
        <div class="after" @click="jump('monitor', '/before/monitor')">
          <dv-border-box-13
            ><div class="option">
              <span :class="check === 'monitor' ? 'underline' : ''"
                >监控画面</span
              >
            </div></dv-border-box-13
          >
        </div>
        <div class="after" @click="jump('device', '/before/device')">
          <dv-border-box-10
            ><div class="option">
              <span :class="check === 'device' ? 'underline' : ''"
                >设备管理</span
              >
            </div></dv-border-box-10
          >
        </div>
        <div class="after" @click="jump('data', '/before/data')">
          <dv-border-box-9
            ><div class="option">
              <span :class="check === 'data' ? 'underline' : ''">数据监测</span>
            </div></dv-border-box-9
          >
        </div>
        <div class="main" @click="jump('', '/before/home')">
          <dv-border-box-12>
            <div class="title">
              <div
                style="border-bottom: 2px solid #bbbbbb; margin-bottom: 0.8%"
              >
                海上光伏数据大屏
              </div>
              <div style="font-size: 16px">Offshore photovoltatics</div>
            </div>
          </dv-border-box-12>
        </div>
        <div class="after" @click="jump('warn', '/before/warn')">
          <dv-border-box-9
            style="transform: scaleX(-1); transform-origin: center"
            ><div class="option">
              <span
                :class="check === 'warn' ? 'underline' : ''"
                style="transform: scaleX(-1)"
                >预警管理</span
              >
            </div></dv-border-box-9
          >
        </div>
        <div class="after" @click="jump('report', '/before/report')">
          <dv-border-box-10
            style="transform: scaleX(-1); transform-origin: center"
            ><div class="option">
              <span
                :class="check === 'report' ? 'underline' : ''"
                style="transform: scaleX(-1)"
                >报表管理</span
              >
            </div></dv-border-box-10
          >
        </div>
        <div class="after" @click="jump('log', '/before/log')">
          <dv-border-box-13
            style="transform: scaleX(-1); transform-origin: center"
            ><div class="option">
              <span
                :class="check === 'log' ? 'underline' : ''"
                style="transform: scaleX(-1)"
                >系统日志</span
              >
            </div></dv-border-box-13
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
  methods: {
    jump(module, path) {
      this.check = module;
      this.$router.push(path);
    },
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
    height: 7%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;

    .main,
    .after {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 94%;
      perspective: 1000px;
      cursor: pointer;
    }

    .main {
      flex-direction: column;
      font-size: 25px;
      width: 20%;
      // background: #464dd2;
      overflow: hidden;
      .title {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .after {
      height: 70%;
      width: 10%;
      font-size: 18px;
      .underline {
        border-bottom: 3px solid #4b77d5;
        color: #20c8fb;
        text-shadow: 0 0 10px #26c8f9;
        transition: 1s;
        pointer-events: none;
      }
      .option {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .option:hover {
      background-color: #039dcc; /* 设置背景色 */
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.4); /* 设置发光效果 */
      transition: 1.7s;
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
