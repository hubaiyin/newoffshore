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
  height: 80%;
}
</style>