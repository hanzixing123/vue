<template>
  <div>
    <div class="li">
      <img src="../../assets/images/index_03.gif" alt="" />
      <div class="xue">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['12:00:00']"
        >
        </el-date-picker>

        <div class="tao">
          <el-input
            placeholder="搜索学员快速签到"
            v-model="input3"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="课程">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>

    <p class="rr">今日课表</p>

    <el-checkbox style="margin-left: 20px; margin-bottom: 10px"
      >全选</el-checkbox
    >
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      style="margin-bottom: 10px; margin-left: 8px"
      >考勤</el-button
    >

    <div class="hht">
      <p class="oos">
        <el-checkbox></el-checkbox>
        架子鼓基础班2101
        <i class="el-icon-reading"> 架子鼓课</i>
        <i class="el-icon-time"> 13:30-14:15</i>
        <i class="el-icon-s-custom"> 明明</i>
      </p>

      <p>
        <el-checkbox style="margin-left: 33px; margin-top: 10px"></el-checkbox>
        <img
          class="kil"
          src="../../assets/images/keshi-02_03.gif"
          alt=""
        />&#160;&#160;&#160;&#160;&#160;&#160;李三
        <i class="el-icon-folder-checked" style="margin-left: 950px"> 已到达</i>
        <el-button
          type="text"
          @click="dialogFormVisible = true"
          class="el-icon-edit-outline"
          >签到</el-button
        >
      </p>
      <p>
        <el-checkbox style="margin-left: 33px; margin-top: 10px"></el-checkbox>
        <img
          class="kil"
          src="../../assets/images/keshi-02_03.gif"
          alt=""
        />&#160;&#160;&#160;&#160;&#160;&#160;李三
        <i class="el-icon-folder-checked" style="margin-left: 950px"> 已到达</i>
        <el-button
          type="text"
          @click="dialogFormVisible = true"
          class="el-icon-edit-outline"
          >签到</el-button
        >
      </p>
    </div>

    <div class="hhts">
      <p class="oos">
        <el-checkbox></el-checkbox>
        <img
          class="kil"
          src="../../assets/images/keshi-02_03.gif"
          alt=""
        />&#160;&#160;&#160;&#160;&#160;&#160;李三
        &#160;&#160;&#160;&#160;&#160;
        <i class="el-icon-reading"> 架子鼓课</i>
        <i class="el-icon-time"> 13:30-14:15</i>
        <i class="el-icon-s-custom"> 明明</i>
        <i class="el-icon-folder-checked"> 已到达</i>
        <el-button
          type="text"
          @click="dialogFormVisible = true"
          class="el-icon-edit-outline"
          >签到</el-button
        >
      </p>
    </div>

    <div class="hhtss">
      <p class="oos">
        <el-checkbox></el-checkbox>
        <img
          class="kil"
          src="../../assets/images/keshi-02_03.gif"
          alt=""
        />&#160;&#160;&#160;&#160;&#160;&#160;李三
        &#160;&#160;&#160;&#160;&#160;
        <i class="el-icon-reading"> 架子鼓课</i>
        <i class="el-icon-time"> 13:30-14:15</i>
        <i class="el-icon-s-custom"> 明明</i>
        <i class="el-icon-folder-checked"> 已到达</i>
        <el-button
          type="text"
          @click="dialogFormVisible = true"
          class="el-icon-edit-outline"
          >签到</el-button
        >
      </p>
    </div>

    <el-dialog title="签到" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-radio v-model="form.kaoqin" name="kaoqin" :label="1">出勤</el-radio>
        <el-radio v-model="form.kaoqin" name="kaoqin" :label="2">迟到</el-radio>
        <el-radio v-model="form.kaoqin" name="kaoqin" :label="3">请假</el-radio>
        <el-radio v-model="form.kaoqin" name="kaoqin" :label="4">旷课</el-radio>
        <div class="kk">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="备注"
            v-model="textarea"
          >
          </el-input>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">
          保存
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
      value1: [new Date(2021, 3, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      dialogFormVisible: false,
      form: {
        kaoqin: 1,
      },
      formLabelWidth: "120px",
      textarea: "",
    };
  },
  created() {
    this.kaoqin_list();
  },

  methods: {
    kaoqin_list() {
      let tath = this;
      tath.$http.get(
        "/api/coursetables/checked",
        "",
        (success) => {
          console.log("成功？",success);
        },
        (fall) => {
          console.log(fall);
        }
      );
    },
  },
};
</script>

<style>
.kil {
  position: relative;
  top: 20px;
  left: 20px;
}
.li {
  width: 1385px;
  height: 51px;
  background-color: #f5f6fa;
  float: left;
}
.kk {
  margin-top: 60px;
  width: 400px;
  margin-left: 190px;
}

.el-radio:nth-child(1) {
  margin-left: 190px;
}

.xue {
  margin-left: 148px;
  margin-top: -48px;
}
.tao {
  margin-left: 430px;
  margin-top: -39px;
  width: 400px;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.rr {
  margin-left: 10px;
  margin-top: 60px;
}
.hht {
  width: 1383px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.hhts {
  width: 1383px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-top: 10px;
}
.hhtss {
  width: 1383px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin-top: 10px;
}
.oos {
  margin-left: 34px;
  margin-top: 10px;
}
.el-icon-reading {
  margin-left: 230px;
}
.el-icon-time {
  margin-left: 30px;
}
.el-icon-s-custom {
  margin-left: 20px;
}
.el-icon-folder-checked {
  margin-left: 380px;
  margin-top: -100px;
}
.el-icon-edit-outline {
  margin-left: 40px;
}
</style>