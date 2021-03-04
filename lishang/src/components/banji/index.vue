<template>
  <div class="banji-nav">
    <el-footer>
      <button><span /> 删 除</button>
      <button @click="dialogFormVisible = true"><span /> 添加班级</button>
      <div class="banji-option">
        <span class="btn-op">课程</span>
        <span class="btn-img"></span>
      </div>
    </el-footer>

    <!-- 弹框 -->
    <el-dialog title="增加班级" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="所选课程" :label-width="formLabelWidth">
          <el-select v-model="form.coursename" placeholder="请选择">
            <el-option label="少儿舞蹈课" value="少儿舞蹈课"></el-option>
            <el-option label="跆拳道" value="跆拳道"></el-option>
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
        <!-- <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button -->
        <el-button type="primary" @click="kecheng_add">确定</el-button>
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
          <td>{{ item.teacherslist }}</td>
          <td>{{ item.students }}</td>
          <td>{{ item.coursecounts }}</td>
          <td>{{ item.startdate }}</td>
          <td>{{ item.enddate }}</td>
          <td><button class="paiban">排课</button></td>
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
      list: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        coursename: "",
        coursecounts: "",
        startdate: "",
        enddate: "",
      },
      formLabelWidth: "120px",

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  created() {
    this.hu_list();
  },
  watch: {},
  methods: {
    hu_list() {
      let that = this;
      that.$http.get(
        "/api/classes/list",
        { page: 1 },
        (success) => {
          that.list = success.data.list;
          // console.log(success.data.list);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    kecheng_add() {
      let that = this;
      // console.log(this.form);
      console.log(JSON.stringify(this.form));
      let data = JSON.stringify(this.form);
      // console.log(data);
      that.$http.post("/api/classes/add", data,
        (success) => {
          this.dialogFormVisible = false;
          this.form={ name: "",
        coursename: "",
        coursecounts: "",
        startdate: "",
        enddate: ""};
        this.hu_list(); 
          // console.log(success);
        },
      (failure) => {

      console.log(failure);
      });
    },
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}
.banji-nav {
  width: 100%;
}

.banji-list {
  width: 100%;
  margin-top: 53px;
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
  left: 114px;
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
  
            