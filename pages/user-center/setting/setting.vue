<template>
	<view class="setting">
		<u-cell-group>
			<u-cell-item title="头像" @click="chooseAvatar()">
				<view class="images-box">
					<image :src="phone" mode="" class="image"></image>
				</view>
			</u-cell-item>
			<u-cell-item title="昵称" @click="updateNme()">{{nickname}}</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				nickname:"",
				gender:0
			}
		},
		onLoad(opt) {
			// console.log(opt)
			this.phone = opt.avatar
			this.nickname = opt.nickname
		},
		created() {
			// 监听从裁剪页发布的事件，获得裁剪结果
			uni.$on('uAvatarCropper', path => {
				this.phone = path;
				uni.showLoading({

				})
				uniCloud.uploadFile({
					cloudPath: path,
					filePath: path,
					success: res => {
						this.$reqs.req('setAvatar', {
							avatar: res.fileID
						}).then(res => {
							uni.hideLoading()
						})
					}
				})
			})
		},
		methods: {
			chooseAvatar() {
				uni.navigateTo({
					url: "../u-avatar-cropper/u-avatar-cropper?destWidth=300&rectWidth=200&fileType=jpg"
				})
			},
			updateNme(){
				let nickname = this.nickname ? this.nickname : "";
				this.$apis.navigateTo({
					url:`../updatename/updatename?nickname=${nickname}`
				},this.$reqs.check_token)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setting {
		.images-box {
			width: 154rpx;
			height: 154rpx;
			margin-left: 420rpx;

			.image {
				width: 100%;
				height: 100%;
				border-radius: 20rpx;
			} 
		}

	}
</style>
