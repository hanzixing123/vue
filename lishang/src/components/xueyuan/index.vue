<template>
  <div style="width: 100%">
    <div class="el-footer1">
      <div class="da">
        <b>学员管理</b>
        <button @click="dialogFormVisible = true"><span /> 添加学员</button>
        <button @click="dialogFormVisible1 = true"><span /> 添加排版</button>
        <button><span /> 删除</button>

        <div class="sosuo">
          <el-input
            style="width: 600px"
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-select
              v-model="select"
              style="width: 100px"
              slot="prepend"
              placeholder="请选择"
            >
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <!-- </el-footer> -->
    </div>
    <div class="el-main1">
      <!-- <el-main> -->
      <table class="table">
        <tr>
          <td>
            <input type="checkbox" class="kuang" @click="checkAll" />
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
            <input type="checkbox" class="kuang" v-model="selectList" :value="res" />
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
        <el-form :model="form1">
          <el-tabs type="border-card">
            <!-- <el-tab-pane label="用户管理">用户管理</el-tab-pane> -->
            <el-tab-pane label="插班排课">
              <div class="chaban">
                <input type="text" name="" id="" placeholder="输入关键字" />
                <span />
              </div>
              <table class="table1">
                <tr>
                  <td>班级名称</td>
                  <td>课程</td>
                  <td>老师</td>
                  <td>人数</td>
                  <td>计划课时</td>
                  <td>已排课时</td>
                  <td>已上课时</td>
                  <td>操作</td>
                </tr>
                <tr>
                  <td>架子鼓基础班2101</td>
                  <td>架子鼓课</td>
                  <td></td>
                  <td>0人</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><span>课表</span></td>
                </tr>
                <tr>
                  <td>架子鼓基础班2101</td>
                  <td>架子鼓课</td>
                  <td></td>
                  <td>0人</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><span>课表</span></td>
                </tr>
                <tr>
                  <td>架子鼓基础班2101</td>
                  <td>架子鼓课</td>
                  <td></td>
                  <td>0人</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><span>课表</span></td>
                </tr>
                <tr>
                  <td>架子鼓基础班2101</td>
                  <td>架子鼓课</td>
                  <td></td>
                  <td>0人</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><span>课表</span></td>
                </tr>
                <tr>
                  <td>架子鼓基础班2101</td>
                  <td>架子鼓课</td>
                  <td></td>
                  <td>0人</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td><span>课表</span></td>
                </tr>
              </table>
            </el-tab-pane>
            
            <el-tab-pane label="一对一排课">
              <div>
                *选择课程
                <div class="xiala">
                  <select name="" id="" placeholder="请选择">
                    <option value="" disabled selected hidden>请选择</option>
                    <option value=""></option>
                  </select>
                </div>
              </div>

              <div class="san">
                <div style="width: 140px">
                  <div>
                    <font color="red">*</font> 主讲老师<span>添加助教</span>
                  </div>
                  <div class="xiala">
                    <select name="" id="" placeholder="请选择">
                      <option value="" disabled selected hidden>请选择</option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div>
                  *教室
                  <div class="xiala">
                    <select name="" id="" placeholder="请选择">
                      <option value="" disabled selected hidden>请选择</option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div>
                  *单节课扣学员课时
                  <div class="xiala">
                    <select name="" id="" placeholder="请选择">
                      <option value="" disabled selected hidden>请选择</option>
                      <option value=""></option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="da1">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="单次排课" name="first">
                    <!-- 用户管理 -->
                    <div>
                      *开课日期
                      <div class="xiala">
                        <el-date-picker
                          class="red"
                          v-model="time"
                          type="date"
                          placeholder="选择日期"
                        >
                          <!-- time 日期 -->
                        </el-date-picker>
                      </div>
                    </div>
                    <div>
                      *上课时间
                      <div class="xiala">
                        <el-time-picker
                          is-range
                          v-model="time1"
                          range-separator="至"
                          start-placeholder="开始时间"
                          end-placeholder="结束时间"
                          placeholder="选择时间范围"
                        >
                        </el-time-picker>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="批量排课" name="second"
                    >配置管理</el-tab-pane
                  >
                </el-tabs>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible1 = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.xuyuan_list();
  },

  data() {
    return {
      selectList:[],
      activeName: "first", //一对一排课 选择
      time: "",
      time1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      list: [
      ],
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
      form1: {},
      formLabelWidth: "120px",
    };
  },
  methods: {
    xuan() {},
    handleClick(tab, event) {
      console.log(tab, event);
    },
    xuyuan_list() {
      let that = this;
      for (var i = 1; i <= 4; i++) {
        that.$http.get(
          "/api/students/list",
          { page: i },
          (success) => {
            for (var i = 0; i < success.data.list.length; i++) {
              that.list.push(success.data.list[i]);
            }
          },
          (failure) => {
            console.log("123");
          }
        );
      }
    },
    checkAll(){
        
        if(this.selectList.length>0){
            this.selectList = []
        }else{
          this.selectList = this.list.slice(0)
        }
    }
  },
};
</script> 
<style scoped>
.xueyuan_xialai {
  width: 100px;
}
.da1 {
  margin-top: 40px;
  float: left;     
  display: block;
  /* width: 1200px; */
  /* width:400px; */
  width: 100%;
}
.xiala .red > input {
  width: 200px;
}

.san {
  float: left;
}
.san > div {
  float: left;
  margin-top: 20px;
  margin-right: 50px;
}
.san > div span {
  margin-left: 15px;
  color: blue;
  cursor: pointer;
}

.xiala select {
  width: 140px;
  height: 40px;
}
.table1 {
  width: 100%;
  border-collapse: collapse;
}
.table1 tr {
  height: 20px;
  line-height: 50px;
  text-align: center;
}
/* .table1 tr td{

} */
.table1 tr:nth-child(1) {
  background: #f5f6fa;
}

.is-top:nth-last-child(1) {
  margin-left: 10px;
}
.chaban {
  display: inline-block;
  border: 1px solid #cdcdcd;
  height: 30px;
}
.chaban input {
  height: 25px;
  display: inline-block;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  position: relative;
  top: -11px;
}
.chaban span {
  background: url("../../assets/ico.png") 80px 614px;
  height: 30px;
  width: 30px;
  display: inline-block;
  position: relative;
  /* top:12px;
  left: -5px; */
}
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
/* .el-form-item{
  margin:0;
} */
.kuang {
  width: 25px;
  height: 25px;
  margin-left: 20px;
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

.el-main1 .table tr td:nth-child(1) {
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
.el-main1 .table,
tr {
  /* border:0; */
  background: #fff;
  width: 100%;
  border-collapse: collapse;
  line-height: 70px;
  border-top: 1px solid #eff2f7;
  border-bottom: 1px solid #eff2f7;
}

.el-main1 .table tr:nth-child(1) {
  background: #e9eef3;
  /* line-height: 70px; */
  font-size: 19px;

  border-top: 1px solid #e9eef3;
  border-bottom: 1px solid #e9eef3;
}
.el-main1 .table tr td:nth-child(2) {
  padding-left: 10px;
  width: 439px;
}
.el-main1 .table tr td:nth-child(3) {
  /* padding-left: 10px; */
  width: 170px;
}
.el-main1 .table tr td:nth-child(4) {
  /* padding-left: 10px; */
  width: 275px;
}
.el-main1 .table tr td:nth-child(5) {
  /* padding-left: 10px; */
  width: 294px;
}
.el-footer1 {
  background-color: #f5f6fa;
  margin: 0;
  padding: 0;
}

.el-footer1 div b {
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

.el-footer1 div button {
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
.el-footer1 div button:nth-child(2) {
  position: relative;
  top: 3px;
  padding-right: 4px;
  margin-left: 20px;
}
.el-footer1 div button:nth-child(2) span {
  background: url("../../assets/ico.png") 33px 268px;
  display: inline-block;
  width: 27px;
  height: 28px;
}
.el-footer1 div button:nth-child(3) {
  position: relative;
  top: 3px;
  padding-right: 4px;
  margin-left: 20px;
}
.el-footer1 div button:nth-child(3) span {
  background: url("../../assets/ico.png") 31px 595px;
  display: inline-block;
  width: 27px;
  height: 28px;
}
.el-footer1 div button:nth-child(4) {
  position: relative;
  top: 3px;
  padding-right: 4px;
  margin-left: 20px;
}
.el-footer1 div button:nth-child(4) span {
  background: url("../../assets/ico.png") 31px 595px;
  display: inline-block;
  width: 27px;
  height: 28px;
}

.el-main1 {
  background-color: #fff;
  color: #333;
}
</style>