<template>
  <div id="blue" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BlueLine",
  data() {
    return {
      chart: null,
      dataLine: {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "4%",
          top: "5%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2018-11-11 17:01",
            "2018-11-11 17:02",
            "2018-11-11 17:03",
            "2018-11-11 17:04",
            "2018-11-11 17:05",
            "2018-11-11 17:06",
            "2018-11-11 17:07",
            "2018-11-11 17:08",
            "2018-11-11 17:09",
            "2018-11-11 17:10",
            "2018-11-11 17:11",
            "2018-11-11 17:12",
            "2018-11-11 17:13",
            "2018-11-11 17:14",
            "2018-11-11 17:15",
            "2018-11-11 17:16",
            "2018-11-11 17:17",
            "2018-11-11 17:18",
            "2018-11-11 17:19",
            "2018-11-11 17:20",
          ],
          axisLabel: {
            color: "#7e828c",
            formatter: function (params) {
              return params.split(" ")[0] + "\n" + params.split(" ")[1];
            },
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}",
            color: "#7e828c",
          },
          splitLine: {
            show: false,
          },
          //   axisLine: {
          //     show: true,
          //     lineStyle: {
          //       color: "rgb(0,253,255,0.6)",
          //       width: 2,
          //     },
          //   },
        },
        series: [
          {
            name: "随机",
            type: "line",
            color: "#6f8acf",
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgb(61, 72, 102)",
                  },
                  {
                    offset: 0.8,
                    color: "rgb(88, 91, 102)",
                  },
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 10,
            },
            symbol: "emptyCircle",
            symbolSize: 6,
            // symbloColor: "#fff",
            data: [
              451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453,
              524, 165, 236, 527, 328, 129, 530,
            ],
          },
        ],
      },
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
#blue {
  width: 100%;
  height: 100%;
}
</style>