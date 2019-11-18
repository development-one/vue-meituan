<template>
	<div class="form-container">
		<div class="cta-head">
			<span>账号登录</span>
			<div class="button" @click="register">
				手机动态登录
			<i class="el-icon-refrigerator"></i>
			</div>
		</div>

		<el-form status-icon class="regis-form clearFix" :model="regis" :rules="regisRule" rel="regisForm">

 			<el-form-item prop="user">
    		<el-input autocomplete="off" prefix-icon="el-icon-user" placeholder="账号" v-model="regis.user"></el-input>
  		</el-form-item>

  		<el-form-item prop="pass">
    		<el-input autocomplete="off" prefix-icon="el-icon-lock" placeholder="密码" v-model="regis.pass"></el-input>
  		</el-form-item>

  		<div class="forget">
  			<a href="">忘记密码?</a>
  		</div>

  		<el-form-item size="large">
    		<el-button  @click="onSubmit">登录</el-button>
  		</el-form-item>

  		<span>
  			还没有账号&nbsp;?&nbsp;
  			<a href="">免费注册</a>
  		</span>

  		<div class="else-regis">
  			<hr>
  			<div class="else-info">用合作网站账号登录</div>
  		</div>

		</el-form>
	</div>
</template>

<style lang="scss">
.form-container {
	.cta-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		.button {
			cursor: pointer;
			font-size: 12px;
			color: #666666;
			display: flex;
			i {
				font-size: 16px;
			}
		}
	}
	.regis-form {
		width: 100%;
		margin-top: 10px;
		.el-form-item {
			margin-bottom: 10px;
			.el-input {
				.el-input__inner {
					border: 1px solid #666666;
					height: 35px;
					border-radius: 0;
					&::placeholder {
						color: #666666;
					}
					&:focus {
						border: 1px solid #FFC300;
					}
				}
			}
		}
		
		.el-form-item {
			.el-button {
				margin-top: 20px;
				width: 100%;
				background: #FE8C00;
				border: 0;
				color: black;
			}
		}

		.forget {
			display: flex;
			justify-content: flex-end;
			a {
				color: #FE8C00;
				font-size: 12px;
			}
		}

		span {
			a {
				color: #FE8C00;
			}
		}

		.else-regis{
			margin-top: 30px;
			position: relative;
			hr {			
				border: 0.5px solid #ccc;
			}
			.else-info {
				width: 50%;
				background: white;
				padding: 0 10px;
				text-align: center;
				position: absolute;
				top: 0;
				left: 50%;
				transform: translate(-50%,-50%);
			}
		}
	}
}
</style>

<script>
export default {
	data(){
		return {
			regisRule: {
				user: "",
				pass: ""
			},
			regis: {
				user: "",
				pass: ""
			}
		}
	},
	methods: {
		onSubmit(){

		},
		register(){
			this.$emit("switch","phone")
		}
	},
	
}
</script>