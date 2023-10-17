<template>
  <div class="surface">
    <div class="left">
      <div class="header">
        <dv-border-box-12>
          <div class="eletronic">
            <div class="header"></div>
            <div class="footer"></div>
          </div>
        </dv-border-box-12>
      </div>
      <div class="footer">
        <dv-border-box-12>
          <div class="mapContainer">
            <div class="inform">
              <div class="title">项目信息</div>
              <div class="content">
                <div class="text">项目名称：天津市海上光伏可视化项目</div>
                <div class="text">所在城市：天津市</div>
                <div class="text">详细地址：西青区宾水西道391号</div>
                <div class="text">项目编号：TJ20230917</div>
                <div class="text">占地面积：6239公顷</div>
                <div class="text">安装角度：北偏西38°</div>
                <div class="text">布置方式：竖向布置</div>
              </div>
            </div>
            <div class="map">
              <map-vc :AMap="AMap"></map-vc>
            </div>
          </div>
        </dv-border-box-12>
      </div>
    </div>
    <div class="center">
      <div class="head">
        <div>设备#A21023</div>
        <div>天津</div>
        <div>{{ weatherString + temperature + "℃" }}</div>
      </div>
      <div class="showModel" ref="model"></div>
      <div class="inform">
        <dv-border-box-12>
          <div class="device">
            <div class="title">
              <div class="text">设备统计</div>
              <div class="img"></div>
            </div>
            <div class="content">
              <div class="top">
                <div class="number">设备总数 9</div>
                <div class="number">在线数量 7</div>
                <div class="number">离线数量 2</div>
              </div>
              <div class="bottom">
                <div class="leftchart">
                  <blue-line></blue-line>
                </div>
                <div class="rightchart"></div>
              </div>
            </div>
          </div>
        </dv-border-box-12>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <div class="leftBar">
          <div class="color" style="background-color: #75fbad"></div>
          <div class="titleContent">设备信息</div>
        </div>
        <div class="rightContent">
          <div class="inform">
            <div class="text">安装时间</div>
            <div class="text">2023-09-17</div>
          </div>
          <div class="inform">
            <div class="text">设备编号</div>
            <div class="text">#AC231</div>
          </div>
          <div class="inform">
            <div class="text">设备型号</div>
            <div class="text">A型</div>
          </div>
          <div class="inform">
            <div class="text">采集时长</div>
            <div class="text">1927分钟</div>
          </div>
          <div class="inform">
            <div class="text">设备状态</div>
            <div class="text">在线</div>
          </div>
        </div>
      </div>
      <div class="body">
        <div class="leftBar">
          <div class="color" style="background-color: #a723f6"></div>
          <div class="titleContent">测点信息</div>
        </div>
        <div class="rightContent">
          <div class="inform">
            <div class="text">安装时间</div>
            <div class="text">2023-09-17</div>
          </div>
          <div class="inform">
            <div class="text">设备编号</div>
            <div class="text">#AC231</div>
          </div>
          <div class="inform">
            <div class="text">设备型号</div>
            <div class="text">A型</div>
          </div>
          <div class="inform">
            <div class="text">采集时长</div>
            <div class="text">1927分钟</div>
          </div>
          <div class="inform">
            <div class="text">设备状态</div>
            <div class="text">在线</div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="leftBar">
          <div
            class="color"
            style="background-color: #6deafb; height: 2.23%"
          ></div>
          <div class="titleContent">采集数据信息</div>
        </div>
        <div class="rightContent">
          <div class="chart">
            <div class="main"><blue-line></blue-line></div>
            <div class="title">XXXXXXX</div>
          </div>
          <div class="chart">
            <div class="main">
              <border-bar></border-bar>
            </div>
            <div class="title">XXXXXXX</div>
          </div>
          <div class="chart">
            <div
              class="main"
              style="display: flex; justify-content: space-around"
            >
              <div class="charts" v-for="(item, index) in 3" :key="index">
                <process-chart :index="index"></process-chart>
              </div>
            </div>
            <div class="title">XXXXXXX</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MapVc from "@/components/MapVc.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import BorderBar from "@/components/BorderBar.vue";
import BlueLine from "@/components/BlueLine.vue";
import ProcessChart from "@/components/ProcessChart.vue";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
  name: "HomeVc",
  components: { MapVc, BorderBar, BlueLine, ProcessChart },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      loader: null,
      dom: null,
      weather: null,
      AMap: null,
      temperature: 0,
      weatherString: "",
    };
  },
  methods: {
    getWeather() {
      this.weather.getLive("天津", (err, data) => {
        console.log(err, data);
        this.temperature = data.temperature;
        this.weatherString = data.weather;
      });
    },
    // animate() {
    //   requestAnimationFrame(this.animate);
    //   this.controls.update();
    //   this.renderer.render(this.scene, this.camera);
    // },
    // createCamera() {
    //   this.camera = new THREE.PerspectiveCamera(
    //     75,
    //     this.dom.clientWidth / this.dom.clientHeight,
    //     0.1,
    //     1000
    //   );
    //   this.camera.position.z = 30;
    //   this.camera.position.y = 45;
    // },
    // createLight() {
    //   // 环境光
    //   const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // 创建环境光
    //   this.scene.add(ambientLight); // 将环境光添加到场景
    //   const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // 创建方向光源
    //   directionalLight.position.set(10, 0, 10);
    //   this.scene.add(directionalLight);
    //   const spotLight = new THREE.SpotLight(0xffffff, 0.5); // 创建聚光灯
    //   spotLight.position.set(10, 0, 10);
    //   spotLight.castShadow = true;
    //   this.scene.add(spotLight);
    // },
    // createRenderer() {
    //   this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //   this.renderer.setSize(this.dom.clientWidth, this.dom.clientHeight);
    //   // this.renderer.setClearColor(0x3f3f3f, 1);
    //   this.dom.appendChild(this.renderer.domElement);
    // },
  },
  async mounted() {
    await AMapLoader.load({
      key: "593c04957cb7cfa503dd408e55afdbd4",
      version: "1.4.0",
      resizeEnable: true,
      zoomEnable: false,
      dragEnable: false,
    }).then((AMap) => {
      this.AMap = AMap;
      this.AMap.plugin("AMap.Weather", () => {
        this.weather = new AMap.Weather();
      });
      this.getWeather();
    });

    this.dom = this.$refs.model;
    // console.log(dom);
    // this.createCamera();
    // this.scene = new THREE.Scene();
    // this.loader = new GLTFLoader();
    // this.loader.load(
    //   "./models/gltf/AAA浮体与监测最终装配.gltf",
    //   ({ scene: { children } }) => {
    //     console.log(...children);
    //     this.scene.add(...children);
    //   }
    // );
    // this.createLight();
    // this.createRenderer();
    // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // this.animate();
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
    width: 26%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .left {
    width: 22%;
    .header {
      height: 26%;
      width: 100%;
      ::v-deep .dv-border-box-12 .border-box-content {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        .eletronic {
          height: 94%;
          width: 92%;
          background: skyblue;
        }
      }
    }
    .footer {
      height: 73%;
      width: 100%;
      ::v-deep .dv-border-box-12 .border-box-content {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        .mapContainer {
          height: 96%;
          width: 92%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          .inform {
            height: 55%;
            width: 100%;
            .title {
              display: flex;
              align-items: center;
              height: 13%;
              font-size: calc(22px + 0.17vw);
              color: #72f0a4;
              font-weight: bold;
              border-bottom: #72f0a4 calc(2px + 0.04vw) solid;
            }
            .content {
              height: 87%;
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: flex-start;
              .text {
                color: #ffffff;
                font-size: calc(18px + 0.15vw);
                font-weight: bold;
              }
            }
          }
          .map {
            height: 42.5%;
            width: 100%;
          }
        }
      }
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
    .head {
      height: 4%;
      color: #ffffff;
      font-weight: bold;
      display: flex;
      padding: 0 1%;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      font-size: calc(24px + 0.1vw);
    }
    .showModel {
      height: 67.5%;
    }
    .inform {
      height: 24.5%;
      // background: skyblue;
      ::v-deep .dv-border-box-12 .border-box-content {
        display: flex;
        justify-content: center;
        align-items: center;
        .device {
          box-sizing: border-box;
          width: 98%;
          height: 96%;
          padding: 1% 1%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            width: 5%;
            height: 100%;
            border-right: 3px solid #7632ae;
            .text {
              width: 80%;
              height: 70%;
              text-align: center;
              font-weight: bold;
              color: #9f29e8;
              font-size: calc(24px + 0.35vw);
            }
          }
          .content {
            height: 100%;
            width: 92%;
            display: flex;
            flex-direction: column;
            .top {
              display: flex;
              width: 70%;
              justify-content: space-around;
              .number {
                color: #ffffff;
                font-size: calc(21px + 0.18vw);
              }
            }
            .bottom {
              flex: 1;
              width: 98.5%;
              display: flex;
              justify-content: space-between;
              .leftchart {
                width: 74%;
                height: 100%;
              }
              .rightchart {
                width: 25%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }

  .right {
    .header,
    .body,
    .footer {
      height: 22.8%;
      width: 100%;
      // background: yellow;
      display: flex;
      justify-content: space-between;
      .leftBar,
      .rightContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        background: rgba($color: #222736, $alpha: 0.8);
      }
      .leftBar {
        width: 7.6%;
        box-sizing: border-box;
        padding: 10px 5px;
        display: flex;
        flex-direction: column;
        align-content: center;
        .color {
          width: 90%;
          height: 5%;
          border-radius: 2px;
        }
        .titleContent {
          margin-top: 5px;
          font-size: calc(22px + 0.1vw);
          font-weight: bold;
          color: #fff;
          text-align: center;
        }
      }
      .rightContent {
        width: 90.7%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 15px;
        padding-bottom: 18px;
        box-sizing: border-box;
        .inform {
          flex: 1;
          width: 100%;
          border-bottom: 2px #545661 solid;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #c1c2c8;
          font-size: calc(16px + 0.1vw);
          font-weight: bold;
        }
      }
    }

    .footer {
      height: 51%;
      .rightContent {
        padding-bottom: 0;
        justify-content: space-around;
        .chart {
          height: 32%;
          width: 100%;
          // background: #fff;
          .main {
            height: 90%;
            .charts {
              width: 33%;
              height: 100%;
            }
          }
          .title {
            height: 9%;
            color: #ccccce;
            text-align: center;
            margin-top: 0.5%;
          }
        }
      }
    }
  }
}
</style>
