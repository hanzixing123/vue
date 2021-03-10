<template>

<el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
  
</template>  

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      created(){
          this.huo_list()
      },
      methods: {
        huo_list() {
          let that = this;
          that.$http.get(
            "/api/coursetables/search",
            {month:"10-06",page:1},
            (success)=>{
              that.list = success.data.list
              console.log(success.data.list)
            },
            (failure)=>{
              console.log(failure)
            }
          )
        },
      },
    };
  },
};
</script>


<style>
.el-icon-circle-plus-outline {
  margin-left: 1330px;
  margin-top: -200px;
  font-size: 30px;
  color: blue;
  position: fixed;
}

.ds {
  margin-left: 20px;
  margin-top: 20px;
}

.dss {
  margin-left: 80px;
  margin-top: 20px;
}
.km {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: -10px;
}
.ds {
  margin-left: 10px;
}
.km {
  margin-left: 20px;
  margin-top: 20px;
}

.lm {
  margin-top: 50px;
  margin-bottom: 5px;
}

.yu {
  margin-top: -10px;
}

.li {
  width: 1385px;
  height: 51px;
  background-color: #f5f6fa;
  float: left;
}

.rn {
  width: 120px;
  height: 80px;
  background-color: #fefa8f;
  text-align: center;
  line-height: 70px;
}
.sb {
  border: 1px solid #dbdee7;
  width: 68px;
  height: 33px;
  background-color: #f3f6fd;
  text-align: center;
  line-height: 33px;
  color: #c1c3cf;
  
  margin-left: 1220px;
  margin-top: -40px;
  border-radius: 5px 0px 0px 5px;
}
.sk {
  border: 1px solid #dbdee7;
  width: 68px;
  height: 33px;
  background-color: #ffffff;
  text-align: center;
  line-height: 33px;
  color: #c1c3cf;
  margin-left: 1290px;
  margin-top: -51px;
  border-radius: 0px 5px 5px 0px;
}
.ql {
  border: 1px solid black;
  width: 7px;
  height: 7px;
  background-color: blue;
  margin-left: 965px;
  margin-top: -30px;
}
.cf {
  border: 1px solid black;
  width: 7px;
  height: 7px;
  background-color: #c5c5c5;
  margin-left: 1080px;
  margin-top: -25px;
}

.jj {
  margin-left: 160px;
  width: 500px;
  margin-top: -48px;
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

.hs {
  width: 1383px;
  height: 80px;
  border: 1px solid #e5e5e5;
}
.rs {
  width: 120px;
  height: 80px;
  background-color: #f3f3f3;
  text-align: center;
  line-height: 70px;
}
.oo {
  margin-left: 140px;
  margin-top: -50px;
}
.op {
  margin-left: 140px;
  cursor: pointer;
  margin-top: -59px;
  width: 158px;
  height: 53px;
  background-color: #fafafa;
  text-align: center;
  border-radius: 5px;
  box-shadow: #c5c5c5;
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
}
.el-icon-edit-outline {
  margin-left: 40px;
}
.lj {
  margin-left: 700px;
  margin-top: -50px;
}

.is-selected {
    color: #1989FA;
  }
</style>