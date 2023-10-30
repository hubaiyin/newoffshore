<template>
  <el-dialog
    title="新建摄像头"
    :modal-append-to-body="false"
    :visible="dialogVisible"
    :before-close="cancel"
    width="44%"
  >
    <div class="content" ref="content" :style="{ height: height + 'px' }">
      <div class="top">
        <div class="left" ref="box">
          <div class="row">
            <strong>设备编号</strong
            ><el-input
              ref="id"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
            <i @click="focuses('id')" class="el-icon-edit-outline icon"></i>
          </div>
          <div class="row">
            <strong>设备型号</strong
            ><el-input
              ref="model"
              v-model="input"
              placeholder="请输入内容"
            ></el-input
            ><i @click="focuses('model')" class="el-icon-edit-outline icon"></i>
          </div>
          <div class="row">
            <strong>安装位置</strong
            ><el-input
              ref="position"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
            <i
              @click="focuses('position')"
              class="el-icon-edit-outline icon"
            ></i>
          </div>
        </div>
        <div class="right">
          <div class="row">
            <strong>隶属浮体</strong
            ><el-input
              ref="float"
              v-model="input"
              placeholder="请输入内容"
            ></el-input
            ><i @click="focuses('float')" class="el-icon-edit-outline icon"></i>
          </div>
          <div class="row">
            <strong>采集时长</strong
            ><el-input
              ref="time"
              v-model="input"
              placeholder="请输入内容"
            ></el-input
            ><i @click="focuses('time')" class="el-icon-edit-outline icon"></i>
          </div>
          <div class="row">
            <strong>安装日期</strong
            ><el-input
              ref="date"
              v-model="input"
              placeholder="请输入内容"
            ></el-input
            ><i @click="focuses('date')" class="el-icon-edit-outline icon"></i>
          </div>
        </div>
      </div>
      <div class="button">
        <el-button @click="cancel">取消</el-button>
        <el-button type="warning" @click="confirm">确定</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "CreateMonitor",
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
      input: "",
      imgWidth: 0,
      dialogImageUrl: "",
      dialog: false,
      disabled: false,
      ul: null,
      hideUploadEdit: null,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    focuses(type) {
      this.$refs[type].focus();
    },
    cancel() {
      console.log("取消");

      this.$emit("close");
    },
    confirm() {
      console.log("关闭");
      this.$emit("close");
    },
  },
  mounted() {
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
  padding: 25px 0px;
}
.content {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .top {
    height: 76%;
    width: 100%;
    background: #b7c2fa;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 3% 5%;
    .left,
    .right {
      height: 100%;
      width: 49.5%;
      .row {
        height: 33.33%;
        display: flex;
        align-items: center;
        strong {
          width: 28%;
          font-size: calc(16px + 0.1vw);
        }
        ::v-deep .el-input {
          width: 48%;
        }
        .icon {
          font-size: calc(28px + 0.1vw);
          margin-left: 3%;
          cursor: pointer;
        }
        ::v-deep .el-upload--picture-card {
          height: 100%;
          width: 100%;
          line-height: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .button {
    width: 60%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    ::v-deep .el-button {
      padding: 0 0 !important;
      line-height: 0;
    }
    .el-button--warning,
    .el-button--default {
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
</style>