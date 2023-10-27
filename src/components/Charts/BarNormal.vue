<template>
  <div ref="chart" id="normalBar"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      dataLine: {
        yAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
          },
          axisLabel: {
            color: "#fff",
            fontSize: 15,
          },
        },
        xAxis: {
          type: "category",
          data: ["逆变器", "井网配电框", "箱变", "传感器", "驱鸟器"],
          // axisLine: {
          //   show: false,
          // },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
            fontSize: 15,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          // 让图表占满容器
          top: "8%",
          left: "5%",
          right: "3%",
          bottom: "6%",
        },

        series: [
          {
            // label: {
            //   show: true,
            //   position: "right",
            //   fontSize: 16,
            //   color: "#000",
            // },
            name: "销量：",
            yAxisIndex: 0,
            type: "bar",
            barWidth: "40%",
            data: [10, 50, 30, 40, 60],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#63c3cc", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#4054cd", // 100% 处的颜色
                  },
                ],
                false
              ),
              borderRadius: [20, 20, 0, 0],
              lineWidth: 5,
            },
            zlevel: 1,
          },
        ],
      },
      chart: null,
    };
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.$nextTick(() => {
      this.renderChart();
    });
  },
  methods: {
    renderChart() {
      this.chart.setOption(this.dataLine);
    },
  },
  beforeDestroy() {
    if (this.chart && this.chart.dispose) {
      this.chart.dispose();
    }
  },
};
</script>

<style lang="scss" scoped>
#normalBar {
  width: 100%;
  height: 100%;
  //   background: #fff;
}
</style>