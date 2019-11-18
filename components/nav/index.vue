<template>
	<div class="nav-container">
		<h3>美团导航</h3>
		<dl>
			<dt>热门城市</dt>
			<dd>
				<div class="city">
					<a href="">青岛</a>
					<a href="">长春</a>
					<a href="">深圳</a>
					<a href="">上海</a>
					<a href="">北京</a>
					<a href="">石家庄</a>
					<a href="">西安</a>
					<a href="">长沙</a>
					<a href="">广州</a>
					<a href="">广州</a>
					<a href="">青岛</a>
					<a href="">长春</a>
					<a href="">深圳</a>
					<a href="">上海</a>
					<a href="">北京</a>
					<a href="">厦门</a>
					<a href="">西安</a>
					<a href="">长沙</a>
					<a href="">广州</a>
					<a href="">广州</a>
				</div>	
			</dd>
		</dl>
		<dl>
			<dt>热门城市</dt>
			<dd>
				<div class="city">
					<a href="">青岛</a>
					<a href="">长春</a>
					<a href="">深圳</a>
					<a href="">上海</a>
					<a href="">北京</a>
					<a href="">石家庄</a>
					<a href="">西安</a>
					<a href="">长沙</a>
					<a href="">广州</a>
					<a href="">广州</a>
					<a href="">青岛</a>
					<a href="">长春</a>
					<a href="">深圳</a>
					<a href="">上海</a>
					<a href="">北京</a>
					<a href="">厦门</a>
					<a href="">西安</a>
					<a href="">长沙</a>
					<a href="">广州</a>
					<a href="">广州</a>
				</div>	
			</dd>
		</dl>
		<dl>
			<dt>热门城市</dt>
			<dd>
				<div class="city">
					<a href="">青岛</a>
					<a href="">长春</a>
					<a href="">深圳</a>
					<a href="">上海</a>
					<a href="">北京</a>
					<a href="">石家庄</a>
					<a href="">西安</a>
					<a href="">长沙</a>
					<a href="">广州</a>
					<a href="">广州</a>
					<a href="">青岛</a>
					<a href="">长春</a>
					<a href="">深圳</a>
					<a href="">上海</a>
					<a href="">北京</a>
					<a href="">厦门</a>
					<a href="">西安</a>
					<a href="">长沙</a>
					<a href="">广州</a>
					<a href="">广州</a>
				</div>	
			</dd>
		</dl>
	</div>
</template>

<style lang="scss" scoped>
.nav-container {
	margin-top: 40px;
	padding: 20px 0 0 20px;
	border: 1px solid #ccc;
	background: white;
	h3 {
		margin-bottom: 20px;
		font-size: 16px;
		color: black;
	}
	dl {
		margin-top: 10px;
		display: flex;
		align-items: baseline;
		&:last-child {
			dd {
				border: none;
			}
		}
		dt {
			width: 6%;
			font-size: 14px;
		}
		dd {
			margin-left: 20px;
			padding-bottom: 5px;
			width: 100%;
			border-bottom: 1px solid #ccc;
			.city {
				display: flex;
				flex-wrap: wrap;
				line-height: 30px;
				width: 96%;
				a {
					margin-right: 20px;
					font-size: 12px;
					width: 8%;
					color: #666666;
					&:hover {
						color: #FE8C00;
					}
				}
			}	
		}
	}
}
</style>

<script>
	
</script>