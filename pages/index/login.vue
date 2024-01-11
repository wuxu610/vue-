<template>
	<view>
		<view class="logo">
			<image src="@/static/logo.png"></image>
		</view>
		<uni-forms class="myForm" ref="myForm" :modelValue="loginModel" :rules="rules" style="text-align: center;">
			<uni-forms-item name="email">
				<uni-easyinput class="input" v-model="loginModel.email" placeholder="请输入电子邮箱" suffix-icon="email" />
			</uni-forms-item>
			<uni-forms-item name="password">
				<uni-easyinput class="input" type="password" v-model="loginModel.password" placeholder="请输入密码" />
			</uni-forms-item>
			<button type="primary" @click="login" size="mini">用户登录</button>
			<button type="primary" @click="wxlogin" size="mini" style="margin-left: 10px;">微信登录</button>
			<view class="logo-extra">
				<button type="default" size="mini">忘记密码</button>
				<button type="default" size="mini" @click="toRegister">用户注册</button>
			</view>
		</uni-forms>
	</view>
	
	<!-- 提示信息弹窗 -->
	<uni-popup ref="message" type="message">
		<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
	</uni-popup>
	<!-- 提示窗示例 -->
	<uni-popup ref="alertDialog" type="dialog">
		<uni-popup-dialog :type="msgType" cancelText="关闭" confirmText="确认" title="获取得的OPEN ID" :content="openId" @confirm="toMy"></uni-popup-dialog>
	</uni-popup>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue';
import useUserStore from '@/store/user.js';
import { postRequest } from '@/http/index.js';
const userStore = useUserStore();
const myForm = ref(null); //获取DOM节点myForm==ref
const loginModel = reactive({
	email: '',
	password: ''
});
const openId = ref(null)
const msgType = ref(null)
const messageText = ref(null)
const alertDialog = ref(null)
const message = ref(null)

const rules = {
	email: {
		rules: [
			{
				required: true,
				errorMessage: '必填项'
			},
			{
				format: 'email',
				errorMessage: '邮件格式错误'
			}
		]
	}
};
const login = () => {
	myForm.value
		.validate()
		.then((res) => {
			postRequest('api/mobile/elogin', loginModel)
				.then((res) => {
					console.log(res);
					if (res.success) {
						const userinfo = res.data.userinfo;
						userStore.setToken(userinfo.token);
						userStore.fillUser(userinfo);
						uni.switchTab({
							url:'/pages/index/index'
						})
					}
				})
				.catch((err) => {
					console.log(err);
				});
		})
		.catch((err) => {
			console.log(err);
		});
};
function toRegister() {
	uni.navigateTo({
		url: '/pages/index/register',
		success(res) {
			console.log(res);
		},
		fail(res) {
			console.log(res);
		}
	});
}

function toMy(){
	uni.switchTab({
		url:'/pages/index/index'
	})
}

function messageToggle(type,msg) {
	msgType.value = type
	messageText.value = msg
	message.value.open()
}

function dialogToggle(type) {
	msgType.value = type
	alertDialog.value.open()
}


async function wxlogin() {
	try {
		const auth = await uni.getSetting()
		console.log(auth);
		if(auth.authSetting["scope.userInfo"]){
			messageToggle("success","用户已授权")
		}else{
			messageToggle("error","用户未授权")
		}
		const userProfile = await uni.getUserProfile({
			desc: '用户登录授权',
			lang: 'zh_CN'
		});
		console.log(userProfile);
		if (userProfile) {
			const loginInfo = await uni.login({ provider: 'weixin' });
			if (loginInfo) {
				// 登录临时code
				const { code } = loginInfo;
				// 调用登录接口
				const { data } = await uni.request({
					url: `https://api.weixin.qq.com/sns/jscode2session?appid=wxbd29d8cc5741b068&secret=1010c1a8363aa1b5a90ac09f7d0905b3&js_code=${code}&grant_type=authorization_code`
				});
				console.log('==========用户OPEN ID==========');
				console.log(data);
				openId.value = data.openid
				dialogToggle("success")
			}
		}else{
			messageToggle("error","用户取消授权")
		}
	} catch (e) {
		console.log('============EORROR==========');
		console.log(e);
	}
}
</script>

<style scoped>
.myForm {
	padding: 40px 10px 0 10px;
	margin: 10px;
	height: calc(80vh - 240px);
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
	border-radius: 0 0 10px 10px;
}
.logo-extra {
	display: flex;
	margin-top: 10upx;
}
.logo-extra button {
	width: 100%;
}

.logo {
	width: 100%;
	height: 240px;
	display: flex;
	justify-content: center;
	align-items: center;
}

image {
	width: 100px;
	height: 100px;
}
</style>
