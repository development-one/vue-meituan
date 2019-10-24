<template>
	<div class="bannerInfo">
		<el-row class="info-top" :gutter="12">
			<el-col :span="14" class="top-carousel">
  				<el-carousel :interval="5000">
  				  <el-carousel-item>
  				    <a href=""> 
								<img src="https://p1.meituan.net/bbia/b09c9abee4ae18e6edf95b5d1bac9372252533.jpg@368w_208h_1e_1c" alt="">
  				    </a>
  				  </el-carousel-item>
  				  <el-carousel-item>
  				    <a href=""> 
								<img src="https://p1.meituan.net/bbia/b09c9abee4ae18e6edf95b5d1bac9372252533.jpg@368w_208h_1e_1c" alt="">
  				    </a>
  				  </el-carousel-item>
  				</el-carousel>
			</el-col>
			<el-col :span="4" class="top-img">
				<a href=""><img src="https://p0.meituan.net/moviemachine/ff399baffe786445b96e4e3d24fe1eeb675719.jpg@214w_297h_1e_1c" alt=""></a>
			</el-col>
			<el-col :span="6" class="top-info">
				<el-card style="height:100%" shadow="never">
					<div class="cta">
						<el-image src="https://p0.meituan.net/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg@214w_297h_1e_1c" fit="cover" lazy>
							<div slot="placeholder">
        				<i class="el-icon-picture-outline"></i>
      				</div>
						</el-image> 
						<h3>Hi ! 你好</h3>
						<el-button style="margin: 10px 0" round>注册</el-button>
						<el-button style="margin:0" round>立即登录</el-button>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row class="info-footer" :gutter="12">
			<el-col :span="7">
				<a href="">
					<el-image lazy src="https://p1.meituan.net/dpmerchantpic/dea153df4efe2bef6374ee785a47facc1895590.jpg@213w_120h_1e_1c">
						
					</el-image>
				</a>
			</el-col>
			<el-col :span="7">
				<a href="">
					<el-image lazy src="https://p1.meituan.net/dpmerchantpic/dea153df4efe2bef6374ee785a47facc1895590.jpg@213w_120h_1e_1c">
						
					</el-image>
				</a>
			</el-col>
			<el-col :span="4">
				<a href="">
					<el-image lazy src="https://p1.meituan.net/dpmerchantpic/dea153df4efe2bef6374ee785a47facc1895590.jpg@213w_120h_1e_1c">
						
					</el-image>
				</a>
			</el-col>
			<el-col :span="6" class="footer-info">
				<el-card style="height:100%" shadow="never">
					<div class="cta">
						<el-image src="https://p0.meituan.net/movie/7b437e3a0d08d10e374ddc34f71b88fe3379132.jpg@214w_297h_1e_1c" fit="cover" lazy>
							<div slot="placeholder">
        				<i class="el-icon-picture-outline"></i>
      				</div>
						</el-image> 
						<p style="font-size: 16px">美团手机版APP</p>
						<p>
							<span>1元起</span>
							吃喝玩乐
						</p>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss">
.bannerInfo {

	.info-top {
		height: 242px;
		.top-carousel {
			height: 100%;
			.el-carousel {
				height: 100%;
				.el-carousel__container {
					height: 100%;
					a {
						img {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		.top-img {
			height: 100%;
			a {
				img {
					width: 100%;
					height: 100%;
				}
			}
		}

		.top-info {
			height: 100%;
			.cta {
				width: 100%;
				text-align: center;
				img {
					margin: 10px 0;
					width: 50px;
					height: 50px;
					border-radius: 50%;
				}
				.el-button {
					width: 100%;
				}
			}
		}
	}

	.info-footer {
		margin-top: 12px;
		height: 148px;
		.el-col {
			height: 100%;
			a {
				display: block;
				height: 100%;
				.el-image {
					width: 100%;
					height: 100%;
				}
			}
			&.footer-info {
				.cta {
					width: 100%;
					height: 100%;
					text-align: center;
					color: black;
					img {
						width: 60px;
						height: 60px;
					}
					span {
						color: red;
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