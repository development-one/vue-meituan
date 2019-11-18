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
  		<dd><a href="https://www.meituan.com/zhoubianyou/51081044/">长沙世界之窗</a></dd>
  		<dd><a href="">华谊兄弟</a></dd>
  		<dd><a href="">龙牌酒家</a></dd>
  		<dd><a href="">长沙电影小镇</a></dd>
  		<dd><a href="">长沙生态动物园</a></dd>
  	</dl>

  	<div class="recommend-list">
  		<a href="" ref="aa">长沙生态动物园</a>
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
			padding: 10px;
			width: 470px;
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
			padding: 5px 10px; 
			width: 470px;
			border: 1px solid #ccc;
			border-top: 0;
			z-index: 111;
			dd {
				margin: 5px 0;
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
				timer: null
			}
		},
		computed: {
			isHotPlace() {
				return this.isFocus && !this.search
			},
			isSearchList() {
				return this.isFocus && this.search
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
				/*if (this.timer) {
        		  clearTimeout(this.timer)
        		}
        		this.timer = setTimeout(() => {
        		  console.log("ccc")
        		}, 200)*/
				throttle(()=>{
					console.log("cc")
				},1000)
			}
		}
	}
</script>