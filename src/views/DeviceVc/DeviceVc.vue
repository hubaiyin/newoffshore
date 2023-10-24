<template>
  <div class="device" @click="reChoose">
    <div class="main">
      <div class="left">
        <div class="header">
          <div class="top"></div>
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
            <el-select v-model="entry.type" placeholder="设备类型" clearable>
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
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="type" label="设备类型" min-width="100">
            </el-table-column>
            <el-table-column prop="id" label="设备编号" min-width="100">
            </el-table-column>
            <el-table-column prop="model" label="设备型号" min-width="100">
            </el-table-column>
            <el-table-column prop="float" label="隶属浮体" min-width="100">
            </el-table-column>
            <el-table-column prop="position" label="安装位置" min-width="100">
            </el-table-column>
            <el-table-column prop="duration" label="采集时长" min-width="100">
            </el-table-column>
            <el-table-column prop="date" label="安装日期" min-width="100">
            </el-table-column>
            <el-table-column prop="status" label="状态" min-width="100">
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
                    :style="{ height: formListHeight + 'px' }"
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
      <div class="right"></div>
    </div>
    <div class="page">
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviceVc",
  data() {
    return {
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
      batch: true,
    };
  },

  mounted() {
    console.log(this.$refs.form.clientHeight);
    this.formListHeight = this.$refs.form.clientHeight * 0.92 * 0.1;
    console.log(this.formListHeight);
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
      width: 74.3%;
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
          background: skyblue;
        }
        .bottom {
          height: 48%;
          width: 100%;
          box-sizing: border-box;
          padding: 0.1% 0.6%;
          display: flex;
          justify-content: space-between;
          .input {
            width: 45%;
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
              font-size: calc(32px + 0.2vw);
            }

            ::v-deep .el-input__icon {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
            }
          }

          .el-button--info,
          .el-button--warning {
            height: 85%;
            width: 11%;
            font-size: calc(20px + 0.1vw);
            cursor: pointer;
            letter-spacing: 6px;
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
            height: 36%;
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
      background: skyblue;
      width: 25%;
      height: 100%;
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