<template>
  <div class="process" ref="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ProcessChart",
  props: {
    index: {
      required: true,
    },
  },
  data() {
    return {
      value: 90,
      maxValue: 100,
      colors: [
        ["#389af4", "#dfeaff"],
        ["#ff8c37", "#ffdcc3"],
        ["#ffc257", "#ffedcc"],
      ],
    };
  },
  computed: {
    dataLine() {
      return {
        tooltip: {
          trigger: "item",
        },

        series: [
          {
            name: "装备制造",
            type: "pie",
            // clockwise: false,
            radius: ["62%", "74%"],
            itemStyle: {
              color: this.colors[this.index][0],
              shadowColor: this.colors[this.index][0],
              shadowBlur: 0,
              // label: {
              //   show: false,
              // },
              // labelLine: {
              //   show: false,
              // },
            },
            // hoverAnimation: false,
            emphasis: {
              scale: false,
            },
            data: [
              {
                value: 54,
                label: {
                  formatter: function (params) {
                    return params.value + "%";
                  },
                  position: "center",
                  show: true,
                  fontSize: "16",
                  fontWeight: "bold",
                  color: this.colors[this.index][0],
                },
              },
              {
                value: 100 - 54,
                name: "invisible",
                itemStyle: {
                  color: this.colors[this.index][1],
                },
                labelLine: {
                  //删除指示线
                  show: false,
                },
                // emphasis: {
                //   color: this.colors[this.index][1],
                // },
              },
            ],
          },
        ],
        grid: {
          // 让图表占满容器
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        },
      };
    },
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
.process {
  width: 100%;
  height: 100%;
}
</style>