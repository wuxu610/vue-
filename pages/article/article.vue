<template>
	<view>
		<uni-section :title="article.title" type="line" v-if="article" style="height: 620px;">
			<uni-card :is-shadow="false" :extra="new Date(article.createTime).toLocaleDateString()">
				<text class="uni-body" >{{article.content}}</text>
			</uni-card>
		</uni-section>
	</view>
</template>

<script>
import { getRequest } from '../../http';
export default {
	data() {
		return {
			id: '',
			article:null
		};
	},
	onLoad(options) {
		this.id = options.id;
		this.getDetail()
	},
	methods: {
		getDetail(){
			getRequest(`api/article/one?id=${this.id}`,null).then(res=>{
				console.log(res.data);
				this.article = res.data.article
				uni.setNavigationBarTitle({
					title: res.data.article.title
				})
			})
		}
	}
};
</script>

<style></style>
