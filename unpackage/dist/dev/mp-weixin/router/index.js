"use strict";
const common_vendor = require("../common/vendor.js");
const whiteList = [
  "/",
  "/pages/index/index",
  "/pages/my/my",
  "/pages/my/mor",
  "/pages/my/addMor",
  "/pages/index/login",
  "/pages/index/register",
  "/pages/index/wiki",
  "/pages/index/crop",
  "/pages/article/article",
  "/pages/index/mqtt"
];
async function routingIntercept() {
  const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  list.forEach((item) => {
    common_vendor.index.addInterceptor(item, {
      invoke(e) {
        const url = e.url.split("?")[0];
        if (whiteList.includes(url)) {
          console.log("url", url, e);
          return true;
        } else {
          common_vendor.index.showToast({
            title: "用户没有权限...",
            duration: 2e3,
            icon: "none"
          });
          return false;
        }
      },
      fail() {
        return false;
      }
    });
  });
}
exports.routingIntercept = routingIntercept;
