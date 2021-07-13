const apis = async (action,params,fun,type)=>{
	uni.showLoading({
		
	})
	fun = fun ? fun:()=>{return true};
	type = type?type:true;
	let res = true;
	if(type){
		res = await fun();
	}else{
		res = fun();
	}
	uni.hideLoading()
	if(!res){
		uni.showToast({
			title:'请先登录',
			icon:'none'
		})
		return;
	}
	switch(action){
		case 1:{
			uni.navigateTo(params);
			break;
		}
		case 2:{
			uni.redirectTo(params);
			break;
		}
		case 3:{
			uni.reLaunch(params);
			break;
		}
		case 4:{
			uni.switchTab(params);
			break;
		}
	}
}

const navigateTo = (params,fun)=>{
	apis(1,params,fun)
}
const redirectTo = (params,fun)=>{
	apis(2,params,fun)
}
const reLaunch = (params,fun)=>{
	apis(3,params,fun)
}
const switchTab = (params,fun)=>{
	switchTab(4,params,fun)
}

module.exports = {navigateTo,redirectTo,reLaunch,switchTab}