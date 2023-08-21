<template>
  <div class="container">
    <div class="header" ref="header">
      <div style="width: 50%">
        <el-carousel
          :autoplay="false"
          type="card"
          :height="carHeight + 'px'"
          indicator-position="none"
          arrow="always"
          @change="changeModule"
        >
          <el-carousel-item v-for="(item, index) in options" :key="index">
            <h3 class="medium">{{ item.name }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="middle">
      <h3>性能参数</h3>
      <div class="right">
        <div class="op1">
          安装位置：<el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="op2">
          数据范围：<el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="time">(上次更新时间：2023-8-14 16:53:23)</div>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "RealTime",
  data() {
    return {
      carHeight: 0,
      value: "",
      options: [
        {
          value: "EnvironmentalWeather",
          name: "环境气象",
        },
        {
          value: "MarineHydrology",
          name: "海洋水文",
        },
        {
          value: "MainStruct",
          name: "主体结构",
        },
        {
          value: "ElectricSystem",
          name: "电气系统",
        },
        {
          value: "PvComponent",
          name: "光伏组件",
        },
      ],
    };
  },
  mounted() {
    const dom = this.$refs.header;
    this.carHeight = dom.clientHeight;
  },
  methods: {
    changeModule(index) {
      console.log(index);
      console.log(this.options[index].value);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: pink;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    height: 5%;
    width: 96%;
    background: skyblue;
    border-bottom: 2px solid grey;
    display: flex;
    justify-content: center;
    .el-carousel__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .el-carousel__item h3 {
      // color: #475669;
      font-size: 18px;
      // opacity: 0.75;
      margin: 0;
      font-weight: 500;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: none !important;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: none !important;
    }
    ::v-deep .el-carousel__mask {
      display: none !important;
    }
  }
  .middle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5% 1%;
    box-sizing: border-box;
    align-items: center;
    .right {
      display: flex;
      width: 60%;
      justify-content: space-between;
      align-items: center;
    }
  }
  .content {
    width: 100%;
    flex: 1;
    background: skyblue;
    box-sizing: border-box;
    width: 99%;
    border: 1px solid rebeccapurple;
  }
}
</style>