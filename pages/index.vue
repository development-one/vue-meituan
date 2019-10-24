<template>
  <div class="container">
    <div class="banner">
      <Banner />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    
  }
</style>

<script>
import Banner from "@/components/banner/index.vue"
export default {
  components: {
    Banner
  },
  layout: "new"
}
</script>

