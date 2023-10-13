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
      icon: [],
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      console.log("hi");
      AMapLoader.load({
        key: "593c04957cb7cfa503dd408e55afdbd4",
        version: "1.4.0",
        resizeEnable: true,
        zoomEnable: false,
        dragEnable: false,
      }).then((AMap) => {
        this.map = new AMap.Map("container", {
          zoom: 3.4,
          center: [106.397428, 25.90923],
        });
        for (let i = 0; i < this.positions.length; i++) {
          // 创建一个 Icon
          let imageUrl =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAABGtJREFUeF7tnI1t2zAQhY+QB3EmabKHhdqTJJmkDuQ96k5SD5KABS3JdVzJEt+7I5lCAgwEsX6oj+9+eDrZybJRBBx19HKwLABJESwAF4AkAfLwYhTo63orIt+6+1mLSP8J/zpdPt6Hv0VWqze337d/Z9yyAbwC9tjBQjAcxftjTpjJAXbgngloY6CPIvImVXVMqcxkADtw30UkKM5yC6p8dYdDAGq+mQP0m82jOBcUZw3uFtZRqmpnrUZTgB28n+YyuH+BnWuavdUYzAD6zeZZnHuxGnjUeb1/sQo0JgB9XQfVpTbZKaZ7qapXbZNWB1govB7uSarqSROiKkBf1z9EJCTE5W7ev7jD4VVrgGoAi/J5U3QUIaoALCTaTmH7/L33Txq5Ig3Qb7dr+fj4HTf6QvauqgfWH/IAS0pXYudFwZQpgF9afT1sUoUcQBv1hVXDr+uiwHmi3t/X4ly/lg6lLp2NVCEMUFl9J/F+N9epd0ErpEw6IAkV4gC11EcoQC11IsaAA6zrEHk5BSikEh3EkLwzYzm6pnlCfAIEUMV8iVm/vVEVJYJmjAHkzXfvmmaHzPjYMfQyEpxQDCBbbQFn+x7wzipCFQg1ZciMUYAeVg8403Oux5qya5poHtEH0P5PIXCMmnH7+ACvgAOWkRrgyTXNwxw1oft4JjtIApCbZcjPxMCkCrqAdcQrsO0gCKsAZFOPvv+kNFxRN/oBVDxAJoUxDCA9SCqQAOOLB/g/K/ALAFx8IFm+TxGFmRw1uswfbcLB16ROFeZGKzJHhSYXBYg/vgT8zGyATIATgdwLCpBJZUSAhHUKIqk+EXBiIYC0GYODvVtMIAscyDo4jIcBiJvxeQb0OgSo3K+dFcj/cQC5JV0vpujMf6CYyhUQ2hPC44AVSJvxZemAt57RRVRSfZQCzwC5qHctpqi2XNU+a9KVUApUU+FflG3XfXguvFqdX2EIrRddhA39huE1CKar/9YDwL6vPxEPUE+FU5mK/vek+mgTvrgxpoipj2XuGWn16QHUichzb1xrPzjyXg+ANuErFZbYFz0GG1q2DZ1MD2DbJ8g8VtRS1vR5FJeSagCV05ppCOgeCoHDxIS/SEBRCRy2ANuAotd6hipt6DjgqdvU5VVN+KLCEnNDZdNVS6THZoiqWk9Ne/z36qZrD7CkqGxguuYAi4nKRqabBOAZIlkpjrfWT0eoJcxj4zAJItcXU+jbQxma+T3TNGYwe2i7GSx+J2EcrqHfSw4wuT809ntZACb0h+Z+LxvADiL/esS44Sbxe3kBWuaHifxeVoBm/jADvHAv5mnM6FJPd72sUl1G8qVsABWVaN42fA9sVoAKQSVpxB0CmR8gHlSyw8vqA8nlXvJ0JdtaeK5jjniJOurl7LnXR/fLbsKflNhG5vvv/mZKV4pXYD/Auw1LhcErxgfezu4gxIQFghhzLsqEb8y5/+HG0M2a7BcpY+AVq8DYm8i5f7EKzAkl5toLwBhaA/suABeAJAHy8D9eMm1v9NymxAAAAABJRU5ErkJggg==";

          this.icon.push(
            new AMap.Icon({
              // 图标尺寸
              size: new AMap.Size(28, 28),
              // 图标的取图地址
              image: imageUrl,
              // 图标所用图片大小
              imageSize: new AMap.Size(28, 28),
            })
          );
          // 将 Icon 传入 marker
          const mark = new AMap.Marker({
            position: this.positions[i],
            icon: this.icon[i],
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