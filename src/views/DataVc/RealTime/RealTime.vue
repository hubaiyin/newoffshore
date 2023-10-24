<template>
  <div class="container">
    <div class="header" ref="header">
      <bread-crumb :key="updateB"></bread-crumb>
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
        <div class="op">
          <div class="op1">
            <div class="text">安装位置：</div>
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="op2">
            数据范围：<el-select
              v-model="value"
              placeholder="请选择"
              size="mini"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="time">(上次更新时间：2023-8-14 16:53:23)</div>
      </div>
    </div>
    <div class="content">
      <div class="charts">
        <div
          class="chart"
          v-for="item in datas"
          :key="item.title.text"
          :class="
            datas.length === 1 ? 'only' : datas.length < 3 ? 'double' : ''
          "
        >
          <dv-border-box-11 :title="item.title.text"
            ><div class="chartBox">
              <Charts :chartOption="item" /></div
          ></dv-border-box-11>
        </div>
      </div>
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import Charts from "@/components/Echarts.vue";
export default {
  name: "RealTime",
  components: { BreadCrumb, Charts },
  data() {
    return {
      carHeight: 0,
      value: "",
      updateB: 0,
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
    console.log(this.datas);
    const dom = this.$refs.header;
    this.carHeight = dom.clientHeight;
    this.SET_BREADS(this);
    this.ADD_BREAD({
      path: "/before/data/realtime",
      meta: { title: "环境气象" },
    });
    // console.log(this.data);
  },
  methods: {
    ...mapMutations("bread", ["SET_BREADS", "ADD_BREAD"]),
    changeModule(index) {
      console.log(index);
      console.log(this.options[index].value);
      let name = this.options[index].name;
      const bread = {
        path: "/before/data/realtime",
        meta: { title: name },
      };
      console.log(bread);
      this.ADD_BREAD(bread);
      this.updateB++;
    },
  },
  computed: {
    ...mapState("charts", ["data"]),
    ...mapGetters("charts", ["datas"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e9e7e7;
  padding-bottom: 0.2%;
  box-sizing: border-box;
  .header {
    height: 5%;
    min-height: 42px;
    // background: #000;
    width: 96%;
    border-bottom: 2px solid grey;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    .el-carousel__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .el-carousel__item h3 {
      // color: #475669;
      color: #e3e9f8;
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
      width: 70%;
      justify-content: flex-end;
      align-items: center;
      .op {
        display: flex;
        width: 60%;
        justify-content: flex-end;
        align-items: center;
        .op1,
        .op2 {
          display: flex;
          align-items: center;
          padding: 0 1%;
          box-sizing: border-box;
          // margin-left: 10%;
        }
        ::v-deep .el-input__inner {
          background-color: rgba($color: #000000, $alpha: 0);
          border: 1px solid #0093ce;
        }
        ::v-deep .el-input__inner::placeholder {
          color: #409eff;
        }

        ::v-deep .el-select .el-input .el-select__caret {
          color: #409eff;
        }
      }
      .time {
        padding: 0 1%;
        box-sizing: border-box;
      }
    }
  }
  .content {
    flex: 1;
    box-sizing: border-box;
    width: 99%;
    // border: 1px solid rebeccapurple;
    margin-bottom: 0.2%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .charts {
      flex: 1;
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      align-items: center;
      box-sizing: border-box;
      padding-bottom: 0.3%;
      .chart {
        width: 49.5%;
        height: 49%;
        // background: rgba($color: #091942, $alpha: 0.1);
        border-radius: 30px;
        .chartBox {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .only {
        width: 90%;
        height: 90%;
      }
      .double {
        height: 90%;
      }
    }

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