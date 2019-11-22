<template>
	<div class="allCategory">
		<dl>
			<dd @mouseleave="mouseleave">
				<div class="list" v-for="(item,index) in categoryList" :key="index" @mouseenter="mouseenter">
					<div class="list-left">
						<i :class="item.cl"></i>
						<a href="">{{item.name}}</a>
					</div>
					<i class="el-icon-arrow-right"></i>
				</div>

				<div class="list-info" v-if="kind">
					<div class="list-cta" v-for="(item,idx) in curdetail.child" :key="idx">
						<div class="info-header">
							<div class="head-title">
								{{item.title}}
							</div>
							<div class="head-mord">
							更多>
							</div>
						</div>
						<div class="info-cta" >
							<a href="" v-for="v in item.info">{{v}}</a>
						</div>
					</div>					
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
			height: 402px;
			margin-top: 15px;
			position: relative;
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

			.list-info {
				width: 400px;
				height: 100%;
				position: absolute;
				left: 100%;
				top: 0;
				background: white;
				z-index: 111;
				border-left: 1px solid #ccc;
				padding: 30px;
				box-sizing: border-box;
				.list-cta {
					margin-bottom: 10px;
					.info-header {
						display: flex;
						justify-content: space-between;
						align-items: baseline;
						padding-bottom: 10px;
						border-bottom: 1px solid #ccc;
						.head-title {
							font-size: 16px;
							color: #222222;
						}
						.head-mord {
							font-size: 12px;
							color: #999999;
							cursor: pointer;
						}
					}
					.info-cta {
						margin-top: 10px;
						display: flex;
						flex-wrap: wrap;
						a {
							font-size: 12px;
							margin: 5px 15px 5px 0;
						}
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
			kind: "",
			categoryList: [
			{	
				cl:"el-icon-share",
				name:"美景",
				child:[{
					title:"人们新闻",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-user-solid",
				name:"美食",
				child:[{
					title:"人新",
					info:["你好","他号","睡好"]
				},{
					title:"人新",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-phone",
				name:"美人",
				child:[{
					title:"人闻",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			},
			{	
				cl:"el-icon-eleme",
				name:"美女",
				child:[{
					title:"人们",
					info:["你好","他号","睡好"]
				}]
			}			]
		}
	},
	methods: {
		mouseleave() {
			setTimeout(()=>{
				this.kind = ""
			},200)
		},
		mouseenter(e) {
			this.kind = e.target.querySelector("i").className
		}
	},
	computed: {
		curdetail(){
			return this.categoryList.filter((item,index)=>{
				return item.cl === this.kind
			})[0]
		}
	}
}
</script>