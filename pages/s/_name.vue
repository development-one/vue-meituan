<template>
	<div class="s-container">
		<div class="cta-left">
			<div style="display:flex;align-items:center;height:70px">
				<BreadCrumb :breadName="$route.params.name"/>
			</div>

			<div>
				<Select/>
			</div>	
		</div>
		<div class="cta-right">

		</div>
	</div>
</template>

<style lang="scss" scoped>
.s-container {
	display: flex;
	justify-content: space-between;
	.cta-left {
		width: 80%;
		height: 400px;
		// background: pink;
	}
	.cta-right {
		width: 19%;
		height: 400px;
		// background: lightblue;
	}
}
</style>

<script>
import BreadCrumb from "@/components/common/breadCrumb.vue"
import Select from "@/components/common/select.vue"
export default {
	data() {
		return {
			
		}
	},
	components: {
		BreadCrumb,
		Select
	}
}
</script>