<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎使用乐多.</view>
			<u-form :model="form" ref="uForm">
				<u-form-item prop="username">
					<u-input type="text" v-model="form.username" placeholder="请输入账户名称" />
				</u-form-item>
				<u-form-item prop="password">
					<u-input type="password" v-model="form.password" placeholder="请输入账户密码" />
				</u-form-item>
				<u-form-item prop="v_password">
					<u-input type="password" v-model="form.v_password" placeholder="请确认账户密码" />
				</u-form-item>
				<button :style="[inputStyle]" class="getCaptcha" @click="register">点击注册</button>
			</u-form>
			<view class="alternative">
				<view class="password" @click="gologin">已有帐号点击登录</view>
			</view>
		</view>
		<view class="buttom">
			<view class="hint">
				注册代表同意
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
				form: {
					username: "",
					password: "",
					v_password: ""
				},
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: ['change', 'blur'],
					}],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: ['change', 'blur'],
						},
						{
							pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
							message: '需同时含有字母和数字，长度在6-12之间',
							trigger: ['change', 'blur'],
						}
					],
					v_password: [{
							required: true,
							message: '请重新输入密码',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return value === this.form.password;
							},
							message: '两次输入的密码不相等',
							trigger: ['change', 'blur'],
						}
					]
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		computed: {
			inputStyle() {
				let style = {};
				if (this.form.username != "" & this.form.password != "" & this.form.v_password != "") {
					style.color = "#fff";
					style.backgroundColor = "#1E90FF";
				}
				return style;
			}
		},
		onLoad() {

		},
		methods: {
			gologin() {
				uni.navigateTo({
					url: "../login/index"
				})
			},
			register() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log(1)
						this.$reqs.req('register',{username:this.form.username,password:md5Libs.md5(this.form.password)}).then(res=>{
							console.log(res)
						})
					} else {
						console.log('验证失败');
					}
				});
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
</style>
