<template>
	<div class="breadcrumb-cta">
		<el-breadcrumb separator-class="el-icon-arrow-right">
  			<el-breadcrumb-item :to="{ path: '/' }">长沙美团</el-breadcrumb-item>
  			<el-breadcrumb-item :to="'/s/'+breadName+'/'">{{breadName}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<style lang="scss">
.breadcrumb-cta {
	.el-breadcrumb {
		.el-breadcrumb__item {
			.el-breadcrumb__inner {
				font-size: 12px;
				color: #222222;
				font-weight: normal;
				cursor: pointer;
				&:hover{
					color: #FE8C00;
				}
			}
			.el-breadcrumb__separator{
				margin: 0 1px;
				color: #222222;
			}
		}
	}
}
</style>

<script>
export default {
	props: ["breadName"]
}
</script>