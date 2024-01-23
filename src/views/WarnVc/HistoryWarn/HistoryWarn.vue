<template>
  <div class="equipmentWarn">
    <div class="warnList">
      <div class="header">
        <div class="top">
          <div class="big">
            <div class="box">
              <div class="inner"></div>
            </div>
            <div class="content">
              <div class="CN">历史事件</div>
              &nbsp;&nbsp;&nbsp;
              <div class="EN">HISTORICAL EVENTS</div>
            </div>
          </div>
          <div class="small"></div>
        </div>
        <div class="box1">
          <div class="bottom">
            <el-select v-model="entry.float" placeholder="设备类型" clearable>
              <el-option
                v-for="item in floats"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="entry.position"
              placeholder="隶属浮体"
              clearable
            >
              <el-option
                v-for="item in positions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="entry.type" placeholder="预警等级" clearable>
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-date-picker v-model="value1" type="date" placeholder="预警时间">
            </el-date-picker>
            <el-button type="primary" icon="el-icon-refresh-right"
              >刷新</el-button
            >
          </div>
          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
            <el-radio-button label="left">设备数据</el-radio-button>
            <el-radio-button label="right">采集数据</el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <div class="form" ref="form" v-if="tabPosition === 'left'">
        <el-table
          :data="tableData"
          height="100%"
          :row-style="{ height: formListHeight + 'px' }"
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
          <el-table-column type="selection" width="55" v-if="batch">
          </el-table-column>
          <el-table-column prop="type" label="设备类型"> </el-table-column>
          <el-table-column prop="id" label="设备编号"> </el-table-column>
          <el-table-column prop="float" label="隶属浮体"> </el-table-column>
          <el-table-column prop="voltage" label="设备电压"> </el-table-column>
          <el-table-column prop="innerTemperature" label="内部温度">
          </el-table-column>
          <el-table-column prop="internalHumidity" label="内部湿度">
          </el-table-column>
          <el-table-column prop="earlyWarningItem" label="预警条目">
          </el-table-column>
          <el-table-column
            prop="date"
            label="预警时间"
            width="200%"
          ></el-table-column>
          <el-table-column
            prop="processingTime"
            label="处理时间"
            width="200%"
          ></el-table-column>
          <el-table-column label="操作" width="250">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                icon="el-icon-edit"
                style="color: #a0d3fb; font-size: 16px"
                @click="edit(scope.$index, scope.row)"
                >查看处理内容</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page" v-if="tabPosition === 'left'">
        <el-pagination layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
      <div class="form" ref="form" v-if="tabPosition !== 'left'">
        <el-table
          :data="tableData2"
          height="100%"
          :row-style="{ height: formListHeight + 'px' }"
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
          <el-table-column prop="type" label="数据类型"> </el-table-column>
          <el-table-column prop="id" label="设备编号"> </el-table-column>
          <el-table-column prop="float" label="隶属浮体"> </el-table-column>
          <el-table-column prop="voltage" label="设备电压"> </el-table-column>
          <el-table-column prop="innerTemperature" label="内部温度">
          </el-table-column>
          <el-table-column prop="internalHumidity" label="内部湿度">
          </el-table-column>
          <el-table-column prop="earlyWarningItem" label="预警条目">
          </el-table-column>
          <el-table-column
            prop="date"
            label="预警时间"
            width="200%"
          ></el-table-column>
          <el-table-column
            prop="processingTime"
            label="处理时间"
            width="200%"
          ></el-table-column>
          <el-table-column label="操作" width="250">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text"
                icon="el-icon-edit"
                style="color: #a0d3fb; font-size: 16px"
                @click="edit(scope.$index, scope.row)"
                >查看处理内容</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page" v-if="tabPosition !== 'left'">
        <el-pagination layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
    <dispose-device
      :dialogVisible="isEdit"
      :index="index"
      v-if="isEdit"
      @close="closeEdit"
    ></dispose-device>
  </div>
</template>

<script>
import DisposeDevice from "@/components/Dialogs/DisposeDevice.vue";
export default {
  components: { DisposeDevice },
  mounted() {
    this.formListHeight = this.$refs.form.clientHeight * 0.8 * 0.1;
    this.blueBoxWidth = this.$refs.blueBox.clientHeight;
    this.borderWidth = this.blueBoxWidth / 8;
    this.colorWidth = this.$refs.down.clientHeight * 0.2 * 0.5;
  },
  data() {
    return {
      tabPosition: "left",
      option: {
        textStyle: {
          color: "#fff",
        },
        grid: {
          left: "1%",
          right: "10%",
          top: "15%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          boundaryGap: false,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: [2339, 1899, 2118, 1790, 3265, 4465, 3996],
            type: "line",
            areaStyle: {},
          },
        ],
      },
      option1: {
        grid: {
          left: "1%",
          right: "10%",
          top: "10%",
          bottom: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
          },
        },
        yAxis: {
          type: "category",
          data: ["温度", "湿度", "电压"],
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            data: [120, 200, 150],
            type: "bar",
            itemStyle: {
              borderRadius: [0, 15, 15, 0],
            },
          },
        ],
      },
      isCheck: false,
      isEdit: false,
      tableData: [
        {
          type: "逆变器",
          id: "#A23901",
          float: "U1",
          voltage: "220V",
          innerTemperature: "40℃",
          internalHumidity: "35%",
          earlyWarningItem: "温度",
          date: "2023-09-23 12:30:31",
          processingTime: "2023-09-23 13:40:12",
        },
      ],
      tableData2: [
        {
          type: "环境温度",
          id: "#A23901",
          float: "U1",
          voltage: "220V",
          innerTemperature: "40℃",
          internalHumidity: "35%",
          earlyWarningItem: "温度",
          date: "2023-09-23 12:30:31",
          processingTime: "2023-09-23 13:40:12",
        },
      ],
      formListHeight: 0,
      index: 0,
      floats: [
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
      positions: [
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
      types: [
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
      entry: {
        input: "",
        float: "",
        position: "",
        type: "",
      },
      batch: false,
      borderWidth: 0,
      colorWidth: 0,
    };
  },
  methods: {
    check() {
      this.isCheck = true;
    },
    closeCheck() {
      this.isCheck = false;
    },
    edit() {
      this.isEdit = true;
    },
    closeEdit() {
      this.isEdit = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.equipmentWarn {
  width: 100%;
  height: 100%;
  display: flex;
  .warnList {
    box-sizing: border-box;
    width: 100%;
    height: 90%;
    padding: 0.5%;
    .header {
      width: 100%;
      height: 15%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        width: 100%;
        height: 60%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .big {
          width: 96%;
          height: 100%;
          border-bottom: 3px solid #8c8f95;
          position: relative;
          .box {
            // background: skyblue;
            height: 35%;
            aspect-ratio: 1/1;
            border-color: #5da0f8;
            border-style: solid;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 40%;
            transform: translateY(-50%);
            .inner {
              background: #5da0f8;
              width: 60%;
              height: 60%;
            }
          }
          .content {
            position: absolute;
            display: flex;
            color: #ffffff;
            align-items: baseline;
            font-weight: bold;
            top: 40%;
            left: 3%;
            transform: translateY(-50%);
            .CN {
              font-size: calc(26px + 0.1vw);
            }
            .EN {
              font-size: calc(14px + 0.1vw);
            }
          }
        }
        .big::after {
          width: 12%;
          height: 8px;
          background: #cccccc;
          content: "";
          display: inline-block;
          position: absolute;
          bottom: -3px;
        }
        .big::before {
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-left-color: #cccccc;
          border-bottom-color: #cccccc;

          content: "";
          display: inline-block;
          position: absolute;
          bottom: -3px;
          left: 12%;
        }
        .small {
          width: 3%;
          height: 6px;
          background: #5da3ff;
        }
      }
      .box1 {
        margin: 0.5% 0;
        padding: 0.1% 0.6%;
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        ::v-deep(.el-radio-group) {
          margin-right: 1%;
          border-radius: 6px;
          border: 1.5px solid #dcdfe6;
          height: 90%;
          padding: 2px;
        }
        ::v-deep(.el-radio-button) {
          width: 200px;
          height: 100%;
          text-align: center;
        }
        ::v-deep(.el-radio-button__inner) {
          width: 100%;
          height: 100%;
          font-size: calc(18px + 0.1vw);
          color: #cccccc;
          border: 0;
          background-color: transparent;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ::v-deep(
            .el-radio-group
              .el-radio-button__orig-radio:checked
              + .el-radio-button__inner
          ) {
          background-color: #ffb900;
          color: #8e4000;
        }
        ::v-deep(
            .el-radio-button__orig-radio:checked + .el-radio-button__inner
          ) {
          box-shadow: none;
        }
        .bottom {
          height: 100%;
          width: 70%;
          box-sizing: border-box;
          display: flex;
          ::v-deep .el-button {
            padding: 0 0 !important;
            line-height: 0;
          }

          .el-button--info,
          .el-button--warning {
            height: 85%;
            width: 11%;
            font-size: calc(18px + 0.1vw);
            cursor: pointer;
          }

          .el-button--warning {
            color: #725219;
            background: #f4bc41;
          }
          .el-button--info {
            background: #d4d3d3;
            color: #5f5f5f;
          }

          ::v-deep .el-select .el-input .el-select__caret {
            color: #c0c4cc;
            font-size: calc(22px + 0.1vw);
            transition: transform 0.3s;
            transform: rotateZ(180deg);
            cursor: pointer;
          }

          ::v-deep .el-select {
            width: 15%;
            margin-right: 1%;
          }
          ::v-deep .el-date-editor {
            width: 15%;
            margin-right: 1%;
          }
          ::v-deep .el-select > .el-input {
            display: block;
            height: 100%;
          }
          ::v-deep .el-input--suffix .el-input__inner {
            padding-right: 30px;
            height: 100%;
            font-size: calc(16px + 0.1vw);
            background: rgba(0, 0, 0, 0);
          }
          ::v-deep(.el-button) {
            width: 8%;
            background-color: transparent;
            border: 1px solid #dcdfe6;
            font-size: calc(16px + 0.1vw);
            color: #c0c4cc;
          }
        }
      }
    }
    .form {
      width: 100%;
      height: 88%;
      background: rgba(0, 0, 0, 0);
      color: #fff;
      .online {
        color: #25e196;
      }

      .broken {
        color: #ee2828;
      }

      .offline {
        color: #8b9ab2;
      }

      .batch {
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .item {
          width: 33%;
          font-size: calc(16px + 0.1vw);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          img {
            width: 30%;
            cursor: pointer;
          }
        }
      }

      .img {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
          height: 100%;
          cursor: pointer;
        }
      }

      ::v-deep .el-table {
        border: 2px solid #1d80ea;
        // box-shadow: 8px 5px 10px -5px rgb(18, 94, 217);
      }

      ::v-deep .el-table--border {
        background: #0249b2;
        // border: none;
      }

      ::v-deep .el-table__header-wrapper {
        height: 8%;
      }

      ::v-deep .el-table__header {
        height: 100%;
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

      ::v-deep .el-table th {
        color: #eab63f !important;
      }

      ::v-deep .el-table th,
      ::v-deep .el-table tr,
      ::v-deep .el-table td {
        background-color: #0249b2; // 背景透明
        border: 0px;
        color: #93dcfe; // 修改字体颜色
        font-size: calc(14px + 0.1vw);
        height: 5px;
        font-weight: Normal;
        text-align: center;
        color: #fff;
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
    .page {
      margin-top: 1%;
      height: 3%;
      display: flex;
      justify-content: center;

      ::v-deep .el-pagination .btn-next {
        background-color: rgba(0, 0, 0, 0) !important;
        color: #fff;
        height: 28px;
        line-height: 28px;
      }

      ::v-deep .el-pagination .btn-prev {
        background-color: rgba(0, 0, 0, 0) !important;
        color: #fff;
        height: 28px;
        line-height: 28px;
      }

      ::v-deep .el-pagination button:disabled {
        background-color: rgba(0, 0, 0, 0) !important;
        color: #b4b5b7 !important;
      }

      ::v-deep .el-pager li {
        background: rgba(0, 0, 0, 0) !important;
        font-size: 22px !important;
        height: 28px;
        line-height: 28px;
        color: #ffffff;
      }

      ::v-deep .el-pagination .btn-prev .el-icon {
        font-size: 30px !important;
        height: 28px;
        line-height: 28px;
        // color: #fff;
      }
      ::v-deep .el-pagination .btn-next .el-icon {
        font-size: 30px !important;
        height: 28px;
        line-height: 28px;
        // color: #fff;
      }
      ::v-deep .el-pager li.active {
        color: #409eff;
      }
    }
  }
}
</style>