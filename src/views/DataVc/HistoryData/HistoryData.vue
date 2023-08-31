<template>
  <div class="history-data">
    <div class="bread">
      <div class="left">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right">
        <el-radio-group v-model="radio" size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <div class="left">
          <el-radio-group v-model="radio" size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            size="mini"
          >
          </el-date-picker>
        </div>
        <div class="right">
          <button>数据录入</button>
          <button>数据导出</button>
        </div>
      </div>
      <div class="select">
        <el-select v-model="value1" size="mini" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="table">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HistoryData",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value1: [],
      value2: [],
      radio: "上海",
    };
  },
};
</script>
<style lang="scss" scoped>
.history-data {
  box-sizing: border-box;
  padding: 1%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bread {
    box-sizing: border-box;
    width: 100%;
    height: 5%;
    border-bottom: 2px solid #909399;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      box-sizing: border-box;
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .right {
      width: 8%;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .main {
    width: 100%;
    height: 97%;
    .header {
      box-sizing: border-box;
      margin-top: 0.1%;
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .right {
        width: 12%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        button {
          width: 40%;
          height: 80%;
          border: none;
        }
      }
    }
    .select {
      margin-top: 0.1%;
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .el-select {
        width: 19%;
      }
      .el-option {
        width: 19%;
      }
    }
    .table {
      box-sizing: border-box;
      margin-top: 0.1%;
      width: 100%;
      height: 80%;
    }
  }
}
</style>
