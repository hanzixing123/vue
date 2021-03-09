<template>
<!-- <div>
 <div class="li">
   <img src="../../assets/images/li_03.gif" alt="">


 <div class="jjs">
 

       <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
  <el-input placeholder="" v-model="input3" class="input-with-select">
    <el-button  slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>


  </div>

 <p class="rr">
    <p class="el-icon-arrow-left">上一月</p>
    &#160;&#160;&#160;&#160;&#160;2021年03月&#160;&#160;&#160;&#160;&#160;下一月
    <p class="el-icon-arrow-right"></p>
  </p>


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



</div> -->
<el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
  
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  created() {
    this.huo_list();
  },
  methods: {
    huo_list() {
      let that = this;
      that.$http.get(
        "/api/coursetables/search",
        { month: "10-06", page: 1 },
        (success) => {
          that.list = success.data.list;
          console.log(success.data.list);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
  },
};
</script>


<style scoped>

.is-selected {
    color: #1989FA;
  }
</style>