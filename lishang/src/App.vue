<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 引入样式 -->
<!-- <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"> -->
<!-- 引入组件库 -->
<!-- <script src="https://unpkg.com/element-ui/lib/index.js"></script> -->
      <!-- <div id="body"> -->
        <!-- <div style="height:80px;backgroundColor:blue;"></div>  
        <div style="height:400px;backgroundColor:blue;float:left;"></div>   -->
        <!-- <div style="clear:both;"></div> -->

      <!-- </div> -->




  <!-- <el-header>云教务管理系统</el-header> -->
<!-- <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container> -->

  <el-container>
  <el-header> <img src="./assets/yun.png"> <span> 云教务管理系统</span> </el-header>
  <el-container>
    <el-aside width="200px"></el-aside>
    <el-container>
            <el-footer>
                <div> <span/> 添加课程</div>
                <div>添加课程</div>
            </el-footer>

      <el-main>Main</el-main>
    </el-container>
  </el-container>
</el-container>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}

  .el-header{
    background-color: #fefefe;
    color: #000;
        font-size:33px;

    /* text-align: center; */
    text-align:left;
    line-height: 60px;
  }
  .el-footer {
        background-color: #B3C0D1;
    /* color: #333; */
    text-align: center;
    /* line-height: 60px; */
  }
  .el-footer div span:nth-child(1){
        background-image:  url("./assets/ico.png");
          width: 25px;
          height: 23px;
         background-position: 34px 675px  ;
        display: inline-block;
  } 
 .el-footer div{
   border:1px solid #fff;
   /* height: 23px; */
   line-height: 25px;
   display: inline-block;
 }


  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
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
