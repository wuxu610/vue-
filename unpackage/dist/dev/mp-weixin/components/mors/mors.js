"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_card2 + _easycom_uni_section2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_section)();
}
const _sfc_main = {
  __name: "mors",
  props: ["mm"],
  setup(__props) {
    const props = __props;
    const mors = props.mm;
    console.log(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(mors)
      }, common_vendor.unref(mors) ? {
        b: common_vendor.f(common_vendor.unref(mors), (item, k0, i0) => {
          return {
            a: common_vendor.t(item.content),
            b: "76bdafc0-1-" + i0 + ",76bdafc0-0",
            c: common_vendor.p({
              ["is-shadow"]: false,
              extra: new Date(item.happenTime).toLocaleDateString()
            })
          };
        })
      } : {}, {
        c: common_vendor.p({
          title: "我的大事件",
          type: "line"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/components/mors/mors.vue"]]);
wx.createComponent(Component);
