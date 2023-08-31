<template>
  <div class="data">
    <el-radio-group v-model="tabPosition" style="width: 100%" size="medium">
      <el-radio-button
        label="/before/data/realtime"
        @click.native="jump($event, '/before/data/realtime')"
        ><i class="el-icon-view"></i>实时监测</el-radio-button
      >
      <el-radio-button
        label="/before/data/history"
        @click.native="jump($event, '/before/data/history')"
        ><i class="el-icon-time"></i>历史数据</el-radio-button
      >
      <el-radio-button
        label="/before/data/analysis"
        @click.native="jump($event, '/before/data/analysis')"
        ><i class="el-icon-data-analysis"></i>数据分析</el-radio-button
      >
    </el-radio-group>
    <div class="showWay">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataVc",
  data() {
    return {
      tabPosition: "",
    };
  },
  methods: {
    jump(e, path) {
      if (e.target.tagName !== "INPUT") return;
      this.$router.push(path);
    },
  },
  mounted() {
    let path = this.$route.path;
    let arr = path.split("/");
    if (arr.length > 4) {
      arr.splice(4);
    }
    let def = arr.join("/");
    this.tabPosition = def;
  },
};
</script>

<style lang="scss">
.data {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.data > .el-radio-group {
  height: 5%;
  display: flex;
  justify-content: space-around;
}
.data > .el-radio-group .el-radio-button {
  width: 33.3%;
  height: 100%;
}
.data
  > .el-radio-group
  .el-radio-button__orig-radio:checked
  + .el-radio-button__inner {
  font-size: large;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.data > .el-radio-group .el-radio-button--medium .el-radio-button__inner {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: large;
}
.data .showWay {
  height: 95%;
  // padding: 0.3%;
}
</style>