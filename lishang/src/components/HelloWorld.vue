<template>
  <div id="app">
    <el-container>
      <el-header>
        <img
          style="position: relative; left: 20px; top: 5px; margin-right: 20px"
          src="../assets/yun.png"
        />
        <span> 云教务管理系统</span>
      </el-header>

      <el-container>
        <el-aside width="125px" style="overflow:visible;">
          <ul>
            <template v-for="(item, index) in navList">
              <li
                v-if="index <= 4"
                :key="index.id"
                ref="changeInit"
                @click="addClass(index, item.path)"
                :class="index == isChange ? 'changeClass' : ''"
                :style="index == isChange ? item.checked : item.unchecked"
              >{{item.meta.name}}</li>
              <li
                v-if="(index >= 5) && (index <= 6)"
                :key="index.id"
                ref="changeInit"
                @click="addClass(index, item.path)"
                :class="[
                  index == isChange ? 'changeClass' : '',
                  index == 5 ? 'el-icon-s-custom' : 'el-icon-s-home',
                  index == isChange && index == 5 ? 'el-icon-s-custom1' : '',
                  index == isChange && index == 6 ? 'el-icon-s-home1' : '',
                ]"
              >
                <span>{{ item.meta.name }}</span>
              </li>

              <!-- @mouseleave="leave()" -->
              <li
                v-if="index == 7" :key="index"
                 @mouseenter="enters(index)" @mouseleave="leave()"
                :class="[             
                  index == 7 ? 'el-icon-setting' : '',
                  index == isChange ? 'changeClass' : '',
                  index == isChange ? 'el-icon-setting1' : '',
                ]"
              >
                <span>其他</span>
                <div v-if="qitas==1"  class="tanchukuang">
                        <span v-for="(item, index) in navList"  :key="index">
                          <span v-if="index>=7" class='qita' @click="qt(item.path)">
                              {{item.meta.name}}
                          </span>
                          </span>
                </div>
              </li>
            </template>
          </ul>
        </el-aside>

        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: "",
      isChange: 0,
      qitas:0,//
      navList: [
        {
          path: "/banji",
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
          path: "/kecheng",
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
          path: "/kaoqin",
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
          path: "/keshi",
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
          path: "/xueyuan",
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
        {
          path: "/lecturer",
          meta: {
            name: "讲师管理",
          },
        },
        {
          path: "/classroom",
          meta: {
            name: "教室管理",
          },
        },
        {
          path: "/campus",
          meta: {
            name: "校园管理",
          },
        },
        {
          path: "/account_number",
          meta: {
            name: "账号管理",
          },
        },
      ],
    };
  },
  created() {
    this.lujing();
  },
  methods: {
    addClass(val, path) {
      this.isChange = val;
      this.$router.push(path);
    },
    qt(path){
        this.$router.push(path);
    },
    lujing() {
      if (this.$route.path == "/banji") {
        this.isChange = 0;
      }
      if (this.$route.path == "/kecheng") {
        this.isChange = 1;
      }
      if (this.$route.path == "/kaoqin") {
        this.isChange = 2;
      }
      if (this.$route.path == "/keshi") {
        this.isChange = 3;
      }
      if (this.$route.path == "/xueyuan") {
        this.isChange = 4;
      }
      if (this.$route.path == "/lecturer") {
        this.isChange = 5;
      }
      if (this.$route.path == "/classroom") {
        this.isChange = 6;
      }
    },
    enters(index){// 移入事件
      // alert("移入");
      this.isChange=index;
      this.qitas=1;
    },
    leave(){
        // this.isChange=1;
        this.qitas=0
    }
    

  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
.changeClass {
  color: #66aff4;
  background-color: #e8ebf0 !important;
  border-radius: 10px;
}
.el-header {
  background-color: #fefefe;
  color: #000;
  font-size: 35px;
  text-align: left;
  line-height: 60px;
}

.el-aside {
  background-color: #fafafc;
  color: #333;
  text-align: center;
    

}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 111px;
}
.el-aside ul li {
  background: url("../assets/ico.png") no-repeat;
  background-size: 300px;
  height: 50px;
  margin: 8px 7px;
  padding-top: 48px;
}
.el-icon-s-custom::before {
  font-size: 50px;
  position: absolute;
  margin: 0;
  top: -4px;
  left: 30px;
  color: #b7c3dc;
}
.el-icon-s-custom1::before {
  font-size: 50px;
  position: absolute;
  margin: 0;
  top: -4px;
  left: 30px;
  color: #4281fc;
}

.el-icon-setting::before {
  font-size: 50px;
  position: absolute;
  margin: 0;
  top: -4px;
  left: 30px;
  color: #b7c3dc;
}
.el-icon-setting1::before {
  font-size: 50px;
  position: absolute;
  margin: 0;
  top: -4px;
  left: 30px;
  color: #4281fc;
}
.el-icon-s-home::before {
  font-size: 50px;
  position: absolute;
  color: #b7c3dc;
  top: -4px;
  left: 30px;
}
.el-icon-s-home1::before {
  font-size: 50px;
  position: absolute;
  color: #4281fc;
  top: -4px;
  left: 30px;
}
.el-aside ul li:nth-child(6) {
  background: none;
  position: relative;
}
.el-aside ul li:nth-child(1) {
  margin-top: 30px;
}
.el-aside ul li:nth-child(7) {
  background: none;
  position: relative;
}
.el-aside ul li:nth-child(8) {
  background: none;
  position: relative;
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

.tanchukuang{
  width:150px;
  height:100px;
  background-color:#cdcdcd;
  position:absolute;
  top:0px;
  right:-150px;

}
.qita{
      width:150px;
      height:30px;
      display: inline-block;
      margin-bottom:4px;
      background-color: yellow;
      border-radius: 6px;
      line-height: 30px;
      cursor: pointer;

}
</style>