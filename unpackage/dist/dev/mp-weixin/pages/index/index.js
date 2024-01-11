"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      navigatorBars: [
        { id: 1, name: "ICPC联盟", icon: "vip" },
        { id: 2, name: "竞赛", icon: "medal" },
        { id: 3, name: "社团", icon: "staff" },
        { id: 4, name: "面试宝典", icon: "gift" }
      ]
    };
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  (_easycom_uni_notice_bar2 + _easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2)();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      text: "uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
    }),
    b: common_vendor.f($data.navigatorBars, (item, id, i0) => {
      return {
        a: "827ee6a0-3-" + i0 + "," + ("827ee6a0-2-" + i0),
        b: common_vendor.p({
          type: item.icon,
          size: 40,
          color: "#777"
        }),
        c: common_vendor.t(item.name),
        d: id,
        e: "827ee6a0-2-" + i0 + ",827ee6a0-1",
        f: common_vendor.p({
          index: id
        })
      };
    }),
    c: common_vendor.o($options.change),
    d: common_vendor.p({
      column: 4,
      highlight: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
