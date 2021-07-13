<template>
	<view class="updatename">
		<input type="text" v-model="nickname" class="input" />
		<text class="title">好名字可以让你的朋友更容易记住你。</text>
		<view @click="updateUser()">保存</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname: ""
			}
		},
		onLoad(opt) {
			// console.log(opt)
			this.nickname = opt.nickname
		},
		methods: {
			updateUser() {
				uni.showLoading({

				})
				this.$reqs.req('updateUser', {
					userInfo: {
						nickname: this.nickname
					}
				}).then(res => {
					// console.log(res)
					uni.hideLoading()
					uni.showToast({
						title: res.message,
						icon: 'none'
					})
					if(res.code==0){
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
						},1000)
					}
				})

			}
		}
	}
</script>

<style lang="scss" scoped>
	.updatename {
		height: 36rpx;
		margin: 0 48rpx;

		.input {
			border-bottom: 1px solid #eee;
			font-size: 30rpx;
			padding: 54rpx 0rpx 14rpx 0;
			margin-bottom: 20rpx;
		}

		.title {
			font-size: 24rpx;
			color: #dddddd;
		}
	}
</style>
