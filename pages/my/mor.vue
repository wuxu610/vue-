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
