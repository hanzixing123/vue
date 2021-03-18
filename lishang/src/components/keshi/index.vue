<template>
  <div>
    <div class="right-a">
      <p class="bq">课时汇总</p>
      <div id="triangle-right"></div>
      <div class="right-three">
        <div class="search-a">
          <div>
            <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:15%">
              <el-option label="架子鼓" value="1" selected></el-option>
              <el-option label="音乐" value="2"></el-option>
              <el-option label="基础班" value="3"></el-option>
            </el-select>
            <el-select
              v-model="select"
              slot="prepend"
              placeholder="请选择 "
              style="width:15%;margin-left:-5px"
            >
              <el-option label="架子鼓" value="1" selected></el-option>
              <el-option label="音乐" value="2"></el-option>
              <el-option label="基础班" value="3"></el-option>
            </el-select>
            <el-input placeholder="请输入内容" v-model="input3" class="ssk">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <el-calendar id="calendar">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <!--自定义内容-->
        <div @click="dial = true">
          <div class="calendar-day">{{ data.day.split("-").slice(2).join("-") }}</div>
          <div v-for="(item, index) in list" :key="index">
            <div v-if="data.day == item.coursedate" class="kecheng">
              <div class="neirong">
                <b style="width:100%">{{ item.coursename }}</b>
                <span
                  style="color:#a698a7;width:100%;"
                >{{item.starttime | formatTime}}——{{item.endtime | formatTime}}</span>
                <span style="color:#a698a7;">{{item.teachername}}</span>
              </div>
            </div>
          </div>
          <!-- <div>111</div> -->
        </div>
      </template>
    </el-calendar>
    <el-dialog :title2="title2" :visible.sync="dial">
         <h1>基本信息:</h1>
         <el-form>
          
        </el-form>
      
           <el-button  type="primary" @click="dial = false" style="margin-left:500px;">取消课程</el-button>
          <el-button @click="dial = false">保存修改</el-button>
    </el-dialog>



    
           <el-dialog title1="选择学员22222(钢琴课)"   :visible.sync="dialog"  >
       <div class="right-threes">
          <div style="margin-top: 15px;">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="课程">
                <el-option v-for="(item,indexs) in liet" :key="indexs" :label="item.name" :value="item.id"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <div class="stu">
           <table> 
          <tr v-for="item in xueyuan_list" :key="item.id" style="line-height:30px">
           <td><input type="checkbox"  v-model="xueyuan_list1" :value="item.name" style="width:20px;height:20px;"/><img src="../banji/img/10.png" alt="">{{item.name}}</td>
          </tr>
        </table>
        </div> 
      <div class="right">
        <h1 style="font-size:16;color:black;">已选学员({{xueyuan_list1.length}})</h1>
        <p class="rt"><img src="../../assets/006.png"  alt="">清空</p> 
        <tr  v-for="(item,index) in xueyuan_list1" :key="index">
            <td style="padding-top:20px;border-bottom: 1px solid #f0f0f0;width:480px;">
              <img src="../banji/img/10.png" width="30px" height="30px" alt="">{{item}}
              <img src="../../assets/006.png" width="20px" height="20px" alt="" style="float:right"></td>
          </tr>
      </div>
        <el-dialog width="50%" :append-to-body='true' class="dialog" center :visible.sync="isAddStu">
        <addStudents ref = "refStuInfo" @checkStuInfo = "checkStuInfo"></addStudents>
      </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialog = false">确定</el-button>
        </div> 
      </el-dialog>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      list: [],
      input3:'',
      liet:[],
      isAddStu: false,
       xueyuan_list1:[],
      xueyuan_list:[],
      select:'',
      time: new Date(),
      dial:false,
      dialog:false,
      title2:'课程详情'
    };
  },
  filters: {
    formatTime(time) {
      return new Date(time).format("hh:mm");
    }
  },

  created() {
    this.huo_list();
    this.xueyuan__list();
    // console.log(23434)
  },
  methods: {
     checkStuInfo(val){
      this.isAddStu = false
      this.scheduleList.studentlist = val
    },
      xueyuan__list() {
      let that = this;
      for (var i = 1; i <= 4; i++) {
        that.$http.get(
          "/api/students/list",
          { page: i },
          (success) => {
            for (var i = 0; i < success.data.list.length; i++) {
              that.xueyuan_list.push(success.data.list[i]);
              this.scheduleList.studentlist = success.data.list;
            }
          },
          (failure) => {
            console.log("123");
          }
        );
      }

      console.log("学员列表", this.xueyuan_list);
    },
    huo_list() {
      let that = this;
      that.$http.get(
        "/api/coursetables/search",
        { month: new Date().format("yyyy-MM"), page: 1, psize: 10000 },
        success => {
          that.list = success.data.list;
          console.log(success);
          // console.log(123);
        },
        failure => {
          console.log(failure);
          // console.log(321);
        }
      );
    },
      }
};
</script>


<style scoped>
.kecheng {
  width: 163px;
  height: 51px;
  /* line-height: 51px; */
  margin-top: 49px;
  background: #ffffff;
  border-left: 5px solid #4181fc;
  border-radius: 5px;
}
.calendar-day {
  text-align: center;
  color: #202535;
  line-height: 30px;
  font-size: 12px;
}
/* .is-selected{
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    } */
#calendar
  .el-button-group
  > .el-button:not(:first-child):not(:last-child):after {
  content: "当月";
}
.el-calendar-table .el-calendar-day {
  height: auto;
}

.neirong {
  margin-left: 11px;
}

.neirong b {
  display: inline-block;
}
.neirong span {
  display: inline-block;
}
</style>

  