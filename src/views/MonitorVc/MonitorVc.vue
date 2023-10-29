<template>
  <div class="device" @click="reChoose">
    <check-monitor
      :dialogVisible="isCheck"
      :index="index"
      v-if="isCheck"
      @close="closeCheck"
    ></check-monitor>
    <edit-device
      :dialogVisible="isEdit"
      :index="index"
      v-if="isEdit"
      @close="closeEdit"
    ></edit-device>
    <div class="main">
      <div class="left">
        <div class="header">
          <div class="top">
            <div class="big">
              <div
                class="box"
                ref="blueBox"
                :style="{
                  width: blueBoxWidth + 'px',
                  borderWidth: borderWidth + 'px',
                }"
              >
                <div class="inner"></div>
              </div>
              <div class="content" :style="{ left: blueBoxWidth + 20 + 'px' }">
                <div class="CN">监控列表</div>
                &nbsp;&nbsp;&nbsp;
                <div class="EN">DEVICE LIST</div>
              </div>
            </div>
            <div class="small"></div>
          </div>
          <div class="bottom">
            <div class="input">
              <el-input
                placeholder="请输入内容"
                v-model="entry.input"
                style="heigth: 100%"
              >
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
            <el-select v-model="entry.float" placeholder="隶属浮体" clearable>
              <el-option
                v-for="item in floats"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select
              v-model="entry.position"
              placeholder="安装位置"
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
            <el-select v-model="entry.type" placeholder="设备状态" clearable>
              <el-option
                v-for="item in types"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-button v-show="!batch" type="warning" @click="batch = true"
              >批量操作</el-button
            >
            <el-button v-show="batch" type="info" @click="batch = false"
              >取消</el-button
            >
          </div>
        </div>
        <div class="form" ref="form">
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
            <el-table-column prop="id" label="摄像头编号"> </el-table-column>
            <el-table-column prop="model" label="型号"> </el-table-column>
            <el-table-column prop="float" label="隶属浮体"> </el-table-column>
            <el-table-column prop="position" label="安装位置">
            </el-table-column>
            <el-table-column prop="duration" label="采集时长">
            </el-table-column>
            <el-table-column prop="date" label="安装日期"> </el-table-column>
            <el-table-column prop="status" label="状态" width="80">
              <template slot-scope="scope">
                <div
                  :class="
                    scope.row.status === '在线'
                      ? 'online'
                      : scope.row.status === '停用'
                      ? 'offline'
                      : 'broken'
                  "
                >
                  {{ scope.row.status }}
                </div>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="250">
              <template slot-scope="scope">
                <el-dropdown
                  v-show="!batch"
                  trigger="click"
                  placement="bottom-end"
                  @command="handleCommand"
                >
                  <div
                    class="img"
                    :style="{ height: formListHeight / 3 + 'px' }"
                    @click.stop="change(scope.$index)"
                  >
                    <img
                      v-show="tableData[scope.$index].choosen"
                      src="../../assets/image/arrow-down.png"
                    />
                    <img
                      v-show="!tableData[scope.$index].choosen"
                      src="../../assets/image/arrow-right.png"
                    />
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      :command="{ type: 'check', index: scope.$index }"
                      >查看</el-dropdown-item
                    >
                    <el-dropdown-item
                      :command="{ type: 'edit', index: scope.$index }"
                      >编辑</el-dropdown-item
                    >
                    <el-dropdown-item
                      :command="{ type: 'delete', index: scope.$index }"
                      >删除</el-dropdown-item
                    >
                    <el-dropdown-item
                      :command="{ type: 'export', index: scope.$index }"
                      >导出</el-dropdown-item
                    >
                    <el-dropdown-item
                      :command="{ type: 'change', index: scope.$index }"
                      >启用</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
                <div
                  v-show="batch"
                  class="batch"
                  :style="{ height: formListHeight + 'px' }"
                >
                  <div class="item" @click="deleteBatch">
                    <img src="../../assets/image/arrow-down.png" />
                    删除
                  </div>
                  <div class="item" @click="exportBatch">
                    <img src="../../assets/image/arrow-down.png" />导出
                  </div>
                  <div class="item" @click="changeBatch">
                    <img src="../../assets/image/arrow-down.png" />启用
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="big">
            <div
              class="box"
              ref="blueBox"
              :style="{
                width: blueBoxWidth + 'px',
                borderWidth: borderWidth + 'px',
              }"
            >
              <div class="inner"></div>
            </div>
            <div class="content" :style="{ left: blueBoxWidth + 20 + 'px' }">
              <div class="CN">状态分析</div>
              &nbsp;&nbsp;&nbsp;
              <div class="EN">STATUS ANALYSIS</div>
            </div>
          </div>
          <div class="small"></div>
        </div>

        <div class="footer">
          <dv-border-box-7
            ><div class="container">
              <div class="num">
                <div class="title">摄像头总数</div>
                <div class="content">23,984</div>
              </div>
              <div class="pie">
                <div class="title">设备状态</div>
                <div
                  class="content"
                  style="background: rgba(250, 250, 250, 0.2)"
                >
                  <div class="pieChart">
                    <echarts :chartOption="pie"></echarts>
                  </div>
                  <div class="box">
                    <div class="up">
                      <div class="text">故障率</div>
                      <div class="nums">12%</div>
                    </div>
                    <div class="down" ref="down">
                      <div class="row">
                        <div
                          class="color"
                          :style="{
                            width: colorWidth + 'px',
                            background: '#3a6bf6',
                          }"
                        ></div>
                        <div class="text">在线设备</div>
                      </div>
                      <div class="row">
                        <div
                          class="color"
                          :style="{
                            width: colorWidth + 'px',
                            background: '#6ce9fc',
                          }"
                        ></div>
                        <div class="text">停用设备</div>
                      </div>
                      <div class="row">
                        <div
                          class="color"
                          :style="{
                            width: colorWidth + 'px',
                            background: '#de1df4',
                          }"
                        ></div>
                        <div class="text">故障设备</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="title">摄像头分布</div>
                <div class="colChart"><bar-normal></bar-normal></div>
              </div></div
          ></dv-border-box-7>
        </div>
      </div>
    </div>
    <div class="page">
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </div>
</template>

<script>
import Echarts from "@/components/Charts/Echarts.vue";
import BarNormal from "@/components/Charts/BarNormal.vue";
import EditDevice from "@/components/Dialogs/EditDevice.vue";
import CheckMonitor from "@/components/Dialogs/CheckMonitor.vue";
export default {
  components: { Echarts, BarNormal, CheckMonitor, EditDevice },
  name: "DeviceVc",
  data() {
    return {
      isCheck: false,
      isEdit: false,
      tableData: [
        {
          type: "逆变器",
          id: "#A23901",
          model: "A型",
          float: "U1",
          position: "ZFG-1",
          duration: "114514分钟",
          date: "2023-09-23",
          status: "在线",
          choosen: false,
        },
        {
          type: "逆变器",
          id: "#A23901",
          model: "A型",
          float: "U1",
          position: "ZFG-1",
          duration: "114514分钟",
          date: "2023-09-23",
          status: "故障",
          choosen: false,
        },
        {
          type: "逆变器",
          id: "#A23901",
          model: "A型",
          float: "U1",
          position: "ZFG-1",
          duration: "114514分钟",
          date: "2023-09-23",
          status: "停用",
          choosen: false,
        },
        {
          type: "逆变器",
          id: "#A23901",
          model: "A型",
          float: "U1",
          position: "ZFG-1",
          duration: "114514分钟",
          date: "2023-09-23",
          status: "故障",
          choosen: false,
        },
        {
          type: "逆变器",
          id: "#A23901",
          model: "A型",
          float: "U1",
          position: "ZFG-1",
          duration: "114514分钟",
          date: "2023-09-23",
          status: "停用",
          choosen: false,
        },
        {
          type: "逆变器",
          id: "#A23901",
          model: "A型",
          float: "U1",
          position: "ZFG-1",
          duration: "114514分钟",
          date: "2023-09-23",
          status: "停用",
          choosen: false,
        },
        {
          type: "逆变器",
          id: "#A23901",
          model: "A型",
          float: "U1",
          position: "ZFG-1",
          duration: "114514分钟",
          date: "2023-09-23",
          status: "故障",
          choosen: false,
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
      blueBoxWidth: 0,
      borderWidth: 0,
      colorWidth: 0,
      pie: {
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["55%", "85%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 12, name: "故障设备", itemStyle: { color: "#de1df4" } },
              { value: 54, name: "在线设备", itemStyle: { color: "#3a6bf6" } },
              { value: 34, name: "停用设备", itemStyle: { color: "#6ce9fc" } },
            ],
          },
        ],
        grid: {
          left: "0px",
          right: "0px",
          bottom: "0px",
          top: "0px",
        },
      },
    };
  },

  mounted() {
    this.formListHeight = this.$refs.form.clientHeight * 0.92 * 0.1;
    this.blueBoxWidth = this.$refs.blueBox.clientHeight;
    this.borderWidth = this.blueBoxWidth / 8;
    this.colorWidth = this.$refs.down.clientHeight * 0.2 * 0.5;
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        row;
        return "";
      } else {
        return "warning-row";
      }
    },
    change(index) {
      if (index !== this.index) {
        this.tableData[this.index].choosen = false;
      }
      this.index = index;
      this.tableData[index].choosen = !this.tableData[index].choosen;
    },
    reChoose() {
      this.tableData[this.index].choosen = false;
    },
    handleCommand(obj) {
      const { type, index } = obj;
      this.tableData[index].choosen = !this.tableData[index].choosen;
      console.log(type);
      switch (type) {
        case "delete":
          this.deleteOne(index);
          break;
        case "check":
          this.check(index);
          break;
        case "edit":
          this.edit(index);
          break;
        case "export":
          this.exportOne(index);
          break;
        case "change":
          this.changeOne(index);
          break;
      }
    },
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
    deleteOne(index) {
      console.log(index);
    },
    exportOne(index) {
      console.log(index);
    },
    changeOne(index) {
      console.log(index);
    },
    deleteBatch() {},
    exportBatch() {},
    changeBatch() {},
  },
};
</script>

<style lang="scss" scoped>
.device {
  height: 100%;
  width: 100%;
  padding: 1% 0.3%;
  padding-bottom: 0.3%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main,
  .page {
    width: 100%;
  }
  .main {
    height: 95.9%;
    display: flex;
    justify-content: space-between;
    .left {
      width: 72%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .header {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          width: 100%;
          height: 44%;
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
              height: 45%;
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
        .bottom {
          height: 48%;
          width: 100%;
          box-sizing: border-box;
          padding: 0.1% 0.6%;
          display: flex;
          justify-content: space-between;
          .input {
            width: 40%;
            height: 85%;

            ::v-deep .el-input {
              height: 100%;
              background: rgba(0, 0, 0, 0);
            }

            ::v-deep .el-input--suffix .el-input__inner {
              padding-left: 30px;
              height: 100%;
              font-size: calc(16px + 0.1vw);
              background: rgba(0, 0, 0, 0);
              color: #fff;
            }

            ::v-deep .el-icon-search:before {
              font-size: calc(28px + 0.2vw);
            }

            ::v-deep .el-input__icon {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
            }
          }

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
          }

          ::v-deep .el-select > .el-input {
            display: block;
            height: 85%;
          }
          ::v-deep .el-input--suffix .el-input__inner {
            padding-right: 30px;
            height: 100%;
            font-size: calc(16px + 0.1vw);
            background: rgba(0, 0, 0, 0);
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
          font-size: calc(17px + 0.1vw);
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
    }
    .right {
      width: 27%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        width: 100%;
        height: 5.28%;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .big {
          width: 94%;
          height: 100%;
          border-bottom: 3px solid #8c8f95;
          position: relative;
          .box {
            // background: skyblue;
            height: 45%;
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
          width: 25%;
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
          left: 25%;
        }
        .small {
          width: 5%;
          height: 6px;
          background: #5da3ff;
        }
      }

      .footer {
        height: 92%;
        width: 100%;
        ::v-deep .dv-border-box-7 .border-box-content {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          .container {
            height: 98%;
            width: 96%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .num,
            .pie,
            .column {
              width: 100%;
              height: 15%;
              display: flex;
              flex-direction: column;
              .title {
                width: 100%;
                color: #ffffff;
                font-size: calc(20px + 0.3vw);
              }
              .content {
                flex: 1;
                width: 100%;
                font-size: calc(48px + 1vw);
                color: #76fbe3;
              }
            }
            .pie,
            .column {
              height: 36%;
              .content {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                .pieChart {
                  width: 65%;
                  height: 80%;
                }
                .box {
                  width: 33%;
                  height: 90%;
                  display: flex;
                  flex-direction: column;
                  .up {
                    color: #de1df4;
                    .text {
                      font-size: calc(22px + 0.1vw);
                    }
                    .nums {
                      font-size: calc(40px + 1vw);
                    }
                  }
                  .down {
                    width: 100%;
                    flex: 1;
                    color: #ffffff;
                    font-size: calc(14px + 0.1vw);
                    .row {
                      height: 20%;
                      width: 100%;
                      margin-top: 5%;
                      display: flex;
                      align-items: center;
                      .color {
                        height: 50%;
                        width: 15%;
                        margin-right: 10%;
                        border-radius: 50%;
                      }
                    }
                  }
                }
              }
              .colChart {
                flex: 1;
                width: 100%;
              }
            }

            .pie {
              height: 34%;
            }
          }
        }
      }
    }
  }
  .page {
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
</style>