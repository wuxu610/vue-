"use strict";
const common_vendor = require("../../common/vendor.js");
const http_index = require("../../http/index.js");
const store_user = require("../../store/user.js");
require("../../http/request.js");
require("../../http/config.js");
const userinfo = store_user.useUserStore().userinfo;
const _sfc_main = {
  data() {
    return {
      info: {
        content: "",
        happenTime: "",
        userId: userinfo.id
      }
    };
  },
  methods: {
    submit() {
      console.log(this.info);
      http_index.postRequest("api/memorabilia/add", this.info).then((res) => {
        console.log(res);
        common_vendor.index.navigateBack({
          delta: 1
        });
      }).catch((res) => {
        console.log(res);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_datetime_picker2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_datetime_picker + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.info.content = $event),
    b: common_vendor.p({
      type: "textarea",
      placeholder: "请输入内容",
      modelValue: $data.info.content
    }),
    c: common_vendor.p({
      label: "大事件:"
    }),
    d: common_vendor.o(($event) => $data.info.happenTime = $event),
    e: common_vendor.p({
      type: "datetime",
      ["return-type"]: "timestamp",
      modelValue: $data.info.happenTime
    }),
    f: common_vendor.p({
      label: "日期时间:"
    }),
    g: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/pages/my/addMor.vue"]]);
wx.createPage(MiniProgramPage);
