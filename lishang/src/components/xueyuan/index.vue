<template>
  <div style="width: 100%">
    <div class="el-footer1">
      <div class="da">
        <b>学员管理</b>
        <button @click="dialogFormVisible = true"><span /> 添加学员</button>
        <button @click="paike_add"><span /> 添加排版</button>
        <button @click="ALLdel"><span /> 删除</button>

        <div class="sosuo">
          <el-input
            style="width: 600px"
            placeholder="请输入内容"
            v-model="keywordd"
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
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search()"
              style="margin-top: -3px"
            ></el-button>
          </el-input>
        </div>
      </div>
      <!-- </el-footer> -->
    </div>
    <div v-show="selectList != ''" style="height: 50px; margin-top: 20px">
      <div v-for="(vo, index) in selectList" :key="index" class="mc">
        <span style="margin: 40px">{{ vo.substring(0, vo.indexOf("+")) }}</span
        ><span class="el-icon-close" @click="delxue(index)"></span>
      </div>
    </div>

    <div class="el-main1">
      <!-- <el-main> -->
      <table class="table">
        <tr align="center">
          <td>
            <input
              type="checkbox"
              class="kuang"
              @click="checkAll"
              :checked="
                selectList.length == list.length ? y_checked : n_checked
              "
            />
          </td>
          <td>学员名称</td>
          <td>性别</td>
          <td>所选课程</td>
          <td>学员编号</td>
          <td>剩余课程</td>
          <td>操作</td>
        </tr>
        <tr v-for="(res, index) in list" :key="index" align="center">
          <td>
            <input
              type="checkbox"
              class="kuang"
              v-model="selectList"
              :value="res.name + '+' + res.id"
            />
          </td>
          <td><span class="kuang-1" /> {{ res.name }}</td>
          <td>{{ res.sex == 1 ? "男" : "女" }}</td>
          <td>{{ res.kecheng }}</td>
          <td>{{ res.num }}</td>
          <td>{{ res.shengyu }}</td>
          <td>
            <el-button class="paiban" @click="guoke(res.id)"
              >购买课程</el-button
            >
            <el-button class="paiban" @click="xueyuan_del(res.id)"
              >删除</el-button
            >
            <el-button class="paiban" @click="xueyuan_xiu(index)"
              >修改</el-button
            >
          </td>
        </tr>
      </table>

      <div style="margin-left: 550px">
        <div v-if="counts <= 8">
          <div class="page">
            共<font class="page-num">{{ counts }}</font
            >条记录
          </div>
        </div>
        <div v-else>
          <el-pagination
            class="pagenation"
            :page-size="pagesize"
            background
            layout="prev, pager, next"
            :total="counts"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>

      <!-- 购买课程 -->
      <el-dialog :title="title" :visible.sync="gouke">
        <el-form :model="form2">
          <el-form-item
            class="wqs"
            label="合约类型"
            :label-width="formLabelWidth"
            ><br />
            <el-radio
              v-model="form2.ordertype"
              label="0"
              style="margin-left: -60px"
              >课时卡</el-radio
            >
            <el-radio v-model="form2.ordertype" label="1">时段卡</el-radio>
          </el-form-item>
          <el-form-item
            class="kas"
            label="* 签约时间:"
            :label-width="formLabelWidth"
            ><br />
            <el-input
              v-model="form2.beigindate"
              autocomplete="off"
              style="margin-left: -80px"
            ></el-input>
          </el-form-item>

          <el-form-item
            class="kiu"
            label="结束时间"
            :label-width="formLabelWidth"
            ><br />
            <el-input
              v-model="form2.enddate"
              autocomplete="off"
              style="margin-left: -80px"
            ></el-input>
          </el-form-item>

          <el-form-item
            class="kiuhs"
            label="* 签约课程"
            :label-width="formLabelWidth"
            ><br />

            <el-select
              style="margin-left: -70px"
              v-model="form2.courseid"
              placeholder="请选择"
            >
              <el-option
                v-for="(item, index) in kc_list"
                :key="index"
                :label="item.name"
                :value="item.id"
              >
                <!-- options -->
              </el-option>
            </el-select>
            <div class="yuts el-icon-plus"></div>
          </el-form-item>
          <el-form-item
            style="margin-left: 280px; margin-top: -100px; width: 250px"
            label="课时数"
            :label-width="formLabelWidth"
            ><br />
            <el-input
              v-model="form2.coursecounts"
              autocomplete="off"
              style="margin-left: -80px"
            ></el-input>
          </el-form-item>
          <el-form-item
            style="margin-left: 420px; margin-top: -100px; width: 250px"
            label="课程单价"
            :label-width="formLabelWidth"
            ><br />
            <el-input
              v-model="form2.price"
              autocomplete="off"
              style="margin-left: -80px"
            ></el-input>
          </el-form-item>
          <el-form-item
            style="margin-left: 560px; margin-top: -100px; width: 250px"
            label="* 课程金额"
            :label-width="formLabelWidth"
            ><br />
            <el-input
              v-model="form2.sumprice"
              autocomplete="off"
              style="margin-left: -80px"
            ></el-input>
            <!-- {{ total }} -->
          </el-form-item>

          <el-form-item
            style="margin-left: -20px"
            label="折扣方式"
            :label-width="formLabelWidth"
            ><br />
            <el-radio
              v-model="form2.discounttype"
              label="1"
              style="margin-left: -60px"
              >直减</el-radio
            >
            <el-radio v-model="form2.discounttype" label="2">折扣</el-radio>
          </el-form-item>

          <el-form-item
            label="优惠金额"
            style="width: 300px; margin-left: 200px; margin-top: -100px"
            :label-width="formLabelWidth"
            ><br />

            <el-input
              v-show="form2.discounttype == '2'"
              v-model="form2.discountper"
              autocomplete="off"
              style="margin-left: -80px"
            ></el-input>
            <el-input
              v-show="form2.discounttype == '1'"
              v-model="form2.discountprice"
              autocomplete="off"
              style="margin-left: -80px"
            ></el-input>

            {{ form2.discounttype == "2" ? "折扣" : "直减" }}
            <!-- {{ form2.total }} -->
          </el-form-item>
          <el-form-item
            label="备注"
            style="margin-left: -50px"
            :label-width="formLabelWidth"
            ><br />
            <el-input
              style="margin-left: -50px; width: 250px"
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="form2.remarks"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <font color="red"
          >总金额<span style="color: blue">￥{{ total }}</span></font
        >
        <font color="red"
          >已优惠<span style="color: blue"
            >￥{{ form2.coursecounts * form2.price - total }}</span
          ></font
        >
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="goke()">确定</el-button>
        </div>
      </el-dialog>
      <!-- 课表 -->
      <el-dialog :title="titless" :visible.sync="kljh">
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
            <input type="radio" v-model="form.sex" name="sex" value="0" />女
          </el-form-item>
          <el-form-item label="出生日期" :label-width="formLabelWidth">
            <div class="block">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="学员编号" :label-width="formLabelWidth">
            <el-input v-model="form.num" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="备注" :label-width="formLabelWidth">
            <textarea na v-model="form.remarks" id="" cols="55" rows="10" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="xueyuan_add">保 存</el-button>
        </div>
      </el-dialog>
      <!-- 添加学员 -->
      <el-dialog :title="titles" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.tel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <input type="radio" v-model="form.sex" name="sex" value="1" />男
            <input type="radio" v-model="form.sex" name="sex" value="0" />女
          </el-form-item>
          <el-form-item label="出生日期" :label-width="formLabelWidth">
            <div class="block">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item label="学员编号" :label-width="formLabelWidth">
            <el-input v-model="form.num" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="备注" :label-width="formLabelWidth">
            <textarea na v-model="form.remarks" id="" cols="55" rows="10" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="xueyuan_add">保 存</el-button>
        </div>
      </el-dialog>

      <el-dialog :visible.sync="dialogFormVisible1">
        <ul style="height: 40px">
          <li
            v-for="(res, index) in selectList"
            :key="index"
            style="
              font-size: 20px;
              margin-right: 10px;
              width: 100px;
              background: yellow;
              float: left;
              text-align: center;
            "
          >
            <span>{{ res.substr(0, res.indexOf("+")) }}</span>
          </li>
        </ul>
        <span>共 {{ selectList.length }}条</span>
        <el-form :model="form1">
          <el-tabs type="border-card">
            <el-tab-pane label="插班排课">
              <div class="chaban">
                <input type="text" name="" id="" placeholder="输入关键字" />
                <span />
              </div>
              <el-table :data="banji_list" stripe style="width: 100%">
                <el-table-column prop="id" width="30">
                  <template slot-scope="scope">
                    <el-radio v-model="kecehng_xuan" :label="scope.row.id"
                      >备选项</el-radio
                    >
                    <!-- {{scope.row.id}} -->
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="班级名称" width="180">
                </el-table-column>
                <el-table-column prop="coursename" label="课程" width="180">
                </el-table-column>
                <el-table-column prop="address" label="老师"> </el-table-column>
                <el-table-column prop="students" label="人数">
                </el-table-column>
                <el-table-column prop="coursecounts" label="计划课时">
                </el-table-column>
                <el-table-column prop="schcourses" label="已排课时">
                </el-table-column>
                <el-table-column prop="endcourses" label="已上课时">
                </el-table-column>
                <el-table-column label="操作">
                  <button @click="kljh = true">课表</button>
                </el-table-column>
              </el-table>
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
          <el-button type="primary" @click="paike()">确 定</el-button>
          <!--dialogFormVisible1 = false  -->
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script scoped>
export default {
  created() {
    this.xuyuan_list();
    this.kecheng_list();
    this.hu_bj_list();
  },
  watch: {
    dialogFormVisible(c, v) {
      // console.log(c, v);
      if (c === false) {
        this.form = {
          num: "", //学员编号
          name: "", //名称
          tel: "", //手机号
          sex: 1, //性别
          birthday: "", //日期
          remarks: "", //备注
        };
      }
    },

    total(a, c) {
      this.form2.sumprice = this.total;
    },
    gouke(z, c) {
      if (z == false) {
        this.form2 = {
          studentid: "",
          ordertype: "0",
          beigindate: "",
          enddate: "",
          courseid: "",
          coursecounts: "",
          price: "",
          sumprice: "",
          discounttype: "1",
          remarks: "",
          discountprice: "",
          discountper: "",
        };
      }
    },
  },

  data() {
    return {
      kljh: false,
      keywordd: "",
      kecehng_xuan: "",
      banji_list: [],

      title: "购课",
      titles: "添加学员",
      titless: "学员课表",
      counts: 0,
      pagesize: 7,
      pagenum: 1,
      kc_list: [],
      y_checked: true,
      n_checked: false,
      value: "",
      selectList: [],
      activeName: "first", //一对一排课 选择
      time: "",
      time1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      list: [],
      keywordd: "",
      select: "",
      dialogTableVisible: false,
      dialogTableVisible1: false,
      dialogFormVisible1: false,
      dialogFormVisible: false,
      gouke: false,
      form: {
        num: "", //学员编号
        name: "", //名称
        tel: "", //手机号
        sex: 1, //性别
        birthday: "", //日期
        remarks: "", //备注
      },
      form1: {},
      form2: {
        studentid: "",
        ordertype: "0",
        beigindate: "",
        enddate: "",
        courseid: "",
        coursecounts: "",
        price: "",
        sumprice: "",
        discounttype: "1",
        remarks: "",
        discountprice: "",
        discountper: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    search() {
      this.xuyuan_list();
    },

    paike() {
      // this.kecehng_xuan
      // dialogFormVisible1 = false
      if (this.kecehng_xuan == "") {
        this.$message({
          showClose: true,
          message: "请先选择要添加的班级",
          type: "error",
        });
        return;
      }
      let tath = this;
      var list = tath.selectList;
      var arr = [];
      for (let i = 0; i < list.length; i++) {
        arr.push({
          id: list[i].substring(list[i].lastIndexOf("+") + 1, list[i].length),
        });
      }
      let list1 = { classid: this.kecehng_xuan, studentlist: arr };
      // console.log(list1);
      tath.$http.post(
        "/api/coursetables/addForClassid",
        JSON.stringify(list1),
        (success) => {
          this.xuyuan_list();
          this.selectList = [];
          this.dialogFormVisible1 = false;
          this.$message({
            showClose: true,
            message: "排课成功",
            type: "success",
          });
        },
        (fall) => {}
      );
    },
    paike_add() {
      if (this.selectList != 0) {
        this.dialogFormVisible1 = true;
      } else {
        this.$message({
          showClose: true,
          message: "请先添加学员",
          type: "error",
        });
      }
    },
    ALLdel() {
      let tath = this;
      var list = tath.selectList;
      if (list == 0) {
        this.$message({
          showClose: true,
          message: "请先选择要删除的学员",
          type: "error",
        });
        return;
      }
      
      
      for (let i = 0; i < list.length; i++) {
        tath.$http.get(
          "/api/students/delete", 
          {
            id: list[i].substring(list[i].lastIndexOf("+") + 1, list[i].length),
          },
          (success) => {
            if (i == list.length - 1) {
              this.$message({
                showClose: true,
                message: "删除成功",
                type: "success",
              });

              this.xuyuan_list();
              this.selectList = [];
            }
          },
          (fall) => {}
        );
      }
    },
    xueyuan_del(id) {
      let tath = this;
      tath.$http.get(
        "/api/students/delete",
        { id: id },
        (success) => {
          // console.log(success);
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success",
          });

          this.xuyuan_list();
        },
        (fall) => {}
      );
    },
    hu_bj_list() {
      let tath = this;
      tath.$http.get(
        "/api/classes/list",
        { page: 1 },
        (success) => {
          this.banji_list = success.data.list;
          // console.log("班级信息", success);
        },
        (fall) => {}
      );
    },
    xueyuan_add() {
      let that = this;
      // console.log(this.form);

        if(this.form.name==""){
            this.$message({
            showClose: false,
            message: "学员姓名不能为空",
            type: "error",
          });
          return;
        }
        if(this.form.tel==""){
            this.$message({
            showClose: false,
            message: "联系方式不能为空",
            type: "error",
          });
          return;
        }
      if(this.form.birthday==""){
            this.$message({
            showClose: false,
            message: "日期不能为空",
            type: "error",
          });
          return;
        }
         if(this.form.num==""){
            this.$message({
            showClose: false,
            message: "学员编号不能为空",
            type: "error",
          });
          return;
        }
        if(this.form.remarks==""){  
            this.$message({
            showClose: false,
            message: "备注不能为空",
            type: "error",
          });
          return;
        }
       if(that.form.id){
            var huifu="修改成功"
       }else{
            var huifu="添加成功"
       }
      that.$http.post(
        "/api/students/add",
        JSON.stringify(this.form),
        (success) => {

          this.$message({
            showClose: true,
            message: huifu,
            type: "success",
          });

     


          this.xuyuan_list();
          // console.log(success);
          this.dialogFormVisible = false;
        },
        (fall) => {
          console.log(fall);
        }
      );
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    xuyuan_list() {
      let that = this;
      that.$http.get(
        "/api/students/list",
        { page: this.pagenum, psize: this.pagesize, name: that.keywordd },
        (success) => {
          that.counts = success.data.counts;
          that.list = success.data.list;
          // console.log("580", that.list);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    handleCurrentChange(currPage) {
      this.pagenum = currPage;
      this.xuyuan_list();
    },
    delxue(index) {
      //
      this.selectList.splice(index, 1);
    },

    checkAll() {
      if (this.selectList.length != this.list.length) {
        this.selectList = this.list.map((item) => item.name + "+" + item.id);
      } else {
        this.selectList = [];
      }
      console.log(this.selectList);
      // console.log();
    },
    xueyuan_xiu(index) {
      // console.log(this.list[index]);
      var shuju = this.list[index];
      this.form = {
        id: shuju.id,
        num: shuju.num, //学员编号
        name: shuju.name, //名称
        tel: shuju.tel, //手机号
        sex: shuju.sex, //性别
        birthday: shuju.birthday, //日期
        remarks: shuju.remarks, //备注
      };
      // console.log(this.form);
      this.titles = "修改学员信息";
      this.dialogFormVisible = true;
    },
    kecheng_list() {
      let tath = this;
      tath.$http.get(
        "/api/courses/list",
        { page: 1 },
        (success) => {
          this.kc_list = success.data.list;
          // console.log(success);
        },
        (fall) => {}
      );
    },
    goke() {
      if (this.form2.discounttype == "2") {
        this.form2.discounttype = "折扣";
        this.form2.discountprice = "";
      } else {
        this.form2.discounttype = "直减";
        this.form2.discountper = "";
      }
      if (this.form2.ordertype == "0") {
        this.form2.ordertype = "课时卡";
      } else {
        this.form2.ordertype = "时段卡";
      }
      this.form2.courseid = this.form2.courseid.toString();
      this.form2.sumprice = this.form2.sumprice.toString();
      let tath = this;
      // console.log(JSON.stringify(tath.form2));
      tath.$http.post(
        "/api/students/addorder",
        JSON.stringify(tath.form2),
        (success) => {
          this.gouke = false;
                  this.$message({
            showClose: true,
            message: "购课成功",
            type: "success",
          });
          // console.log(success);
        },
        (fall) => {
          console.log(fall);
        }
      );
    },
    guoke(id) {
      this.gouke = true;
      this.form2.studentid = id.toString();
    },
    // ces(index,name){
    //   if(this.selectList[index].substr(0,this.selectList[index].indexOf("+",0))==name){
    //           // return true;
    //     }
    // }
  },

  computed: {
    total() {
      var form2 = this.form2;
      // console.log(form2.discountper);
      var sum = 0;
      if (form2.discounttype == "2") {
        sum =
          (Number(form2.price) *
            Number(form2.coursecounts) *
            Number(form2.discountper)) /
          10;
      } else {
        sum =
          Number(form2.price) * Number(form2.coursecounts) -
          Number(form2.discountprice);
      }
      // console.log(sum);
      return sum;
    },
  },
};
</script> 
<style scoped>
.mc {
  float: left;
  margin-left: 40px;
  min-width: 126px;
  height: 40px;
  border: 1px solid #2e12ac;
  text-align: center;
  line-height: 40px;
  background-color: yellow;
  color: #100e99;
  font-size: 18px;
  position: relative;
}

.el-icon-close {
  font-size: 22px;
  position: absolute;
  right: 10px;
  top: 9px;
  cursor: pointer;
}

.el-icon-plus {
  font-size: 30px;
  text-align: center;
  line-height: 40px;
}
.kiuhs {
  margin-left: -20px;
  margin-top: 40px;
}
.yuts {
  width: 40px;
  height: 40px;
  background-color: #dfe3ec;
  border: 1px solid #dfe3ec;
  position: relative;
  top: 5px;
}
.kas {
  margin-left: 200px;
  margin-top: -100px;
  width: 300px;
}
.wqs {
  margin-left: -20px;
}
td {
  width: 20%;
}
.xueyuan_xialai {
  width: 100px;
}

.one {
  /* float: left; */
  font-size: 14px;
  display: inline-block;
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

.two {
  /* float: left;  */
  display: inline-block;
  margin-left: 50px;
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

.kiu {
  margin-left: 400px;
  margin-top: -100px;
  width: 300px;
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

/* .table1 {
  width: 100%;
  border-collapse: collapse;
}
.table1 tr:nth-child(1){
  height: 20px;
  line-height: 50px;
  text-align: center;
}

.table1 >tr:nth-child(1) {
  background: #f5f6fa;
} */

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
 */
/* .kuang-1 {
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