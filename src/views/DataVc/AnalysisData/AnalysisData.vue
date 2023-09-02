<template>
  <div class="main">
    <div class="up">
      <div class="chart">
        <!-- <many-line-charts></many-line-charts> -->
      </div>
    </div>
    <div class="down">
      <div class="downTop">
        <el-button type="warning" @click="dialogVisible = true">
          新增数据
        </el-button>
      </div>
      <div class="form">
        <el-table
        :data="tableData"
        height="100%"
        :row-style="{height:'40px'}"
        :cell-style="{padding:'0px'}"
        border
        stripe
        >
          <el-table-column fixed prop="startTime" label="起始时间" min-width="100">
          </el-table-column>
          <el-table-column prop="endTime" label="结束时间" min-width="100">
          </el-table-column>
          <el-table-column prop="module" label="数据隶属模块" min-width="100">
          </el-table-column>
          <el-table-column prop="dataName" label="数据名称" min-width="100">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="div">
      <el-dialog
        title="添加数据"
        :visible.sync="dialogVisible"
        class="myDialog"
        width="50%"
        :modal-append-to-body="false"
      >
        <el-form
          label-width="120px"
          :rules="rules"
          :model="formData"
          ref="ruleForm"
        >
          <el-form-item label="数据类别" prop="dataModule">
            <el-select v-model="formData.dataModule" placeholder="请选择">
              <el-option label="环境气象" value="EnvironmentalWeather"></el-option>
              <el-option label="海洋水文" value="MarineHydrology"></el-option>
              <el-option label="主体结构" value="MainStructure"></el-option>
              <el-option label="光伏组件" value="PhotovoltaicModules"></el-option>
              <el-option label="电气系统" value="ElectricalSystem"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择时间段" prop="timePeriod">
            <el-date-picker
              value-format="yyyy-MM-dd hh:mm:ss"
              v-model="formData.timePeriod"
              type="datetimerange"
              start-placeholder="起始时间"
              range-separator="-"
              end-placeholder="结束时间" 
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="请选择数据：" v-show="this.formData.dataModule === 'EnvironmentalWeather'" prop="dataName">
            <el-radio-group v-model="formData.dataName">
              <el-radio label="temperature">温度</el-radio>
              <el-radio label="radiation">太阳辐照度</el-radio>
              <el-radio label="rainfall">降雨量</el-radio>
              <el-radio label="humidity">环境湿度</el-radio>
              <el-radio label="windSpeed">风速</el-radio>
            </el-radio-group>
          </el-form-item>        
          <el-form-item label="请选择数据：" v-show="this.formData.dataModule === 'MarineHydrology'" prop="dataName">
            <el-radio-group v-model="formData.dataName">
              <el-radio label="flowSpeed">流速</el-radio>
              <el-radio label="waveHeight">波高</el-radio>
              <el-radio label="tideLevel">潮位</el-radio>
              <el-radio label="waterDepth">水深</el-radio>
              <el-radio label="windSpeed">温度</el-radio>
              <el-radio label="salinity">盐度</el-radio>
              <el-radio label="nitrogen">氮度</el-radio>
              <el-radio label="ammonia">氨度</el-radio>
              <el-radio label="ph">PH值</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="请选择数据：" v-show="this.formData.dataModule === 'MainStructure'" prop="dataName">
            <el-radio-group v-model="formData.dataName">
              <el-radio label="mainFloatingTubeStress">主浮管应力</el-radio>
              <el-radio label="cableForce">浮体息缆力</el-radio>
              <el-radio label="acceleration">加速度</el-radio>
              <el-radio label="xdisplacement">位移X</el-radio>
              <el-radio label="ydisplacement">位移Y</el-radio>
            </el-radio-group>
          </el-form-item>        
          <el-form-item label="请选择数据：" v-show="this.formData.dataModule === 'PhotovoltaicModules'" prop="dataName">
            <el-radio-group v-model="formData.dataName">
              <el-radio label="backplaneTemperature">背板温度</el-radio>
              <el-radio label="voltage">电压</el-radio>
              <el-radio label="electricCurrent">电流</el-radio>
              <el-radio label="outputPower">功率</el-radio>
            </el-radio-group>
          </el-form-item>        
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleClose()">取 消</el-button>
          <el-button type="primary" @click="submit()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name:"AnalysisData",
  data() {
    return {
      dialogVisible: false,
      formData:{
        dataModule:"",
        dataName:"",
        timePeriod:"",
      },
      params:{
        startTime:"",
        endTime:"",
        module:"",
        dataName:"",
      },
      tableData:[],
      rules:{
        dataName:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        dataModule:[
          { required: true, message: '不能为空', trigger: 'select' }
        ],
        timePeriod:[
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
    ...mapMutations("bread", ["SET_BREADS"]),
    handleClose(){
      this.dialogVisible = false;
      this.formData = {
            module: "",
            dataName:"",
            timePeriod:"",
          }
      this.$refs.ruleForm.resetFields();
    },
    submit(){
      this.$refs.ruleForm.validate((valid)=>{
        if(valid){
          this.params.startTime = this.formData.timePeriod[0];
          this.params.endTime = this.formData.timePeriod[1];
          this.params.module = this.formData.dataModule;
          this.params.dataName = this.formData.dataName;
          // this.getData(this.params);
          this.tableData.push(this.params);
          this.$message({
            message:"添加成功！",
            type:"success"
          })
          this.formData = {
            module: "",
            dataName:"",
            timePeriod:"",
          }
          this.params = {
            startTime:"",
            endTime:"",
            module:"",
            dataName:"",
          }
          this.$refs.ruleForm.resetFields();
          this.dialogVisible = false;
        } 
        else {
          this.$message({
            message:"请检查是否填写完整！",
            type:"warning"
          })
        }
      })
    },
    deleteRow(index, rows){
      this.$confirm("确认删除该条数据？")
      .then(()=>{
        rows.splice(index, 1);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  },
  mounted() {
    console.log(this.$route);
    this.SET_BREADS(this);
  },
}
</script>

<style lang="scss" scoped>

.main {
  margin: 0; 
  height: 99%;
  border: 2px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.up{
  width: 98%;
  height: 50%;
  border: 2px solid red;
}
.down{
  width: 98%;
  height: 48%;
  border: 2px solid red;
  /* overflow: hidden; */
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.form{
  border: 2px solid green;
  width: 98%;
  height: 86%;
}
.downTop{
  width: 98%;
  height: 11%;
  border: 2px solid green;
  display: flex;
  flex-direction: row-reverse;
}
.div{
    ::v-deep .el-dialog {
    margin: 0 auto;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
    ::v-deep .el-dialog__header {
      padding: 20px;
    }
    ::v-deep .el-dialog__body {
      padding-bottom: 0px;
    }
    ::v-deep .el-radio-group {
      width: 80%;
      height: 70px;
      // border: 2px solid red;
      background-color: #f2f9fb;
      border-radius: 6px;
      display: flex;
      flex-wrap: wrap;
      padding-top: 12px;
      padding-left: 10px;
      .el-radio__label {
        // background-color:skyblue;
      }
    }
  }
}

// .form{  
//   /deep/.el-table{
//     .el-tabl-row{
//       line-height: 30px;
//     }
//   }
// }
</style>