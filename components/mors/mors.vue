<template>
	<view>
		<uni-section title="我的大事件" type="line" style="height:auto;">
			<uni-card :is-shadow="false" v-for="item in mors" :extra="new Date(item.happenTime).toLocaleDateString()" v-if="mors">
				<text class="uni-body">{{ item.content }}</text>
			</uni-card>
		</uni-section>
	</view>
</template>

<script setup>
const props = defineProps(['mm']);
const mors = props.mm
console.log(props);
</script>

<style></style>