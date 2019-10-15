<template>
  <div class="container-search">
    <el-input placeholder="搜索商家或地点" v-model="cc" class="input-with-select" style="width:570px;">
    	<el-button slot="append" icon="el-icon-search" style="width:80px;"></el-button>
  	</el-input>
  	<div class="recommend-list">
  		<a href="">长沙生态动物园</a>
  		<a href="">长沙世界之窗</a>
  		<a href="">长沙方特东方神画</a>
  		<a href="">炭河千古情</a>
  		<a href="">长沙海底世界</a>
  		<a href="">橘子洲景区</a>
  	</div>
  </div>
</template>

<style lang="scss">
	@import '~assets/css/main.scss';
  .container-search {
  	.el-input-group__append{
			color: #000;
			border: 0;
			background: $them-a;
		}
		.el-input__inner {
			border-right: 0;
			&:focus {
				border-color: #DCDFE6;
			}
			&:hover {
				border-color: #DCDFE6;
			}
		}	

		.recommend-list {
			font-size: 12px;
			margin-top: 10px;
			a {
				margin-left: 10px;
			}
		}

  }
</style>

<script>
	export default {
		data() {
			return {
				cc: ""
			}
		}
	}
</script>