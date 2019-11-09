<template>
  <div class="container">
    <div class="banner mg">
      <Banner />
    </div>
    <div class="statyCta mg">
      <StatyList />
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
export default {
  components: {
    Banner,
    StatyList
  },
  layout: "new"
}
</script>

