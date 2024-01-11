"use strict";
const common_vendor = require("../../common/vendor.js");
const http_index = require("../../http/index.js");
require("../../http/request.js");
require("../../store/user.js");
require("../../http/config.js");
const _sfc_main = {
  data() {
    return {
      category: "",
      categoryId: 0,
      catArticles: null,
      searchValue: "",
      bgcolor: "#5fa5fa",
      frontColor: "#ffffff",
      type: "bottom",
      show: true
    };
  },
  onLoad() {
    common_vendor.index.setNavigationBarColor({
      backgroundColor: this.bgcolor,
      frontColor: this.fontColor
    });
    this.getCategory();
  },
  methods: {
    search(e) {
      console.log(e);
    },
    scroll(e) {
    },
    getCategory() {
      http_index.getRequest("api/articleCat/all", null).then((res) => {
        this.category = res.data.articleCats;
        this.categoryId = res.data.articleCats[0].id;
      });
    },
    changeCategory(index, id) {
      this.category.forEach((item, i) => {
        item.selected = i === index;
      });
      this.categoryId = id;
    }
  },
  watch: {
    categoryId() {
      this.catArticles = null;
      http_index.getRequest(`api/article/${this.categoryId}`, null).then((res) => {
        this.catArticles = res.data.articles;
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_articles2 = common_vendor.resolveComponent("articles");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_articles2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_articles = () => "../../components/articles/articles.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_articles)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.bgcolor,
    b: common_vendor.o($options.search),
    c: common_vendor.o(($event) => $data.searchValue = $event),
    d: common_vendor.p({
      ["cancel-button"]: "none",
      focus: true,
      modelValue: $data.searchValue
    }),
    e: common_vendor.f($data.category, (item, index, i0) => {
      return {
        a: common_vendor.t(item.catName),
        b: item.selected ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.changeCategory(index, item.id), index)
      };
    }),
    f: common_vendor.o((...args) => $options.scroll && $options.scroll(...args)),
    g: common_vendor.p({
      type: $data.type
    }),
    h: $data.catArticles
  }, $data.catArticles ? {
    i: common_vendor.p({
      catArticles: $data.catArticles
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/pages/index/wiki.vue"]]);
wx.createPage(MiniProgramPage);
