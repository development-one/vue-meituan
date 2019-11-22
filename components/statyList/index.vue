<template>
	<div class="statyCta">
		<div class="header">
			<dl>
				<dt>有格调</dt>
				<dd v-for="item in infoList" :key="item.name" @mouseenter="mouseenter">{{item.name}}</dd>	
			</dl>
		</div>
		<div class="container">
			<div class="info" v-for="item in curdetail.child" :key="item.img">
				<img :src="item.img" alt="">
				<h4>{{item.title}}</h4>

				<div v-if="flag" class="t1">
					<p class="ctaP">手选水果20选1,免费配送</p>
					<div class="price1">
						￥
						<span class="prInfo">{{item.sprice}}</span>
						<span class="prInfo1">门市价￥107</span>
						<span class="addre">天虹</span>			
					</div>					
				</div>

				<div v-if="flag1" class="t2">
					<p class="ctaP">手选水果20选1,免费配送</p>
					<div class="price1">
						￥
						<span class="prInfo">{{item.sprice}}</span>
						/人均
						<span class="addre">天虹</span>			
					</div>
				</div>

				<div v-if="flag2" class="t3">
					<dl>
						<dd v-for="v in item.info">{{v}}</dd>
					</dl>
					<span class="price">
						￥
						<span class="prInfo">{{item.sprice}}</span>
						/起
					</span>
				</div>	
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
				position: relative;
				&:first-of-type{
					margin-left: 30px;
				}
				&:hover {
					&:after {
						display: block;
					}
				}
				&:after{
					content: "";			
  				position: absolute;
  				border-bottom: 8px solid white;
  				border-right: 8px solid transparent;   
  				border-left: 8px solid transparent;
  				top: 23px;
  				left: 50%;
  				transform: translateX(-50%);
  				display: none;
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
				height: 240px;
			}
			h4 {
				font-size: 18px;
				margin: 10px 0;
				color: black;
			}

			.t1 {
				.ctaP {
					margin-bottom: 5px;
					font-size: 12px;
					color: #999;
				}
				.price1 {
					font-size: 14px;
					color: #BE9E4D;
					display: flex;
					align-items: baseline;
					.prInfo {
						margin-left: -1px;
						font-size: 20px;
					}
					.prInfo1 {
						margin-left: 5px;
						text-decoration: line-through;
						font-size: 12px;
						color: #999;
					}
					.addre {
						font-size: 12px;
						color: #999;
						margin-left: auto;
					}
				}
			}
			
			.t2 {
				.ctaP {
					margin-bottom: 5px;
					font-size: 12px;
					color: #999;
				}
				.price1 {
					font-size: 14px;
					color: #BE9E4D;
					display: flex;
					align-items: baseline;
					.prInfo {
						margin-left: -2px;
						font-size: 20px;
					}
					.addre {
						font-size: 12px;
						color: #999;
						margin-left: auto;
					}
				}
			}

			.t3 {
				dl {
					display: flex;
					margin-bottom: 8px;
					dd {
						margin-right: 10px;
						border: 1px solid #ccc;
						font-size: 12px;
						color: #ccc;				
					}
				}
				.price {
					font-size: 14px;
					color: #BE9E4D;
					.prInfo {
						margin: 0 -5px;
						font-size: 20px;
					}
				}
			}

		}
	}
}
</style>

<script>
export default {
	data() {
		return {
			icons: true,
			type: "全部",
			flag: true,
			infoList: [
				{name:'全部',child:[
					{img:"https://p1.meituan.net/bbia/2a5e0407596edfe6b8271531bfd99bfd371093.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p0.meituan.net/msmerchant/80aecd7c689b711260ca34e58dfc875178044.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p0.meituan.net/bbia/d228f83919c8b6c45b30f9d8fe67c13e64914.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"}
				]},
				{name:'约会聚餐',child:[
					{img:"https://p0.meituan.net/msmerchant/be8817b130457b112e6dbb9c5d6b70b2323894.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p0.meituan.net/bbia/850ce195a4db8d447644429ac6e32c20330100.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p1.meituan.net/bbia/9cc47eecc25e7bfa5c2aae494c2a46fd88952.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"}
				]},
				{name:'丽人SPA',child:[
					{img:"https://p1.meituan.net/merchantpic/e8c85aea0b1278f245d51fac05b8500b315499.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p1.meituan.net/wedding/bef1535b787274c05c8b1deabeb5a82f1322658.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p1.meituan.net/merchantpic/fc0266474c75960702d6d0709d011e63191291.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"}
				]},
				{name:'电影演出',child:[
					{img:"https://p1.meituan.net/deal/808efe1802b31ee8ce5947a22b2bbdc177247.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p0.meituan.net/deal/__43558314__1826377.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p0.meituan.net/deal/f3d0d41812e468e00ad65b5c0037e251188998.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"}
				]},
				{name:'品质出游',child:[
					{img:"https://p0.meituan.net/tdchotel/55366df7fa5f98daa6d62ef9d21cdfd7214659.@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p0.meituan.net/tdchotel/e8793364d0839ff56d587339b2ffc2f6100333.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"},
					{img:"https://p1.meituan.net/tdchotel/8904a551a4a8ac48c27e84f0b7194a9094663.jpg@368w_208h_1e_1c",title:"长沙天舒酒店",info:["新客超值优惠","预约发票","限时特惠","免押金"],sprice:"450"}
				]}
			],
		}
	},
	computed: {
		curdetail() {
			return this.infoList.filter((item,index)=>this.type===item.name)[0]
		}
	},
	methods: {
		mouseenter(e) {
			this.type =  e.target.textContent
			let flg = e.target.textContent=="全部"||e.target.textContent=="约会聚餐"
			let flg1 = e.target.textContent=="丽人SPA"||e.target.textContent=="电影演出"
			let flg2 = e.target.textContent=="品质出游"
			flg ? this.flag = true : this.flag = false
			flg1 ? this.flag1 = true : this.flag1 = false
			flg2 ? this.flag2 = true : this.flag2 = false
		}
	}
}	
</script>