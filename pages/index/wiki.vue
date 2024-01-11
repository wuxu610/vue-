<template>
	<uni-search-bar :style="{backgroundColor:bgcolor}" @confirm="search" cancel-button="none" :focus="true"
		v-model="searchValue">
	</uni-search-bar>
	<view class="catogory">
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" :show-scrollbar="true">
			
			<view class="scroll-view-item_H " :class="{ selected: item.selected }" v-for="(item,index) in category" :key="index" @click="changeCategory(index,item.id)">{{item.catName}}</view>
			
		</scroll-view>
		<uni-icons :type="type" class="more"></uni-icons>
	</view>

	<articles :catArticles="catArticles" v-if="catArticles"></articles>
</template>

<script>
import { getRequest } from '../../http'
	export default {
		data() {
			return {
				category:'',
				categoryId: 0,
				catArticles: null,
				searchValue: '',
				bgcolor: '#5fa5fa',
				frontColor: '#ffffff',
				type: 'bottom',
				show: true,
			}
		},
		onLoad() {
			uni.setNavigationBarColor({
				backgroundColor: this.bgcolor,
				frontColor: this.fontColor
			})
			this.getCategory()
		},
		methods: {
			search(e) {
				console.log(e)
			},
			scroll(e) {
				// console.log(e)
			},
			getCategory(){
				getRequest('api/articleCat/all',null).then(res=>{
					this.category = res.data.articleCats
					this.categoryId = res.data.articleCats[0].id
				})
			},
			changeCategory(index,id){
				this.category.forEach((item, i) => {
				  item.selected = i === index;
				});
				this.categoryId = id
			}
		},
		watch:{
			categoryId(){
				this.catArticles = null
				getRequest(`api/article/${this.categoryId}`,null).then(res=>{
					this.catArticles = res.data.articles
				})
			}
		}
	}
</script>

<style>
	.catogory {
		position: relative;

	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		height: 60rpx;
		border-bottom: 1upx solid #ccc;
	}
	/deep/::-webkit-scrollbar{
		display: none;
		width: 0;
		height: 0;
	}


	.scroll-view-item_H {
		display: inline-block;
		width: 100upx;
		line-height: 60rpx;
		text-align: center;
		font-size: 16rpx;
	

	}

	.more {
		position: absolute;
		top: 10upx;
		right: 0;
		background-color: #f5f5f5;
	}
	.scroll-view-item_H.selected {
	  background-color: #5fa5fa;
	}
</style>