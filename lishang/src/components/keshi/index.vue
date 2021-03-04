<template>
<div>
 <div class="li">
   <img src="../../assets/images/li_03.gif" alt="">


 <div class="jj">
  <el-input placeholder="" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="课程">
      <el-option label="架子鼓课" value="1"></el-option>
      <el-option label="美术课" value="2"></el-option>
      <el-option label="瑜伽课" value="3"></el-option>
    </el-select>
     <el-select v-model="select" slot="prepend" placeholder="班级">
      <el-option label="01班" value="1"></el-option>
      <el-option label="02班" value="2"></el-option>
      <el-option label="03班" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>


  </div>

 <p class="rr"><p class="el-icon-arrow-left">上一月</p>&#160;&#160;&#160;&#160;&#160;2021年03月&#160;&#160;&#160;&#160;&#160;下一月<p class="el-icon-arrow-right
"></p> </p>

<p class="lj">总排课时:&#160;&#160;304&#160;&#160;&#160;&#160;总排学生数:&#160;39位&#160;&#160;&#160;&#160;&#160;&#160;&#160;
 未结果: &#160;303&#160;&#160;&#160;&#160;&#160;&#160;已结果: &#160;0
    
    <p class="ql"></p>
    <p class="cf"></p>
    <p class="sb">按月</p>
     <p class="sk">按日</p>
</p>


<div class="hs">
    <div class="rs">1日(周一)</div>
  <p class="op" @click="dialogFormVisible = true">架子鼓基础班2101 <br>
  13:30 明明
   </p>
</div>
<div class="hs">
    <div class="rs">2日(周二)</div>
  <p class="oo"></p>
</div>
<div class="hs">
    <div class="rs">3日(周三)</div>
  <p class="oo"></p>
</div>
<div class="hs">
    <div class="rs">4日(周四)</div>
  <p class="oo"></p>

    <el-button class="el-icon-circle-plus-outline" type="text" @click="dialogFormVisible = true"></el-button>

<el-dialog title="课程详情" :visible.sync="dialogFormVisible">
  <el-form :model="form">
   <div class="qw"><h1 class="yu">基本信息</h1> <br> 课程名称: 架子鼓课 &#160;&#160;&#160;&#160;&#160;&#160;主讲老师: 明明&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;教室: 202教室</div>
   <div class="tt"><h1 class="lm">* 上课时间</h1>
   <br>
   2021年3月1日(周一)&#160;&#160;&#160;&#160;13:30-14:15
   </div>
   <h1>学员( 2 )
         <img class="km" src="../../assets/images/keshi-01_03.gif" alt="">
    </h1>
   
   <img class="ds" src="../../assets/images/keshi-02_03.gif" alt="">Jason
     <img class="dss" src="../../assets/images/keshi-02_03.gif" alt="">李四

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false"> 取消课程 </el-button>
    <el-button type="primary" @click="dialogFormVisible = false"> 保存修改 </el-button>
  </div>
</el-dialog>

</div> 
<div class="hs">
    <div class="rs">5日(周五)</div>
  <p class="oo"></p>
</div>
<div class="hs">
    <div class="rn">6日(周六)</div>
  <p class="oo"></p>
</div>
<div class="hs">
    <div class="rn">7日(周日)</div>
  <p class="oo"></p>
  
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
       gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    }
  },
}
</script>


<style>
.el-icon-circle-plus-outline {
  margin-left: 1330px;
  margin-top: -200px;
  font-size: 30px;
  color: blue;
  position: fixed;
}

.ds{
    margin-left: 20px;
    margin-top: 20px;
}

.dss{
   margin-left: 80px;
    margin-top: 20px;
}
.km{
   margin-left: 20px;
   margin-top: 20px;
   margin-bottom: -10px;
}
.ds {
  margin-left: 10px;
}
.km {
  margin-left: 20px;
  margin-top: 20px;
}

.lm {
  margin-top: 50px;
  margin-bottom: 5px;
}

.yu {
  margin-top: -10px;
}

.li {
  width: 1385px;
  height: 51px;
  background-color: #f5f6fa;
  float: left;
}

.rn {
  width: 120px;
  height: 80px;
  background-color: #fefa8f;
  text-align: center;
  line-height: 70px;
}
.sb {
  border: 1px solid #dbdee7;
  width: 68px;
  height: 33px;
  background-color: #f3f6fd;
  text-align: center;
  line-height: 33px;
  color: #c1c3cf;
  margin-left: 1220px;
  margin-top: -40px;
  border-radius: 5px 0px 0px 5px;
}
.sk {
  border: 1px solid #dbdee7;
  width: 68px;
  height: 33px;
  background-color: #ffffff;
  text-align: center;
  line-height: 33px;
  color: #c1c3cf;
  margin-left: 1290px;
  margin-top: -51px;
  border-radius: 0px 5px 5px 0px;
}
.ql {
  border: 1px solid black;
  width: 7px;
  height: 7px;
  background-color: blue;
  margin-left: 965px;
  margin-top: -30px;
}
.cf {
  border: 1px solid black;
  width: 7px;
  height: 7px;
  background-color: #c5c5c5;
  margin-left: 1080px;
  margin-top: -25px;
}

.jj {
  margin-left: 160px;
  width: 500px;
  margin-top: -48px;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.rr {
  margin-left: 10px;
  margin-top: 60px;
}


  .hs{
    width: 1383px;
    height: 80px;
    border: 1px solid #e5e5e5;
   
  }
  .rs{
      width: 120px;
       height: 80px;
       background-color: #f3f3f3;
       text-align: center;
       line-height: 70px;
  }
  .oo{
    margin-left: 140px;
    margin-top: -50px;
  }
  .op{
       margin-left: 140px;
       cursor: pointer;
       margin-top: -59px;
       width: 158px;
       height: 53px;
       background-color: #fafafa;
      text-align: center;
      border-radius: 5px;
      box-shadow: #c5c5c5;
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
  .lj{
      margin-left: 700px;
      margin-top: -50px;
  }

.hs {
  width: 1383px;
  height: 80px;
  border: 1px solid #e5e5e5;
  background-color: #f3f6fd;
}
.rs {
  width: 120px;
  height: 80px;
  background-color: #f3f3f3;
  text-align: center;
  line-height: 70px;
}
.oo {
  margin-left: 140px;
  margin-top: -50px;
}
.op {
  margin-left: 140px;
  margin-top: -59px;
  width: 158px;
  height: 53px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 4px;
}
.el-icon-reading {
  margin-left: 230px;
}
.el-icon-time {
  margin-left: 30px;
}
.el-icon-s-custom {
  margin-left: 20px;
}
.el-icon-folder-checked {
  margin-left: 380px;
}
.el-icon-edit-outline {
  margin-left: 40px;
}
.lj {
  margin-left: 700px;
  margin-top: -50px;
}

</style>