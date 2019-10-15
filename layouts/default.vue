<template>
  <div class="layout-blank">
    <el-container>
      <el-header style="height:auto;">
        <div class="cta">

          <Header />

        </div>
      </el-header>

      <el-main style="background: #fff;">
        <div class="cta">

          <Nuxt />

        </div>
      </el-main>

      <el-footer>
        <div class="cta">

          Footer

        </div>
      </el-footer>

    </el-container>
  </div>
</template>

<style lang="scss">

</style>

<script>
import Header from "~/components/public/header/index"
export default {
  components: {
    Header
  }
}
</script>
