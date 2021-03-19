<template>
  <div style="width: 100%">
    <div class="el-footer1">
      <div class="da">
        <b>教室管理</b>
        <button @click="dialogFormVisible = true"><span /> 添加教室</button>
        <button @click="ALLdel"><span /> 删除教室</button>
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
              style="margin-top: -3px;height:42px;"
            ></el-button>
          </el-input>
        </div>
      </div>
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
          <td>教室名称</td>
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

          <td>{{ res.name }}</td>
          <td>
            <el-button class="paiban" @click="jiaoshi_del(res.id)"
              >删除</el-button
            >
            <el-button class="paiban" @click="jiaoshi_xiu(index)"
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
      <!-- 添加班级 -->
      <el-dialog :title="titles" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item
            label="教室名称"
            :label-width="formLabelWidth"
            style="width: 400px"
          >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="jiaoshi_add">保 存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script scoped>
export default {
  created() {
    this.jiaoshi_list();
  },
  watch: {
    dialogFormVisible(c, v) {
      console.log(c, v);
      if (c === false) {
        this.form = {
          name: "", //班级名称
        };
      }
    },
  },
  data() {
    return {
      keywordd: "",
      titles: "添加教室",
      counts: 0,
      pagesize: 7,
      pagenum: 1,
      y_checked: true,
      n_checked: false,
      selectList: [],
      list: [],
      select: "",
      dialogFormVisible: false,
      form: {
        name: "", //名称
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    search() {
      this.jiaoshi_list();
    },
    paike() {
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
      console.log(list1);
      tath.$http.post(
        "/api/coursetables/addForClassid",
        JSON.stringify(list1),
        (success) => {
          this.jiaoshi_list();
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
    // 删除
    ALLdel() {
      let tath = this;
      var list = tath.selectList;
      if (list == 0) {
        this.$message({
          showClose: true,
          message: "请先选择要删除的教室",
          type: "error",
        });
        return;
      }
      for (let i = 0; i < list.length; i++) {
        tath.$http.get(
          "/api/classrooms/delete",
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

              this.jiaoshi_list();
              this.selectList = [];
            }
          },
          (fall) => {}
        );
      }
    },
    jiaoshi_del(id) {
      let tath = this;
      tath.$http.get(
        "/api/classrooms/delete",
        { id: id },
        (success) => {
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "success",
          });
          9;
          this.jiaoshi_list();
        },
        (fall) => {}
      );
    },

    jiaoshi_add() {
      let that = this;
      // console.log(this.form);
      if (that.form.id) {
        var huifu = "修改成功";
      } else {
        var huifu = "添加成功";
      }
      if (that.form.name == "") {
        this.$message({
          showClose: true,
          message: "教室名称不可为空",
          type: "error",
        });
        return;
      }
      console.log(this.form);
      that.$http.post(
        "/api/classrooms/add",
        JSON.stringify(this.form),
        (success) => {
          this.$message({
            showClose: true,
            message: huifu,
            type: "success",
          });
          this.jiaoshi_list();
          // console.log(success);
          this.dialogFormVisible = false;
        },
        (fall) => {
          console.log(fall);
        }
      );
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    jiaoshi_list() {
      let that = this;
      that.$http.get(
        "/api/classrooms/list",
        { page: this.pagenum, psize: this.pagesize, name: that.keywordd },
        (success) => {
          that.counts = success.data.counts; // counts  分页用到的
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
      this.jiaoshi_list();
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
    jiaoshi_xiu(index) {
      console.log(this.list[index]);
      var shuju = this.list[index];
      this.form = {
        id: shuju.id,
        name:shuju.name
      };
      // console.log(this.form);
      this.titles = "修改教室信息";
      this.dialogFormVisible = true;
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

td {
  width: 20%;
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
.el-main1 .table tr td:nth-child(1) {
  width: 80px;
}
.el-main1 .table,
tr {
  background: #fff;
  width: 100%;
  border-collapse: collapse;
  line-height: 70px;
  border-top: 1px solid #eff2f7;
  border-bottom: 1px solid #eff2f7;
}
.el-main1 .table tr:nth-child(1) {
  background: #e9eef3;
  font-size: 19px;
  border-top: 1px solid #e9eef3;
  border-bottom: 1px solid #e9eef3;
}
.el-main1 .table tr td:nth-child(2) {
  padding-left: 10px;
  width: 439px;
}
.el-main1 .table tr td:nth-child(3) {
  width: 170px;
}
.el-main1 .table tr td:nth-child(4) {
  width: 275px;
}
.el-main1 .table tr td:nth-child(5) {
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
.el-icon-search::before{
  /* position: relative; */
  /* top:0; */
}
</style>