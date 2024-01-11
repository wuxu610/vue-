"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_user = require("../../store/user.js");
const http_index = require("../../http/index.js");
require("../../http/request.js");
require("../../http/config.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_popup_message2 = common_vendor.resolveComponent("uni-popup-message");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_popup_message2 + _easycom_uni_popup2 + _easycom_uni_popup_dialog2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_popup_message = () => "../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_popup_message + _easycom_uni_popup + _easycom_uni_popup_dialog)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const userStore = store_user.useUserStore();
    const myForm = common_vendor.ref(null);
    const loginModel = common_vendor.reactive({
      email: "",
      password: ""
    });
    const openId = common_vendor.ref(null);
    const msgType = common_vendor.ref(null);
    const messageText = common_vendor.ref(null);
    const alertDialog = common_vendor.ref(null);
    const message = common_vendor.ref(null);
    const rules = {
      email: {
        rules: [
          {
            required: true,
            errorMessage: "必填项"
          },
          {
            format: "email",
            errorMessage: "邮件格式错误"
          }
        ]
      }
    };
    const login = () => {
      myForm.value.validate().then((res) => {
        http_index.postRequest("api/mobile/elogin", loginModel).then((res2) => {
          console.log(res2);
          if (res2.success) {
            const userinfo = res2.data.userinfo;
            userStore.setToken(userinfo.token);
            userStore.fillUser(userinfo);
            common_vendor.index.switchTab({
              url: "/pages/index/index"
            });
          }
        }).catch((err) => {
          console.log(err);
        });
      }).catch((err) => {
        console.log(err);
      });
    };
    function toRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/index/register",
        success(res) {
          console.log(res);
        },
        fail(res) {
          console.log(res);
        }
      });
    }
    function toMy() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
    function messageToggle(type, msg) {
      msgType.value = type;
      messageText.value = msg;
      message.value.open();
    }
    function dialogToggle(type) {
      msgType.value = type;
      alertDialog.value.open();
    }
    async function wxlogin() {
      try {
        const auth = await common_vendor.index.getSetting();
        console.log(auth);
        if (auth.authSetting["scope.userInfo"]) {
          messageToggle("success", "用户已授权");
        } else {
          messageToggle("error", "用户未授权");
        }
        const userProfile = await common_vendor.index.getUserProfile({
          desc: "用户登录授权",
          lang: "zh_CN"
        });
        console.log(userProfile);
        if (userProfile) {
          const loginInfo = await common_vendor.index.login({ provider: "weixin" });
          if (loginInfo) {
            const { code } = loginInfo;
            const { data } = await common_vendor.index.request({
              url: `https://api.weixin.qq.com/sns/jscode2session?appid=wxbd29d8cc5741b068&secret=1010c1a8363aa1b5a90ac09f7d0905b3&js_code=${code}&grant_type=authorization_code`
            });
            console.log("==========用户OPEN ID==========");
            console.log(data);
            openId.value = data.openid;
            dialogToggle("success");
          }
        } else {
          messageToggle("error", "用户取消授权");
        }
      } catch (e) {
        console.log("============EORROR==========");
        console.log(e);
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(($event) => loginModel.email = $event),
        c: common_vendor.p({
          placeholder: "请输入电子邮箱",
          ["suffix-icon"]: "email",
          modelValue: loginModel.email
        }),
        d: common_vendor.p({
          name: "email"
        }),
        e: common_vendor.o(($event) => loginModel.password = $event),
        f: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          modelValue: loginModel.password
        }),
        g: common_vendor.p({
          name: "password"
        }),
        h: common_vendor.o(login),
        i: common_vendor.o(wxlogin),
        j: common_vendor.o(toRegister),
        k: common_vendor.sr(myForm, "fa14255b-0", {
          "k": "myForm"
        }),
        l: common_vendor.p({
          modelValue: loginModel,
          rules
        }),
        m: common_vendor.p({
          type: msgType.value,
          message: messageText.value,
          duration: 2e3
        }),
        n: common_vendor.sr(message, "fa14255b-5", {
          "k": "message"
        }),
        o: common_vendor.p({
          type: "message"
        }),
        p: common_vendor.o(toMy),
        q: common_vendor.p({
          type: msgType.value,
          cancelText: "关闭",
          confirmText: "确认",
          title: "获取得的OPEN ID",
          content: openId.value
        }),
        r: common_vendor.sr(alertDialog, "fa14255b-7", {
          "k": "alertDialog"
        }),
        s: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fa14255b"], ["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/pages/index/login.vue"]]);
wx.createPage(MiniProgramPage);
