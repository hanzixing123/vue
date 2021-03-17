<template>
  <div>
    <div class="lo">
      <img class="aa" src="../../assets/images/课程01_03.gif" alt="" />

      <a class="el-icon-folder-add" @click="dialogFormVisible = true"
        >添加课程</a
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
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </div>
    </div>

    <el-main>
      <table class="banji-lists" border="0" cellspacing="0" cellpadding="0">
        <tr class="banji-titles">
          <td>课程名称</td>
          <td>收费模式</td>
          <td>单价</td>
          <td>上课模式</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td><i class="tu-imgs" />{{ item.name }}</td>
          <td>{{ item.pricetype }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.mode }}</td>

          <td>
            <button class="paiban" @click="del(index)">删除</button>
             <button class="paiban" @click="xiu(index)">修改</button>
          </td>

        </tr>
      </table>
      <div style="margin-left:550px;">
        <div v-if="counts <=8">
          <div class="page">
            共<font class="page-num">{{counts}}</font>条记录 
          </div>
        </div>
        <div v-else>
          <el-pagination class="pagination" :page-size="pagesize" background layout="prev, pager, next" :total="counts" @current-change="changess">
          </el-pagination>
        </div>
      </div>
    </el-main>

    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item class="wq" label="课程名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            class="input1"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          class="ka"
          label="收费模式:"
          :label-width="formLabelWidth"
        >
          <el-radio-group class="kecheng_radio" v-model="form.pricetype">
            <el-radio class="kuang" :label="1">按课时收费</el-radio>
            <el-radio :label="2">按期收费</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item class="lp" label="单价:" :label-width="formLabelWidth">
          <el-input
            v-model="form.price"
            class="input1"
            autocomplete="off"
          ></el-input>
          <span>元/课时</span>
        </el-form-item>

        <el-form-item
          class="uy"
          label="上课模式:"
          :label-width="formLabelWidth"
        >
          <el-radio-group class="kecheng_radio" v-model="form.mode">
            <el-radio :label="1">一对一</el-radio>
            <el-radio :label="2">集体班</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="kc_add">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counts:0,
      pagesize:7,
      pagenum:1,
      title: "",
      list: [],
      keyname:"",
      dialogFormVisible: false,
      form: {
        name: "",
        price: "",
        pricetype: 1,
        mode: 1,
      },
      formLabelWidth: "120px",
    };
  },
  watch: {
    dialogFormVisible(y, n) {
      if (y == false) {
        this.form.pricetype = 1;
        this.form.mode = 1;
      }
    },
  },
  created() {
    this.klo();
  },
  methods: {
    search(){
      // console.log(this.keyname)
        this.klo()
    },
    formatter(row, column) {
      return row.address;
    },
    changess(currPage){
      this.pagenum=currPage;
      this.klo();
    },

    klo() {
      let that = this;
      that.$http.get(
        "/api/courses/list",
        { page: this.pagenum,psize:this.pagesize,name:this.keyname },
        (success) => {
           that.counts = success.data.counts
          that.list = success.data.list;
          console.log(success.data.list);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },
    kc_add() {
      let that = this;
      if (this.form.pricetype == 1) {
        this.form.pricetype = "按课时收费";
      } else {
        this.form.pricetype = "按期收费";
      }
      if (this.form.mode == 1) {
        this.form.mode = "一对一";
      } else {
        this.form.mode = "集体班";
      }

      console.log(JSON.stringify(this.form));

      let data = JSON.stringify(this.form);
      that.$http.post(
        "/api/courses/add",
        data,
        (success) => {
          this.dialogFormVisible = false;
          this.form = {
            name: "",
            price: "",
            pricetype: "",
            mode: "",
          };
          this.klo();
          // console.log(success);
        },
        (failure) => {
          console.log(failure);
        }
      );
    },

    del(index) {
      console.log(this.list[index]);
      let that = this;
      that.$http.get(
        "/api/courses/delete",
        { id: that.list[index].id },
        (success) => {
          this.klo();
        },
        (failure) => {}
      );
    },
    xiu(index) {
      let that = this;
      that.dialogFormVisible = true;
      that.title = "修改课程";
      if (this.form.pricetype == "按课时收费") {
        this.list[index].pricetype = 1;
      } else {
        this.list[index].pricetype = 2;
      }
      if (this.form.mode == "一对一") {
        this.list[index].mode = 1;
      } else {
        this.list[index].mode = 2;
      }

      that.form = that.list[index];
      console.log(that.form);
    },

  },
};

</script>
<style scoped>
.kecheng_radio {
  margin: 0;
  /* padding: 0!important  ; */
}


.kecheng_radio .el-radio{
    margin: 0!important;
    padding:0;
    width:100px;
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
  margin-top: 23px;
}

.lo {
  width: 1400px;
  height: 50px;
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