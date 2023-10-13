<template>
  <div class="surface">
    <div class="left">
      <div class="header">
        <img src="../assets//image/locate.png" alt="" />
      </div>
      <div class="footer">
        <map-vc></map-vc>
      </div>
    </div>
    <div class="center">
      <div class="head">
        <div>设备#A21023</div>
        <div>天津</div>
        <div>晴</div>
      </div>
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
import MapVc from "@/components/MapVc.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
export default {
  name: "HomeVc",
  components: { MapVc },
  data() {
    return {
      scene: null,
      camera: null,
      renderer: null,
      controls: null,
      loader: null,
      dom: null,
      weather: null,
    };
  },
  methods: {
    getWeather() {},
  },
  mounted() {
    //   this.dom = this.$refs.model;
    //   // console.log(dom);
    //   this.createCamera();
    //   this.scene = new THREE.Scene();
    //   this.loader = new GLTFLoader();
    //   this.loader.load(
    //     "./models/gltf/AAA浮体与监测最终装配.gltf",
    //     ({ scene: { children } }) => {
    //       console.log(...children);
    //       this.scene.add(...children);
    //     }
    //   );
    //   this.createLight();
    //   this.createRenderer();
    //   this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    //   this.animate();
    // },
    // methods: {
    //   animate() {
    //     requestAnimationFrame(this.animate);
    //     this.controls.update();
    //     this.renderer.render(this.scene, this.camera);
    //   },
    //   createCamera() {
    //     this.camera = new THREE.PerspectiveCamera(
    //       75,
    //       this.dom.clientWidth / this.dom.clientHeight,
    //       0.1,
    //       1000
    //     );
    //     this.camera.position.z = 30;
    //     this.camera.position.y = 45;
    //   },
    //   createLight() {
    //     // 环境光
    //     const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // 创建环境光
    //     this.scene.add(ambientLight); // 将环境光添加到场景
    //     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // 创建方向光源
    //     directionalLight.position.set(10, 0, 10);
    //     this.scene.add(directionalLight);
    //     // const spotLight = new THREE.SpotLight(0xffffff, 0.5); // 创建聚光灯
    //     // spotLight.position.set(10, 0, 10);
    //     // spotLight.castShadow = true;
    //     // this.scene.add(spotLight);
    //   },
    //   createRenderer() {
    //     this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    //     this.renderer.setSize(this.dom.clientWidth, this.dom.clientHeight);
    //     // this.renderer.setClearColor(0x3f3f3f, 1);
    //     this.dom.appendChild(this.renderer.domElement);
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
    .head {
      height: 6.5%;
      background: red;
    }
    .showModel {
      height: 72.5%;
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
