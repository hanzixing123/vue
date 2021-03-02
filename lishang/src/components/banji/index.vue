<template>

    <div class="banji-nav">
          <el-footer>
            <button><span /> 删除</button>
            <button><span /> 添加课程</button>
          </el-footer>
      
    </div>

</template>

<script>
export default {};
</script>

<style>

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
  background: url("../../assets/ico.png") 34px 675px;
  width: 25px;
  height: 24px;
  position: relative;
  top: 2px;
  display: inline-block;
}
.el-footer button:nth-child(2) span {
  background: url("../../assets/ico.png") 33px 590px;
  width: 25px;
  height: 23px;
  padding-right: 5px;
  position: relative;
  top: 2px;
  display: inline-block;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}


</style>