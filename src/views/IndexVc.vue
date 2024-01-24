<template >
  <dv-full-screen-container>
    <div class="screen">
      <div class="header">
        <div class="title">
          <div class="text">海上光伏可视化大屏</div>
        </div>
        <div class="mainNav">
          <div class="nav">
            <div class="btnList">
              <div @click="jump('', '/before/home')">
                <span>首页总览</span>
              </div>
              <div @click="jump('data', '/before/data')">
                <span>数据监测</span>
              </div>
              <div @click="jump('device', '/before/device')">
                <span>设备管理</span>
              </div>
              <div @click="jump('monitor', '/before/monitor')">
                <span>监控画面</span>
              </div>
              <div @click="jump('warn', '/before/warn')">
                <span>预警管理</span>
              </div>
              <div @click="jump('report', '/before/report')">
                <span>报表管理</span>
              </div>
              <div @click="jump('log', '/before/log')">
                <span>系统日志</span>
              </div>
            </div>
          </div>
          <div class="date">
            <span>{{ weeks[week] }}</span>
            <span>{{ time }}</span>
          </div>
          <div class="register">
            <div class="login">注册 | 登录</div>
          </div>
        </div>
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
      <img src="../assets/image/circle.png" alt="" class="img" />
    </div>
  </dv-full-screen-container>
</template>
<script>
import moment from "moment";
export default {
  name: "IndexVc",
  data() {
    return {
      check: "",
      time: "",
      weeks: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      week: 0,
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

    this.week = moment().format("d");
    this.time = moment().format("HH:mm:ss");
    setInterval(() => {
      this.time = moment().format("HH:mm:ss");
    }, 1000);
    console.log(this.week);
  },
};
</script>
<style lang="scss" scoped>
.screen {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("../assets/image/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .img {
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    left: 9%;
  }
  .header {
    background: linear-gradient(#193eae, #223da7);
  }
  .header,
  .middle,
  .container {
    box-sizing: border-box;
    z-index: 999;
  }

  .header {
    height: 8%;
    width: 100%;
    // border: 2px solid white;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .title {
      border: 3px solid rgb(29, 71, 222);
      box-shadow: -10px -10px 20px 3px rgb(134, 158, 244) inset;
      width: 25%;
      height: 98%;
      transform: skewX(-20deg);
      position: relative;
      right: 0.9%;
      .text {
        // background-color: pink;
        // width: 2px solid pink;
        height: 100%;
        width: 100%;
        font-size: calc(26px + 1vw);
        font-family: "YouShe";
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: skewX(20deg);
      }
    }
    .mainNav {
      border: 3px solid rgba(120, 142, 255, 0.8);
      border-top: 0px;
      border-left: 0px;
      border-right: 0px;
      padding: 5px;
      width: 75%;
      height: 70%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      // left: 0.7%;
      /* .nav,
      .date,
      .register {
        transform: skewX(20deg);
      } */
      .nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        // border: 2px solid greenyellow;
        width: 70%;
        padding-left: 2%;
        .btnList {
          display: flex;
          width: 100%;
          div {
            // background: #2446f0;
            background: #2142e7;
            color: white;
            border-left: 3px solid;
            border-left-color: rgba(6, 43, 228, 0.8);
            box-shadow: 0px 5px 8px -3px rgb(106, 144, 235);
            padding: 10px 20px;
            display: inline-block;
            font-size: calc(12px + 0.4vh);
            font-weight: 600;
            width: 10%;
            text-transform: uppercase;
            cursor: pointer;
            transform: skew(-21deg);
            text-align: center;
          }

          span {
            display: inline-block;
            transform: skew(21deg);
            position: relative;
          }

          div::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 100%;
            left: 0;
            background: #3b5cff;
            opacity: 0;
            z-index: -1;
            transition: all 0.5s;
          }

          div:hover {
            color: #fff;
          }

          div:hover::before {
            left: 0;
            right: 0;
            opacity: 1;
          }
        }
      }
      .date {
        border: 2px solid rgb(150, 180, 251);
        border-radius: 5px;
        width: 11%;
        // height: 80%;
        color: rgb(150, 180, 251);
        padding: 0.5%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .register {
        // border: 2px solid greenyellow;
        width: 10%;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
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
