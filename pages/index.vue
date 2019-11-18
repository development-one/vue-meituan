<template>
  <div class="container">
    <div class="banner mg">
      <Banner />
    </div>
    <div class="statyCta mg">
      <StatyList />
      <Nav />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    .mg {
      margin-bottom: 40px;
    }
  }
</style>

<script>
import Banner from "@/components/banner/index.vue"
import StatyList from "@/components/statyList/index.vue"
import Nav from "@/components/nav/index.vue"
export default {
  components: {
    Banner,
    StatyList,
    Nav
  }
}
</script>

