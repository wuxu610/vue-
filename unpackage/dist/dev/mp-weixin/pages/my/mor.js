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
      mors: null
    };
  },
  methods: {
    getMors() {
      this.mors = null;
      http_index.getRequest(`api/memorabilia/${userinfo.id}`, null).then((res) => {
        this.mors = res.data.memorabilias;
      });
    },
    addMor() {
      common_vendor.index.navigateTo({
        url: "/pages/my/addMor?id=1"
      });
    }
  },
  mounted() {
    this.getMors();
  },
  onShow() {
    this.getMors();
  }
};
if (!Array) {
  const _easycom_mors2 = common_vendor.resolveComponent("mors");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_mors2 + _easycom_uni_fab2)();
}
const _easycom_mors = () => "../../components/mors/mors.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_mors + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.mors
  }, $data.mors ? {
    b: common_vendor.p({
      mm: $data.mors
    })
  } : {}, {
    c: common_vendor.o($options.addMor),
    d: common_vendor.p({
      horizontal: "right"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/pages/my/mor.vue"]]);
wx.createPage(MiniProgramPage);
