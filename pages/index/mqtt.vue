<template>
	<view>
		<view>
			<uni-forms ref="mqttForm" :modelValue="mqttFormData">
				<uni-section title="地址:" type="line">
					<template v-slot:right>
						<view style="margin-right: 105px; width: 100%;">
						<uni-easyinput v-model="mqttFormData.hostname" placeholder="请输入服务器地址">
							<uni-icons type="close"></uni-icons>
						</uni-easyinput>
						</view>
					</template>
				</uni-section>
				<uni-section title="端口:" type="line">
					<template v-slot:right>
						<view style="margin-right: 105px; width: 100%;">
						<uni-easyinput v-model="mqttFormData.port" placeholder="请输入端口">
							<uni-icons type="close"></uni-icons>
						</uni-easyinput>
						</view>
					</template>
				</uni-section>
				<uni-section title="路径:" type="line">
					<template v-slot:right>
						<view style="margin-right: 105px; width: 100%;">
						<uni-easyinput v-model="mqttFormData.path" placeholder="请输入路径">
							<uni-icons type="close"></uni-icons>
						</uni-easyinput>
						</view>
					</template>
				</uni-section>
				<uni-section title="用户名:" type="line">
					<template v-slot:right>
						<view style="margin-right: 105px; width: 100%;">
						<uni-easyinput v-model="mqttFormData.username" placeholder="请输入用户名">
							<uni-icons type="close"></uni-icons>
						</uni-easyinput>
						</view>
					</template>
				</uni-section>
				<uni-section title="密码:" type="line">
					<template v-slot:right>
						<view style="margin-right: 105px; width: 100%;">
						<uni-easyinput v-model="mqttFormData.password" placeholder="请输入密码">
							<uni-icons type="close"></uni-icons>
						</uni-easyinput>
						</view>
					</template>
				</uni-section>
				<uni-section title="选项:" type="line">
					<template v-slot:right>
						<view style="margin-right: 105px; width: 100%;">
						<uni-data-checkbox v-model="mqttFormData.extra" multiple :localdata="extras" @change="extraChange"></uni-data-checkbox>
						</view>
					</template>
				</uni-section>
				<uni-section title="状态:" type="line">
					<template v-slot:right>
						<view style="margin-right: 105px; width: 100%;">
							<text style="margin-right:5px;">{{'http://'+ mqttFormData.hostname + ':' + mqttFormData.port + '/' + mqttFormData.path }}</text>
							<uni-icons type="clear" v-if="!connectState" size="25" style="color: #e43d33"></uni-icons>
							<uni-icons type="checkbox-filled" v-if="connectState" size="25" style="color: #18bc37"></uni-icons>
						</view>
					</template>
				</uni-section>
				<uni-section title="">
					<view style="text-align: center;height: 30px;">
						<button type="primary" size="mini" style="margin-right: 20px;font-size:15px; 80px;height: 35px;line-height: 35px;" @click="connect">连接</button>
						<button type="primary" size="mini" style="margin-right: 20px;font-size:15px; 80px;height: 35px;line-height: 35px;" @click="disconnect">断开</button>
						<button v-if="connectState" type="primary" size="mini" style="margin-right: 20px;font-size:15px; 80px;height: 35px;line-height: 35px;" @click="openPubulishDialog">发送消息</button>
						</view>
				</uni-section>
			</uni-forms>
			<uni-section title="消息" subTitle="Message" type="circle">
				<uni-list>
					<uni-list-item v-for="(item,index) in messages" :title="String(item)" :rightText="String(index+1)"/>
				</uni-list>
			</uni-section>
		</view>
		<uni-popup ref="message" type="message">
				<uni-popup-message :type="msg.msgType" :message="msg.msgText" :duration="2000"></uni-popup-message>
			</uni-popup>
			<!-- 输入框示例 -->
			<uni-popup ref="pubulishDialog" type="dialog">
				<uni-popup-dialog  mode="input" title="发送消息" placeholder="请输入内容" @confirm="sendMsg"></uni-popup-dialog>
			</uni-popup>
	</view>
</template>

<script>
import { v4 } from 'uuid';
import mqtt from "@/node_modules/mqtt/dist/mqtt.js"
var client;
var topic = "testtopic"
var protocol = "ws://"
export default {
	data() {
		return {
			mqttFormData: {
				hostname: "jqrjq.cn",
				port: 8083,
				path: "mqtt",
				username: "admin",
				password: "public",
				extra: []
			},
			extras: [
				{ text: 'Clean Session', value: 0 },
				{ text: 'SSL', value: 1 }
			],
			connectState: false,
			protocol: protocol,
			msg:{
				msgType:"",
				msgText:""
			},
			messages:[]
		};
	},
	methods: {
		connect() {
			var that = this
			var data = this.mqttFormData;
			var ip = data.hostname + ':' + data.port + '/' + data.path;
			var options = {
				connectTimeout: 5000,
				clientId: v4(),
				username: data.username,
				password: data.password,
				reconnectPeriod:0,
				clean: this.mqttFormData.extra[0]==0?true:false
			};
			
			client = mqtt.connect(protocol + ip, options);
			
			uni.showLoading({
				title: '连接中...',
				mask: true
			});
			
			client.on('connect', function () {
				setTimeout(()=>{
					uni.hideLoading();
					that.connectState = client.connected;
					that.msgPop("success", "已连接")
					// console.log(client);
					// console.log(JSON.stringify(options, null, 2));
					client.subscribe(topic, () => {
						console.log(`订阅了主题 ${topic}`)
					})
				},1000)
			});
				
			client.on('error', function (error) {
				setTimeout(()=>{
					uni.hideLoading();
					that.msgPop("error", "连接失败")
				// console.log(client);
				},500)
			});
			
			// 连接断开后触发的回调 
			client.on("close",function () {
				setTimeout(()=>{
					uni.hideLoading();
					that.msgPop("error", "连接断开")
				},500)
			});

			
			client.on('message', function (topic, message, packet) {
				// 这里有可能拿到的数据格式是Uint8Array格式，可以直接用toString转成字符串
				// let data = JSON.parse(message.toString());
				// console.log("获取到的数据：", data)
				that.messages.unshift(message)
				if(that.messages.length>4){
					that.messages.pop()
				}
				// console.log("数据对应订阅主题：", topic)
				// console.log("获取到的数据包：", packet)
			});
		},
		disconnect() {
			uni.showLoading({
				title: '断开连接...',
				mask: true
			});
			setTimeout(()=>{
				uni.hideLoading();
				client.end()
				this.connectState = false
				// console.log("断开连接");
				// console.log(client);
			},500)
		},
		msgPop(type, text){
			this.msg = {
				msgType: type,
				msgText: text
			}
			this.$refs.message.open()
		},
		extraChange(){
			// console.log(this.mqttFormData.extra);
			let res = this.mqttFormData.extra.filter((item)=>{
				return item
			})
			this.mqttFormData.port = res.includes(1)?8084:8083
			if(this.mqttFormData.port == 8084){
				this.protocol = "wss://"
			}else{
				this.protocol = "ws://"
			}
		},
		openPubulishDialog(){
			this.$refs.pubulishDialog.open()
		},
		sendMsg(val){
			client.publish(topic, val)
		}
	}
};
</script>
<style></style>
