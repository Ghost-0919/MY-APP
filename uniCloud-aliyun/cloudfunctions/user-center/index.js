'use strict';
const uniIDs = require('uni-id')
const transporter = require('email')
exports.main = async (event, context) => {

	let res = {};
	let params = event.params ? event.params : {};

	const uniID = uniIDs.createInstance({
		context: context
	})

	const noNeedTokens = ['login', 'register', 'logout', 'loginByUniverify', 'sendSmsCode', 'loginBySms',
		'loginByEmail', 'sendEmailCode', 'loginByWeixin'
	];

	if (noNeedTokens.indexOf(event.action) == -1) {
		if (!event.uniIdToken) {
			res = {
				code: 403,
				message: "未携带token"
			}
			return res;
		} else {
			let check_user = await uniID.checkToken(event.uniIdToken, {});
			if (check_user.code === 0) {
				params.uid = check_user.uid;
			} else {
				res = check_user;
				return res;
			}
		}
	}

	// res = await uniID[event.action](params);
	// return;

	switch (event.action) {
		case 'register': {
			const {
				username,
				password
			} = params;
			res = await uniID.register({
				username,
				password
			})
			break;
		}
		case 'login': {
			const {
				username,
				password
			} = params;
			res = await uniID.login({
				username,
				password,
				queryField: ['username', 'email', 'mobile']
			})
			break;
		}
		case 'logout': {
			res = await uniID.logout(event.uniIdToken);
			break;
		}
		case 'setAvatar': {
			const {
				avatar,
				uid
			} = params;
			res = await uniID.setAvatar({
				uid,
				avatar
			});
			break;
		}
		case 'updateUser': {
			const {
				uid,
				userInfo
			} = params;
			res = await uniID.updateUser({
				uid,
				...userInfo
			});
			break;
		}
		case 'updatePwd': {
			const {
				uid,
				oldPassword,
				newPassword
			} = params;
			res = await uniID.updatePwd({
				uid,
				oldPassword,
				newPassword
			});
			break;
		}
		case 'getUserInfo': {
			const {
				uid
			} = params;
			res = await uniID.getUserInfo({
				uid
			});
			break;
		}
		case 'sendSmsCode': {
			const {
				mobile
			} = params;
			const randomStr = '00000' + Math.floor(Math.random() * 1000000)
			const code = randomStr.substring(randomStr.length - 4)
			res = await uniID.sendSmsCode({
				mobile,
				templateId: '11356',
				code,
				type: 'login'
			});
			break;
		}
		case 'loginBySms': {
			const {
				mobile,
				code
			} = params;
			res = await uniID.loginBySms({
				mobile,
				code
			})
			break;
		}
		case 'loginByUniverify': {
			const {
				access_token,
				openid
			} = params;
			res = await uniID.loginByUniverify({
				access_token,
				openid
			})
			break;
		}
		case 'sendSmsCodeBind': {
			const {
				mobile,
				type
			} = params;
			const randomStr = '00000' + Math.floor(Math.random() * 1000000)
			const code = randomStr.substring(randomStr.length - 6)
			res = await uniID.sendSmsCode({
				mobile,
				templateId: 'xxxx',
				code,
				type
			});
			break;
		}
		case 'bindMobile': {
			const {
				uid,
				mobile,
				code
			} = params;
			res = await uniID.bindMobile({
				uid,
				mobile,
				code
			})
			break;
		}
		case 'unbindMobile': {
			const {
				uid,
				mobile,
				code
			} = params;
			res = await uniID.unbindMobile({
				uid,
				mobile,
				code
			})
			break;
		}
		case 'sendEmailCode': {
			const {
				email
			} = params;
			const randomStr = '00000' + Math.floor(Math.random() * 1000000);
			const code = randomStr.substring(randomStr.length - 6);
			res = await uniID.setVerifyCode({
				email,
				code,
				expiresIn: 300,
				type: "login"
			});
			if (res.code == 0) {
				const message = {
					from: "邮箱名<xxxx@xxx.com>", //注意邮箱地址要填写
					to: email, //收件地址
					subject: "主题",
					html: `<html>
				    	<head>
				    		<meta charset="utf-8">
				    		<title></title>
				    	</head>
				    	<body>
				    		<div>
				    			您好，您的验证码为${code}，5分钟内有效，请勿泄露，并即使验证。
				    		</div>
				    	</body>
				    </html>`
				};
			}
			break;
		}
		case 'loginByEmail': {
			const {
				email,
				code
			} = params;
			res = await uniID.loginByEmail({
				email,
				code
			});
			break;
		}
		case 'sendEmailCodeBind': {
			const {
				email,
				type
			} = params;
			const randomStr = '00000' + Math.floor(Math.random() * 1000000);
			const code = randomStr.substring(randomStr.length - 6);
			res = await uniID.setVerifyCode({
				email,
				code,
				expiresIn: 300,
				type
			});
			if (res.code == 0) {
				const message = {
					from: "邮箱名<xxxx@xxx.com>", //注意邮箱地址要填写
					to: email, //收件地址
					subject: "主题",
					html: `<html>
				    	<head>
				    		<meta charset="utf-8">
				    		<title></title>
				    	</head>
				    	<body>
				    		<div>
				    			您好，您的验证码为${code}，5分钟内有效，请勿泄露，并即使验证。
				    		</div>
				    	</body>
				    </html>`
				};
			}
			break;
		}
		case 'bindEmail': {
			const {
				uid,
				email,
				code
			} = params;
			res = await uniID.bindEmail({
				uid,
				email,
				code
			})
			break;
		}
		case 'unbindEmail': {
			const {
				uid,
				email,
				code
			} = params;
			res = await uniID.unbindEmail({
				uid,
				email,
				code
			})
			break;
		}
		case 'loginByWeixin': {
			const {
				code
			} = params;
			res = await uniID.loginByWeixin({
				code
			});
			break
		}
		case 'bindWeixin': {
			const {
				code,
				uid
			} = params;
			res = await uniID.bindWeixin({
				uid,
				code
			});
			break;
		}
		case 'unbindWeixin': {
			const {
				uid
			} = params;
			res = await uniID.unbindWeixin({
				uid
			});
			break;
		}



		default: {
			res = {
				code: 402,
				message: "请求非法"
			}
			break;
		}
	}

	return res;

};
