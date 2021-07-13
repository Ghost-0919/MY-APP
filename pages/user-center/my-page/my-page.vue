<template>
	<view>
		<u-navbar :is-back="false" title="　" :border-bottom="false">
			<view class="u-flex u-row-right" style="width: 100%;">
				<view class="camera u-flex u-row-center">
					<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
				</view>
			</view>
		</u-navbar>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" @click="goSetting">
			<view class="u-m-r-10 images-box">
				<image :src="pic" class="images"></image>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{userInfo.nickname | show_nick}}</view>
				<view class="u-font-14 u-tips-color">乐多号:{{userInfo.username}}</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="scan" color="#969799" size="28"></u-icon>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" title="收藏"></u-cell-item>
				<u-cell-item icon="photo" title="相册"></u-cell-item>
				<u-cell-item icon="coupon" title="卡券"></u-cell-item>
				<u-cell-item icon="heart" title="关注"></u-cell-item>
			</u-cell-group>
		</view>

		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置" @click="goSetting"></u-cell-item>
				<u-cell-item icon="account" title="登录" @click="goLogin"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic: '',
				show: true,
				userInfo: {}
			}
		},
		filters: {
			show_nick(val) {
				return val ? val : "未设置昵称"
			}
		},
		onShow() {
			this.$reqs.check_token().then(res => {
				this.userInfo = res.userInfo
				// console.log(this.userInfo)
				this.pic = this.userInfo.avatar ? this.userInfo.avatar : '../../../static/image/my-page/phone.jpg';
			})
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: "../login/index"
				})
			},
			goSetting() {
				let urls = this.userInfo.avatar ? this.userInfo.avatar : '../../../static/image/my-page/phone.jpg';
				let nickname = this.userInfo.nickname ? this.userInfo.nickname : '';
				this.$apis.navigateTo({
					url: `../setting/setting?avatar=${urls}&nickname=${nickname}`
				}, this.$reqs.check_token)
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #ededed;
	}

	.camera {
		width: 54px;
		height: 44px;

		&:active {
			background-color: #ededed;
		}
	}

	.user-box {
		background-color: #fff;
	}

	.u-flex-1>view {
		padding-left: 20rpx;
	}

	.images-box {
		width: 154rpx;
		height: 154rpx;
	}

	.images {
		width: 100%;
		height: 100%;
		border-radius: 20rpx;
	}
</style>
