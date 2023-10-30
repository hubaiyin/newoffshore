<template>
  <el-dialog
    title="U2-ZFG-1 摄像头"
    :modal-append-to-body="false"
    :visible="dialogVisible"
    :before-close="close"
    width="80%"
  >
    <div class="content" ref="content" :style="{ height: height + 'px' }">
      <div class="left">
        <div class="title">实时画面</div>
        <div class="context">
          <video
            controls
            src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          ></video>
        </div>
      </div>
      <div class="right">
        <div class="title">摄像头信息</div>
        <div class="context">
          <div class="inform">
            <div class="row">
              <div class="name">摄像头编号</div>
              <div class="value">#A23101</div>
            </div>
            <div class="row">
              <div class="name">型号</div>
              <div class="value">A型</div>
            </div>
            <div class="row">
              <div class="name">隶属浮体</div>
              <div class="value">U2</div>
            </div>
            <div class="row">
              <div class="name">安装位置</div>
              <div class="value">ZFG-1</div>
            </div>
            <div class="row">
              <div class="name">安装日期</div>
              <div class="value">2023-9-21</div>
            </div>
            <div class="row">
              <div class="name">采集时长</div>
              <div class="value">114514分钟</div>
            </div>
            <div class="row">
              <div class="name">设备状态</div>
              <div class="value">在线</div>
            </div>
          </div>
          <div class="button">
            <el-button type="primary">查看回放</el-button>

            <el-button type="warning" @click="close">确定</el-button>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "CheckMonitor",
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
      this.height = this.$refs.content.clientWidth * 0.4;
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
    width: 66.5%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: calc(36px + 0.2vw);
      color: #fff;
      font-weight: bold;
    }
    .context {
      // flex: 1;
      display: flex;
      justify-content: space-between;
      video {
        width: 100%;
        height: 100%;
      }
    }
  }
  .right {
    width: 32%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: calc(36px + 0.2vw);
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
      .inform {
        background: #b7c2fa;
        width: 100%;
        height: 84%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5% 8%;
        .row {
          flex: 1;
          width: 100%;
          display: flex;
          .name,
          .value {
            height: 100%;
            display: flex;
            align-items: center;
            font-size: calc(28px + 0.1vw);
          }
          .name {
            width: 45%;
            font-weight: bold;
          }
          .value {
            width: 50%;
          }
        }
      }
      .button {
        width: 100%;
        height: 16%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        ::v-deep .el-button {
          padding: 0 0 !important;
          line-height: 0;
        }
        .el-button--warning,
        .el-button--primary {
          height: 64%;
          width: 45%;
          font-size: calc(22px + 0.1vw);
          cursor: pointer;
        }

        .el-button--warning {
          color: #725219;
          background: #f4bc41;
        }
        .el-button--primary {
          color: #fff;
          background: #387ff7;
        }
      }
    }
  }
}
</style>