<template>
  <div ref="chart" id="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "EchartsVc",
  data() {
    return {
      chart: null,
    };
  },
  props: {
    chartOption: {
      required: true,
      type: Object,
    },
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);

    this.chart.getZr().on("click", (params) => {
      if (!params.target) {
        console.log(params);
        this.renderChart();
      }
    });
    this.chart.on("click", (params) => {
      if (
        params.componentType !== "series" &&
        params.componentType !== "markPoint"
      )
        return;
      const seriesCopy = JSON.parse(JSON.stringify(this.chartOption.series));
      seriesCopy.map((item, index) => {
        if (index === params.seriesIndex) return item;
        else {
          item.color = "rgba(128,128,128,0.4)";
          return item;
        }
      });
      this.chart.setOption({ series: seriesCopy });
    });
    this.$nextTick(() => {
      this.renderChart();
    });
  },
  methods: {
    renderChart() {
      this.chart.setOption(this.chartOption);
    },
  },
  watch: {
    chartOption: {
      deep: true,
      handler() {
        this.renderChart();
      },
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
#chart {
  width: 100%;
  height: 90%;
}
</style>