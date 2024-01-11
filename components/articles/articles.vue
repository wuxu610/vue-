<template>
	<view>
		<uni-card :title="getShortTitle(item.title)" extra="查看详情" v-for="item in articles" @click="toDetail(item.id)">
			<text class="uni-body">{{getShortContent(item.content)}}</text>
		</uni-card>
	</view>
</template>

<script setup>
	const props = defineProps(["catArticles"])
	const articles = props.catArticles
	
	function getShortTitle(title){
		return title.slice(0,10) + "...."
	}
	
	function getShortContent(content){
		return content.slice(0,20) + "...."
	}
	
	function toDetail(id){
		uni.navigateTo({
			url:`/pages/article/article?id=${String(id)}`
		})
	}
	
</script>

<style>
	
</style>