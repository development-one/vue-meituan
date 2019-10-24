<template>
  <div class="layout-blank" style="min-width: 960px;">
    <el-container>
      <!-- 头部导航和搜索 -->
      <el-header style="height:auto;background: #fff;box-shadow:0 2px 10px -5px #999;">

        <div class="header" style="background: #F8F8F8;">
          <Header style="max-width: 1200px;margin: 0 auto;"/>
        </div>
        
        <div class="cta">
          <div class="search">
            <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="">
            <Search class="search-info"/>
          </div>
        </div>

      </el-header>

      <el-main>
        <!-- 路由页面加载 -->
        <div class="cta">
          <Nuxt />
        </div>

      </el-main>

      <el-footer style="height:auto">
        <!-- 底部信息栏 -->
        <div class="cta">
          Footer
        </div>
        
      </el-footer>

    </el-container>
  </div>
</template>

<style lang="scss">
.cta {

  .search {
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
    position: relative;

    img {
      position: absolute;
      width: 126px;
      left: 0;
      top: 30px;   
    }
    .search-info {
      margin-top: 30px;
    }
  }
}
</style>

<script>
import Header from "~/components/public/header/index"
import Search from "@/components/search/search.vue"
export default {
  components: {
    Header,
    Search
  }
}
</script>
