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
			<div class="info">
				<img src="https://p0.meituan.net/tdchotel/a4cd3daa2e07775e8078fec8671a953c56435.jpg@368w_208h_1e_1c" alt="">
				<h4>长沙天舒酒店</h4>
				<dl>
					<dd>新客超值优惠</dd>
					<dd>预约发票</dd>
					<dd>限时特惠</dd>
					<dd>免押金</dd>
				</dl>
				<span class="price">
					￥
					<span>450</span>
					<span style="font-size:16px">/</span>起
				</span>
			</div>
			<div class="info">
				<img src="https://p0.meituan.net/tdchotel/a4cd3daa2e07775e8078fec8671a953c56435.jpg@368w_208h_1e_1c" alt="">
				<h4>长沙天舒酒店</h4>
				<dl>
					<dd>新客超值优惠</dd>
					<dd>预约发票</dd>
					<dd>限时特惠</dd>
					<dd>免押金</dd>
				</dl>
				<span class="price">
					￥
					<span>450</span>
					<span style="font-size:16px">/</span>起
				</span>
			</div>
			<div class="info">
				<img src="https://p0.meituan.net/tdchotel/a4cd3daa2e07775e8078fec8671a953c56435.jpg@368w_208h_1e_1c" alt="">
				<h4>长沙天舒酒店</h4>
				<dl>
					<dd>新客超值优惠</dd>
					<dd>预约发票</dd>
					<dd>限时特惠</dd>
					<dd>免押金</dd>
				</dl>
				<span class="price">
					￥
					<span>450</span>
					<span style="font-size:16px">/</span>起
				</span>
			</div>
			<div class="info">
				<img src="https://p0.meituan.net/tdchotel/a4cd3daa2e07775e8078fec8671a953c56435.jpg@368w_208h_1e_1c" alt="">
				<h4>长沙天舒酒店</h4>
				<dl>
					<dd>新客超值优惠</dd>
					<dd>预约发票</dd>
					<dd>限时特惠</dd>
					<dd>免押金</dd>
				</dl>
				<span class="price">
					￥
					<span>450</span>
					<span style="font-size:16px">/</span>起
				</span>
			</div>
			<div class="info">
				<img src="https://p0.meituan.net/tdchotel/a4cd3daa2e07775e8078fec8671a953c56435.jpg@368w_208h_1e_1c" alt="">
				<h4>长沙天舒酒店</h4>
				<dl>
					<dd>新客超值优惠</dd>
					<dd>预约发票</dd>
					<dd>限时特惠</dd>
					<dd>免押金</dd>
				</dl>
				<span class="price">
					￥
					<span>450</span>
					<span style="font-size:16px">/</span>起
				</span>
			</div>
			<div class="info">
				<img src="https://p0.meituan.net/tdchotel/a4cd3daa2e07775e8078fec8671a953c56435.jpg@368w_208h_1e_1c" alt="">
				<h4>长沙天舒酒店</h4>
				<dl>
					<dd>新客超值优惠</dd>
					<dd>预约发票</dd>
					<dd>限时特惠</dd>
					<dd>免押金</dd>
				</dl>
				<span class="price">
					￥
					<span>450</span>
					<span style="font-size:16px">/</span>起
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.statyCta {
	background: white;
	border-radius: 10px 10px 5px 5px;
	.header {
		padding: 10px 20px;
		background: #C0AA81;
		box-sizing: border-box;
		color: white;
		border-radius: 10px 10px 0 0;
		dl {
			display: flex;
			align-items: center;
			dt {
				font-size: 18px;
			}
			dd {
				font-size: 14px;
				margin-left: 15px;
				cursor: pointer;
				&:first-of-type{
					margin-left: 30px;
				}
			}
		}
	}

	.container {
		border: 1px solid #ccc;
		border-top: none;
		padding: 10px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		.info {
			width: 31%;
			padding: 10px;
			cursor: pointer;
			border-radius: 5px;
			&:hover {
				background: #F8F8F8;
			}
			img {
				width: 100%;
			}
			h4 {
				font-size: 18px;
				margin: 10px 0;
				color: black;
			}
			dl {
				display: flex;
				dd {
					margin-right: 10px;
					padding: 1px;
					border: 1px solid #ccc;
					font-size: 14px;
					color: #ccc;
					margin-bottom: 10px;
				}
			}
			.price {
				font-size: 14px;
				color: #BE9E4D;
				letter-spacing: -3px;
				span {
					font-size: 20px;
					letter-spacing: 0px;
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