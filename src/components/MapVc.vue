<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "MapVc",
  data() {
    return {
      map: null,
      markerdom: null,
      marker: [],
      positions: [
        [101.925107, 34.238578],
        [118.977807, 34.240636],
        [118.977893, 40.20508],
        [108.915065, 30.202951],
      ],
      anchor: ["上海", "南京", "b深圳", "天津"],
      pos_icon: [],
      pos_marker: [],
      icon: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      console.log("hi");
      window._AMapSecurityConfig = {
        securityJsCode: "b387338487cee9e1a35360c3210cca25",
      };
      AMapLoader.load({
        key: "593c04957cb7cfa503dd408e55afdbd4",
        version: "1.4.0",
        resizeEnable: true,
      }).then((AMap) => {
        this.map = new AMap.Map("container", {
          zoom: 3.4,
          center: [106.397428, 31.90923],
          mapStyle: "amap://styles/darkblue",
        });
        for (let i = 0; i < this.positions.length; i++) {
          // 创建一个 Icon
          let imageUrl = require("../assets/image/locate.png");

          this.icon = new AMap.Icon({
            // 图标尺寸
            size: new AMap.Size(28, 28),
            // 图标的取图地址
            image: imageUrl,
            // 图标所用图片大小
            imageSize: new AMap.Size(28, 28),
          });

          // 将 Icon 传入 marker
          const mark = new AMap.Marker({
            position: this.positions[i],
            icon: this.icon,
            title: this.anchor[i], //设置锚点
            offset: new AMap.Pixel(0, 0), //设置偏移量
          });
          mark.on("click", (e) => {
            console.log(e);
          });
          this.marker.push(mark);
          this.map.add(this.marker[i]);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  height: 100%;
  width: 100%;
}
</style>