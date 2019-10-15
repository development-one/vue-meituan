<template>
  <div class="container">
    <div class="search">
    	<img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="">
    	<Search class="search-info"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {

    .search {
      padding-bottom: 100px;
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
import Search from "@/components/search/search.vue"
export default {
  components: {
    Search
  },
  layout: "new"
}
</script>

