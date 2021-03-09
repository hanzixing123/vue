<template>
  <div style="width: 100%">
    <el-footer>
      <button><span /> 删 除</button>
      <button @click="dialogFormVisible = true"><span /> 添加班级</button>
      <div class="banji-option">
        <span class="btn-op">课程</span>
        <span class="btn-img"></span>
      </div>
    </el-footer>

    <!-- 弹框 -->
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="所选课程" :label-width="formLabelWidth">
          <el-select v-model="form.coursename" placeholder="请选择">
            <el-option
              v-for="(res, index) in options"
              :key="index"
              :label="res.name"
              :value="res.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="班级名称:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="计划课时" :label-width="formLabelWidth">
          <el-input v-model="form.coursecounts" placeholder="0"></el-input>
          <span>课时</span>
        </el-form-item>

        <div class="block">
          <span class="demonstration">开班日期</span>
          <el-date-picker
            v-model="form.startdate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">结束日期</span>
          <el-date-picker
            v-model="form.enddate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
        </div>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="kecheng_add()">确定</el-button>
      </div>
    </el-dialog>




<!-- 班级排课 -->

<div class="kls">
<el-dialog title="排课" :visible.sync="paiKe" >
  <el-form :model="forms">
   
 <el-form-item label="开课日期"><br>
      <el-input v-model="forms.name" autocomplete="off" style="width:200px;"></el-input>
    </el-form-item>
    
    <el-form-item label="结束方式" class="jl"><br>
                  <el-radio v-model="forms.radio" label="1">按课节</el-radio>
                  <el-radio v-model="forms.radio" label="2">按日期</el-radio>
    </el-form-item>

     <el-form-item label="* 结课日期" class="uo"><br>
       <el-input v-model="forms.riqi" placeholder="结束日期" autocomplete="off" style="width:200px;" ></el-input>
    </el-form-item>

 <el-form-item label="* 日期选择" class="po"><br>
       <el-checkbox v-model="checked">星期一</el-checkbox>
        <el-checkbox >星期二</el-checkbox>
         <el-checkbox>星期三</el-checkbox>
          <el-checkbox >星期四</el-checkbox>
           <el-checkbox>星期五</el-checkbox>
            <el-checkbox>星期六</el-checkbox>
            <el-checkbox>星期日</el-checkbox>
    </el-form-item>

<el-form-item label="周六时间">
     <el-input v-model="forms.name" placeholder="起始时间" autocomplete="off" style="width:120px; top:5px; left:-70px;"></el-input>
     <el-input v-model="forms.name" placeholder="时长(45分钟)" autocomplete="off" style="width:120px;top:5px; left:-70px;"></el-input>
     <el-input v-model="forms.name" placeholder="结束时间" autocomplete="off" style="width:120px;top:5px; left:-70px;"></el-input>
      <p class="el-icon-plus"></p>
    </el-form-item>


<el-form-item label="周日时间" class="pps">
     <el-input v-model="forms.name" placeholder="起始时间" autocomplete="off" style="width:120px; top:5px; left:-70px;"></el-input>
     <el-input v-model="forms.name" placeholder="时长(45分钟)" autocomplete="off" style="width:120px;top:5px; left:-70px;"></el-input>
     <el-input v-model="forms.name" placeholder="结束时间" autocomplete="off" style="width:120px;top:5px; left:-70px;"></el-input>
      <p class="el-icon-plus"></p>
    </el-form-item>


    <div><h1>选择学员</h1></div>
    <div class="um"  @click="dialogFormVisibles = true">添加学员 <img src="./img/images/课时汇总-排课_03.gif" alt=""></div>
    </el-form>
  <div slot="footer" class="dialog-footer"> 
    <el-button type="primary" @click="paiKe = false"> 保存 </el-button>
  </div>
</el-dialog>
</div>

  


<!-- 课表 -->
<el-dialog title="课表" :visible.sync="kebiao" >
  <div class="uy">
 <div class="lxt"><p class="klss">架子鼓基础班2101</p></div>
 <div class="yut">课程: 架子鼓课<br>
 <p class="ytr">老师: 希希,老师傅</p>
 <p>教室: </p><p>人数: 2/30</p>
 <el-progress :text-inside="true" style="width:75%;" :stroke-width="20" :percentage="50" status="exception"></el-progress>
 <p>以上2节课&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;已排4节课</p>
 </div>

<div class="zuoxai">
<h1 style="margin-top:50px;margin-left:20px; padding-top: 20px;">班级学员(2) <p style="margin-left:225px;" class="el-icon-user-solid"></p></h1>

<div><img src="../../assets/images/keshi-02_03.gif" alt="" style="margin-left:20px;"><p style="margin-top:-50px;margin-left:70px;"> 李四<br> 已排3节, 已上1节</p></div>
<div><img src="../../assets/images/keshi-02_03.gif" alt="" style="margin-left:20px;margin-top:20px;"><p style="margin-top:-50px;margin-left:70px;"> 李四<br> 已排本班课节3, 其中上了1节</p></div>
</div>
</div>




<div class="yous">
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-top:-650px;margin-right:30px;margin-left:200px;">
 <el-calendar v-model="value">
</el-calendar>

    
  </el-tabs>
</div>
</el-dialog>






<!-- 添加学员 -->
<el-dialog title="选择学员" :visible.sync="dialogFormVisibles">
  <el-form :model="form">
    <el-form-item label="" :label-width="formLabelWidth">
    <div style="margin-top: 15px;">
  <el-input v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="课程">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
   
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisibles = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisibles = false">确 定</el-button>
  </div>
</el-dialog>

    <!-- 添加学员 -->
    <el-dialog title="选择学员" :visible.sync="dialogFormVisibles">
      <h2></h2>
      <div style="height: 440px">
        <!-- 左 -->
        <div style="width: 405px; float: left">
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            style="width: 400px; margin-bottom: 5px"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <ul
            style="height: 400px; width: 440px; overflow: auto"
            class="scroll"
          >
            <li
              style="
                height: 50px;
                width: 350px;
                line-height: 50px;
                border-bottom: 1px solid red;
              "
              v-for="(res, index) in xueyuan_list"
              :key="index"
            >
              <input type="checkbox" class="kuang" v-model="xueyuan_list1" :value="res.name" />
              <span class="rento"></span>
              {{ res.name }}
            </li>
          </ul>
        </div>
        <!-- 右 -->
        <div style="float: left; margin-left: 30px">
          <span> 已选学员( {{ xueyuan_list1.length }} ) </span>
          <span class="lj"></span>
          <span
            style="
              position: relative;
              left: 390px;
              top: 8px;
              display: inline-block;
            ">清空</span>

                 <ul
            style="height: 400px; width: 500px; overflow: auto"
            class="scroll"
          >
            <li
              style="
                height: 50px;
                width: 350px;
                line-height: 50px;
                border-bottom: 1px solid red;
              "
             v-for="(res, index) in xueyuan_list1" :key="index"
            > <span class="rento"></span>
              <span class="lj1"></span>
              {{res}}
            </li>
          </ul>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibles = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibles = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>




    <el-main>
      <table class="banji-list" border="0" cellspacing="0" cellpadding="0">
        <tr class="banji-title">
          <td>班级名称</td>
          <td>课程</td>
          <td>老师</td>
          <td>人数</td>
          <td>计划课时</td>
          <td>已排课时</td>
          <td>已上课时</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td><span class="tu-img" />{{ item.name }}</td>
          <td>{{ item.coursename }}</td>
          <td>{{ item.laoshi }}</td>
          <td>{{ item.students }}</td>
          <td>{{ item.coursecounts }}</td>
          <td>{{ item.enddate }}</td>
          <td>{{ item.startdate }}</td>
          <td>
            <button class="paiban" @click="paiKe = true">排课</button>
            <button class="paiban" @click="kebiao = true">课表</button>
            <button class="paiban" @click="xiu(index)">修改</button>
            <button class="paiban" @click="del(item.id)">删除</button>
          </td>
        </tr>
      </table>
    </el-main>
  </div>
</template>

<script>
import router from "../../router";
export default {
  data() {
    return {

       value: new Date(),

      checked: true,
      xueyuan_list: [],
      // formLabelWidth: "120px",

         activeName: 'second',
        checked: true,
      formLabelWidth: "100%",
      list: [],
      dialogFormVisible: false,
      dialogFormVisibles:false,
      paiKe:false,
      kebiao:false,
      form: {
        id: 0,
        name: "",
        coursename: "",
        coursecounts: "",
        startdate: "",
        enddate: "",
      },
       forms:{
        name:"",
        radio: '1',
     },

      title: "添加班级",
      formLabelWidth: "120px",

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      input3: "",
      select: "",
      options: [],
      xueyuan_list1: [],
    };
  },

  created() {
    this.hu_list();
    this.kc_list();
    this.xueyuan__list();
  },
  watch: {
    dialogFormVisible(y, n) {
      if (y == false) {
        this.form = {};
        // console.log(y, n);
      }
    },
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      },
    hu_list() {
      let that = this;
      that.$http.get(
        "/api/classes/list",
        { page: 1 },
        (success) => {
          that.list = success.data.list;
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    kc_list() {
      let that = this;
      that.$http.post(
        "/api/classrooms/list",
        { page: 1 },
        (success) => {
          // this.dialogFormVisible = false;
          this.options = success.data.list;
          console.log(success.data.list);
          console.log(1234);
          // this.options=success.data.name;
          // this.hu_list();
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    kecheng_add() {
      let that = this;
      let obj = JSON.parse(JSON.stringify(this.form));

      // console.log(JSON.stringify(this.form));
      that.$http.post(
        "/api/classes/add",
        obj,
        (success) => {
          this.dialogFormVisible = false;

          this.hu_list();
        },
        (failure) => {
          console.log(failure);
        }
      );


    },
    del(id) {
      let that = this;
      console.log(id);
      that.$http.get(
        "/api/classes/delete",
        { id: id },
        (success) => {
          console.log(success);
          this.hu_list();
        },
        (failure) => {}
      );
    },
    xiu(index) {
      let that = this;
      that.dialogFormVisible = true;
      that.title = "修改班级";
      that.form = that.list[index];
      console.log(that.form);
    },
    xueyuan__list() {
      let that = this;
      for (var i = 1; i <= 4; i++) {
        that.$http.get(
          "/api/students/list",
          { page: i },
          (success) => {
            for (var i = 0; i < success.data.list.length; i++) {
              that.xueyuan_list.push(success.data.list[i]);
            }
          },
          (failure) => {
            console.log("123");
          }
        );
      }

    },
   
  },
};
</script>

<style scoped>
.scroll {
  margin: 0 auto;
  /* border: 1px solid #000; */

  width: 200px;

  height: 300px;

  overflow: auto;
}
.scroll::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*正常情况下滑块的样式*/
.scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在该类指向的控件上时滑块的样式*/
.scroll:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*鼠标悬浮在滑块上时滑块的样式*/
.scroll::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
}
/*正常时候的主干部分*/
.scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  background-color: white;
}
/*鼠标悬浮在滚动条上的主干部分*/
.scroll::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  background-color: rgba(0, 0, 0, 0.01);
}

.lj {
  background: url("../../assets/ico.png") 34px 675px;
  width: 40px;
  height: 24px;
  position: relative;
  top: 10px;
  left: 400px;
  display: inline-block;
}
.lj1{
    background: url("../../assets/ico.png") 34px 675px;
  width: 40px;
  height: 24px;
  position: relative;
  top: 10px;
  left: 400px;
  display: inline-block;
}

.kuang {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  position: relative;
  top: 4px;
}

.el-select .el-input {
  width: 130px;
}

.uy{
  width: 50%;
}
.ytr{
  margin-top: 10px;
}
.yut{
  margin-left: 20px;
  margin-top: 20px;
  
}
.klss{
  margin-left: 20px;
}
.lxt{
  width: 399px;
  height: 75px;
  background-color: #1890ff;
  color: #ffffff;
  border-radius: 10px 10px 0px 0px;
  font-size: 20px;
  line-height: 75px;
  margin-left: 10px;
  
}
.el-select .el-input {
    width: 100%;
  }
 
.um{
  margin-left: 90px;
  margin-top: -50px;
  cursor: pointer;
}
.pps{
  margin-left: 470px;
  margin-top: -110px;
}
.el-icon-plus{
  font-size: 25px;
  width: 50px;
  height: 39px;
  border: 1px solid #dfe4ea;
  text-align: center;
  line-height: 40px;
  position: relative;
  top:10px;
  left: -70px;
}
.uo{
  margin-left: 470px;
  margin-top: -100px;
}
.jl{
  margin-left: 250px;
  margin-top: -95px;
}
body {
  overflow-x: hidden;
}

.banji-nav {
  width: 100%;
}

.banji-list {
  width: 100%;
  margin-top: 52px;
}

.banji-list td {
  line-height: 70px;
  font-weight: bolder;
  border-bottom: 1px solid #f5f6fa;
}
.banji-title {
  background-color: #f5f6fa;

  font-size: 20px;
}

.el-footer {
  background-color: #f5f6fa;
  border: 1px solid #dee3e9;
  position: absolute;
  width: 100%;
}
.el-footer button {
  margin-top: 14px;
  margin-left: 10px;
  background-color: #ffffff;
  line-height: 32px;
  text-align: center;
  font-size: 19px;
  padding-right: 10px;
  border: 1px solid #c8ccd5;
  display: inline-block;
  cursor: pointer;
  outline: 0 none !important;
  color: #a0a3aa;
}
.el-footer button:nth-child(1) span {
  background: url("../../assets/ico.png") 34px 675px;
  width: 25px;
  height: 24px;
  position: relative;
  top: 2px;
  display: inline-block;
}
.el-footer button:nth-child(2) span {
  background: url("../../assets/ico.png") 33px 590px;
  width: 25px;
  height: 23px;
  padding-right: 5px;
  position: relative;
  top: 2px;
  display: inline-block;
}
.rento {
  background: url("../../assets/ico.png") 0px 420px;
  width: 30px;
  height: 30px;
  padding-right: 5px;
  position: relative;
  top: 8px;
  display: inline-block;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.banji-option {
  width: 510px;
  height: 45px;
  border: 1px solid #dfe4ea;
  background-color: #fff;
  position: relative;
  top: -46px;
  left: 255px;
  border-radius: 5px;
  background: url("./img/sou.gif") no-repeat 468px;
  cursor: pointer;
}

.btn-op {
  font-size: 20px;
  height: 45px;
  line-height: 45px;
  color: #aca3a8;
}

.btn-img {
  background: url("./img/xia.gif") no-repeat;
  position: relative;
  float: left;
  width: 30px;
  height: 23px;
  left: 85px;
  top: 15px;
}

.tu-img {
  background: url("./img/ico.png") 1px 513px;
  position: relative;
  width: 54px;
  height: 63px;
   left: 29px;
  top: 10px;
  float: left;
}

.el-input {
  width: 447px;
}

.block {
  padding-top: 15px;
  margin-left: 55px;
}

.el-dialog {
  box-shadow: 0 0 5px #aeafb1;
  border-radius: 5px;
}

.btn-sou {
  width: 390px;
  height: 40px;
  margin-left: 40px;
  border: none;
  outline-style: none;
}

.paiban {
  color: blue;
  border: none;
  background-color: #fff;
  display: none;
  cursor: pointer;
  font-size: 15px;
}
td:hover .paiban {
  display: inline;
}
</style>
  
            