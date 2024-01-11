"use strict";
const common_vendor = require("../../common/vendor.js");
var client;
var topic = "testtopic";
var protocol = "ws://";
const _sfc_main = {
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
        { text: "Clean Session", value: 0 },
        { text: "SSL", value: 1 }
      ],
      connectState: false,
      protocol,
      msg: {
        msgType: "",
        msgText: ""
      },
      messages: []
    };
  },
  methods: {
    connect() {
      var that = this;
      var data = this.mqttFormData;
      var ip = data.hostname + ":" + data.port + "/" + data.path;
      var options = {
        connectTimeout: 5e3,
        clientId: common_vendor.v4(),
        username: data.username,
        password: data.password,
        reconnectPeriod: 0,
        clean: this.mqttFormData.extra[0] == 0 ? true : false
      };
      client = common_vendor.mqtt.connect(protocol + ip, options);
      common_vendor.index.showLoading({
        title: "连接中...",
        mask: true
      });
      client.on("connect", function() {
        setTimeout(() => {
          common_vendor.index.hideLoading();
          that.connectState = client.connected;
          that.msgPop("success", "已连接");
          client.subscribe(topic, () => {
            console.log(`订阅了主题 ${topic}`);
          });
        }, 1e3);
      });
      client.on("error", function(error) {
        setTimeout(() => {
          common_vendor.index.hideLoading();
          that.msgPop("error", "连接失败");
        }, 500);
      });
      client.on("close", function() {
        setTimeout(() => {
          common_vendor.index.hideLoading();
          that.msgPop("error", "连接断开");
        }, 500);
      });
      client.on("message", function(topic2, message, packet) {
        that.messages.unshift(message);
        if (that.messages.length > 4) {
          that.messages.pop();
        }
      });
    },
    disconnect() {
      common_vendor.index.showLoading({
        title: "断开连接...",
        mask: true
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        client.end();
        this.connectState = false;
      }, 500);
    },
    msgPop(type, text) {
      this.msg = {
        msgType: type,
        msgText: text
      };
      this.$refs.message.open();
    },
    extraChange() {
      let res = this.mqttFormData.extra.filter((item) => {
        return item;
      });
      this.mqttFormData.port = res.includes(1) ? 8084 : 8083;
      if (this.mqttFormData.port == 8084) {
        this.protocol = "wss://";
      } else {
        this.protocol = "ws://";
      }
    },
    openPubulishDialog() {
      this.$refs.pubulishDialog.open();
    },
    sendMsg(val) {
      client.publish(topic, val);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  (_easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_uni_section2 + _easycom_uni_data_checkbox2 + _easycom_uni_forms2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_popup_message2 + _easycom_uni_popup2 + _easycom_uni_popup_dialog2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_easyinput + _easycom_uni_section + _easycom_uni_data_checkbox + _easycom_uni_forms + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_popup_message + _easycom_uni_popup + _easycom_uni_popup_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      type: "close"
    }),
    b: common_vendor.o(($event) => $data.mqttFormData.hostname = $event),
    c: common_vendor.p({
      placeholder: "请输入服务器地址",
      modelValue: $data.mqttFormData.hostname
    }),
    d: common_vendor.p({
      title: "地址:",
      type: "line"
    }),
    e: common_vendor.p({
      type: "close"
    }),
    f: common_vendor.o(($event) => $data.mqttFormData.port = $event),
    g: common_vendor.p({
      placeholder: "请输入端口",
      modelValue: $data.mqttFormData.port
    }),
    h: common_vendor.p({
      title: "端口:",
      type: "line"
    }),
    i: common_vendor.p({
      type: "close"
    }),
    j: common_vendor.o(($event) => $data.mqttFormData.path = $event),
    k: common_vendor.p({
      placeholder: "请输入路径",
      modelValue: $data.mqttFormData.path
    }),
    l: common_vendor.p({
      title: "路径:",
      type: "line"
    }),
    m: common_vendor.p({
      type: "close"
    }),
    n: common_vendor.o(($event) => $data.mqttFormData.username = $event),
    o: common_vendor.p({
      placeholder: "请输入用户名",
      modelValue: $data.mqttFormData.username
    }),
    p: common_vendor.p({
      title: "用户名:",
      type: "line"
    }),
    q: common_vendor.p({
      type: "close"
    }),
    r: common_vendor.o(($event) => $data.mqttFormData.password = $event),
    s: common_vendor.p({
      placeholder: "请输入密码",
      modelValue: $data.mqttFormData.password
    }),
    t: common_vendor.p({
      title: "密码:",
      type: "line"
    }),
    v: common_vendor.o($options.extraChange),
    w: common_vendor.o(($event) => $data.mqttFormData.extra = $event),
    x: common_vendor.p({
      multiple: true,
      localdata: $data.extras,
      modelValue: $data.mqttFormData.extra
    }),
    y: common_vendor.p({
      title: "选项:",
      type: "line"
    }),
    z: common_vendor.t("http://" + $data.mqttFormData.hostname + ":" + $data.mqttFormData.port + "/" + $data.mqttFormData.path),
    A: !$data.connectState
  }, !$data.connectState ? {
    B: common_vendor.p({
      type: "clear",
      size: "25"
    })
  } : {}, {
    C: $data.connectState
  }, $data.connectState ? {
    D: common_vendor.p({
      type: "checkbox-filled",
      size: "25"
    })
  } : {}, {
    E: common_vendor.p({
      title: "状态:",
      type: "line"
    }),
    F: common_vendor.o((...args) => $options.connect && $options.connect(...args)),
    G: common_vendor.o((...args) => $options.disconnect && $options.disconnect(...args)),
    H: $data.connectState
  }, $data.connectState ? {
    I: common_vendor.o((...args) => $options.openPubulishDialog && $options.openPubulishDialog(...args))
  } : {}, {
    J: common_vendor.p({
      title: ""
    }),
    K: common_vendor.sr("mqttForm", "605ef8b6-0"),
    L: common_vendor.p({
      modelValue: $data.mqttFormData
    }),
    M: common_vendor.f($data.messages, (item, index, i0) => {
      return {
        a: "605ef8b6-24-" + i0 + ",605ef8b6-23",
        b: common_vendor.p({
          title: String(item),
          rightText: String(index + 1)
        })
      };
    }),
    N: common_vendor.p({
      title: "消息",
      subTitle: "Message",
      type: "circle"
    }),
    O: common_vendor.p({
      type: $data.msg.msgType,
      message: $data.msg.msgText,
      duration: 2e3
    }),
    P: common_vendor.sr("message", "605ef8b6-25"),
    Q: common_vendor.p({
      type: "message"
    }),
    R: common_vendor.o($options.sendMsg),
    S: common_vendor.p({
      mode: "input",
      title: "发送消息",
      placeholder: "请输入内容"
    }),
    T: common_vendor.sr("pubulishDialog", "605ef8b6-27"),
    U: common_vendor.p({
      type: "dialog"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/pages/index/mqtt.vue"]]);
wx.createPage(MiniProgramPage);
