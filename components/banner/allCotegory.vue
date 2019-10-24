<template>
	<div class="allCategory">
		<dl>
			<dd>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
				<div class="list">
					<div class="list-left">
						<i class="el-icon-share"></i>
						<a href="">美食</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>
			</dd>
		</dl>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/main.scss';
.allCategory {
	dl {
		border: 1px solid #ccc;
		background: #fff;

		dd {
			margin-top: 15px;
			.list {
				display: flex;
				justify-content: space-between;
				padding: 3px 3px;
				align-items: center;
				color: $them;

				&:hover {
					background: $category-bg;
					.list-left {
						a {
							color: $them-dark;
							font-weight: bold;
						}
					}
					.el-icon-arrow-right {
						color: $them-dark;
					}
				}
			}

		}
	}
}
</style>

<script>
export default {
	
}
</script>