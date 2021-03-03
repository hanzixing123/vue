<template>
<div>
 <div class="li">
   <img src="../../assets/images/index_03.gif" alt="">
  <div class="xue">
  <el-date-picker
      v-model="value1"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>

     <div  class="tao">
  <el-input placeholder="搜索学员快速签到" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="课程">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
  </div>

  </div>

 <p class="rr">今日课表</p>

<div class="hh">
  <p class="oo">架子鼓基础班2101

    <i class="el-icon-reading"> 架子鼓课</i>
    <i class="el-icon-time"> 13:30-14:15</i>
    <i class="el-icon-s-custom"> 明明</i>
    <i class="el-icon-folder-checked"> 已到达</i>
   <el-button type="text" @click="open" class="el-icon-edit-outline"> 签到</el-button>
  </p>
  
  
</div>

</div>
  
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: '',
    value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
    value2: ''
    }
  },



   methods: {
     open() {
        this.$prompt('备注', '签到', {
          confirmButtonText: '保存',
          cancelButtonText: '取消',
       
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '签到成功'
                      });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '签到失败'
          });       
        });
      }
    }
}
</script>

<style>
.li{
width: 1385px;
 height: 51px;
 background-color: #f5f6fa;
 float: left;
}

.xue{
  
  margin-left: 148px;
  margin-top: -48px;
}
.tao{
  margin-left: 430px;
  margin-top: -39px;
  width: 400px;
  
}

 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .rr{
    margin-left: 10px;
    margin-top: 60px;
  }
  .hh{
    width: 1383px;
    height: 56px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
  }
  .oo{
    margin-left: 34px;
    margin-top: 10px;
  }
  .el-icon-reading{
    margin-left: 230px;
    
  }
  .el-icon-time{
    margin-left: 30px;
  }
  .el-icon-s-custom{
    margin-left: 20px;
  }
  .el-icon-folder-checked{
    margin-left: 380px;
  }
  .el-icon-edit-outline{
    margin-left: 40px;
  }
</style>