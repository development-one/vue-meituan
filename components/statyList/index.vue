<template>
	<div class="statyCta">
		<div class="header">
			<dl>
				<dt>有格调</dt>
				<dd>全部</dd>
				<dd>约会聚餐</dd>
				<dd>丽人SPA</dd>
				<dd>电影演出</dd>
				<dd>品质出游</dd>
			</dl>
		</div>
		<div class="container">
			aaaa
		</div>
	</div>
</template>

<style lang="scss" scoped>
.statyCta {
	background: pink;
	.header {
		padding: 10px 20px;
		background: lightgreen;
		box-sizing: border-box;
		dl {
			display: flex;
			align-items: center;
			dt {
				font-size: 24px;
			}
			dd {
				font-size: 16px;
				margin-left: 15px;
				cursor: pointer;
				&:first-of-type{
					margin-left: 30px;
				}
			}
		}
	}

	.container {

	}
}
</style>

<script>
export default {

}	
</script>