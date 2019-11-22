<template>
  <div class="container-search">
    <el-input 
    placeholder="搜索商家或地点" 
    v-model="search" 
    class="input-with-select" 
    style="width:570px;" 
    @focus="focus" 
    @blur="blur"
    @input="change"
   	@keyup.enter.native="submit"
    clearable>
    	<el-button slot="append" icon="el-icon-search" style="width:80px;"></el-button>
  	</el-input>
  	<dl class="search-info" v-show="isHotPlace">
  		<dt>热门搜索</dt>
  		<dd>
  			<a href="https://www.meituan.com/zhoubianyou/51081044/">长沙世界之窗</a>
  			<a href="">华谊兄弟</a>
  			<a href="">龙牌酒家</a>
  			<a href="">长沙电影小镇</a>
  			<a href="">长沙生态动物园</a>
  		</dd>
  	</dl>
  	<dl class="search-change" v-show="isSearchList">
  		<dd v-for="item in searchList" :key="item"><a href="">{{item}}</a></dd>
  	</dl>

  	<div class="recommend-list">
  		<a :href="'/s/'+item+'/'" v-for="item in recommendList" :key="item">{{item}}</a>
  	</div>
  </div>
</template>

<style lang="scss">
@import '~assets/css/main.scss';
  	.container-search {
  		position: relative;
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

		.search-info {
			background: white;
			position: absolute;
			left: 0;
			top: 10px;
			box-sizing: border-box;
			padding: 10px;
			width: 490px;
			border: 1px solid #ccc;
			border-top: 0;
			dt {
				color: #999999;
			}
			dd {
				margin: 10px 0;	
				a {
					color: #666666;
					font-size: 12px;
					margin-right: 5px;
					&:hover {
						color: #FE8C00;
					}
				}
			}
		}

		.search-change {
			background: white;
			position: absolute;
			left: 0;
			width: 490px;
			border: 1px solid #ccc;
			border-top: 0;
			z-index: 111;
			dd {
				a {
					box-sizing: border-box;
					padding: 4px 10px;
					display: block;
					color: #333333;
					&:hover{
						background: #F8F8F8;
						color: #FE8C00;
					}
				}
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
import {throttle} from "@/assets/utils.js"
 	export default {
		data() {
			return {
				search: "",
				isFocus: false,
				ssee: true,
				timer: null,
				searchList: [],
				recommendList: ["长沙生态动物园","长沙世界之窗","长沙方特东方神画","炭河千古情","长沙海底世界","橘子洲景区"]
			}
		},
		computed: {
			isHotPlace() {
				return this.isFocus && !this.search
			},
			isSearchList() {
				return this.isFocus && this.search && this.ssee
			}
		},
		methods: {
			focus()
			{
				this.isFocus = true
			},
			blur() {
				setTimeout(()=>{
					this.isFocus = false
				},200)			
			},
			change() {
        		let lt = ["长沙餐馆","长沙小星星",'长沙小甜甜','长沙呵呵哒','广州一枝花','广州小时间',"上海寻开心"]
				throttle(()=>{

					this.searchList = []
					let searchTrim = this.search.trim()
					let scLength = searchTrim.length
					
					lt.map((item,index)=>{

						if(this.search == "" || this.search == " "){
							return true;
						}
						let ct = item.slice(0,scLength)
						if(ct==searchTrim){
							this.searchList.push(item)
						}
					})
					this.ssee = true
					if(this.searchList.length == 0){
						this.ssee = false
					}

				},1000)
			},
			submit() {
				alert("aa")
			}
		}
	}
</script>