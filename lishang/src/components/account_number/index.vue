<template>
  <div style="width: 100%">
    <div class="er">
      <el-button
        style="margin-left: 1090px; margin-top: 30px; position: relative; right:-150px;font-size:20px;"
        type="primary"
        @click="kjh = true"
        >添 加</el-button
      >

      <div style="margin-left:50px;margin-top:-30px;">
        账号数目({{ this.list.length }})个
      </div>
    </div>

    <div class="dh">
      <el-input
        placeholder="请输入内容"
        v-model="keynames"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search()"
        ></el-button>
      </el-input>
    </div>

    <!-- 账号添加 -->
    <el-dialog :title="title" :visible.sync="kjh">
      <el-form :model="form">
        <el-form-item class="wq" label="账号:" :label-width="formLabelWidth">
          <el-input
            v-model="form.username"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="lp" label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="lp" label="选择校区" :label-width="formLabelWidth">
          <el-select v-model="form.campusid" placeholder="请选择">
            <el-option
              v-for="(item, indexs) in lists"
              :key="indexs"
              :label="item.title"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item class="lp" label="电话:" :label-width="formLabelWidth">
          <el-input
            v-model="form.tel"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="lp" label="邮箱:" :label-width="formLabelWidth">
          <el-input
            v-model="form.Email"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注:" :label-width="formLabelWidth">
          <el-input
            v-model="form.remarks"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="zh_add">确定</el-button>
      </div>
    </el-dialog>

    <!-- 重置密码 -->

    <el-dialog :title="title" :visible.sync="czlk">
      <el-form :model="form">
        <el-form-item class="wq" label="账号:" :label-width="formLabelWidth">
          <el-input
            v-model="form.username"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="lp" label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="form.pass"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="czlk = false">确定</el-button>
      </div>
    </el-dialog>

    <!-- 表格 账号信息展示-->
    <div style="margin-left: 20px">
      <table class="uls" style="margin-bottom: 100px; width: 100%;">
        <tr>
          <td>账号</td>
          <td>姓名</td>
          <td>校区</td>
          <td>编辑账号</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.username }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.campusname }}</td>
          <td class="lld">
            <img src="./images/账号设置_03.gif" @click="xiu(index)" alt="" />
          </td>
          <td>
            <button class="paiban" @click="czmm(index)">重置密码</button>
            <button class="paiban" @click="del(index)">删除</button>
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
            class="pagination"
            :page-size="pagesize"
            background
            layout="prev, pager, next"
            :total="counts"
            @current-change="changess"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      campusid: 0,
      keynames: "",
      value: "",
      title: "账号添加",
      list: [],
      lists: [],
      counts: 0,
      pagesize: 7,
      pagenum: 1,
      kjh: false,
      czlk: false,
      formLabelWidth: "120px",
      form: {
        campusid: "",
        name: "",
        pass: "123",
        username: "",
        tel: "",
        Email: "",
        remarks: "",
      },
    };
  },
  created() {
    // 获取账号信息
    this.zh_list();
    // 获取校区的
    this.xq_list();
  },
  methods: {
    search() {
      this.zh_list();
    },

    formatter(row, column) {
      return row.address;
    },
    changess(currPage) {
      this.pagenum = currPage;
      this.zh_list();
    },

    // 获取校区的信息
    xq_list() {
      let that = this;
      that.$http.get(
        "/api/campus/list",
        { page: that.pagenum, psize: that.pagesize },
        (success) => {
          that.lists = success.data.list;
          console.log("获取校区信息", success.data.list);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },

    // 获取账号信息
    zh_list() {
      let that = this;
      that.$http.get(
        "/api/company/list",
        { page: this.pagenum, psize: this.pagesize, name: this.keynames },
        (success) => {
          that.counts = success.data.counts;
          that.list = success.data.list;
          console.log("账号信息", success.data.list);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },

    del(index) {
      let that = this;
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          that.$http.get(
            "/api/company/delete",
            { id: that.list[index].id },
            (success) => {
              that.zh_list();
            },

            (failure) => {
              alert(failure);
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 账号添加
    zh_add() {
      if(this.form.name==""||
          this.form.username==""||
           this.form.tel==""||
            this.form.Email==""||
             this.form.remarks==""
      ){
                  this.$message({
            showClose: true,
            message: "全部都鸡巴不能为空 艹 傻逼",
            type: "error",
          });
          return;
      }
      let that = this;
      let data = JSON.stringify(this.form);
      that.$http.post(
        "/api/company/add",
        data,
        (success) => {
          this.kjh = false;
          this.form = {
            campusid: 0,
            name: "",
            pass: "",
            username: "",
            tel: "",
            Email: "",
            remarks: "",
          };
          this.$message({
            showClose: true,
            message: "添加成功",
            type: "success",
          });
          this.zh_list();
          // console.log(success);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },

    // 账号修改
    xiu(index) {
      let that = this;
      that.title = "修改账号";
      that.kjh = true;
      that.form = that.list[index];
    },

    // 重置密码
    czmm(index) {
      let that = this;

      that.$http.post(
        "/api/company/changepass",
        
        { id: that.list[index].id, pass: this.pass },
        (success) => {
          this.czlk = true,
            this.form = {
              username: "",
              pass: "",
            };
          that.form = that.list[index];
          that.zh_list();
          
        },
        (failure) => {
          alert(failure);
        }
      );
    },
  },
};
</script>
<style>
.er {
  width: 100%;
  height: 100px;
  background-color: rgb(500, 231, 231);
  margin-top: 30px;

}
.uls {
  margin-top: 30px;
  border: 1px solid rgb(500, 231, 231);
  text-align: center;
}
.lld {
  font-size: 20px;
  cursor: pointer;
}
.paiban {
  color: blue;
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-size: 15px;
}
.dh {
  width: 30%;
  margin-left: 480px;
  margin-top: 20px;
}
</style>