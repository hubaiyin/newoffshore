<template>
  <el-dialog
    title="编辑"
    :modal-append-to-body="false"
    :visible="dialogVisible"
    :before-close="close"
    width="46%"
  >
    <div class="content" ref="content" :style="{ height: height + 'px' }">
      <div class="top">
        <div class="left" ref="box">
          <div class="row">
            <strong>设备类型</strong
            ><el-input
              ref="type"
              v-model="input"
              placeholder="请输入内容"
            ></el-input>
            <i @click="focuses('type')" class="el-icon-edit-outline icon"></i>
          </div>
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
            ></el-input
            ><i
              @click="focuses('position')"
              class="el-icon-edit-outline icon"
            ></i>
          </div>
          <div class="row">
            <strong>工作电压</strong
            ><el-input
              ref="voltage"
              v-model="input"
              placeholder="请输入内容"
            ></el-input
            ><i
              @click="focuses('voltage')"
              class="el-icon-edit-outline icon"
            ></i>
          </div>
          <div class="row">
            <strong>内部温度</strong
            ><el-input
              ref="temperature"
              v-model="input"
              placeholder="请输入内容"
            ></el-input
            ><i
              @click="focuses('temperature')"
              class="el-icon-edit-outline icon"
            ></i>
          </div>
        </div>
        <div class="right">
          <div class="row">
            <strong>内部湿度</strong
            ><el-input
              ref="humidity"
              v-model="input"
              placeholder="请输入内容"
            ></el-input
            ><i
              @click="focuses('humidity')"
              class="el-icon-edit-outline icon"
            ></i>
          </div>
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
          <div class="row" :style="{ height: imgWidth * 2 + 'px' }">
            <strong>设备图片</strong>
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false"
              :multiple="false"
              :limit="1"
              :style="{
                height: imgWidth * 2 + 'px',
                width: imgWidth * 2 + 'px',
                display: 'flex',
              }"
            >
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
            <el-dialog :visible.sync="dialog">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog>
          </div>
        </div>
      </div>
      <div class="button">
        <el-button>取消</el-button>
        <el-button type="warning">确定</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "EditDevice",
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
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    focuses(type) {
      this.$refs[type].focus();
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  mounted() {
    // console.log(this.index);
    this.$nextTick(() => {
      this.height = this.$refs.content.clientWidth * 0.6;
      this.imgWidth = (this.height * 0.85 - this.height * 0.85 * 0.06) * 0.166;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .top {
    height: 85%;
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
        height: 16.66%;
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
    height: 14%;
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