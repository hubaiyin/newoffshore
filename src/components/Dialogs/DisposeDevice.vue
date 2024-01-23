<template>
  <el-dialog
    title="处理"
    :modal-append-to-body="false"
    :visible="dialogVisible"
    :before-close="close"
    width="60%"
  >
    <div class="content" ref="content" :style="{ height: height + 'px' }">
      <div class="top">
        <div class="left">
          <div class="title">处理方案</div>
          <el-input
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
            v-model="textarea"
            resize="none"
          >
          </el-input>
        </div>
        <div class="right">
          <div class="title">上传图片</div>
          <el-upload
            limit="2"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="bottom">
        <div class="left">
          <div class="title">处理日期</div>
          <div class="select">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期">
            </el-date-picker>
            <div
              style="height: 3px; width: 6%; background-color: #5c73ae"
            ></div>
            <el-time-picker
              arrow-control
              v-model="value2"
              :picker-options="{
                selectableRange: '18:30:00 - 20:30:00',
              }"
              placeholder="任意时间点"
            >
            </el-time-picker>
          </div>
        </div>
        <div class="right">
          <div class="title">处理人</div>
          <el-input
            v-model="input"
            placeholder="请输入内容"
            style="width: 60%"
          ></el-input>
        </div>
      </div>
    </div>
    <div class="button">
      <el-button @click="close">取消</el-button>
      <el-button type="warning" @click="close">提交</el-button>
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
      textarea: "",
      value1: "",
      value2: "",
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
  padding: 10px 0px 15px;
}
.content {
  background-color: #b4c3ff;
  display: flex;
  flex-direction: column;
  padding: 1.5%;
  .title {
    font-size: calc(16px + 0.5vw);
    font-weight: 700;
    color: #243971;
    margin-bottom: 2%;
  }
  .left {
    box-sizing: border-box;
    width: 55%;
    padding-right: 2%;
  }
  .right {
    width: 45%;
  }
  ::v-deep(.el-divider--horizontal) {
    margin: 20px 0;
  }
  ::v-deep(.el-divider) {
    background-color: #33467d;
  }
  .top {
    width: 100%;
    height: 60%;
    display: flex;
    ::v-deep(.el-textarea__inner) {
      font-size: 15px;
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .select {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.button {
  margin-top: 1.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  .el-button {
    height: 65%;
    width: 20%;
    font-size: calc(18px + 0.1vw);
    cursor: pointer;
  }
  ::v-deep(.el-button--warning) {
    color: #725219;
    background: #f4bc41;
  }
}
</style>