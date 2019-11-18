<template>
	<div class="container-city">
		<span class="city">
			<span>长沙</span>
			<a href="" class="switch">切换城市</a>
			<div class="select-city">
				[
				<a href="">湘潭</a>
				<a href="">宁乡</a>
				<a href="">株洲</a>
				]
			</div>
		</span>

		<span class="login">
			<a href="/register" class="active">立即登录</a>
			<a href="">注册</a>
		</span>
		
	</div>
</template>

<style lang="scss" scoped>
	.container-city {
		display: flex;
		font-size: 12px;
		color: #999999;
		margin: 10px 0;
		align-items: center;

		.city {
			display: flex;
			margin-right: 26px;
			align-items: center;

			.switch {
				float: right;
				margin: 0 5px;
				color: #666666;
				background: #F4F4F4;
				border: 1px solid #E5E5E5;
				padding: 2px;
				box-sizing: border-box;

				&:hover {
						color: #FE8C00;
				}

			}

			.select-city {
				a {
					color: #999999;

					&:hover {
						color: #FE8C00;
					}

				}		
			}
		}

		.login {
			a {
				color: #999999;
				margin: 0 3px;
				&:hover {
					color: #FE8C00;
				}
				&.active {
					color: #FE8C00;
				}

			}
		}

	}
</style>

