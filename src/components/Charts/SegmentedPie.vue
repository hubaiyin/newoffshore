<template>
  <div class="segment" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "SegmentedPie",
  data() {
    return {
      value: 53.33,
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
  computed: {
    dataLine() {
      return {
        title: {
          text: "{a|" + this.value + "}{c|%}",
          x: "center",
          y: "center",
          textStyle: {
            rich: {
              a: {
                fontSize: 18,
                color: "#29EEF3",
              },

              c: {
                fontSize: 12,
                color: "#ffffff",
                // padding: [5,0]
              },
            },
          },
        },
        series: [
          {
            name: "吃猪肉频率",
            type: "pie",
            radius: ["64%", "78%"],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
              position: "center",
            },
            data: [
              {
                value: this.value,
                name: "",
                itemStyle: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#4FADFD", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#28E8FA", // 100% 处的颜色
                      },
                    ],
                  },
                },
              },
              {
                value: 100 - this.value,
                name: "",
                label: {
                  show: false,
                },
                itemStyle: {
                  color: "#1e2f61",
                },
              },
            ],
          },

          {
            name: "了",
            type: "gauge",
            radius: "94%",
            center: ["50%", "50%"],
            startAngle: 0,
            endAngle: -360,
            splitNumber: 8,
            axisTick: {
              show: false,
            },
            splitLine: {
              length: "20%",
              lineStyle: {
                width: 2,
                color: "#061740",
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                opacity: 0,
              },
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 0,
                name: "",
              },
            ],
          },
        ],
      };
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
.segment {
  width: 100%;
  height: 100%;
}
</style>