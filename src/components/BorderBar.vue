<template>
  <div ref="chart" id="barChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      dataLine: {
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        grid: {
          // 让图表占满容器
          top: "5%",
          left: "12%",
          right: "6%",
          bottom: "10%",
        },

        series: [
          {
            label: {
              show: true,
              position: "right",
              fontSize: 16,
            },
            name: "销量：",
            yAxisIndex: 0,
            type: "bar",
            barWidth: "30%",
            data: [10, 50, 30, 40, 60, 43],
            showBackground: true,
            backgroundStyle: {
              color: "#CCCCCC",
              opacity: 0.1,
              borderRadius: [10, 10, 10, 10],
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                1,
                0,
                0,
                0,
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
              borderRadius: [10, 10, 10, 10],
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
#barChart {
  width: 100%;
  height: 100%;
  //   background: #fff;
}
</style>