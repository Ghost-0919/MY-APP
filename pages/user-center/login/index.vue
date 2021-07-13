<template>
	<view class="wrap">
		<view class="top"></view>
		<!-- 帐号密码登录 -->
		<view class="content" v-if="is_mobile">
			<view class="title">欢迎登录乐多.</view>
			<u-form>
				<u-form-item>
					<u-input type="number" v-model="tel" placeholder="请输入手机号/帐号昵称/邮箱" />
				</u-form-item>
				<view class="tips">未注册的手号验证后将自动创建乐多帐号</view>
				<button @tap="submit" :style="[inputStyle]" class="getCaptcha">获取短信验证码</button>
			</u-form>
			<view class="alternative">
				<view class="password" @click="is_mobile = false">密码登录</view>
				<view class="issue" @click="goregister">点击注册</view>
			</view>
		</view>
		<!-- 短信登录 -->
		<view class="content" v-if="!is_mobile">
			<view class="title">欢迎登录乐多.</view>
			<u-form>
				<u-form-item>
					<u-input type="text" v-model="username" placeholder="请输入手机号/邮箱" />
				</u-form-item>
				<u-form-item>
					<u-input type="password" v-model="password" placeholder="请输入账户密码" />
				</u-form-item>
				<button @tap="submit_u" :style="[inputStyles]" class="getCaptcha">点击登录</button>
			</u-form>
			<view class="alternative">
				<view class="password" @click="is_mobile = true">验证码登录</view>
				<view class="issue" @click="goregister">点击注册</view>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<!-- 登录方式待做 -->
			</view>
			<view class="hint">
				登录代表同意
				<text class="link">乐多用户协议、隐私政策，</text>
				并授权使用您的乐多账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
</template>

<script>
	import md5Libs from "uview-ui/libs/function/md5";
	export default {
		data() {
			return {
				tel: '',
				provider: [],
				is_mobile: true,
				username: "",
				password: "",
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if (this.tel) {
					style.color = "#fff";
					style.backgroundColor = "#1E90FF";
				}
				return style;
			},
			inputStyles() {
				let style = {};
				if (this.username != "" & this.password != "") {
					style.color = "#fff";
					style.backgroundColor = "#1E90FF";
				}
				return style;
			}
		},
		onLoad() {
			uni.getProvider({
				service: "oauth",
				success: res => {
					this.provider = res.provider
				}
			})
		},
		methods: {
			submit() {
				if (this.$u.test.mobile(this.tel)) {
					this.$u.route({
						url: 'pages/user-center/login/code'
					})
				}
			},
			submit_u() {
				this.$reqs.login({
					username: this.username,
					password: md5Libs.md5(this.password)
				}).then(res => {
					this.$apis.reLaunch({
						url:'../my-page/my-page'
					})
					console.log(res)
				})
			},
			goregister() {
				uni.navigateTo({
					url: "../register/register"
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.wrap {
		font-size: 28rpx;

		.content {
			width: 600rpx;
			margin: 80rpx auto 0;

			.title {
				text-align: left;
				font-size: 60rpx;
				font-weight: 500;
				margin-bottom: 100rpx;
				margin-top: 200rpx;
			}

			input {
				text-align: left;
				margin-bottom: 10rpx;
				padding-bottom: 6rpx;
				height: 70rpx;
			}

			.tips {
				color: $u-type-info;
				margin-bottom: 60rpx;
				margin-top: 8rpx;
			}

			.getCaptcha {
				background-color: rgb(225, 255, 255);
				color: $u-tips-color;
				border: none;
				font-size: 30rpx;
				padding: 12rpx 0;
				margin-top: 20rpx;

				&::after {
					border: none;
				}
			}

			.alternative {
				color: $u-tips-color;
				display: flex;
				justify-content: space-between;
				margin-top: 30rpx;
			}
		}

		.buttom {
			.loginType {
				display: flex;
				padding: 350rpx 150rpx 150rpx 150rpx;
				justify-content: space-between;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					color: $u-content-color;
					font-size: 28rpx;
				}
			}

			.hint {
				padding: 20rpx 40rpx;
				font-size: 20rpx;
				color: $u-tips-color;
				text-align: center;
				position: absolute;
				bottom: 100rpx;

				.link {
					color: rgb(135, 206, 250);
				}
			}
		}
	}

	.u-form-item {
		padding: 12rpx 0 !important;
	}
</style>
