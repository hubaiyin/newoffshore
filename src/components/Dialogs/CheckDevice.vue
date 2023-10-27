<template>
  <el-dialog
    title="查看"
    :modal-append-to-body="false"
    :visible="dialogVisible"
    :before-close="close"
    width="60%"
  >
    <div class="content" ref="content" :style="{ height: height + 'px' }">
      <div class="left">
        <div class="title">设备信息</div>
        <div class="context">
          <div class="leftText">
            <div class="row">
              <strong>设备类型</strong>&nbsp;&nbsp;&nbsp;&nbsp;逆变器
            </div>
            <div class="row">
              <strong>设备编号</strong>&nbsp;&nbsp;&nbsp;&nbsp;#A23901
            </div>
            <div class="row">
              <strong>设备型号</strong>&nbsp;&nbsp;&nbsp;&nbsp;A型
            </div>
            <div class="row">
              <strong>隶属浮体</strong>&nbsp;&nbsp;&nbsp;&nbsp;U1
            </div>
            <div class="row">
              <strong>安装位置</strong>&nbsp;&nbsp;&nbsp;&nbsp;ZFG-1
            </div>
            <div class="row">
              <strong>采集时长</strong>&nbsp;&nbsp;&nbsp;&nbsp;114514分钟
            </div>
            <div class="row">
              <strong>安装日期</strong>&nbsp;&nbsp;&nbsp;&nbsp;2023-09-17
            </div>
          </div>
          <div class="line"></div>
          <div class="rightText">
            <div class="row">
              <strong>设备状态</strong>&nbsp;&nbsp;&nbsp;&nbsp;逆变器
            </div>
            <div class="row">
              <strong>状态发生时间</strong>&nbsp;&nbsp;&nbsp;&nbsp;2023-09-21
              12:18:26
            </div>
            <div class="row">
              <strong>状态持续时间</strong>&nbsp;&nbsp;&nbsp;&nbsp;112分钟
            </div>
            <div class="row"></div>
            <div class="row">
              <strong>设备工作电压</strong>&nbsp;&nbsp;&nbsp;&nbsp;220V
            </div>
            <div class="row">
              <strong>内部温度</strong>&nbsp;&nbsp;&nbsp;&nbsp;65℃
            </div>
            <div class="row">
              <strong>内部湿度</strong>&nbsp;&nbsp;&nbsp;&nbsp;45%
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">设备图片</div>
        <div class="context">
          <div class="img">
            <img src="../../assets/image/background.png" />
          </div>
          <div class="button">
            <el-button type="warning" @click="close">确定</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "CheckDevice",
  props: {
    dialogVisible: {
      type: Boolean,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    // console.log(this.index);
    this.$nextTick(() => {
      this.height = this.$refs.content.clientWidth * 0.35;
    });
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  background: #8095d8;
  padding: 0 30px;
}
::v-deep .el-dialog__header {
  border-bottom: 2px solid #fff;
  padding: 20px 0px 10px;
}
::v-deep .el-dialog__title {
  font-size: calc(22px + 0.5vw);
  color: #fff;
  font-weight: bold;
  line-height: normal;
}
::v-deep .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
  font-size: calc(32px + 0.1vw);
}
::v-deep .el-dialog__body {
  padding: 10px 0px 30px;
}
.content {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 56%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: calc(24px + 0.1vw);
      color: #fff;
      font-weight: bold;
    }
    .context {
      flex: 1;
      background: #b7c2fa;
      display: flex;
      justify-content: space-between;
      padding: 2% 1.5%;
      box-sizing: border-box;
      .line {
        height: 100%;
        width: 3px;
        background: #7986bd;
      }
      .leftText {
        color: #414f85;
        height: 100%;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: calc(16px + 0.1vw);
        padding-left: 3%;
        box-sizing: border-box;
      }
      .rightText {
        color: #414f85;
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 3%;
        font-size: calc(16px + 0.1vw);
        box-sizing: border-box;
      }
    }
  }
  .right {
    width: 42.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: calc(24px + 0.1vw);
      color: #fff;
      font-weight: bold;
    }
    .context {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      color: #414f85;
      .img {
        width: 100%;
        height: 80%;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .button {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        ::v-deep .el-button {
          padding: 0 0 !important;
          line-height: 0;
        }
        .el-button--warning {
          height: 65%;
          width: 45%;
          font-size: calc(18px + 0.1vw);
          cursor: pointer;
        }

        .el-button--warning {
          color: #725219;
          background: #f4bc41;
        }
      }
    }
  }
}
</style>