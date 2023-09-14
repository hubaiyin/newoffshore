<template>
  <div class="main">
    <div class="up">
      <dv-border-box-11 class="table" title="历史数据">
        <div class="chart">
          <Charts :chartOption="datas[0]" />
        </div>
      </dv-border-box-11>
    </div>
    <div class="down">
      <div class="downTop">
        <div class="downTitle">
          <span>数据列表</span>
        </div>
        <div class="btn">
          <el-button type="warning" @click="dialogVisible = true">
            新增数据
          </el-button>
        </div>
      </div>
      <div class="form">
        <el-table
          :data="tableData"
          height="100%"
          :row-style="{ height: '40px' }"
          :cell-style="{ padding: '0px' }"
          :header-cell-style="{
            color: '#fff',
            background: '#0a3370',
            fontWeight: '700',
          }"
          :highlight-current-row="false"
          :row-class-name="tableRowClassName"
          border
        >
          <el-table-column prop="startTime" label="起始时间" min-width="100">
          </el-table-column>
          <el-table-column prop="endTime" label="结束时间" min-width="100">
          </el-table-column>
          <el-table-column prop="module" label="数据隶属模块" min-width="100">
          </el-table-column>
          <el-table-column prop="dataName" label="数据名称" min-width="100">
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="div">
      <el-dialog
        title="添加数据"
        :visible.sync="dialogVisible"
        class="myDialog"
        width="50%"
        :modal-append-to-body="false"
      >
        <el-form
          label-width="120px"
          :rules="rules"
          :model="formData"
          ref="ruleForm"
        >
          <el-form-item label="数据类别" prop="dataModule">
            <el-select v-model="formData.dataModule" placeholder="请选择">
              <el-option
                label="环境气象"
                value="EnvironmentalWeather"
              ></el-option>
              <el-option label="海洋水文" value="MarineHydrology"></el-option>
              <el-option label="主体结构" value="MainStructure"></el-option>
              <el-option
                label="光伏组件"
                value="PhotovoltaicModules"
              ></el-option>
              <el-option label="电气系统" value="ElectricalSystem"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择时间段" prop="timePeriod">
            <el-date-picker
              value-format="yyyy-MM-dd hh:mm:ss"
              v-model="formData.timePeriod"
              type="datetimerange"
              start-placeholder="起始时间"
              range-separator="-"
              end-placeholder="结束时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            label="请选择数据："
            v-show="this.formData.dataModule === 'EnvironmentalWeather'"
            prop="dataName"
          >
            <el-radio-group v-model="formData.dataName">
              <el-radio label="temperature">温度</el-radio>
              <el-radio label="radiation">太阳辐照度</el-radio>
              <el-radio label="rainfall">降雨量</el-radio>
              <el-radio label="humidity">环境湿度</el-radio>
              <el-radio label="windSpeed">风速</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="请选择数据："
            v-show="this.formData.dataModule === 'MarineHydrology'"
            prop="dataName"
          >
            <el-radio-group v-model="formData.dataName">
              <el-radio label="flowSpeed">流速</el-radio>
              <el-radio label="waveHeight">波高</el-radio>
              <el-radio label="tideLevel">潮位</el-radio>
              <el-radio label="waterDepth">水深</el-radio>
              <el-radio label="windSpeed">温度</el-radio>
              <el-radio label="salinity">盐度</el-radio>
              <el-radio label="nitrogen">氮度</el-radio>
              <el-radio label="ammonia">氨度</el-radio>
              <el-radio label="ph">PH值</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="请选择数据："
            v-show="this.formData.dataModule === 'MainStructure'"
            prop="dataName"
          >
            <el-radio-group v-model="formData.dataName">
              <el-radio label="mainFloatingTubeStress">主浮管应力</el-radio>
              <el-radio label="cableForce">浮体息缆力</el-radio>
              <el-radio label="acceleration">加速度</el-radio>
              <el-radio label="xdisplacement">位移X</el-radio>
              <el-radio label="ydisplacement">位移Y</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item
            label="请选择数据："
            v-show="this.formData.dataModule === 'PhotovoltaicModules'"
            prop="dataName"
          >
            <el-radio-group v-model="formData.dataName">
              <el-radio label="backplaneTemperature">背板温度</el-radio>
              <el-radio label="voltage">电压</el-radio>
              <el-radio label="electricCurrent">电流</el-radio>
              <el-radio label="outputPower">功率</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose()">取 消</el-button>
          <el-button type="primary" @click="submit()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
import Charts from "@/components/Echarts.vue";
export default {
  name: "AnalysisData",
  components: {
    Charts,
  },
  data() {
    return {
      dialogVisible: false,
      formData: {
        dataModule: "",
        dataName: "",
        timePeriod: "",
      },
      params: {
        startTime: "",
        endTime: "",
        module: "",
        dataName: "",
      },
      tableData: [
        {
          startTime: "2023-08-30 12:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-08-21 11:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
        {
          startTime: "2023-04-30 16:00:00",
          endTime: "2023-09-15 12:00:00",
          module: "EnvironmentalWeather",
          dataName: "temperature",
        },
      ],
      rules: {
        dataName: [{ required: true, message: "不能为空", trigger: "blur" }],
        dataModule: [
          { required: true, message: "不能为空", trigger: "select" },
        ],
        timePeriod: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapState("analysis", ["data"]),
    ...mapGetters("analysis", ["datas"]),
  },
  methods: {
    ...mapMutations("bread", ["SET_BREADS"]),
    handleClose() {
      this.dialogVisible = false;
      this.formData = {
        module: "",
        dataName: "",
        timePeriod: "",
      };
      this.$refs.ruleForm.resetFields();
    },
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.params.startTime = this.formData.timePeriod[0];
          this.params.endTime = this.formData.timePeriod[1];
          this.params.module = this.formData.dataModule;
          this.params.dataName = this.formData.dataName;
          // this.getData(this.params);
          this.tableData.push(this.params);
          this.$message({
            message: "添加成功！",
            type: "success",
          });
          this.formData = {
            module: "",
            dataName: "",
            timePeriod: "",
          };
          this.params = {
            startTime: "",
            endTime: "",
            module: "",
            dataName: "",
          };
          this.$refs.ruleForm.resetFields();
          this.dialogVisible = false;
        } else {
          this.$message({
            message: "请检查是否填写完整！",
            type: "warning",
          });
        }
      });
    },
    deleteRow(index, rows) {
      this.$confirm("确认删除该条数据？")
        .then(() => {
          rows.splice(index, 1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        console.log(row);
        return "";
      } else {
        return "warning-row";
      }
    },
  },
  mounted() {
    console.log(this.$route);
    this.SET_BREADS(this);
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: 0;
  height: 99%;
  // border: 2px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.up {
  width: 98%;
  height: 50%;
  // border: 2px solid red;
  .chart {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.down {
  width: 98%;
  height: 48%;
  // border: 2px solid red;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.form {
  // border: 2px solid green;
  width: 98%;
  height: 86%;
  /* ::v-deep .el-table__header {
    // background-color: red;
  } */
  ::v-deep .el-table {
    border: 2px solid #1d80ea;
    box-shadow: 8px 5px 10px -5px rgb(18, 94, 217);
  }
  ::v-deep .el-table--border::after,
  .el-table--group::after {
    // top: none;
    height: 0%;
  }
  ::v-deep .el-table th .el-table__cellk,
  .gutter {
    border-bottom: none;
  }
  ::v-deep .el-table th,
  ::v-deep .el-table tr,
  ::v-deep .el-table td {
    background-color: #0249b2; // 背景透明
    border: 0px;
    color: #93dcfe; // 修改字体颜色
    font-size: 1rem;
    height: 5px;
    font-weight: Normal;
  }
  ::v-deep .el-table button {
    color: rgb(255, 213, 0);
    font-size: 0.8rem;
  }
  // 去掉最下面的那一条线
  .el-table::before {
    height: 0px;
  }
  // 修改表头样式-加边框
  ::v-deep .el-table__header-wrapper {
    border: solid 1px #04c2ed;
    // box-sizing: border-box;
  }
  // 修改高亮当前行颜色
  ::v-deep tbody tr:hover > td {
    background: #397ccd !important;
  }
  // 滚动条样式
  ::v-deep .el-table__body-wrapper::-webkit-scrollbar-track {
    background-color: #063570;
  }
  ::v-deep .el-table__body-wrapper::-webkit-scrollbar {
    // width: 10px;
    opacity: 0.5;
  }
  ::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: #2455db;
  }
  ::v-deep .el-table__cell.gutter {
    background-color: #063570;
  }

  //修改行内线
  ::v-deep .el-table td,
  .building-top .el-table th.is-leaf {
    border-bottom: 1px solid #007acc;
  }
  // 表格斑马自定义颜色
  ::v-deep .el-table__row.warning-row > td {
    background-color: #0336c3;
  }
  // 修改表格无数据背景，字体颜色
  ::v-deep .el-table__empty-block {
    background: #16203c;
  }
  ::v-deep .el-table__empty-text {
    color: #ccc;
  }
}
.downTop {
  width: 98%;
  height: 11%;
  // border: 2px solid rgb(0, 255, 76);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .downTitle {
    border: 2px solid rgb(78, 127, 251);
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewX(-20deg);
    background-color: rgb(14, 64, 215);
    box-shadow: 8px 5px 10px -5px rgb(61, 180, 240);
    span {
      color: white;
      font-size: calc(20px + 0.8vw);
      font-family: "YouShe";
      transform: skewX(20deg);
    }
  }
}
.div {
  ::v-deep .el-dialog {
    margin: 0 auto;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    ::v-deep .el-dialog__header {
      padding: 20px;
    }
    ::v-deep .el-dialog__body {
      padding-bottom: 0px;
    }
    ::v-deep .el-radio-group {
      width: 80%;
      height: 70px;
      // border: 2px solid red;
      background-color: #f2f9fb;
      border-radius: 6px;
      display: flex;
      flex-wrap: wrap;
      padding-top: 12px;
      padding-left: 10px;
      /* .el-radio__label {
        // background-color:skyblue;
      } */
    }
  }
}
</style>