//白名单
const whiteList = [
	'/',
	'/pages/index/index',
	'/pages/my/my',
	'/pages/my/mor',
	'/pages/my/addMor',
	'/pages/index/login',
	'/pages/index/register',
	'/pages/index/wiki',
	'/pages/index/crop',
	'/pages/article/article',
	'/pages/index/mqtt',
	
	
]

function hasPermission(url) {
	let islogin = uni.getStorageSync('isLogin');
	islogin = Boolean(Number(islogin)); //返回布尔值
	// 在白名单中或有登录判断条件可以直接跳转
	if (whiteList.indexOf(url) !== -1 || islogin) {
		return true
	}
	return false

}
export default async function() {
	const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];
	list.forEach(item => {
		uni.addInterceptor(item, {
			invoke(e) {
				// 获取要跳转的页面路径（url去掉"?"和"?"后的参数）
				const url = e.url.split('?')[0]
				if(whiteList.includes(url)){
					console.log('url', url,e)
					// 判断当前窗口是白名单，如果是则不重定向路由
					return true;
				}
				else{
					uni.showToast({
						title: '用户没有权限...',
						duration: 2000,
						icon: 'none',
					})
					return false
				}
			},
			fail() {
				
				return false
			}
		})
	})
}