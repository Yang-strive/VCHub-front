<!-- 页面header部分 -->
 <template>
   <div class="header">
    <!-- pc端菜单导航栏 start -->
    <div class="pc-menu">
      <div class="logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="search"></div>
      <div class="menu">
        <div class="menu-item">
          <router-link to="/">首页</router-link>
        </div>
        <div class="menu-item">
          <router-link to="/about">关于</router-link>
        </div>
        <div class="menu-item"></div>
      </div>
    </div>
    <!-- pc端菜单导航栏 end-->

    <!-- 移动端菜单导航栏 start -->
    <div class="mobile-menu">
      
    </div>
    <!-- 移动端菜单导航栏 end-->
   </div>
 </template>
 
 <script setup>
 
 </script>
 
 <style lang="scss" scoped>
 .header{
    background-color: beige;
    .pc-menu{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100px;
      padding: 0 5%;
      font-size: 18px;
      .logo{
        /* 在flex布局中，auto会自动将元素推到左侧 */
        margin-right: auto;
        width: 150px;
        
      }
      .menu{
        display: flex;
        align-items: center;
        justify-content: space-around;
        .menu-item{
          // padding: 0 2vw;
          @media (min-width: 600px) {
            padding: 0px 10px;
          }
          @media (max-width: 600px) {
            padding: 0px 0px;
          }
        }
      }
    }
    .sub-avatar{
      padding: 5px 0 0 0;
      background-color: antiquewhite;
      display: flex;
      align-items: center;
    }
 }

 .search{
    width: 300px;
    height: 30px;
    background-color: #f5f5f5;
    border-radius: 15px;
    padding: 0 15px;
    border: 1px solid #ccc;
 }
 </style>