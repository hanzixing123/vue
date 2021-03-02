<template>
  <div id="app">
    <el-container>
      <el-header>
        <img style="position: relative; left:20px; top: 5px;margin-right:20px;" src="./assets/yun.png" />
        <span> 云教务管理系统</span>
      </el-header>

      <el-container>
        <el-aside width="125px">
            <ul>
               <template v-for="(item, index) in navList">
              <li
                :key="index.id"
                ref="changeInit"
                @click="addClass(index)"
                :class="index == isChange ? 'changeClass' : ''"
                :style="index == isChange ? item.checked : item.unchecked"
              >
                {{ item.meta.name }}
              </li>
            </template>
            </ul>
        </el-aside>
        <el-container>
          
          <el-footer>
            <button><span /> 删除</button>
            <button><span /> 添加课程</button>
          </el-footer>
          <el-main>
           <router-view/>

          </el-main>
        </el-container>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isChange:0,
      navList: [
        {
          path: "",
          meta: {
            name: "班级管理",
          },
          checked: {
            backgroundPosition: "20px -290px",
          },
          unchecked: {
            backgroundPosition: "20px -458px",
          },
        },
        {
          path: "",
          meta: {
            name: "课程管理",
          },
          checked: {
            backgroundPosition: "20px 7px",
          },
          unchecked: {
            backgroundPosition: "20px -150px",
          },
        },
        {
          path: "",
          meta: {
            name: "考勤管理",
          },
          checked: {
            backgroundPosition: "20px -630px",
          },
          unchecked: {
            backgroundPosition: "20px -788px",
          },
        },
        {
          path: "",
          meta: {
            name: "课时汇总",
          },
          checked: {
            backgroundPosition: "-211px 12px",
          },
          unchecked: {
            backgroundPosition: "-211px -146px",
          },
        },
        {
          path: "",
          meta: {
            name: "学员管理",
          },
          checked: {
            backgroundPosition: "31px -1190px",
          },
          unchecked: {
            backgroundPosition: "-112px -1190px",
          },
        },
      ],
      
    };
  },
  methods: {
    addClass(val) {
      this.isChange = val;
    },
  },

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 25px;
}
.changeClass {
  color: #66aff4;
  background-color: #e8ebf0!important;
  border-radius: 10px;
}

.el-header {
  background-color: #fefefe;
  color: #000;
  font-size: 35px;
  text-align: left;
  line-height: 60px;
}


.el-footer {
  background-color: #f5f6fa;
}
.el-footer button {
  margin-top: 14px;
  margin-left: 10px;
  background-color: #ffffff;
  line-height: 32px;
  text-align: center;
  font-size: 19px;
  padding-right: 10px;
  border: 1px solid #c8ccd5;
  display: inline-block;
  cursor: pointer;
  outline: 0 none !important;
}
.el-footer button:nth-child(1) span {
  background: url("./assets/ico.png") 34px 675px;
  width: 25px;
  height: 24px;
  position: relative;
  top: 2px;
  display: inline-block;
}
.el-footer button:nth-child(2) span {
  background: url("./assets/ico.png") 33px 590px;
  width: 25px;
  height: 23px;
  padding-right: 5px;
  position: relative;
  top: 2px;
  display: inline-block;
}


.el-aside {
  background-color: #fafafc;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}
ul,li{
  list-style: none;
  margin:0;
  padding:0;
}
.el-aside ul li{
   background: url("./assets/ico.png") no-repeat;
  background-size: 300px;
  height: 50px;
  margin: 17px 7px;   
      padding-top: 48px;
}

.el-aside ul li:nth-child(1){
  margin-top:39px;

}
.el-aside ul li:nth-child(5){
  margin-bottom:220px;

}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
