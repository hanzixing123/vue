<template>
  <el-calendar id="calendar">
    <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
    <template slot="dateCell" slot-scope="{ date, data }">
      <!--自定义内容-->
      <div>
        <div class="calendar-day">
          {{ data.day.split("-").slice(2).join("-") }}
        </div>
        <div v-for="(item, index) in list" :key="index">
          <!-- {{data}}
                    {{item}} -->
          <div v-if="data.day == item.coursedate" class="kecheng">
            <div class="neirong">
              <b style="width:100%"> {{ item.classname }}</b>
              <span style="color:#a698a7;width:100%;">{{item.starttime | formatTime}}——{{item.endtime | formatTime}}</span>
              <span style="color:#a698a7;">{{item.teachername}}</span>
            </div>
          </div>
        </div>
        <!-- <div>111</div> -->
      </div>
    </template>
  </el-calendar>
</template>  

<script>
export default {
  data() {
    return {
      list: [],
      calendarData: [
        { months: ["09", "11"], days: ["15"], things: "看电影" },
        { months: ["10", "11"], days: ["02"], things: "去公园野炊" },
        { months: ["11"], days: ["02"], things: "看星星" },
        { months: ["11"], days: ["02"], things: "看月亮" },
      ],
      // value: new Date(),
      time:new Date()
    };
  },
   filters: {
    formatTime(time) {
      return new Date(time).format("hh:mm");
    },
  },

  created() {
    this.huo_list();
    // console.log(23434)
  },
  methods: {
    huo_list() {
      let that = this;
      that.$http.get(
        "/api/coursetables/search",
        { month: "2021-03", page: 1, psize: 10000 },
        (success) => {
          that.list = success.data.list;
          console.log(success.data.list);
          // console.log(123);
        },
        (failure) => {
          console.log(failure);
          // console.log(321);
        }
      );
    },
  },
};
</script>


<style>
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

.neirong{
  margin-left: 11px ;
}

.neirong b{
  display: inline-block;
}
.neirong span{
  display: inline-block;
}
</style>

  