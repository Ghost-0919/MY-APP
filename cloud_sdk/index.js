const req = (action, params) => {
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name: 'user-center',
			data: {
				action,
				params
			},
			success: res => {
				resolve(res.result)
			},
			fail: res => {
				reject(res.result)
			}
		})
	})
}
const login = async (params) => {
	let res = await req('login', params);
	if (res.code == 0) {
		uni.setStorageSync('uni_id_token', res.token)
		uni.setStorageSync('uni_id_token_expired', res.tokenExpired)
	}
	return res;
}




const logout = () => {
	req('logout', {});
	uni.removeStorageSync('uni_id_token')
	uni.removeStorageSync('uni_id_token_expired')
	uni.removeStorageSync('uid')
	uni.removeStorageSync('nickname')
	uni.removeStorageSync('avatar')
}

const check_token = async () => {
	let res = await req("getUserInfo");
	console.log(res)
	if (res.code == 0) {
		return res
	} else {
		return false;
	}
}


module.exports = {
	req,
	login,
	logout,
	check_token
}
