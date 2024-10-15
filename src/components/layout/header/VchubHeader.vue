<!-- 页面header部分 -->
 <template>
   <div class="header">
    <!-- pc端菜单导航栏 start -->
    <div class="pc-menu">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
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
    .sub-avatar{
      padding: 5px 0 0 0;
      background-color: antiquewhite;
      display: flex;
      align-items: center;
    }
 }
 </style>