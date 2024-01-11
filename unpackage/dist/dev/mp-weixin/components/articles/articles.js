"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
const _sfc_main = {
  __name: "articles",
  props: ["catArticles"],
  setup(__props) {
    const props = __props;
    const articles = props.catArticles;
    function getShortTitle(title) {
      return title.slice(0, 10) + "....";
    }
    function getShortContent(content) {
      return content.slice(0, 20) + "....";
    }
    function toDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/article/article?id=${String(id)}`
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(articles), (item, k0, i0) => {
          return {
            a: common_vendor.t(getShortContent(item.content)),
            b: common_vendor.o(($event) => toDetail(item.id)),
            c: "21e39e60-0-" + i0,
            d: common_vendor.p({
              title: getShortTitle(item.title),
              extra: "查看详情"
            })
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/components/articles/articles.vue"]]);
wx.createComponent(Component);
