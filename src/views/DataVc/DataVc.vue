<template>
  <div class="data">
    <el-radio-group v-model="tabPosition" size="medium" fill="#4165db">
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
  height: 4%;
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0);
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
  color: #fff;
  box-shadow: rgb(65, 101, 219) 0px 0px 0px 0px !important;
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
  background: rgba(0, 0, 0, 0) !important;
  // border-left: none !important;
  border: none;
  color: #b7c0d5;
}
.data .showWay {
  height: 95%;
  // padding: 0.3%;
}
</style>