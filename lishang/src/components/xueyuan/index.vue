<template>
  <div style="width: 100%">
    <el-footer>
      <div class="da">
        <b>学员管理</b>
        <button @click="dialogFormVisible = true"><span /> 添加学员</button>
        <button @click="dialogFormVisible1 = true"><span /> 添加排版</button>
        <button><span /> 删除</button>

        <div class="sosuo">
          <el-input
            style="40px;"
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </el-footer>

    <el-main>
      <table>
        <tr>
          <td>
            <input type="checkbox"  class="kuang" >
            <!-- <span class="kuang" @click="xuan" /> -->
          </td>
          <td>学员名称</td>
          <td>性别</td>
          <td>所选课程</td>
          <td>购买数量</td>
          <td>剩余课程</td>
        </tr>
        <tr v-for="(res, index) in list" :key="index">
          <td>
            <input type="checkbox" class="kuang">
            <!-- <span class="kuang" @click="xuanzhong(res.id)" /> -->
            </td>
          <td><span class="kuang-1" /> {{ res.name }}</td>
          <td>{{ res.sex }}</td>
          <td>{{ res.kecheng }}</td>
          <td>{{ res.num }}</td>
          <td>{{ res.shengyu }}</td>
        </tr>
      </table>
      <el-pagination
        style="margin-top: 30px; margin-left: 490px"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
      <!-- <div class="wei">
        <ul>
          <li>共100条</li>
          <li><button><</button></li>
          <li><button>1</button></li>
          <li><button>></button></li>
          <li>前往 <input type="text">页</li>
        </ul>
      </div> -->

      <el-dialog title="添加学员" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.tel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <!-- <el-input v-model="form.tel" autocomplete="off"></el-input> -->
            <input type="radio" v-model="form.sex" name="sex" value="1" />男
            <input type="radio" v-model="form.sex" name="sex" value="2" />女
          </el-form-item>
          <el-form-item label="出生日期" :label-width="formLabelWidth">
            <div class="block">
              <el-date-picker
                v-model="form.value1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="学员编号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="备注" :label-width="formLabelWidth">
            <textarea na v-model="form.beizhu" id="" cols="55" rows="10" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >保 存</el-button
          >
        </div>
      </el-dialog>

      <el-dialog title="放学员名称..." :visible.sync="dialogFormVisible1">
        <!-- <el-form :model="form1">
          <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-form> -->
          


        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible1 = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "lishang",
          sex: "18",
          kecheng: "",
          num: "2",
          shengyu: "1",
        },
        {
          id: 2,
          name: "lishang",
          sex: "18",
          kecheng: "",
          num: "2",
          shengyu: "1",
        },
        {
          id: 3,
          name: "lishang",
          sex: "18",
          kecheng: "",
          num: "2",
          shengyu: "1",
        },
        {
          id: 4,
          name: "lishang",
          sex: "18",
          kecheng: "",
          num: "2",
          shengyu: "1",
        },
        {
          id: 5,
          name: "lishang",
          sex: "18",
          kecheng: "",
          num: "2",
          shengyu: "1",
        },
        // {
        //   id: 6,
        //   name: "lishang",
        //   sex: "18",
        //   kecheng: "",
        //   num: "2",
        //   shengyu: "1",
        // },
        // {
        //   id: 7,
        //   name: "lishang",
        //   sex: "18",
        //   kecheng: "",
        //   num: "2",
        //   shengyu: "1",
        // },
        // {
        //   id: 8,
        //   name: "lishang",
        //   sex: "18",
        //   kecheng: "",
        //   num: "2",
        //   shengyu: "1",
        // },
        // {
        //   id: 9,
        //   name: "lishang",
        //   sex: "18",
        //   kecheng: "",
        //   num: "2",
        //   shengyu: "1",
        // },
        // {
        //   id: 10,
        //   name: "lishang",
        //   sex: "18",
        //   kecheng: "",
        //   num: "2",
        //   shengyu: "1",
        // },
      ],

      // list_xuan:[],
      input3: "",
      select: "",
      dialogTableVisible: false,
      dialogTableVisible1: false,
      dialogFormVisible1: false,
      dialogFormVisible: false,
      form: {
        id: "", //学员编号
        name: "", //名称
        tel: "", //手机号
        sex: 1, //性别
        value1: "", //日期
        beizhu: "", //备注
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      form1:{

      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    xuan() {},
  },
};
</script> 
<style>
/* .wei {
  float: left;
  width:100%;

}
.wei ul{
  float: left;
    margin-left:490px;
    margin-top:40px ;
}
.wei ul li{
  
  float: left;
  color:#5f6364; 
  margin-left: 10px;
}
.wei ul li button{
      width:30px;
      height:30px;
      background: #f4f4f6;
      border:0;
       outline: 0 none;
  cursor: pointer;  
}
.wei ul li input{
    width:30px;
    height:20px;
    margin-right:4px;
} */

.kuang {
  width:25px;height:25px;
  margin-left:20px;
}


.el-dialog__header {
  background: coral;
}
.el-dialog__body .el-input__inner {
  width: 400px;
}
.el-footer .da {
  height: 60px;
}
.sosuo {
  display: inline-block;
  width: 600px;
  height: 40px;
  padding: 0;
  margin-left: 20px;
}
/* .sosuo .el-button{
  top:10px;
} */

.el-main table tr td:nth-child(1) {
  width: 80px;
}
/* .kuang {
  background: url("../../assets/ico.png") 49px 468px;
  width: 34px;
  height: 34px;
  display: inline-block;
  position: relative;
  top: 10px;
  left: 20px;
}
.kuang-1 {
  background: url("../../assets/ico.png") -2px 421px;
  width: 34px;
  height: 34px;
  display: inline-block;
  position: relative;
  top: 10px;
} */
.el-main table,
tr {
  /* border:0; */
  background: #fff;
  width: 100%;
  border-collapse: collapse;
  line-height: 70px;
  border-top: 1px solid #eff2f7;
  border-bottom: 1px solid #eff2f7;
}

.el-main table tr:nth-child(1) {
  background: #e9eef3;
  /* line-height: 70px; */
  font-size: 19px;

  border-top: 1px solid #e9eef3;
  border-bottom: 1px solid #e9eef3;
}
.el-main table tr td:nth-child(2) {
  padding-left: 10px;
  width: 439px;
}
.el-main table tr td:nth-child(3) {
  /* padding-left: 10px; */
  width: 170px;
}
.el-main table tr td:nth-child(4) {
  /* padding-left: 10px; */
  width: 275px;
}
.el-main table tr td:nth-child(5) {
  /* padding-left: 10px; */
  width: 294px;
}
.el-footer {
  background-color: #f5f6fa;
  margin: 0;
  padding: 0;
}

.el-footer div b {
  width: 144px;
  height: 60px;
  background: #dfe3ec;
  display: inline-block;
  font-size: 19px;
  text-align: center;
  line-height: 60px;
  background-color: #dfe3ec !important ;
  background: url("../../assets/xueyuan-1.png") no-repeat;
  background-position: 127px 0px;
}

.el-footer div button {
  color: #9fa3ac;
  height: 45px;
  border: 0px;
  outline: 0 none;
  cursor: pointer;
  border: 1px solid #cdcdcd;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
}
.el-footer div button:nth-child(2) {
  position: relative;
  top: 3px;
  padding-right: 4px;
  margin-left: 20px;
}
.el-footer div button:nth-child(2) span {
  background: url("../../assets/ico.png") 33px 268px;
  display: inline-block;
  width: 27px;
  height: 28px;
}
.el-footer div button:nth-child(3) {
  position: relative;
  top: 3px;
  padding-right: 4px;
  margin-left: 20px;
}
.el-footer div button:nth-child(3) span {
  background: url("../../assets/ico.png") 31px 595px;
  display: inline-block;
  width: 27px;
  height: 28px;
}
.el-footer div button:nth-child(4) {
  position: relative;
  top: 3px;
  padding-right: 4px;
  margin-left: 20px;
}
.el-footer div button:nth-child(4) span {
  background: url("../../assets/ico.png") 31px 595px;
  display: inline-block;
  width: 27px;
  height: 28px;
}

.el-main {
  background-color: #fff;
  color: #333;
}
</style>