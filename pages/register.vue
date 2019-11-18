<template>
	<div class="container">
		<a class="home" href="/"></a>
		<div class="regis-input">
			<img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
			<div class="input-cta">
				<regisForm :is="regist" @switch="show"/>
			</div>
		</div>
		<div class="footer-info">
			<div class="footer-nav">
				<a href="">关于美团</a>
				<a href="">加入我们</a>
				<a href="">商家入驻</a>
				<a href="">帮助中心</a>
				<a href="">美团手机版</a>
			</div>
			<div class="web-info">
				<span>
					©2019
					<a href="">美团网团购</a>
					meituan.com
					<a href="">京ICP证070791号</a>
					京公网安备11010502025545号
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 980px;
	margin: 40px auto 20px;
	.home {
		display: block;
    	width: 82px;
    	height: 54px;
    	background: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png) -188px -808px no-repeat;
	}
	.regis-input {
		margin: 30px auto;
		display: flex;
		color: #666666;
		.input-cta {
			margin-left: 120px;
			padding-top: 50px;
			width: 270px;
		}
	}

	.footer-info {
		margin-top: 60px;
		.footer-nav {
			padding: 15px 0;
			border-top: 1px solid #EEEEEE;
			border-bottom: 1px solid #EEEEEE;
			a {
				font-size: 12px;
				color: #999999;
				margin-right: 26px;
			}
		}

		.web-info {
			margin: 20px 0 30px 0;
			color: #999999;
			font-size: 12px;
			a {
				color: #999999;
			}
		}
	}
}
</style>

<script>
import password from "@/components/regis/password.vue"
import phone from "@/components/regis/phone.vue"
export default {
	layout: "register",
	components: {
		password,
		phone
	},
	data() {
		return {
			regist: "password"
		}
	},
	methods: {
		show(el) {
			this.regist = el
		}
	}
}
</script>