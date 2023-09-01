<template >
  <dv-full-screen-container>
    <div class="screen">
      <div class="header">
        <div class="after" @click="jump('monitor', '/before/monitor')">
          <div :class="check === 'monitor' ? 'underline' : ''">监控画面</div>
        </div>
        <div class="after" @click="jump('device', '/before/device')">
          <div :class="check === 'device' ? 'underline' : ''">设备管理</div>
        </div>
        <div class="after" @click="jump('data', '/before/data')">
          <div :class="check === 'data' ? 'underline' : ''">数据监测</div>
        </div>
        <div class="main">
          <div style="border-bottom: 2px solid #bbbbbb; margin-bottom: 0.8%">
            海上光伏数据大屏
          </div>
          <div style="font-size: 16px">Offshore photovoltatics</div>
        </div>
        <div class="after" @click="jump('warn', '/before/warn')">
          <div :class="check === 'warn' ? 'underline' : ''">预警管理</div>
        </div>
        <div class="after" @click="jump('report', '/before/report')">
          <div :class="check === 'report' ? 'underline' : ''">报表管理</div>
        </div>
        <div class="after" @click="jump('log', '/before/log')">
          <div :class="check === 'log' ? 'underline' : ''">系统日志</div>
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
      cursor: pointer;
    }

    .main {
      flex-direction: column;
      font-size: 25px;
      width: 30%;
      background: #464dd2;
    }
    .after {
      height: 60%;
      width: 10%;
      font-size: 18px;
      .underline {
        border-bottom: 3px solid #4b77d5;
      }
      background: #3137a7;
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
