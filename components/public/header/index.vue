<template>
	<div class="containear">
		<el-row type="flex" justify="space-between">

			<el-col :span="8">
				<City />
			</el-col>
			
			<el-col :span="8">
				<Nav />
			</el-col>

		</el-row>
	</div>
</template>

<style lang="scss" scoped>


</style>

<script>
	import City from "./city.vue"
	import Nav from "./nav.vue"
	export default {
		components: {
			City,
			Nav
		}
	}
</script>