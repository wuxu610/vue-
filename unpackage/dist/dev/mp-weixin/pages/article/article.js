"use strict";
const common_vendor = require("../../common/vendor.js");
const http_index = require("../../http/index.js");
require("../../http/request.js");
require("../../store/user.js");
require("../../http/config.js");
const _sfc_main = {
  data() {
    return {
      id: "",
      article: null
    };
  },
  onLoad(options) {
    this.id = options.id;
    this.getDetail();
  },
  methods: {
    getDetail() {
      http_index.getRequest(`api/article/one?id=${this.id}`, null).then((res) => {
        console.log(res.data);
        this.article = res.data.article;
        common_vendor.index.setNavigationBarTitle({
          title: res.data.article.title
        });
      });
    }
  }
};
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.article
  }, $data.article ? {
    b: common_vendor.t($data.article.content),
    c: common_vendor.p({
      ["is-shadow"]: false,
      extra: new Date($data.article.createTime).toLocaleDateString()
    }),
    d: common_vendor.p({
      title: $data.article.title,
      type: "line"
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/pages/article/article.vue"]]);
wx.createPage(MiniProgramPage);
