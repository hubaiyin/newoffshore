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
          <el-radio-button label="表格"></el-radio-button>
          <el-radio-button label="图表"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <div class="left">
          <el-radio-group v-model="radio" size="mini">
            <el-radio-button label="近一天"></el-radio-button>
            <el-radio-button label="近一周"></el-radio-button>
            <el-radio-button label="近一个月"></el-radio-button>
            <el-radio-button label="近三个月"></el-radio-button>
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
        <el-select v-model="value1" size="mini" placeholder="按测点查询">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择标签">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择监测项目">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择安装位置">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择测点">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value1" size="mini" placeholder="请选择传感器">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <dv-border-box-11 class="table" title="历史数据">
        <div class="main">
          <Charts :chartOption="datas[0]" />
        </div>
      </dv-border-box-11>
    </div>
  </div>
</template>
<script>
import Charts from "@/components/Echarts.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "HistoryData",
  components: {
    Charts,
  },
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
  computed: {
    ...mapState("charts", ["data"]),
    ...mapGetters("charts", ["datas"]),
  },
};
</script>
<style lang="scss" scoped>
.history-data {
  box-sizing: border-box;
  padding: 1%;
  padding-top: 0;
  width: 100%;
  height: 100%;
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
      ::v-deep .el-breadcrumb__inner {
        color: #fff;
      }
    }
    .right {
      width: 8%;
      height: 100%;
      display: flex;
      align-items: center;
      ::v-deep .el-radio-button__inner {
        background-color: rgba($color: #000000, $alpha: 0);
        border: 1px solid #0093ce;
        color: #fff;
      }
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
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ::v-deep .el-radio-button__inner {
          background-color: rgba($color: #000000, $alpha: 0);
          border: 1px solid #0093ce;
          color: #fff;
        }
        ::v-deep .el-input__inner {
          background-color: rgba($color: #000000, $alpha: 0);
          border: 1px solid #0093ce;
          color: #fff;
        }
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
          border-radius: 10%;
          background-color: #427dd2;
          color: #fff;
        }
      }
    }
    .select {
      margin-top: 0.1%;
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-select {
        width: 15%;
        ::v-deep .el-input__inner {
          background-color: rgba($color: #000000, $alpha: 0);
          border: 1px solid #0093ce;
        }
        ::v-deep .el-input__inner::placeholder {
          color: #409eff;
        }

        ::v-deep .el-select .el-input .el-select__caret {
          color: #409eff;
        }
      }
      .el-option {
        width: 19%;
      }
    }
    .table {
      box-sizing: border-box;
      margin-top: 0.1%;
      width: 100%;
      height: 90%;
      .main {
        box-sizing: border-box;
        // padding-top: 4%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
