<template>
  <div class="warnVc">
    <div class="tab">
      <dv-border-box-12 :color="['#819DEC', '#81deec']" backgroundColor="none">
        <div class="data">
          <el-radio-group v-model="tabPosition" size="medium" fill="#4165db">
            <el-radio-button
              label="/before/warn/equipmentwarn"
              @click.native="jump($event, '/before/warn/equipmentwarn')"
              ><i class="el-icon-monitor"></i>设备预警</el-radio-button
            >
            <el-radio-button
              label="/before/warn/datawarn"
              @click.native="jump($event, '/before/warn/datawarn')"
              ><i class="el-icon-s-data"></i>数据预警</el-radio-button
            >
            <el-radio-button
              label="/before/warn/historywarn"
              @click.native="jump($event, '/before/warn/historywarn')"
              ><i class="el-icon-document"></i>历史事件</el-radio-button
            >
            <el-radio-button
              label="/before/warn/thresholdwarn"
              @click.native="jump($event, '/before/warn/thresholdwarn')"
              ><i class="el-icon-setting"></i>阈值设置</el-radio-button
            >
          </el-radio-group>
        </div>
      </dv-border-box-12>
    </div>
    <div class="showWay">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "WarnVc",
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
<style lang="scss" scoped>
.warnVc {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tab {
  width: 100%;
  height: 6.5%;
  .data {
    width: 100%;
  }
  ::v-deep(.border-box-content) {
    display: flex;
    align-items: center;
  }
  ::v-deep(.el-radio-group) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  ::v-deep(.el-radio-button) {
    width: 25%;
    display: flex;
    justify-content: center;
    border-right: 1.5px solid #6f88cf;
  }
  ::v-deep(.el-radio-button__inner) {
    background-color: transparent !important;
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: large;
    border: none;
    color: #b7c0d5;
  }
}
::v-deep(.el-radio-group .el-radio-button__orig-radio:checked + .el-radio-button__inner){
  color: #fff;
}
.showWay{
  height: 95%;
}
</style>