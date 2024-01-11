"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const router_index = require("./router/index.js");
const utils_pinia = require("./utils/pinia.js");
const http_request = require("./http/request.js");
require("./store/user.js");
require("./http/config.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/index/login.js";
  "./pages/index/crop.js";
  "./pages/index/register.js";
  "./pages/index/mqtt.js";
  "./pages/index/wiki.js";
  "./pages/article/article.js";
  "./pages/my/mor.js";
  "./pages/my/addMor.js";
}
const _sfc_main = {
  onLaunch: function() {
    router_index.routingIntercept();
  },
  onShow: function() {
  },
  onHide: function() {
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/liaoyilin/Desktop/57zengmingtian-master/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(utils_pinia.pinia);
  app.config.globalProperties.$request = http_request.request;
  return {
    app,
    pinia: utils_pinia.pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
