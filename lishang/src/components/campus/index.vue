<template>
  <div style="width: 100%">
    <div class="top">
      <span>校区管理</span>

      <el-input
        style="width: 600px"
        placeholder="请输入内容"
        v-model="keywordd"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search()"
          style="margin-top: -3px; height: 42px"
        ></el-button>
      </el-input>

      <button @click="tan = true">添加校区</button>
    </div>
    <table
      style="
        width: 98%;
        margin: auto;
        border-collapse: collapse;
        border: 1px solid;
      "
    >
      <tr class="lzy">
        <td style="padding-left: 40px">校区</td>
        <td>地址</td>
        <td>校区电话</td>
        <td>校区座机</td>
        <td>修改校区</td>
        <td>操作</td>
      </tr>
      <tr
        v-for="(res, index) in list"
        :key="index"
        style="height: 50px; lien-height: 50px; border-top: 1px solid red"
      >
        <td style="padding-left: 40px">{{ res.title }}</td>
        <td>{{ res.address }}</td>
        <td>{{ res.mobile }}</td>
        <td>{{ res.tel }}</td>
        <td><span class="el-icon-edit" @click="list_xiu(res)"></span></td>
        <td>
          <span @click="list_del(res.id)" style="cursor: pointer">删除</span>
        </td>
      </tr>
    </table>

    <!-- 校区添加 弹出框 -->
    <el-dialog :title="title" :visible.sync="tan">
      <el-form :model="form">
        <el-form-item label="校区名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.title"
            autocomplete="off"
            placeholder="请输入校区名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系人名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="请输入校区名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="校区电话" :label-width="formLabelWidth">
          <el-input
            v-model="form.tel"
            autocomplete="off"
            placeholder="请输入校区电话"
          ></el-input>
        </el-form-item>
        <el-form-item label="校区座机" :label-width="formLabelWidth">
          <el-input
            v-model="form.mobile"
            autocomplete="off"
            placeholder="请输入校区座机"
          ></el-input>
        </el-form-item>
        <el-form-item label="地区" :label-width="formLabelWidth">
          <el-cascader
            style="width: 790px; margin-bottom: 10px"
            placeholder="请输入校区地址"
            size="large"
            :options="options"
            v-model="selectedOptions"
            @change="handleChange(selectedOptions)"
          >
          </el-cascader>
          <el-input
            v-model="form.address"
            autocomplete="off"
            placeholder="请输入详细地址"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="list_add()">确 定</el-button>
      </div>
    </el-dialog>
    <div v-if="total <= 8">
      <div style="font-size: 30px">
        共<span style="color: red">{{ total }}</span
        >条
      </div>
    </div>
    <div v-else style="display: inline-block">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="page_num"
        :total="total"
        @current-change="Page_changes"
      >
      </el-pagination>
      <div style="font-size: 30px">
        共<span style="color: red">{{ total }}</span
        >条
      </div>
    </div>
  </div>
</template>

<script>
import { regionData, CodeToText, TextToCode } from "element-china-area-data";

export default {
  data() {
    return {
      keywordd: "", //搜索的内容
      total: 0, //列表条数
      Page_number: 1, //页码
      page_num: 8, //每页条数
      list: [],
      title: "添加校区",
      options: regionData,
      tan: false,
      form: {
        // 添加时的表单
        title: "", //校区名称
        name: "", //联系人名称
        tel: "", //电话 （座机）
        mobile: "", // 电话 （移动端）
        province: "", //省
        city: "", //市
        area: "", //区，县
        address: "", //详细地址
      },
      selectedOptions: [],
      formLabelWidth: "120px",
    };
  },
  created() {
    this.campus_list();
  },
  watch: {
    tan(z, x) {
      if (z == false) {
        this.form = {
          // 添加时的表单
          title: "", //校区名称
          name: "", //联系人名称
          tel: "", //电话 （座机）
          mobile: "", // 电话 （移动端）
          province: "", //省
          city: "", //市
          area: "", //区，县
          address: "", //详细地址
        };
        this.selectedOptions = [];
        this.title = "添加校区";
      }
    },
  },
  methods: {
    handleChange(arr) {
      // 添加时的校区选择框
      console.log(arr[0]);
      //   console.log('?',arr);
      console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]]);
      let _this = this;
      _this.form.province = CodeToText[arr[0]];
      _this.form.city = CodeToText[arr[1]];
      _this.form.area = CodeToText[arr[2]];
    },
    search() {
      this.campus_list();
    },
    campus_list() {
      // 获取列表
      let _this = this;
      _this.$http.get(
        "/api/campus/list",
        { page: this.Page_number, psize: this.page_num, name: this.keywordd },
        (success) => {
          this.total = success.data.counts;
          console.log("有数据？", success);
          this.list = success.data.list;
        },
        (fall) => {}
      );
    },
    list_add() {
      // 列表添加
      let _this = this;
      console.log(_this.form);
      var form = _this.form;
      if (
        form.title == "" ||
        form.name == "" ||
        form.tel == "" ||
        form.mobile == "" ||
        form.province == "" ||
        form.city == "" ||
        form.area == "" ||
        form.address == ""
      ) {
        _this.$message({
          message: "所有框皆为必填选项不可为空",
          type: "error",
        });
        return;
      }


      
      _this.$http.post(
        "/api/campus/add",
        _this.form,
        (success) => {
          this.campus_list();
          this.tan = false;
          _this.$message({
            message: this.title + "成功",
            type: "success",
          });
        },
        (fall) => {
          _this.$message({
            message: "添加失败",
            type: "error",
          });
        }
      );
    },
    list_del(id) {
      //列表删除
      let _this = this;

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
            "/api/campus/delete",
            { id: id },
            (success) => {
              that.campus_list();
            },
            (fall) => {}
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    list_xiu(res) {
      let _this = this;
      //   let
      // console.log(res); return;
      _this.form = {
        id: res.id,
        title: res.title, //校区名称
        name: res.name, //联系人名称
        tel: res.tel, //电话 （座机）
        mobile: res.mobile, // 电话 （移动端）
        province: res.province, //省
        city: res.city, //市
        area: res.area, //区，县
        address: res.address, //详细地址
      };
      _this.title = "修改校区";
      console.log(res.province);
      console.log(TextToCode[res.province].code);
      this.selectedOptions = [
        TextToCode[res.province].code,
        TextToCode[res.province][res.city].code,
        TextToCode[res.province][res.city][res.area].code,
      ];
      // console.log( TextToCode[res.city].code,TextToCode[res.area].code,TextToCode[res.address].code);
      console.log(this.selectedOptions);
      this.tan = true;
    },
    Page_changes(currPage) {
      this.Page_number = currPage;
      this.campus_list();
    },
  },
};
</script>

<style scoped>
.top {
  height: 50px;
  border-bottom: 1px solid #cdcdcd;
  border-top: 1px solid #cdcdcd;
  font-size: 22px;
  padding: 23px 0;
  line-height: 50px;
  width: 100%;
  display: block;
}
.top button:nth-child(3) {
  width: 132px;
  border: 0;
  outline: none;
  /*消除默认点击蓝色边框效果*/
  height: 48px;
  cursor: pointer;
  color: #fff;
  font-size: 22px;
  background-color: #fd665b;
  float: right;
  margin-right: 30px;
}
.lzy {
  height: 80px;
  background-color: #f3eded;
  font-size: 24px;
}

.el-icon-edit::before {
  display: inline-block;
  /* width:50px; */
  font-size: 20px;
  color: hotpink;
}
</style>