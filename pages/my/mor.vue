<template>
	<view>
		<mors :mm="mors" v-if="mors"></mors>
		
		<uni-fab @fabClick="addMor" horizontal="right" />
	</view>
</template>

<script>
import { getRequest } from '../../http'
import useUserStore from '../../store/user'
const userinfo = useUserStore().userinfo
	export default{
		data(){
			return {
				mors:null
			}
		},
		methods:{
			getMors(){
				this.mors=null
				getRequest(`api/memorabilia/${userinfo.id}`, null).then(res =>{
					headers: {
					  Authorization: 'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDc0Njg1OTIsInN1YiI6ImxpYW95aWxpbjEyMyIsImlhdCI6MTcwNDg3NjU5MjgzNH0.ytD611-boMo0fRfkcYVjtFAsLSPngLfUN8Vii5uHN2_SNIcAXbm4iRWkQwjj_ojTNvJfwTdi_pmDfBcbJ0DHqw' 
					}
					// console.log(res.data);
					this.mors = res.data.memorabilias
				})
			},
			addMor(){
				uni.navigateTo({
					url:'/pages/my/addMor?id=1'
				})
			}
		},
		mounted() {
			this.getMors()
		},
		onShow() {
			this.getMors()
		}
	}
</script>

<style>

</style>
