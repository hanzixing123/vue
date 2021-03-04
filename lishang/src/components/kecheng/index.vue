<template>
<div>
<div class="lo">
<img class="aa" src="../../assets/images/课程01_03.gif" alt="">

<a class="el-icon-folder-add" @click="dialogFormVisible = true">添加课程</a>
<div class="dh">
  <el-input  placeholder="请输入内容" v-model="input3" class="input-with-select">
   <el-select>
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
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
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td><i class="tu-img" />{{ item.name }}</td>
          <td>{{ item.pricetype }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.mode }}</td>
        </tr>
      </table>
    </el-main>




<el-dialog title="增加课程" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item class="wq" label="课程名称" :label-width="formLabelWidth">
         <el-input       v-model="form.name"  class="input1" autocomplete="off"></el-input>
        </el-form-item>
 <el-form-item class="ka" label="收费模式:" :label-width="formLabelWidth">
           <el-radio-group v-model="radio" >
    <el-radio class="kuang"  :label="3">按课时收费</el-radio>
    <el-radio :label="6">按期收费</el-radio>
  </el-radio-group>
 </el-form-item>

  <el-form-item class="lp" label="单价:" :label-width="formLabelWidth">
         <el-input v-model="form.price"  class="input1" autocomplete="off"></el-input>
         <span>元/课时</span>
         
  </el-form-item>
       
 <el-form-item class="uy" label="上课模式:" :label-width="formLabelWidth">
           <el-radio-group v-model="radios">
    <el-radio :label="3">一对一</el-radio>
    <el-radio :label="6">集体班</el-radio>
  </el-radio-group>
 </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
      
        <el-button type="primary" @click="dialogFormVisible = false"
          > 保存 </el-button
        >
      </div>
    </el-dialog>


</div>
</template>

<script>
export default {
 data() {
      return {
        list:[],
        input3: '',
      dialogFormVisible: false,
      form: {
        name: "",
        price: "",
     
        delivery: false,
        type: [],
        resource: "",
        desc: "",
       
      },

        radio: 3,
         radios: 6,
        formLabelWidth: "120px",
      }
    },

   created(){
      this.klo();
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      klo(){
        let that=this;
          that.$http.get("/api/courses/list",{page:1},
          success => {
            that.list=success.data.list
               console.log(success.data.list);
          },failure => {
            console.log(failure)
		  
          },);
      }
    },
}
</script>

<style>
.el-table{
  background-color: #dee3e9;
}

.tu-img {
  background: url("./ico.png") 1px 513px;
  position: relative;
  width: 54px;
  height: 63px;
  left: 350px;
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
  margin:0px 10px;
}
.input1{
    width: 250px;
}
.aa{
    float: left;
}
.wq{
  margin-left: 80px;
}
.lp{
   margin-left: 80px;
}
.uy{
   margin-left: 80px;
}
.banji-lists {
  width: 100%;
  margin-top: 23px;
}

.lo{
    width: 1816px;
    height: 50px;
    border: 1px solid #dee3e9;
    background-color: #f5f6fa;
}
.el-icon-folder-add{
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
.input-with-select{
    width: 300px;
}

.ka{
  margin-left: 80px;
}


.dh{
     margin-left: 240px;
 margin-top: -35px;
}



.yui{
  width: 600px;
  background-color: #f5f6fa;
  margin-left: 20px;
}

</style>