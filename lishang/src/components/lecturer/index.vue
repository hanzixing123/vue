<template>
  <div>
    <div class="lo">
      <p class="bq">讲师管理</p>
      <a class="el-icon-folder-add" @click="dialogFormVisible = true"
        >添加讲师</a
      >
      <div class="dh">
        <el-input
          placeholder="请输入内容"
          v-model="keyname"
          class="input-with-select"
        >
          <el-select>
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="search"
          ></el-button>
        </el-input>
      </div>
    </div>
    <div >
  <el-radio v-model="teacher_type" label="1" style="margin-left:30px;margin-right:10px;">主讲老师</el-radio>
  <el-radio v-model="teacher_type" label="2">助教老师</el-radio>
    </div>
    <el-main style="padding-top:0;">
      <table class="banji-lists" border="0" cellspacing="0" cellpadding="0">
        <tr class="banji-titles">
          <td>讲师名称</td>
          <td>讲师电话</td>
          <td>微信号</td>
          <td>类型</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.tel }}</td>
          <td>{{ item.wechat }}</td>
          <td>{{ item.type }}</td>

          <td>
            <button class="paiban" @click="del(index)">删除</button>
            <button class="paiban" @click="xiu(index)">修改</button>
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
    </el-main>

    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item
          class="wq"
          label="讲师名称:"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="form.name"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="lp" label="电话:" :label-width="formLabelWidth">
          <el-input
            v-model="form.tel"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item class="lp" label="微信号:" :label-width="formLabelWidth">
          <el-input
            v-model="form.wechat"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item class="uy" label="职位:" :label-width="formLabelWidth">
          <el-radio-group class="kecheng_radio" v-model="form.type">
            <el-radio label="1">主讲老师</el-radio>
            <el-radio label="2">助教老师</el-radio>
            <!-- <el-checkbox v-model="form.type" label="1">主讲老师</el-checkbox>
            <el-checkbox v-model="form.type" :label="2">助教老师</el-checkbox> -->
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="js_add">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacher_type:"1",
      keyname: "",
      counts: 0,
      pagesize: 7,
      pagenum: 1,
      title: "讲师添加",
      list: [],
      cat: 1,
      dialogFormVisible: false,
      form: {
        name: "",
        tel: "",
        wechat: "",
        type: 1,
      },
      formLabelWidth: "120px",
    };
  },
  watch: {
    dialogFormVisible(y, n) {
      if (y == false) {
        this.form.type = 1;
      }
    },
    teacher_type(y,n){
      console.log("查看状态",y,n);
      if(y=='1'){          
        this.cat=1;
          this.klo();
      }else{
          this.cat=2;
          this.klo();
      }
    }
  },
  created() {
    this.klo();
  },
  methods: {
    search() {
      this.klo();
    },
    formatter(row, column) {
      return row.address;
    },
    changess(currPage) {
      this.pagenum = currPage;
      this.klo();
    },

    // 获取讲师信息
    klo() {
      let that = this;
      that.$http.get(
        "api/teachers/list",
        {
          page: this.pagenum,
          psize: this.pagesize,
          cat: this.cat,
          name: this.keyname,
        },
        (success) => {
          that.counts = success.data.counts;
          that.list = success.data.list;
          console.log("获取", success.data.list);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },

    // 讲师添加
    js_add() {
      let that = this;
      if (this.form.type == 1) {
        this.form.type = "主讲老师";
      } else {
        this.form.type = "助教老师";
      }

      console.log(JSON.stringify(this.form));
      // return;
      let data = JSON.stringify(this.form);
      that.$http.post(
        "/api/teachers/add",
        data,
        (success) => {
          this.dialogFormVisible = false;
          this.form = {
            name: "",
            tel: "",
            wechat: "",
            type: 1,
          };
          this.klo();
          // console.log(success);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },

    // 讲师删除
    del(index) {
      console.log(this.list[index]);
      let that = this;
      that.$http.get(
        "/api/teachers/delete",
        { id: that.list[index].id },
        (success) => {
          this.klo();
        },
        (failure) => {}
      );
    },

    // 讲师修改
    xiu(index) {
      let that = this;
      that.title = "修改讲师";
      var  k = that.list[index];
          this.form={
            id:k.id,
                companyid:k.companyid,
                name:k.name,
                tel:k.tel,
                wechat:k.wechat,
                type:k.type
          }

      if (this.list[index].type == "主讲老师") {
        this.form.type = "1";
      } else {
        this.form.type = "2";
      }

        that.dialogFormVisible = true;
        console.log(this.form);
    },
  },
};
</script>
<style scoped>
.bq {
  float: left;
  line-height: 60px;
  margin: 0;
  color: #333335;
  font-size: 24px;
  background-color: #dfe3ec;
  padding-left: 20px;
  padding-right: 10px;
  margin-top: -2px;
}

.kecheng_radio {
  margin: 0;
  /* padding: 0!important  ; */
}

.kecheng_radio .el-radio {
  margin: 0 !important;
  padding: 0;
  width: 100px;
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
.kecheng_radio .el-radio {
  margin: 0 !important;
  padding: 0;
  width: 100px;
}
.el-table {
  background-color: #dee3e9;
}

.tu-imgs {
  background: url("./ico.png") 1px 513px;
  position: relative;
  width: 54px;
  height: 63px;
  left: 20px;
  top: 10px;
  float: left;
}

.banji-lists td {
  line-height: 70px;
  font-weight: bolder;
  border-bottom: 1px solid #f5f6fa;
  text-align: center;
}
.banji-titles {
  background-color: #f5f6fa;
  font-size: 20px;
}
.kuang {
  margin: 0px 10px;
}
.input1 {
  width: 250px;
}
.aa {
  float: left;
}
.wq {
  margin-left: 80px;
}
.lp {
  margin-left: 80px;
}
.uy {
  margin-left: 80px;
}
.banji-lists {
  width: 100%;
  /* margin-top: 23px; */
}

.lo {
  width: 1400px;
  height: 58px;
  border: 1px solid #dee3e9;
  background-color: #f5f6fa;
}
.el-icon-folder-add {
  margin-left: 20px;
  margin-top: 15px;
  width: 90px;
  height: 25px;
  background-color: #ffffff;
  border: 1px solid #c8ccd5;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
}
.input-with-select {
  width: 300px;
}

.ka {
  margin-left: 80px;
}

.dh {
  margin-left: 240px;
  margin-top: -35px;
}

.yui {
  width: 600px;
  background-color: #f5f6fa;
  margin-left: 20px;
}
</style>