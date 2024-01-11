<template>
	<view>
		<!-- 基础用法，不包含校验规则 -->
		<uni-forms>
			<uni-forms-item label="大事件:">
				<uni-easyinput type="textarea" placeholder="请输入内容" v-model="info.content" />
			</uni-forms-item>
			<uni-forms-item label="日期时间:">
				<uni-datetime-picker type="datetime" return-type="timestamp" v-model="info.happenTime" />
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">提交</button>
	</view>
</template>

<script>
import { getRequest, postRequest } from '../../http'
import useUserStore from '../../store/user'
const userinfo = useUserStore().userinfo
		export default{
			data(){
				return {
					info:{
						content:'',
						happenTime:'',
						userId:userinfo.id
					}
				}
			},
			methods:{
				submit(){
					console.log(this.info);
					postRequest('api/memorabilia/add', this.info).then(res =>{
						console.log(res);
						uni.navigateBack({
							delta: 1
						});
					}).catch(res =>{
						console.log(res);
					})
				}
			}
		}
</script>

<style></style>
