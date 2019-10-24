<template>
	<div class="container-banner">
		<el-row :gutter="12" style="width:100%;">
			<el-col class="category" :span="5">
				<allCategory />
			</el-col>
			<el-col class="info" :span="19">
				<bannerInfo />
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
.container-banner {
	.info {
		height: 402px;
		margin-top: 12px;
	}
}

</style>

<script>
import allCategory from "./allCotegory.vue"
import bannerInfo from "./bannerInfo.vue"
	export default {
		data() {
			return {

			}
		},
		components: {
			allCategory,
			bannerInfo
		}
	}
</script>