(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*****************************!*\
  !*** F:/APP/My-App/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 82));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 99));\nvar _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 102));\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./cloud_sdk/index.js */ 128));\nvar _index2 = _interopRequireDefault(__webpack_require__(/*! ./tools/index.js */ 129));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.prototype.$reqs = _index.default;\n_vue.default.prototype.$apis = _index2.default;\n\n\n\n_vue.default.use(_uviewUi.default);\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJwcm90b3R5cGUiLCIkcmVxcyIsInJlcXMiLCIkYXBpcyIsImFwaXMiLCJ1c2UiLCJ1VmlldyIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0EsdUY7O0FBRUFBLGFBQUlDLFNBQUosQ0FBY0MsS0FBZCxHQUFzQkMsY0FBdEI7QUFDQUgsYUFBSUMsU0FBSixDQUFjRyxLQUFkLEdBQXNCQyxlQUF0Qjs7OztBQUlBTCxhQUFJTSxHQUFKLENBQVFDLGdCQUFSO0FBQ0FQLGFBQUlRLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlaLFlBQUo7QUFDTFUsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IHVWaWV3IGZyb20gXCJ1dmlldy11aVwiO1xyXG5cclxuaW1wb3J0IHJlcXMgZnJvbSAnLi9jbG91ZF9zZGsvaW5kZXguanMnXHJcbmltcG9ydCBhcGlzIGZyb20gJy4vdG9vbHMvaW5kZXguanMnXHJcblxyXG5WdWUucHJvdG90eXBlLiRyZXFzID0gcmVxc1xyXG5WdWUucHJvdG90eXBlLiRhcGlzID0gYXBpc1xyXG5cclxuXHJcblxyXG5WdWUudXNlKHVWaWV3KTtcclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************!*\
  !*** F:/APP/My-App/pages.json ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/home-page/home-page', function () {return Vue.extend(__webpack_require__(/*! pages/home-page/home-page.vue?mpType=page */ 2).default);});
__definePage('pages/user-center/my-page/my-page', function () {return Vue.extend(__webpack_require__(/*! pages/user-center/my-page/my-page.vue?mpType=page */ 8).default);});
__definePage('pages/user-center/login/index', function () {return Vue.extend(__webpack_require__(/*! pages/user-center/login/index.vue?mpType=page */ 34).default);});
__definePage('pages/user-center/login/code', function () {return Vue.extend(__webpack_require__(/*! pages/user-center/login/code.vue?mpType=page */ 59).default);});
__definePage('pages/user-center/register/register', function () {return Vue.extend(__webpack_require__(/*! pages/user-center/register/register.vue?mpType=page */ 69).default);});
__definePage('pages/user-center/setting/setting', function () {return Vue.extend(__webpack_require__(/*! pages/user-center/setting/setting.vue?mpType=page */ 74).default);});
__definePage('pages/user-center/u-avatar-cropper/u-avatar-cropper', function () {return Vue.extend(__webpack_require__(/*! pages/user-center/u-avatar-cropper/u-avatar-cropper.vue?mpType=page */ 88).default);});
__definePage('pages/user-center/updatename/updatename', function () {return Vue.extend(__webpack_require__(/*! pages/user-center/updatename/updatename.vue?mpType=page */ 94).default);});

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** F:/APP/My-App/pages/home-page/home-page.vue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.vue?vue&type=template&id=3d52ffd2&mpType=page */ 3);\n/* harmony import */ var _home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/home-page/home-page.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaG9tZS1wYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDUyZmZkMiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG9tZS1wYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob21lLXBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*********************************************************************************************!*\
  !*** F:/APP/My-App/pages/home-page/home-page.vue?vue&type=template&id=3d52ffd2&mpType=page ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home-page.vue?vue&type=template&id=3d52ffd2&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_template_id_3d52ffd2_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/home-page/home-page.vue?vue&type=template&id=3d52ffd2&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "text-area"), attrs: { _i: 2 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "title"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.title)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!***************************************************************************************!*\
  !*** F:/APP/My-App/pages/home-page/home-page.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home-page.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVzQixDQUFnQiwwc0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWUtcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hvbWUtcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/home-page/home-page.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVVBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0Esb0JBREE7O0FBR0EsR0FMQTtBQU1BLFFBTkEsb0JBTUE7O0FBRUEsR0FSQTtBQVNBLGFBVEEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PGltYWdlIGNsYXNzPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIj48L2ltYWdlPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0ZXh0LWFyZWFcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6ICdIZWxsbydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWFyZWEge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzZycHg7XHJcblx0XHRjb2xvcjogIzhmOGY5NDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!***********************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/my-page/my-page.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-page.vue?vue&type=template&id=34755280&scoped=true&mpType=page */ 9);\n/* harmony import */ var _my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-page.vue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"34755280\",\n  null,\n  false,\n  _my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user-center/my-page/my-page.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbXktcGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ3NTUyODAmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL215LXBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL215LXBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzQ3NTUyODBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdXNlci1jZW50ZXIvbXktcGFnZS9teS1wYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*****************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/my-page/my-page.vue?vue&type=template&id=34755280&scoped=true&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-page.vue?vue&type=template&id=34755280&scoped=true&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_template_id_34755280_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/my-page/my-page.vue?vue&type=template&id=34755280&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uNavbar: __webpack_require__(/*! uview-ui/components/u-navbar/u-navbar.vue */ 11).default,
    uIcon: __webpack_require__(/*! uview-ui/components/u-icon/u-icon.vue */ 14).default,
    uCellGroup: __webpack_require__(/*! uview-ui/components/u-cell-group/u-cell-group.vue */ 21)
      .default,
    uCellItem: __webpack_require__(/*! uview-ui/components/u-cell-item/u-cell-item.vue */ 26)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "u-navbar",
        {
          attrs: {
            "is-back": false,
            title: "　",
            "border-bottom": false,
            _i: 1
          }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "u-flex u-row-right"),
              attrs: { _i: 2 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "camera u-flex u-row-center"),
                  attrs: { _i: 3 }
                },
                [
                  _c("u-icon", {
                    attrs: {
                      name: "camera-fill",
                      color: "#000000",
                      size: "48",
                      _i: 4
                    }
                  })
                ],
                1
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(
            5,
            "sc",
            "u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30"
          ),
          attrs: { _i: 5 },
          on: { click: _vm.goSetting }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(6, "sc", "u-m-r-10 images-box"),
              attrs: { _i: 6 }
            },
            [
              _c("image", {
                staticClass: _vm._$s(7, "sc", "images"),
                attrs: { src: _vm._$s(7, "a-src", _vm.pic), _i: 7 }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(8, "sc", "u-flex-1"), attrs: { _i: 8 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "u-font-18 u-p-b-20"),
                  attrs: { _i: 9 }
                },
                [
                  _vm._v(
                    _vm._$s(
                      9,
                      "t0-0",
                      _vm._s(_vm._f("show_nick")(_vm.userInfo.nickname))
                    )
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "u-font-14 u-tips-color"),
                  attrs: { _i: 10 }
                },
                [_vm._v(_vm._$s(10, "t0-0", _vm._s(_vm.userInfo.username)))]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(11, "sc", "u-m-l-10 u-p-10"),
              attrs: { _i: 11 }
            },
            [
              _c("u-icon", {
                attrs: { name: "scan", color: "#969799", size: "28", _i: 12 }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-m-l-10 u-p-10"),
              attrs: { _i: 13 }
            },
            [
              _c("u-icon", {
                attrs: {
                  name: "arrow-right",
                  color: "#969799",
                  size: "28",
                  _i: 14
                }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(15, "sc", "u-m-t-20"), attrs: { _i: 15 } },
        [
          _c(
            "u-cell-group",
            { attrs: { _i: 16 } },
            [
              _c("u-cell-item", {
                attrs: { icon: "rmb-circle", title: "支付", _i: 17 }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "view",
        { staticClass: _vm._$s(18, "sc", "u-m-t-20"), attrs: { _i: 18 } },
        [
          _c(
            "u-cell-group",
            { attrs: { _i: 19 } },
            [
              _c("u-cell-item", {
                attrs: { icon: "star", title: "收藏", _i: 20 }
              }),
              _c("u-cell-item", {
                attrs: { icon: "photo", title: "相册", _i: 21 }
              }),
              _c("u-cell-item", {
                attrs: { icon: "coupon", title: "卡券", _i: 22 }
              }),
              _c("u-cell-item", {
                attrs: { icon: "heart", title: "关注", _i: 23 }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "view",
        { staticClass: _vm._$s(24, "sc", "u-m-t-20"), attrs: { _i: 24 } },
        [
          _c(
            "u-cell-group",
            { attrs: { _i: 25 } },
            [
              _c("u-cell-item", {
                attrs: { icon: "setting", title: "设置", _i: 26 },
                on: { click: _vm.goSetting }
              }),
              _c("u-cell-item", {
                attrs: { icon: "account", title: "登录", _i: 27 },
                on: { click: _vm.goLogin }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!****************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-navbar/u-navbar.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-navbar.vue?vue&type=template&id=75dad532&scoped=true& */ 12);
/* harmony import */ var _u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-navbar.vue?vue&type=script&lang=js& */ 19);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "75dad532",
  null,
  false,
  _u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-navbar/u-navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!***********************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-navbar/u-navbar.vue?vue&type=template&id=75dad532&scoped=true& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-navbar.vue?vue&type=template&id=75dad532&scoped=true& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_template_id_75dad532_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-navbar/u-navbar.vue?vue&type=template&id=75dad532&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: __webpack_require__(/*! uview-ui/components/u-icon/u-icon.vue */ 14).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: _vm._$s(1, "sc", "u-navbar"),
        class: _vm._$s(1, "c", {
          "u-navbar-fixed": _vm.isFixed,
          "u-border-bottom": _vm.borderBottom
        }),
        style: _vm._$s(1, "s", [_vm.navbarStyle]),
        attrs: { _i: 1 }
      },
      [
        _c("view", {
          staticClass: _vm._$s(2, "sc", "u-status-bar"),
          style: _vm._$s(2, "s", { height: _vm.statusBarHeight + "px" }),
          attrs: { _i: 2 }
        }),
        _c(
          "view",
          {
            staticClass: _vm._$s(3, "sc", "u-navbar-inner"),
            style: _vm._$s(3, "s", [_vm.navbarInnerStyle]),
            attrs: { _i: 3 }
          },
          [
            _vm._$s(4, "i", _vm.isBack)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(4, "sc", "u-back-wrap"),
                    attrs: { _i: 4 },
                    on: { click: _vm.goBack }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(5, "sc", "u-icon-wrap"),
                        attrs: { _i: 5 }
                      },
                      [
                        _c("u-icon", {
                          attrs: {
                            name: _vm.backIconName,
                            color: _vm.backIconColor,
                            size: _vm.backIconSize,
                            _i: 6
                          }
                        })
                      ],
                      1
                    ),
                    _vm._$s(7, "i", _vm.backText)
                      ? _c(
                          "view",
                          {
                            staticClass: _vm._$s(
                              7,
                              "sc",
                              "u-icon-wrap u-back-text u-line-1"
                            ),
                            style: _vm._$s(7, "s", [_vm.backTextStyle]),
                            attrs: { _i: 7 }
                          },
                          [_vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.backText)))]
                        )
                      : _vm._e()
                  ]
                )
              : _vm._e(),
            _vm._$s(8, "i", _vm.title)
              ? _c(
                  "view",
                  {
                    staticClass: _vm._$s(8, "sc", "u-navbar-content-title"),
                    style: _vm._$s(8, "s", [_vm.titleStyle]),
                    attrs: { _i: 8 }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: _vm._$s(9, "sc", "u-title u-line-1"),
                        style: _vm._$s(9, "s", {
                          color: _vm.titleColor,
                          fontSize: _vm.titleSize + "rpx",
                          fontWeight: _vm.titleBold ? "bold" : "normal"
                        }),
                        attrs: { _i: 9 }
                      },
                      [_vm._v(_vm._$s(9, "t0-0", _vm._s(_vm.title)))]
                    )
                  ]
                )
              : _vm._e(),
            _c(
              "view",
              {
                staticClass: _vm._$s(10, "sc", "u-slot-content"),
                attrs: { _i: 10 }
              },
              [_vm._t("default", null, { _i: 11 })],
              2
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(12, "sc", "u-slot-right"),
                attrs: { _i: 12 }
              },
              [_vm._t("right", null, { _i: 13 })],
              2
            )
          ]
        )
      ]
    ),
    _vm._$s(14, "i", _vm.isFixed && !_vm.immersive)
      ? _c("view", {
          staticClass: _vm._$s(14, "sc", "u-navbar-placeholder"),
          style: _vm._$s(14, "s", {
            width: "100%",
            height: Number(_vm.navbarHeight) + _vm.statusBarHeight + "px"
          }),
          attrs: { _i: 14 }
        })
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-icon/u-icon.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-icon.vue?vue&type=template&id=172979f2&scoped=true& */ 15);
/* harmony import */ var _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-icon.vue?vue&type=script&lang=js& */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "172979f2",
  null,
  false,
  _u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-icon/u-icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!*******************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=template&id=172979f2&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-icon.vue?vue&type=template&id=172979f2&scoped=true& */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_template_id_172979f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=template&id=172979f2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "u-icon"),
      class: _vm._$s(0, "c", ["u-icon--" + _vm.labelPos]),
      style: _vm._$s(0, "s", [_vm.customStyle]),
      attrs: { _i: 0 },
      on: { click: _vm.click }
    },
    [
      _vm._$s(1, "i", _vm.isImg)
        ? _c("image", {
            staticClass: _vm._$s(1, "sc", "u-icon__img"),
            style: _vm._$s(1, "s", [_vm.imgStyle]),
            attrs: {
              src: _vm._$s(1, "a-src", _vm.name),
              mode: _vm._$s(1, "a-mode", _vm.imgMode),
              _i: 1
            }
          })
        : _c(
            "text",
            {
              staticClass: _vm._$s(2, "sc", "u-icon__icon"),
              class: _vm._$s(2, "c", _vm.customClass),
              style: _vm._$s(2, "s", [_vm.iconStyle]),
              attrs: {
                "hover-class": _vm._$s(2, "a-hover-class", _vm.hoverClass),
                _i: 2
              },
              on: { touchstart: _vm.touchstart }
            },
            [
              _vm._$s(3, "i", _vm.showDecimalIcon)
                ? _c("text", {
                    staticClass: _vm._$s(3, "sc", "u-icon__decimal"),
                    class: _vm._$s(3, "c", _vm.decimalIconClass),
                    style: _vm._$s(3, "s", [_vm.decimalIconStyle]),
                    attrs: {
                      "hover-class": _vm._$s(
                        3,
                        "a-hover-class",
                        _vm.hoverClass
                      ),
                      _i: 3
                    }
                  })
                : _vm._e()
            ]
          ),
      _vm._$s(4, "i", _vm.label !== "")
        ? _c(
            "text",
            {
              staticClass: _vm._$s(4, "sc", "u-icon__label"),
              style: _vm._$s(4, "s", {
                color: _vm.labelColor,
                fontSize: _vm.$u.addUnit(_vm.labelSize),
                marginLeft:
                  _vm.labelPos == "right" ? _vm.$u.addUnit(_vm.marginLeft) : 0,
                marginTop:
                  _vm.labelPos == "bottom" ? _vm.$u.addUnit(_vm.marginTop) : 0,
                marginRight:
                  _vm.labelPos == "left" ? _vm.$u.addUnit(_vm.marginRight) : 0,
                marginBottom:
                  _vm.labelPos == "top" ? _vm.$u.addUnit(_vm.marginBottom) : 0
              }),
              attrs: { _i: 4 }
            },
            [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.label)))]
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!*************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-icon.vue?vue&type=script&lang=js& */ 18);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-icon/u-icon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * icon 图标
 * @description 基于字体的图标集，包含了大多数常见场景的图标。
 * @tutorial https://www.uviewui.com/components/icon.html
 * @property {String} name 图标名称，见示例图标集
 * @property {String} color 图标颜色（默认inherit）
 * @property {String | Number} size 图标字体大小，单位rpx（默认32）
 * @property {String | Number} label-size label字体大小，单位rpx（默认28）
 * @property {String} label 图标右侧的label文字（默认28）
 * @property {String} label-pos label文字相对于图标的位置，只能right或bottom（默认right）
 * @property {String} label-color label字体颜色（默认#606266）
 * @property {Object} custom-style icon的样式，对象形式
 * @property {String} custom-prefix 自定义字体图标库时，需要写上此值
 * @property {String | Number} margin-left label在右侧时与图标的距离，单位rpx（默认6）
 * @property {String | Number} margin-top label在下方时与图标的距离，单位rpx（默认6）
 * @property {String | Number} margin-bottom label在上方时与图标的距离，单位rpx（默认6）
 * @property {String | Number} margin-right label在左侧时与图标的距离，单位rpx（默认6）
 * @property {String} label-pos label相对于图标的位置，只能right或bottom（默认right）
 * @property {String} index 一个用于区分多个图标的值，点击图标时通过click事件传出
 * @property {String} hover-class 图标按下去的样式类，用法同uni的view组件的hover-class参数，详情见官网
 * @property {String} width 显示图片小图标时的宽度
 * @property {String} height 显示图片小图标时的高度
 * @property {String} top 图标在垂直方向上的定位
 * @property {String} top 图标在垂直方向上的定位
 * @property {String} top 图标在垂直方向上的定位
 * @property {Boolean} show-decimal-icon 是否为DecimalIcon
 * @property {String} inactive-color 背景颜色，可接受主题色，仅Decimal时有效
 * @property {String | Number} percent 显示的百分比，仅Decimal时有效
 * @event {Function} click 点击图标时触发
 * @example <u-icon name="photo" color="#2979ff" size="28"></u-icon>
 */var _default2 =
{
  name: 'u-icon',
  props: {
    // 图标类名
    name: {
      type: String,
      default: '' },

    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: '' },

    // 字体大小，单位rpx
    size: {
      type: [Number, String],
      default: 'inherit' },

    // 是否显示粗体
    bold: {
      type: Boolean,
      default: false },

    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [Number, String],
      default: '' },

    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: '' },

    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: 'uicon' },

    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: '' },

    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: 'right' },

    // label的大小
    labelSize: {
      type: [String, Number],
      default: '28' },

    // label的颜色
    labelColor: {
      type: String,
      default: '#606266' },

    // label与图标的距离(横向排列)
    marginLeft: {
      type: [String, Number],
      default: '6' },

    // label与图标的距离(竖向排列)
    marginTop: {
      type: [String, Number],
      default: '6' },

    // label与图标的距离(竖向排列)
    marginRight: {
      type: [String, Number],
      default: '6' },

    // label与图标的距离(竖向排列)
    marginBottom: {
      type: [String, Number],
      default: '6' },

    // 图片的mode
    imgMode: {
      type: String,
      default: 'widthFix' },

    // 自定义样式
    customStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: '' },

    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: '' },

    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: 0 },

    // 是否为DecimalIcon
    showDecimalIcon: {
      type: Boolean,
      default: false },

    // 背景颜色，可接受主题色，仅Decimal时有效
    inactiveColor: {
      type: String,
      default: '#ececec' },

    // 显示的百分比，仅Decimal时有效
    percent: {
      type: [Number, String],
      default: '50' } },


  computed: {
    customClass: function customClass() {
      var classes = [];
      classes.push(this.customPrefix + '-' + this.name);
      // uView的自定义图标类名为u-iconfont
      if (this.customPrefix == 'uicon') {
        classes.push('u-iconfont');
      } else {
        classes.push(this.customPrefix);
      }
      // 主题色，通过类配置
      if (this.showDecimalIcon && this.inactiveColor && this.$u.config.type.includes(this.inactiveColor)) {
        classes.push('u-icon__icon--' + this.inactiveColor);
      } else if (this.color && this.$u.config.type.includes(this.color)) classes.push('u-icon__icon--' + this.color);
      // 阿里，头条，百度小程序通过数组绑定类名时，无法直接使用[a, b, c]的形式，否则无法识别
      // 故需将其拆成一个字符串的形式，通过空格隔开各个类名



      return classes;
    },
    iconStyle: function iconStyle() {
      var style = {};
      style = {
        fontSize: this.size == 'inherit' ? 'inherit' : this.$u.addUnit(this.size),
        fontWeight: this.bold ? 'bold' : 'normal',
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: this.$u.addUnit(this.top) };

      // 非主题色值时，才当作颜色值
      if (this.showDecimalIcon && this.inactiveColor && !this.$u.config.type.includes(this.inactiveColor)) {
        style.color = this.inactiveColor;
      } else if (this.color && !this.$u.config.type.includes(this.color)) style.color = this.color;

      return style;
    },
    // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
    isImg: function isImg() {
      return this.name.indexOf('/') !== -1;
    },
    imgStyle: function imgStyle() {
      var style = {};
      // 如果设置width和height属性，则优先使用，否则使用size属性
      style.width = this.width ? this.$u.addUnit(this.width) : this.$u.addUnit(this.size);
      style.height = this.height ? this.$u.addUnit(this.height) : this.$u.addUnit(this.size);
      return style;
    },
    decimalIconStyle: function decimalIconStyle() {
      var style = {};
      style = {
        fontSize: this.size == 'inherit' ? 'inherit' : this.$u.addUnit(this.size),
        fontWeight: this.bold ? 'bold' : 'normal',
        // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
        top: this.$u.addUnit(this.top),
        width: this.percent + '%' };

      // 非主题色值时，才当作颜色值
      if (this.color && !this.$u.config.type.includes(this.color)) style.color = this.color;
      return style;
    },
    decimalIconClass: function decimalIconClass() {
      var classes = [];
      classes.push(this.customPrefix + '-' + this.name);
      // uView的自定义图标类名为u-iconfont
      if (this.customPrefix == 'uicon') {
        classes.push('u-iconfont');
      } else {
        classes.push(this.customPrefix);
      }
      // 主题色，通过类配置
      if (this.color && this.$u.config.type.includes(this.color)) classes.push('u-icon__icon--' + this.color);else
      classes.push('u-icon__icon--primary');
      // 阿里，头条，百度小程序通过数组绑定类名时，无法直接使用[a, b, c]的形式，否则无法识别
      // 故需将其拆成一个字符串的形式，通过空格隔开各个类名



      return classes;
    } },

  methods: {
    click: function click() {
      this.$emit('click', this.index);
    },
    touchstart: function touchstart() {
      this.$emit('touchstart', this.index);
    } } };exports.default = _default2;

/***/ }),
/* 19 */
/*!*****************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-navbar/u-navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-navbar.vue?vue&type=script&lang=js& */ 20);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-navbar/u-navbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// 获取系统状态栏的高度
var systemInfo = uni.getSystemInfoSync();
var menuButtonInfo = {};
// 如果是小程序，获取右上角胶囊的尺寸信息，避免导航栏右侧内容与胶囊重叠(支付宝小程序非本API，尚未兼容)



/**
 * navbar 自定义导航栏
 * @description 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uniapp自带的导航栏。
 * @tutorial https://www.uviewui.com/components/navbar.html
 * @property {String Number} height 导航栏高度(不包括状态栏高度在内，内部自动加上)，注意这里的单位是px（默认44）
 * @property {String} back-icon-color 左边返回图标的颜色（默认#606266）
 * @property {String} back-icon-name 左边返回图标的名称，只能为uView自带的图标（默认arrow-left）
 * @property {String Number} back-icon-size 左边返回图标的大小，单位rpx（默认30）
 * @property {String} back-text 返回图标右边的辅助提示文字
 * @property {Object} back-text-style 返回图标右边的辅助提示文字的样式，对象形式（默认{ color: '#606266' }）
 * @property {String} title 导航栏标题，如设置为空字符，将会隐藏标题占位区域
 * @property {String Number} title-width 导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx（默认250）
 * @property {String} title-color 标题的颜色（默认#606266）
 * @property {String Number} title-size 导航栏标题字体大小，单位rpx（默认32）
 * @property {Function} custom-back 自定义返回逻辑方法
 * @property {String Number} z-index 固定在顶部时的z-index值（默认980）
 * @property {Boolean} is-back 是否显示导航栏左边返回图标和辅助文字（默认true）
 * @property {Object} background 导航栏背景设置，见官网说明（默认{ background: '#ffffff' }）
 * @property {Boolean} is-fixed 导航栏是否固定在顶部（默认true）
 * @property {Boolean} immersive 沉浸式，允许fixed定位后导航栏塌陷，仅fixed定位下生效（默认false）
 * @property {Boolean} border-bottom 导航栏底部是否显示下边框，如定义了较深的背景颜色，可取消此值（默认true）
 * @example <u-navbar back-text="返回" title="剑未配妥，出门已是江湖"></u-navbar>
 */var _default2 =
{
  name: "u-navbar",
  props: {
    // 导航栏高度，单位px，非rpx
    height: {
      type: [String, Number],
      default: '' },

    // 返回箭头的颜色
    backIconColor: {
      type: String,
      default: '#606266' },

    // 左边返回的图标
    backIconName: {
      type: String,
      default: 'nav-back' },

    // 左边返回图标的大小，rpx
    backIconSize: {
      type: [String, Number],
      default: '44' },

    // 返回的文字提示
    backText: {
      type: String,
      default: '' },

    // 返回的文字的 样式
    backTextStyle: {
      type: Object,
      default: function _default() {
        return {
          color: '#606266' };

      } },

    // 导航栏标题
    title: {
      type: String,
      default: '' },

    // 标题的宽度，如果需要自定义右侧内容，且右侧内容很多时，可能需要减少这个宽度，单位rpx
    titleWidth: {
      type: [String, Number],
      default: '250' },

    // 标题的颜色
    titleColor: {
      type: String,
      default: '#606266' },

    // 标题字体是否加粗
    titleBold: {
      type: Boolean,
      default: false },

    // 标题的字体大小
    titleSize: {
      type: [String, Number],
      default: 32 },

    isBack: {
      type: [Boolean, String],
      default: true },

    // 对象形式，因为用户可能定义一个纯色，或者线性渐变的颜色
    background: {
      type: Object,
      default: function _default() {
        return {
          background: '#ffffff' };

      } },

    // 导航栏是否固定在顶部
    isFixed: {
      type: Boolean,
      default: true },

    // 是否沉浸式，允许fixed定位后导航栏塌陷，仅fixed定位下生效
    immersive: {
      type: Boolean,
      default: false },

    // 是否显示导航栏的下边框
    borderBottom: {
      type: Boolean,
      default: true },

    zIndex: {
      type: [String, Number],
      default: '' },

    // 自定义返回逻辑
    customBack: {
      type: Function,
      default: null } },


  data: function data() {
    return {
      menuButtonInfo: menuButtonInfo,
      statusBarHeight: systemInfo.statusBarHeight };

  },
  computed: {
    // 导航栏内部盒子的样式
    navbarInnerStyle: function navbarInnerStyle() {
      var style = {};
      // 导航栏宽度，如果在小程序下，导航栏宽度为胶囊的左边到屏幕左边的距离
      style.height = this.navbarHeight + 'px';
      // // 如果是各家小程序，导航栏内部的宽度需要减少右边胶囊的宽度




      return style;
    },
    // 整个导航栏的样式
    navbarStyle: function navbarStyle() {
      var style = {};
      style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.navbar;
      // 合并用户传递的背景色对象
      Object.assign(style, this.background);
      return style;
    },
    // 导航中间的标题的样式
    titleStyle: function titleStyle() {
      var style = {};

      style.left = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';
      style.right = (systemInfo.windowWidth - uni.upx2px(this.titleWidth)) / 2 + 'px';








      style.width = uni.upx2px(this.titleWidth) + 'px';
      return style;
    },
    // 转换字符数值为真正的数值
    navbarHeight: function navbarHeight() {

      return this.height ? this.height : 44;








    } },

  created: function created() {},
  methods: {
    goBack: function goBack() {
      // 如果自定义了点击返回按钮的函数，则执行，否则执行返回逻辑
      if (typeof this.customBack === 'function') {
        // 在微信，支付宝等环境(H5正常)，会导致父组件定义的customBack()函数体中的this变成子组件的this
        // 通过bind()方法，绑定父组件的this，让this.customBack()的this为父组件的上下文
        this.customBack.bind(this.$u.$parent.call(this))();
      } else {
        uni.navigateBack();
      }
    } } };exports.default = _default2;

/***/ }),
/* 21 */
/*!************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-cell-group/u-cell-group.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-cell-group.vue?vue&type=template&id=c4aeef32&scoped=true& */ 22);
/* harmony import */ var _u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-cell-group.vue?vue&type=script&lang=js& */ 24);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c4aeef32",
  null,
  false,
  _u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-cell-group/u-cell-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 22 */
/*!*******************************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-cell-group/u-cell-group.vue?vue&type=template&id=c4aeef32&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-cell-group.vue?vue&type=template&id=c4aeef32&scoped=true& */ 23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_template_id_c4aeef32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 23 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-cell-group/u-cell-group.vue?vue&type=template&id=c4aeef32&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-cell-box"), attrs: { _i: 0 } },
    [
      _vm._$s(1, "i", _vm.title)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(1, "sc", "u-cell-title"),
              style: _vm._$s(1, "s", [_vm.titleStyle]),
              attrs: { _i: 1 }
            },
            [_vm._v(_vm._$s(1, "t0-0", _vm._s(_vm.title)))]
          )
        : _vm._e(),
      _c(
        "view",
        {
          staticClass: _vm._$s(2, "sc", "u-cell-item-box"),
          class: _vm._$s(2, "c", {
            "u-border-bottom u-border-top": _vm.border
          }),
          attrs: { _i: 2 }
        },
        [_vm._t("default", null, { _i: 3 })],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 24 */
/*!*************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-cell-group/u-cell-group.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-cell-group.vue?vue&type=script&lang=js& */ 25);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_group_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-cell-group/u-cell-group.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//

/**
 * cellGroup 单元格父组件Group
 * @description cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。搭配u-cell-item
 * @tutorial https://www.uviewui.com/components/cell.html
 * @property {String} title 分组标题
 * @property {Boolean} border 是否显示外边框（默认true）
 * @property {Object} title-style 分组标题的的样式，对象形式，如{'font-size': '24rpx'} 或 {'fontSize': '24rpx'}
 * @example <u-cell-group title="设置喜好">
 */var _default2 =
{
  name: "u-cell-group",
  props: {
    // 分组标题
    title: {
      type: String,
      default: '' },

    // 是否显示分组list上下边框
    border: {
      type: Boolean,
      default: true },

    // 分组标题的样式，对象形式，注意驼峰属性写法
    // 类似 {'font-size': '24rpx'} 和 {'fontSize': '24rpx'}
    titleStyle: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  data: function data() {
    return {
      index: 0 };

  } };exports.default = _default2;

/***/ }),
/* 26 */
/*!**********************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-cell-item/u-cell-item.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-cell-item.vue?vue&type=template&id=2c031e35&scoped=true& */ 27);
/* harmony import */ var _u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-cell-item.vue?vue&type=script&lang=js& */ 29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2c031e35",
  null,
  false,
  _u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-cell-item/u-cell-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 27 */
/*!*****************************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-cell-item/u-cell-item.vue?vue&type=template&id=2c031e35&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-cell-item.vue?vue&type=template&id=2c031e35&scoped=true& */ 28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_template_id_2c031e35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 28 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-cell-item/u-cell-item.vue?vue&type=template&id=2c031e35&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: __webpack_require__(/*! uview-ui/components/u-icon/u-icon.vue */ 14).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "u-cell"),
      class: _vm._$s(0, "c", {
        "u-border-bottom": _vm.borderBottom,
        "u-border-top": _vm.borderTop,
        "u-col-center": _vm.center,
        "u-cell--required": _vm.required
      }),
      style: _vm._$s(0, "s", {
        backgroundColor: _vm.bgColor
      }),
      attrs: {
        "hover-class": _vm._$s(0, "a-hover-class", _vm.hoverClass),
        _i: 0
      },
      on: { click: _vm.click }
    },
    [
      _vm._$s(1, "i", _vm.icon)
        ? _c("u-icon", {
            staticClass: _vm._$s(1, "sc", "u-cell__left-icon-wrap"),
            attrs: {
              size: _vm.iconSize,
              name: _vm.icon,
              "custom-style": _vm.iconStyle,
              _i: 1
            }
          })
        : _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "u-flex"), attrs: { _i: 2 } },
            [_vm._t("icon", null, { _i: 3 })],
            2
          ),
      _c(
        "view",
        {
          staticClass: _vm._$s(4, "sc", "u-cell_title"),
          style: _vm._$s(4, "s", [
            {
              width: _vm.titleWidth ? _vm.titleWidth + "rpx" : "auto"
            },
            _vm.titleStyle
          ]),
          attrs: { _i: 4 }
        },
        [
          _vm._$s(5, "i", _vm.title !== "")
            ? [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.title)))]
            : _vm._t("title", null, { _i: 6 }),
          _vm._$s(7, "i", _vm.label || _vm.$slots.label)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(7, "sc", "u-cell__label"),
                  style: _vm._$s(7, "s", [_vm.labelStyle]),
                  attrs: { _i: 7 }
                },
                [
                  _vm._$s(8, "i", _vm.label !== "")
                    ? [_vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.label)))]
                    : _vm._t("label", null, { _i: 9 })
                ],
                2
              )
            : _vm._e()
        ],
        2
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(10, "sc", "u-cell__value"),
          style: _vm._$s(10, "s", [_vm.valueStyle]),
          attrs: { _i: 10 }
        },
        [
          _vm._$s(11, "i", _vm.value !== "")
            ? [_vm._v(_vm._$s(11, "t0-0", _vm._s(_vm.value)))]
            : _vm._t("default", null, { _i: 12 })
        ],
        2
      ),
      _vm._$s(13, "i", _vm.$slots["right-icon"])
        ? _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "u-flex u-cell_right"),
              attrs: { _i: 13 }
            },
            [_vm._t("right-icon", null, { _i: 14 })],
            2
          )
        : _vm._e(),
      _vm._$s(15, "i", _vm.arrow)
        ? _c("u-icon", {
            staticClass: _vm._$s(
              15,
              "sc",
              "u-icon-wrap u-cell__right-icon-wrap"
            ),
            style: _vm._$s(15, "s", [_vm.arrowStyle]),
            attrs: { name: "arrow-right", _i: 15 }
          })
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 29 */
/*!***********************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-cell-item/u-cell-item.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-cell-item.vue?vue&type=script&lang=js& */ 30);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_cell_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-cell-item/u-cell-item.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * cellItem 单元格Item
 * @description cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。搭配u-cell-group使用
 * @tutorial https://www.uviewui.com/components/cell.html
 * @property {String} title 左侧标题
 * @property {String} icon 左侧图标名，只支持uView内置图标，见Icon 图标
 * @property {Object} icon-style 左边图标的样式，对象形式
 * @property {String} value 右侧内容
 * @property {String} label 标题下方的描述信息
 * @property {Boolean} border-bottom 是否显示cell的下边框（默认true）
 * @property {Boolean} border-top 是否显示cell的上边框（默认false）
 * @property {Boolean} center 是否使内容垂直居中（默认false）
 * @property {String} hover-class 是否开启点击反馈，none为无效果（默认true）
 * // @property {Boolean} border-gap border-bottom为true时，Cell列表中间的条目的下边框是否与左边有一个间隔（默认true）
 * @property {Boolean} arrow 是否显示右侧箭头（默认true）
 * @property {Boolean} required 箭头方向，可选值（默认right）
 * @property {Boolean} arrow-direction 是否显示左边表示必填的星号（默认false）
 * @property {Object} title-style 标题样式，对象形式
 * @property {Object} value-style 右侧内容样式，对象形式
 * @property {Object} label-style 标题下方描述信息的样式，对象形式
 * @property {String} bg-color 背景颜色（默认transparent）
 * @property {String Number} index 用于在click事件回调中返回，标识当前是第几个Item
 * @property {String Number} title-width 标题的宽度，单位rpx
 * @example <u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
 */var _default2 =
{
  name: 'u-cell-item',
  props: {
    // 左侧图标名称(只能uView内置图标)，或者图标src
    icon: {
      type: String,
      default: '' },

    // 左侧标题
    title: {
      type: [String, Number],
      default: '' },

    // 右侧内容
    value: {
      type: [String, Number],
      default: '' },

    // 标题下方的描述信息
    label: {
      type: [String, Number],
      default: '' },

    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: true },

    // 是否显示上边框
    borderTop: {
      type: Boolean,
      default: false },

    // 多个cell中，中间的cell显示下划线时，下划线是否给一个到左边的距离
    // 1.4.0版本废除此参数，默认边框由border-top和border-bottom提供，此参数会造成干扰
    // borderGap: {
    // 	type: Boolean,
    // 	default: true
    // },
    // 是否开启点击反馈，即点击时cell背景为灰色，none为无效果
    hoverClass: {
      type: String,
      default: 'u-cell-hover' },

    // 是否显示右侧箭头
    arrow: {
      type: Boolean,
      default: true },

    // 内容是否垂直居中
    center: {
      type: Boolean,
      default: false },

    // 是否显示左边表示必填的星号
    required: {
      type: Boolean,
      default: false },

    // 标题的宽度，单位rpx
    titleWidth: {
      type: [Number, String],
      default: '' },

    // 右侧箭头方向，可选值：right|up|down，默认为right
    arrowDirection: {
      type: String,
      default: 'right' },

    // 控制标题的样式
    titleStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 右侧显示内容的样式
    valueStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 描述信息的样式
    labelStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 背景颜色
    bgColor: {
      type: String,
      default: 'transparent' },

    // 用于识别被点击的是第几个cell
    index: {
      type: [String, Number],
      default: '' },

    // 是否使用lable插槽
    useLabelSlot: {
      type: Boolean,
      default: false },

    // 左边图标的大小，单位rpx，只对传入icon字段时有效
    iconSize: {
      type: [Number, String],
      default: 34 },

    // 左边图标的样式，对象形式
    iconStyle: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  data: function data() {
    return {};


  },
  computed: {
    arrowStyle: function arrowStyle() {
      var style = {};
      if (this.arrowDirection == 'up') style.transform = 'rotate(-90deg)';else
      if (this.arrowDirection == 'down') style.transform = 'rotate(90deg)';else
      style.transform = 'rotate(0deg)';
      return style;
    } },

  methods: {
    click: function click() {
      this.$emit('click', this.index);
    } } };exports.default = _default2;

/***/ }),
/* 31 */
/*!***********************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/my-page/my-page.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-page.vue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_page_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFzQixDQUFnQix3c0JBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teS1wYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbXktcGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/my-page/my-page.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      pic: '',\n      show: true,\n      userInfo: {} };\n\n  },\n  filters: {\n    show_nick: function show_nick(val) {\n      return val ? val : \"未设置昵称\";\n    } },\n\n  onShow: function onShow() {var _this = this;\n    this.$reqs.check_token().then(function (res) {\n      _this.userInfo = res.userInfo;\n      __f__(\"log\", _this.userInfo, \" at pages/user-center/my-page/my-page.vue:67\");\n      _this.pic = _this.userInfo.avatar ? _this.userInfo.avatar : '../../../static/image/my-page/phone.jpg';\n    });\n  },\n  methods: {\n    goLogin: function goLogin() {\n      uni.navigateTo({\n        url: \"../login/index\" });\n\n    },\n    goSetting: function goSetting() {\n      var urls = this.userInfo.avatar ? this.userInfo.avatar : '../../../static/image/my-page/phone.jpg';\n      var nickname = this.userInfo.nickname ? this.userInfo.nickname : '';\n      this.$apis.navigateTo({\n        url: \"../setting/setting?avatar=\".concat(urls, \"&nickname=\").concat(nickname) },\n      this.$reqs.check_token);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvbXktcGFnZS9teS1wYWdlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGFBREE7QUFFQSxnQkFGQTtBQUdBLGtCQUhBOztBQUtBLEdBUEE7QUFRQTtBQUNBLGFBREEscUJBQ0EsR0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBLEVBUkE7O0FBYUEsUUFiQSxvQkFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLEdBbkJBO0FBb0JBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsNkJBREE7O0FBR0EsS0FMQTtBQU1BLGFBTkEsdUJBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFEQTtBQUVBLDRCQUZBO0FBR0EsS0FaQSxFQXBCQSxFIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHUtbmF2YmFyIDppcy1iYWNrPVwiZmFsc2VcIiB0aXRsZT1cIuOAgFwiIDpib3JkZXItYm90dG9tPVwiZmFsc2VcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdS1yb3ctcmlnaHRcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2FtZXJhIHUtZmxleCB1LXJvdy1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdDx1LWljb24gbmFtZT1cImNhbWVyYS1maWxsXCIgY29sb3I9XCIjMDAwMDAwXCIgc2l6ZT1cIjQ4XCI+PC91LWljb24+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3UtbmF2YmFyPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXggdXNlci1ib3ggdS1wLWwtMzAgdS1wLXItMjAgdS1wLWItMzBcIiAgQGNsaWNrPVwiZ29TZXR0aW5nXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1tLXItMTAgaW1hZ2VzLWJveFwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwicGljXCIgY2xhc3M9XCJpbWFnZXNcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1mbGV4LTFcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZm9udC0xOCB1LXAtYi0yMFwiPnt7dXNlckluZm8ubmlja25hbWUgfCBzaG93X25pY2t9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZm9udC0xNCB1LXRpcHMtY29sb3JcIj7kuZDlpJrlj7c6e3t1c2VySW5mby51c2VybmFtZX19PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1tLWwtMTAgdS1wLTEwXCI+XHJcblx0XHRcdFx0PHUtaWNvbiBuYW1lPVwic2NhblwiIGNvbG9yPVwiIzk2OTc5OVwiIHNpemU9XCIyOFwiPjwvdS1pY29uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1tLWwtMTAgdS1wLTEwXCI+XHJcblx0XHRcdFx0PHUtaWNvbiBuYW1lPVwiYXJyb3ctcmlnaHRcIiBjb2xvcj1cIiM5Njk3OTlcIiBzaXplPVwiMjhcIj48L3UtaWNvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtbS10LTIwXCI+XHJcblx0XHRcdDx1LWNlbGwtZ3JvdXA+XHJcblx0XHRcdFx0PHUtY2VsbC1pdGVtIGljb249XCJybWItY2lyY2xlXCIgdGl0bGU9XCLmlK/ku5hcIj48L3UtY2VsbC1pdGVtPlxyXG5cdFx0XHQ8L3UtY2VsbC1ncm91cD5cclxuXHRcdDwvdmlldz5cclxuXHRcdFxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LW0tdC0yMFwiPlxyXG5cdFx0XHQ8dS1jZWxsLWdyb3VwPlxyXG5cdFx0XHRcdDx1LWNlbGwtaXRlbSBpY29uPVwic3RhclwiIHRpdGxlPVwi5pS26JePXCI+PC91LWNlbGwtaXRlbT5cclxuXHRcdFx0XHQ8dS1jZWxsLWl0ZW0gaWNvbj1cInBob3RvXCIgdGl0bGU9XCLnm7jlhoxcIj48L3UtY2VsbC1pdGVtPlxyXG5cdFx0XHRcdDx1LWNlbGwtaXRlbSBpY29uPVwiY291cG9uXCIgdGl0bGU9XCLljaHliLhcIj48L3UtY2VsbC1pdGVtPlxyXG5cdFx0XHRcdDx1LWNlbGwtaXRlbSBpY29uPVwiaGVhcnRcIiB0aXRsZT1cIuWFs+azqFwiPjwvdS1jZWxsLWl0ZW0+XHJcblx0XHRcdDwvdS1jZWxsLWdyb3VwPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8dmlldyBjbGFzcz1cInUtbS10LTIwXCI+XHJcblx0XHRcdDx1LWNlbGwtZ3JvdXA+XHJcblx0XHRcdFx0PHUtY2VsbC1pdGVtIGljb249XCJzZXR0aW5nXCIgdGl0bGU9XCLorr7nva5cIiBAY2xpY2s9XCJnb1NldHRpbmdcIj48L3UtY2VsbC1pdGVtPlxyXG5cdFx0XHRcdDx1LWNlbGwtaXRlbSBpY29uPVwiYWNjb3VudFwiIHRpdGxlPVwi55m75b2VXCIgQGNsaWNrPVwiZ29Mb2dpblwiPjwvdS1jZWxsLWl0ZW0+XHJcblx0XHRcdDwvdS1jZWxsLWdyb3VwPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwaWM6JycsXHJcblx0XHRcdFx0c2hvdzp0cnVlLFxyXG5cdFx0XHRcdHVzZXJJbmZvOnt9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRmaWx0ZXJzOntcclxuXHRcdFx0c2hvd19uaWNrKHZhbCl7XHJcblx0XHRcdFx0cmV0dXJuIHZhbCA/IHZhbCA6IFwi5pyq6K6+572u5pi156ewXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0dGhpcy4kcmVxcy5jaGVja190b2tlbigpLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0dGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pXHJcblx0XHRcdFx0dGhpcy5waWMgPSB0aGlzLnVzZXJJbmZvLmF2YXRhciA/IHRoaXMudXNlckluZm8uYXZhdGFyIDogJy4uLy4uLy4uL3N0YXRpYy9pbWFnZS9teS1wYWdlL3Bob25lLmpwZyc7XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnb0xvZ2luKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOlwiLi4vbG9naW4vaW5kZXhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGdvU2V0dGluZygpe1xyXG5cdFx0XHRcdGxldCB1cmxzID0gdGhpcy51c2VySW5mby5hdmF0YXI/dGhpcy51c2VySW5mby5hdmF0YXI6Jy4uLy4uLy4uL3N0YXRpYy9pbWFnZS9teS1wYWdlL3Bob25lLmpwZyc7XHJcblx0XHRcdFx0bGV0IG5pY2tuYW1lID0gdGhpcy51c2VySW5mby5uaWNrbmFtZT90aGlzLnVzZXJJbmZvLm5pY2tuYW1lOicnO1xyXG5cdFx0XHRcdHRoaXMuJGFwaXMubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6YC4uL3NldHRpbmcvc2V0dGluZz9hdmF0YXI9JHt1cmxzfSZuaWNrbmFtZT0ke25pY2tuYW1lfWBcclxuXHRcdFx0XHR9LHRoaXMuJHJlcXMuY2hlY2tfdG9rZW4pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5wYWdle1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7ICAgXHJcbn1cclxuXHJcbi5jYW1lcmF7XHJcblx0d2lkdGg6IDU0cHg7XHJcblx0aGVpZ2h0OiA0NHB4O1xyXG5cdFxyXG5cdCY6YWN0aXZle1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuXHR9XHJcbn1cclxuLnVzZXItYm94e1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLnUtZmxleC0xPnZpZXd7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHJweDtcclxufVxyXG4uaW1hZ2VzLWJveHtcclxuXHR3aWR0aDogMTU0cnB4O1xyXG5cdGhlaWdodDogMTU0cnB4O1xyXG59XHJcbi5pbWFnZXN7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 34 */
/*!*******************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/login/index.vue?mpType=page ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6089dcca&scoped=true&mpType=page */ 35);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 56);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6089dcca\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user-center/login/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDg5ZGNjYSZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYwODlkY2NhXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXItY2VudGVyL2xvZ2luL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!*************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/login/index.vue?vue&type=template&id=6089dcca&scoped=true&mpType=page ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6089dcca&scoped=true&mpType=page */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6089dcca_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 36 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/login/index.vue?vue&type=template&id=6089dcca&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uForm: __webpack_require__(/*! uview-ui/components/u-form/u-form.vue */ 37).default,
    uFormItem: __webpack_require__(/*! uview-ui/components/u-form-item/u-form-item.vue */ 42)
      .default,
    uInput: __webpack_require__(/*! uview-ui/components/u-input/u-input.vue */ 51).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "wrap"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "top"), attrs: { _i: 1 } }),
      _vm._$s(2, "i", _vm.is_mobile)
        ? _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "content"), attrs: { _i: 2 } },
            [
              _c("view", {
                staticClass: _vm._$s(3, "sc", "title"),
                attrs: { _i: 3 }
              }),
              _c(
                "u-form",
                { attrs: { _i: 4 } },
                [
                  _c(
                    "u-form-item",
                    { attrs: { _i: 5 } },
                    [
                      _c("u-input", {
                        attrs: {
                          type: "number",
                          placeholder: "请输入手机号/帐号昵称/邮箱",
                          _i: 6
                        },
                        model: {
                          value: _vm._$s(6, "v-model", _vm.tel),
                          callback: function($$v) {
                            _vm.tel = $$v
                          },
                          expression: "tel"
                        }
                      })
                    ],
                    1
                  ),
                  _c("view", {
                    staticClass: _vm._$s(7, "sc", "tips"),
                    attrs: { _i: 7 }
                  }),
                  _c("button", {
                    staticClass: _vm._$s(8, "sc", "getCaptcha"),
                    style: _vm._$s(8, "s", [_vm.inputStyle]),
                    attrs: { _i: 8 },
                    on: { click: _vm.submit }
                  })
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "alternative"),
                  attrs: { _i: 9 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(10, "sc", "password"),
                    attrs: { _i: 10 },
                    on: {
                      click: function($event) {
                        _vm.is_mobile = false
                      }
                    }
                  }),
                  _c("view", {
                    staticClass: _vm._$s(11, "sc", "issue"),
                    attrs: { _i: 11 },
                    on: { click: _vm.goregister }
                  })
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._$s(12, "i", !_vm.is_mobile)
        ? _c(
            "view",
            { staticClass: _vm._$s(12, "sc", "content"), attrs: { _i: 12 } },
            [
              _c("view", {
                staticClass: _vm._$s(13, "sc", "title"),
                attrs: { _i: 13 }
              }),
              _c(
                "u-form",
                { attrs: { _i: 14 } },
                [
                  _c(
                    "u-form-item",
                    { attrs: { _i: 15 } },
                    [
                      _c("u-input", {
                        attrs: {
                          type: "text",
                          placeholder: "请输入手机号/邮箱",
                          _i: 16
                        },
                        model: {
                          value: _vm._$s(16, "v-model", _vm.username),
                          callback: function($$v) {
                            _vm.username = $$v
                          },
                          expression: "username"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "u-form-item",
                    { attrs: { _i: 17 } },
                    [
                      _c("u-input", {
                        attrs: {
                          type: "password",
                          placeholder: "请输入账户密码",
                          _i: 18
                        },
                        model: {
                          value: _vm._$s(18, "v-model", _vm.password),
                          callback: function($$v) {
                            _vm.password = $$v
                          },
                          expression: "password"
                        }
                      })
                    ],
                    1
                  ),
                  _c("button", {
                    staticClass: _vm._$s(19, "sc", "getCaptcha"),
                    style: _vm._$s(19, "s", [_vm.inputStyles]),
                    attrs: { _i: 19 },
                    on: { click: _vm.submit_u }
                  })
                ],
                1
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(20, "sc", "alternative"),
                  attrs: { _i: 20 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(21, "sc", "password"),
                    attrs: { _i: 21 },
                    on: {
                      click: function($event) {
                        _vm.is_mobile = true
                      }
                    }
                  }),
                  _c("view", {
                    staticClass: _vm._$s(22, "sc", "issue"),
                    attrs: { _i: 22 },
                    on: { click: _vm.goregister }
                  })
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(23, "sc", "buttom"), attrs: { _i: 23 } },
        [
          _c("view", {
            staticClass: _vm._$s(24, "sc", "loginType"),
            attrs: { _i: 24 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(25, "sc", "hint"), attrs: { _i: 25 } },
            [
              _c("text", {
                staticClass: _vm._$s(26, "sc", "link"),
                attrs: { _i: 26 }
              })
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 37 */
/*!************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-form/u-form.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& */ 38);
/* harmony import */ var _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-form.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ed64ceb2",
  null,
  false,
  _u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-form/u-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/*!*******************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_template_id_ed64ceb2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 39 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=template&id=ed64ceb2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-form"), attrs: { _i: 0 } },
    [_vm._t("default", null, { _i: 1 })],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 40 */
/*!*************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-form.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-form/u-form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//

/**
 * form 表单
 * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
 * @tutorial http://uviewui.com/components/form.html
 * @property {Object} model 表单数据对象
 * @property {Boolean} border-bottom 是否显示表单域的下划线边框
 * @property {String} label-position 表单域提示文字的位置，left-左侧，top-上方
 * @property {String Number} label-width 提示文字的宽度，单位rpx（默认90）
 * @property {Object} label-style lable的样式，对象形式
 * @property {String} label-align lable的对齐方式
 * @property {Object} rules 通过ref设置，见官网说明
 * @property {Array} error-type 错误的提示方式，数组形式，见上方说明(默认['message'])
 * @example <u-form :model="form" ref="uForm"></u-form>
 */var _default2 =

{
  name: 'u-form',
  props: {
    // 当前form的需要验证字段的集合
    model: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 验证规则
    // rules: {
    // 	type: [Object, Function, Array],
    // 	default() {
    // 		return {};
    // 	}
    // },
    // 有错误时的提示方式，message-提示信息，border-如果input设置了边框，变成呈红色，
    // border-bottom-下边框呈现红色，none-无提示
    errorType: {
      type: Array,
      default: function _default() {
        return ['message', 'toast'];
      } },

    // 是否显示表单域的下划线边框
    borderBottom: {
      type: Boolean,
      default: true },

    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: 'left' },

    // label的宽度，单位rpx
    labelWidth: {
      type: [String, Number],
      default: 90 },

    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: 'left' },

    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  provide: function provide() {
    return {
      uForm: this };

  },
  data: function data() {
    return {
      rules: {} };

  },
  created: function created() {
    // 存储当前form下的所有u-form-item的实例
    // 不能定义在data中，否则微信小程序会造成循环引用而报错
    this.fields = [];
  },
  methods: {
    setRules: function setRules(rules) {
      this.rules = rules;
    },
    // 清空所有u-form-item组件的内容，本质上是调用了u-form-item组件中的resetField()方法
    resetFields: function resetFields() {
      this.fields.map(function (field) {
        field.resetField();
      });
    },
    // 校验全部数据
    validate: function validate(callback) {var _this = this;
      return new Promise(function (resolve) {
        // 对所有的u-form-item进行校验
        var valid = true; // 默认通过
        var count = 0; // 用于标记是否检查完毕
        var errorArr = []; // 存放错误信息
        _this.fields.map(function (field) {
          // 调用每一个u-form-item实例的validation的校验方法
          field.validation('', function (error) {
            // 如果任意一个u-form-item校验不通过，就意味着整个表单不通过
            if (error) {
              valid = false;
              errorArr.push(error);
            }
            // 当历遍了所有的u-form-item时，调用promise的then方法
            if (++count === _this.fields.length) {
              resolve(valid); // 进入promise的then方法
              // 判断是否设置了toast的提示方式，只提示最前面的表单域的第一个错误信息
              if (_this.errorType.indexOf('none') === -1 && _this.errorType.indexOf('toast') >= 0 && errorArr.length) {
                _this.$u.toast(errorArr[0]);
              }
              // 调用回调方法
              if (typeof callback == 'function') callback(valid);
            }
          });
        });
      });
    } } };exports.default = _default2;

/***/ }),
/* 42 */
/*!**********************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-form-item/u-form-item.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-form-item.vue?vue&type=template&id=5e7216f1&scoped=true& */ 43);
/* harmony import */ var _u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-form-item.vue?vue&type=script&lang=js& */ 45);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e7216f1",
  null,
  false,
  _u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-form-item/u-form-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/*!*****************************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=template&id=5e7216f1&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-form-item.vue?vue&type=template&id=5e7216f1&scoped=true& */ 44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_template_id_5e7216f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 44 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=template&id=5e7216f1&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: __webpack_require__(/*! uview-ui/components/u-icon/u-icon.vue */ 14).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "u-form-item"),
      class: _vm._$s(0, "c", {
        "u-border-bottom": _vm.elBorderBottom,
        "u-form-item__border-bottom--error":
          _vm.validateState === "error" && _vm.showError("border-bottom")
      }),
      attrs: { _i: 0 }
    },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "u-form-item__body"),
          style: _vm._$s(1, "s", {
            flexDirection: _vm.elLabelPosition == "left" ? "row" : "column"
          }),
          attrs: { _i: 1 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "u-form-item--left"),
              style: _vm._$s(2, "s", {
                width: _vm.uLabelWidth,
                flex: "0 0 " + _vm.uLabelWidth,
                marginBottom: _vm.elLabelPosition == "left" ? 0 : "10rpx"
              }),
              attrs: { _i: 2 }
            },
            [
              _vm._$s(3, "i", _vm.required || _vm.leftIcon || _vm.label)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        3,
                        "sc",
                        "u-form-item--left__content"
                      ),
                      attrs: { _i: 3 }
                    },
                    [
                      _vm._$s(4, "i", _vm.required)
                        ? _c("text", {
                            staticClass: _vm._$s(
                              4,
                              "sc",
                              "u-form-item--left__content--required"
                            ),
                            attrs: { _i: 4 }
                          })
                        : _vm._e(),
                      _vm._$s(5, "i", _vm.leftIcon)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                5,
                                "sc",
                                "u-form-item--left__content__icon"
                              ),
                              attrs: { _i: 5 }
                            },
                            [
                              _c("u-icon", {
                                attrs: {
                                  name: _vm.leftIcon,
                                  "custom-style": _vm.leftIconStyle,
                                  _i: 6
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            7,
                            "sc",
                            "u-form-item--left__content__label"
                          ),
                          style: _vm._$s(7, "s", [
                            _vm.elLabelStyle,
                            {
                              "justify-content":
                                _vm.elLabelAlign == "left"
                                  ? "flex-start"
                                  : _vm.elLabelAlign == "center"
                                  ? "center"
                                  : "flex-end"
                            }
                          ]),
                          attrs: { _i: 7 }
                        },
                        [_vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.label)))]
                      )
                    ]
                  )
                : _vm._e()
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(8, "sc", "u-form-item--right u-flex"),
              attrs: { _i: 8 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(9, "sc", "u-form-item--right__content"),
                  attrs: { _i: 9 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(
                        10,
                        "sc",
                        "u-form-item--right__content__slot "
                      ),
                      attrs: { _i: 10 }
                    },
                    [_vm._t("default", null, { _i: 11 })],
                    2
                  ),
                  _vm._$s(12, "i", _vm.$slots.right || _vm.rightIcon)
                    ? _c(
                        "view",
                        {
                          staticClass: _vm._$s(
                            12,
                            "sc",
                            "u-form-item--right__content__icon u-flex"
                          ),
                          attrs: { _i: 12 }
                        },
                        [
                          _vm._$s(13, "i", _vm.rightIcon)
                            ? _c("u-icon", {
                                attrs: {
                                  "custom-style": _vm.rightIconStyle,
                                  name: _vm.rightIcon,
                                  _i: 13
                                }
                              })
                            : _vm._e(),
                          _vm._t("right", null, { _i: 14 })
                        ],
                        2
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ]
      ),
      _vm._$s(
        15,
        "i",
        _vm.validateState === "error" && _vm.showError("message")
      )
        ? _c(
            "view",
            {
              staticClass: _vm._$s(15, "sc", "u-form-item__message"),
              style: _vm._$s(15, "s", {
                paddingLeft:
                  _vm.elLabelPosition == "left"
                    ? _vm.$u.addUnit(_vm.elLabelWidth)
                    : "0"
              }),
              attrs: { _i: 15 }
            },
            [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.validateMessage)))]
          )
        : _vm._e()
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 45 */
/*!***********************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-form-item.vue?vue&type=script&lang=js& */ 46);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 46 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-form-item/u-form-item.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;











































var _emitter = _interopRequireDefault(__webpack_require__(/*! ../../libs/util/emitter.js */ 47));
var _asyncValidator = _interopRequireDefault(__webpack_require__(/*! ../../libs/util/async-validator */ 48));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
// 去除警告信息
_asyncValidator.default.warning = function () {};

/**
                                                   * form-item 表单item
                                                   * @description 此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。
                                                   * @tutorial http://uviewui.com/components/form.html
                                                   * @property {String} label 左侧提示文字
                                                   * @property {Object} prop 表单域model对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的
                                                   * @property {Boolean} border-bottom 是否显示表单域的下划线边框
                                                   * @property {String} label-position 表单域提示文字的位置，left-左侧，top-上方
                                                   * @property {String Number} label-width 提示文字的宽度，单位rpx（默认90）
                                                   * @property {Object} label-style lable的样式，对象形式
                                                   * @property {String} label-align lable的对齐方式
                                                   * @property {String} right-icon 右侧自定义字体图标(限uView内置图标)或图片地址
                                                   * @property {String} left-icon 左侧自定义字体图标(限uView内置图标)或图片地址
                                                   * @property {Object} left-icon-style 左侧图标的样式，对象形式
                                                   * @property {Object} right-icon-style 右侧图标的样式，对象形式
                                                   * @property {Boolean} required 是否显示左边的"*"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则(默认false)
                                                   * @example <u-form-item label="姓名"><u-input v-model="form.name" /></u-form-item>
                                                   */var _default2 =

{
  name: 'u-form-item',
  mixins: [_emitter.default],
  inject: {
    uForm: {
      default: function _default() {
        return null;
      } } },


  props: {
    // input的label提示语
    label: {
      type: String,
      default: '' },

    // 绑定的值
    prop: {
      type: String,
      default: '' },

    // 是否显示表单域的下划线边框
    borderBottom: {
      type: [String, Boolean],
      default: '' },

    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: '' },

    // label的宽度，单位rpx
    labelWidth: {
      type: [String, Number],
      default: '' },

    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: '' },

    // 右侧图标
    rightIcon: {
      type: String,
      default: '' },

    // 左侧图标
    leftIcon: {
      type: String,
      default: '' },

    // 左侧图标的样式
    leftIconStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 左侧图标的样式
    rightIconStyle: {
      type: Object,
      default: function _default() {
        return {};
      } },

    // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
    required: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      initialValue: '', // 存储的默认值
      // isRequired: false, // 是否必填，由于人性化考虑，必填"*"号通过props的required配置，不再通过rules的规则自动生成
      validateState: '', // 是否校验成功
      validateMessage: '', // 校验失败的提示语
      // 有错误时的提示方式，message-提示信息，border-如果input设置了边框，变成呈红色，
      errorType: ['message'],
      fieldValue: '', // 获取当前子组件input的输入的值
      // 父组件的参数，在computed计算中，无法得知this.parent发生变化，故将父组件的参数值，放到data中
      parentData: {
        borderBottom: true,
        labelWidth: 90,
        labelPosition: 'left',
        labelStyle: {},
        labelAlign: 'left' } };


  },
  watch: {
    validateState: function validateState(val) {
      this.broadcastInputError();
    },
    // 监听u-form组件的errorType的变化
    "uForm.errorType": function uFormErrorType(val) {
      this.errorType = val;
      this.broadcastInputError();
    } },

  computed: {
    // 计算后的label宽度，由于需要多个判断，故放到computed中
    uLabelWidth: function uLabelWidth() {
      // 如果用户设置label为空字符串(微信小程序空字符串最终会变成字符串的'true')，意味着要将label的位置宽度设置为auto
      return this.elLabelPosition == 'left' ? this.label === 'true' || this.label === '' ? 'auto' : this.$u.addUnit(this.
      elLabelWidth) : '100%';
    },
    showError: function showError() {var _this = this;
      return function (type) {
        // 如果errorType数组中含有none，或者toast提示类型
        if (_this.errorType.indexOf('none') >= 0) return false;else
        if (_this.errorType.indexOf(type) >= 0) return true;else
        return false;
      };
    },
    // label的宽度
    elLabelWidth: function elLabelWidth() {
      // label默认宽度为90，优先使用本组件的值，如果没有(如果设置为0，也算是配置了值，依然起效)，则用u-form的值
      return this.labelWidth != 0 || this.labelWidth != '' ? this.labelWidth : this.parentData.labelWidth ? this.parentData.
      labelWidth :
      90;
    },
    // label的样式
    elLabelStyle: function elLabelStyle() {
      return Object.keys(this.labelStyle).length ? this.labelStyle : this.parentData.labelStyle ? this.parentData.labelStyle :
      {};
    },
    // label的位置，左侧或者上方
    elLabelPosition: function elLabelPosition() {
      return this.labelPosition ? this.labelPosition : this.parentData.labelPosition ? this.parentData.labelPosition :
      'left';
    },
    // label的对齐方式
    elLabelAlign: function elLabelAlign() {
      return this.labelAlign ? this.labelAlign : this.parentData.labelAlign ? this.parentData.labelAlign : 'left';
    },
    // label的下划线
    elBorderBottom: function elBorderBottom() {
      // 子组件的borderBottom默认为空字符串，如果不等于空字符串，意味着子组件设置了值，优先使用子组件的值
      return this.borderBottom !== '' ? this.borderBottom : this.parentData.borderBottom ? this.parentData.borderBottom :
      true;
    } },

  methods: {
    broadcastInputError: function broadcastInputError() {
      // 子组件发出事件，第三个参数为true或者false，true代表有错误
      this.broadcast('u-input', 'on-form-item-error', this.validateState === 'error' && this.showError('border'));
    },
    // 判断是否需要required校验
    setRules: function setRules() {
      var that = this;
      // 由于人性化考虑，必填"*"号通过props的required配置，不再通过rules的规则自动生成
      // 从父组件u-form拿到当前u-form-item需要验证 的规则
      // let rules = this.getRules();
      // if (rules.length) {
      // 	this.isRequired = rules.some(rule => {
      // 		// 如果有必填项，就返回，没有的话，就是undefined
      // 		return rule.required;
      // 	});
      // }

      // blur事件
      this.$on('on-form-blur', that.onFieldBlur);
      // change事件
      this.$on('on-form-change', that.onFieldChange);
    },

    // 从u-form的rules属性中，取出当前u-form-item的校验规则
    getRules: function getRules() {
      // 父组件的所有规则
      var rules = this.parent.rules;
      rules = rules ? rules[this.prop] : [];
      // 保证返回的是一个数组形式
      return [].concat(rules || []);
    },

    // blur事件时进行表单校验
    onFieldBlur: function onFieldBlur() {
      this.validation('blur');
    },

    // change事件进行表单校验
    onFieldChange: function onFieldChange() {
      this.validation('change');
    },

    // 过滤出符合要求的rule规则
    getFilteredRule: function getFilteredRule() {var triggerType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var rules = this.getRules();
      // 整体验证表单时，triggerType为空字符串，此时返回所有规则进行验证
      if (!triggerType) return rules;
      // 历遍判断规则是否有对应的事件，比如blur，change触发等的事件
      // 使用indexOf判断，是因为某些时候设置的验证规则的trigger属性可能为多个，比如['blur','change']
      // 某些场景可能的判断规则，可能不存在trigger属性，故先判断是否存在此属性
      return rules.filter(function (res) {return res.trigger && res.trigger.indexOf(triggerType) !== -1;});
    },

    // 校验数据
    validation: function validation(trigger) {var _this2 = this;var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      // 检验之间，先获取需要校验的值
      this.fieldValue = this.parent.model[this.prop];
      // blur和change是否有当前方式的校验规则
      var rules = this.getFilteredRule(trigger);
      // 判断是否有验证规则，如果没有规则，也调用回调方法，否则父组件u-form会因为
      // 对count变量的统计错误而无法进入上一层的回调
      if (!rules || rules.length === 0) {
        return callback('');
      }
      // 设置当前的装填，标识为校验中
      this.validateState = 'validating';
      // 调用async-validator的方法
      var validator = new _asyncValidator.default(_defineProperty({},
      this.prop, rules));

      validator.validate(_defineProperty({},
      this.prop, this.fieldValue),
      {
        firstFields: true },
      function (errors, fields) {
        // 记录状态和报错信息
        _this2.validateState = !errors ? 'success' : 'error';
        _this2.validateMessage = errors ? errors[0].message : '';
        // 调用回调方法
        callback(_this2.validateMessage);
      });
    },

    // 清空当前的u-form-item
    resetField: function resetField() {
      this.parent.model[this.prop] = this.initialValue;
      // 设置为`success`状态，只是为了清空错误标记
      this.validateState = 'success';
    } },


  // 组件创建完成时，将当前实例保存到u-form中
  mounted: function mounted() {var _this3 = this;
    // 支付宝、头条小程序不支持provide/inject，所以使用这个方法获取整个父组件，在created定义，避免循环应用
    this.parent = this.$u.$parent.call(this, 'u-form');
    if (this.parent) {
      // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
      Object.keys(this.parentData).map(function (key) {
        _this3.parentData[key] = _this3.parent[key];
      });
      // 如果没有传入prop，或者uForm为空(如果u-form-input单独使用，就不会有uForm注入)，就不进行校验
      if (this.prop) {
        // 将本实例添加到父组件中
        this.parent.fields.push(this);
        this.errorType = this.parent.errorType;
        // 设置初始值
        this.initialValue = this.fieldValue;
        // 添加表单校验，这里必须要写在$nextTick中，因为u-form的rules是通过ref手动传入的
        // 不在$nextTick中的话，可能会造成执行此处代码时，父组件还没通过ref把规则给u-form，导致规则为空
        this.$nextTick(function () {
          _this3.setRules();
        });
      }
    }
  },

  // 组件销毁前，将实例从u-form的缓存中移除
  beforeDestroy: function beforeDestroy() {var _this4 = this;
    // 如果当前没有prop的话表示当前不要进行删除（因为没有注入）
    if (this.parent && this.prop) {
      this.parent.fields.map(function (item, index) {
        if (item === _this4) _this4.parent.fields.splice(index, 1);
      });
    }
  } };exports.default = _default2;

/***/ }),
/* 47 */
/*!****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/util/emitter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 递归使用 call 方式this指向
                                                                                                      * @param componentName // 需要找的组件的名称
                                                                                                      * @param eventName // 事件名称
                                                                                                      * @param params // 需要传递的参数
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * 派发 (向上查找) (一个)
              * @param componentName // 需要找的组件的名称
              * @param eventName // 事件名称
              * @param params // 需要传递的参数
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * 广播 (向下查找) (广播多个)
        * @param componentName // 需要找的组件的名称
        * @param eventName // 事件名称
        * @param params // 需要传递的参数
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ }),
/* 48 */
/*!************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/util/async-validator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"VUE_APP_NAME":"My-App","VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}) && "development" !== 'production' && typeof window !==
'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        __f__("warn", type, errors, " at node_modules/uview-ui/libs/util/async-validator.js:30");
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;}

    });

    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }

    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors) }) :
        resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results) }) :
        resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField };

  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
   *  Rule for validating required fields.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
   *  Rule for validating whitespace.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i };

var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function _float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear ===
    'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  } };

/**
        *  Rule for validating the type of a value.
        *
        *  @param rule The validation rule.
        *  @param value The value of the field on the source object.
        *  @param source The source object being validated.
        *  @param errors An array of errors that this rule may add
        *  validation errors to.
        *  @param options The validation options.
        *  @param options.messages The validation messages.
        */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
   *  Rule for validating minimum and maximum allowed values.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
                    *  Rule for validating a value exists in an enumerable list.
                    *
                    *  @param rule The validation rule.
                    *  @param value The value of the field on the source object.
                    *  @param source The source object being validated.
                    *  @param errors An array of errors that this rule may add
                    *  validation errors to.
                    *  @param options The validation options.
                    *  @param options.messages The validation messages.
                    */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
   *  Rule for validating a regular expression pattern.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1 };


/**
                         *  Performs validation for string types.
                         *
                         *  @param rule The validation rule.
                         *  @param value The value of the field on the source object.
                         *  @param callback The callback function.
                         *  @param source The source object being validated.
                         *  @param options The validation options.
                         *  @param options.messages The validation messages.
                         */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
   *  Validates a function.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a boolean.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates the regular expression type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is an integer.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is a floating point number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an array.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an object.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
                      *  Validates an enumerable list.
                      *
                      *  @param rule The validation rule.
                      *  @param value The value of the field on the source object.
                      *  @param callback The callback function.
                      *  @param source The source object being validated.
                      *  @param options The validation options.
                      *  @param options.messages The validation messages.
                      */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a regular expression pattern.
   *
   *  Performs validation when a rule only contains
   *  a pattern property but is not declared as a string type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      var dateObject;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Performs validation for any type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any };


function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid' },

    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s' },

    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters' },

    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s' },

    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length' },

    pattern: {
      mismatch: '%s value %s does not match pattern %s' },

    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    } };

}
var messages = newMessages();

/**
                               *  Encapsulates a validation schema.
                               *
                               *  @param descriptor An object declaring validation rules
                               *  for this schema.
                               */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule };

        } else {
          rule = _extends({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z });

      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField ===
      'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key });

      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  } };


Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;var _default =

Schema;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ 49), __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)["default"]))

/***/ }),
/* 49 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 50);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 50 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 49)))

/***/ }),
/* 51 */
/*!**************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-input/u-input.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-input.vue?vue&type=template&id=fdbb9fe6&scoped=true& */ 52);
/* harmony import */ var _u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-input.vue?vue&type=script&lang=js& */ 54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fdbb9fe6",
  null,
  false,
  _u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-input/u-input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 52 */
/*!*********************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-input/u-input.vue?vue&type=template&id=fdbb9fe6&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-input.vue?vue&type=template&id=fdbb9fe6&scoped=true& */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_template_id_fdbb9fe6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 53 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-input/u-input.vue?vue&type=template&id=fdbb9fe6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: __webpack_require__(/*! uview-ui/components/u-icon/u-icon.vue */ 14).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "u-input"),
      class: _vm._$s(0, "c", {
        "u-input--border": _vm.border,
        "u-input--error": _vm.validateState
      }),
      style: _vm._$s(0, "s", {
        padding: "0 " + (_vm.border ? 20 : 0) + "rpx",
        borderColor: _vm.borderColor,
        textAlign: _vm.inputAlign
      }),
      attrs: { _i: 0 },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.inputClick($event)
        }
      }
    },
    [
      _vm._$s(1, "i", _vm.type == "textarea")
        ? _c("textarea", {
            staticClass: _vm._$s(1, "sc", "u-input__input u-input__textarea"),
            style: _vm._$s(1, "s", [_vm.getStyle]),
            attrs: {
              value: _vm._$s(1, "a-value", _vm.defaultValue),
              placeholder: _vm._$s(1, "a-placeholder", _vm.placeholder),
              placeholderStyle: _vm._$s(
                1,
                "a-placeholderStyle",
                _vm.placeholderStyle
              ),
              disabled: _vm._$s(1, "a-disabled", _vm.disabled),
              maxlength: _vm._$s(1, "a-maxlength", _vm.inputMaxlength),
              fixed: _vm._$s(1, "a-fixed", _vm.fixed),
              focus: _vm._$s(1, "a-focus", _vm.focus),
              autoHeight: _vm._$s(1, "a-autoHeight", _vm.autoHeight),
              "selection-end": _vm._$s(1, "a-selection-end", _vm.uSelectionEnd),
              "selection-start": _vm._$s(
                1,
                "a-selection-start",
                _vm.uSelectionStart
              ),
              "cursor-spacing": _vm._$s(
                1,
                "a-cursor-spacing",
                _vm.getCursorSpacing
              ),
              "show-confirm-bar": _vm._$s(
                1,
                "a-show-confirm-bar",
                _vm.showConfirmbar
              ),
              _i: 1
            },
            on: {
              input: _vm.handleInput,
              blur: _vm.handleBlur,
              focus: _vm.onFocus,
              confirm: _vm.onConfirm
            }
          })
        : _c("input", {
            staticClass: _vm._$s(2, "sc", "u-input__input"),
            style: _vm._$s(2, "s", [_vm.getStyle]),
            attrs: {
              type: _vm._$s(
                2,
                "a-type",
                _vm.type == "password" ? "text" : _vm.type
              ),
              value: _vm._$s(2, "a-value", _vm.defaultValue),
              password: _vm._$s(
                2,
                "a-password",
                _vm.type == "password" && !_vm.showPassword
              ),
              placeholder: _vm._$s(2, "a-placeholder", _vm.placeholder),
              placeholderStyle: _vm._$s(
                2,
                "a-placeholderStyle",
                _vm.placeholderStyle
              ),
              disabled: _vm._$s(
                2,
                "a-disabled",
                _vm.disabled || _vm.type === "select"
              ),
              maxlength: _vm._$s(2, "a-maxlength", _vm.inputMaxlength),
              focus: _vm._$s(2, "a-focus", _vm.focus),
              confirmType: _vm._$s(2, "a-confirmType", _vm.confirmType),
              "cursor-spacing": _vm._$s(
                2,
                "a-cursor-spacing",
                _vm.getCursorSpacing
              ),
              "selection-end": _vm._$s(2, "a-selection-end", _vm.uSelectionEnd),
              "selection-start": _vm._$s(
                2,
                "a-selection-start",
                _vm.uSelectionStart
              ),
              "show-confirm-bar": _vm._$s(
                2,
                "a-show-confirm-bar",
                _vm.showConfirmbar
              ),
              _i: 2
            },
            on: {
              focus: _vm.onFocus,
              blur: _vm.handleBlur,
              input: _vm.handleInput,
              confirm: _vm.onConfirm
            }
          }),
      _c(
        "view",
        {
          staticClass: _vm._$s(3, "sc", "u-input__right-icon u-flex"),
          attrs: { _i: 3 }
        },
        [
          _vm._$s(4, "i", _vm.clearable && _vm.value != "" && _vm.focused)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(
                    4,
                    "sc",
                    "u-input__right-icon__clear u-input__right-icon__item"
                  ),
                  attrs: { _i: 4 },
                  on: { click: _vm.onClear }
                },
                [
                  _c("u-icon", {
                    attrs: {
                      size: "32",
                      name: "close-circle-fill",
                      color: "#c0c4cc",
                      _i: 5
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._$s(6, "i", _vm.passwordIcon && _vm.type == "password")
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(
                    6,
                    "sc",
                    "u-input__right-icon__clear u-input__right-icon__item"
                  ),
                  attrs: { _i: 6 }
                },
                [
                  _c("u-icon", {
                    attrs: {
                      size: "32",
                      name: !_vm.showPassword ? "eye" : "eye-fill",
                      color: "#c0c4cc",
                      _i: 7
                    },
                    on: {
                      click: function($event) {
                        _vm.showPassword = !_vm.showPassword
                      }
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._$s(8, "i", _vm.type == "select")
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(
                    8,
                    "sc",
                    "u-input__right-icon--select u-input__right-icon__item"
                  ),
                  class: _vm._$s(8, "c", {
                    "u-input__right-icon--select--reverse": _vm.selectOpen
                  }),
                  attrs: { _i: 8 }
                },
                [
                  _c("u-icon", {
                    attrs: {
                      name: "arrow-down-fill",
                      size: "26",
                      color: "#c0c4cc",
                      _i: 9
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 54 */
/*!***************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-input/u-input.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-input.vue?vue&type=script&lang=js& */ 55);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-input/u-input.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































































var _emitter = _interopRequireDefault(__webpack_require__(/*! ../../libs/util/emitter.js */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * input 输入框
 * @description 此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件u-form而设计的，利用它可以快速实现表单验证，输入内容，下拉选择等功能。
 * @tutorial http://uviewui.com/components/input.html
 * @property {String} type 模式选择，见官网说明
 * @property {Boolean} clearable 是否显示右侧的清除图标(默认true)
 * @property {} v-model 用于双向绑定输入框的值
 * @property {String} input-align 输入框文字的对齐方式(默认left)
 * @property {String} placeholder placeholder显示值(默认 '请输入内容')
 * @property {Boolean} disabled 是否禁用输入框(默认false)
 * @property {String Number} maxlength 输入框的最大可输入长度(默认140)
 * @property {String Number} selection-start 光标起始位置，自动聚焦时有效，需与selection-end搭配使用（默认-1）
 * @property {String Number} maxlength 光标结束位置，自动聚焦时有效，需与selection-start搭配使用（默认-1）
 * @property {String Number} cursor-spacing 指定光标与键盘的距离，单位px(默认0)
 * @property {String} placeholderStyle placeholder的样式，字符串形式，如"color: red;"(默认 "color: #c0c4cc;")
 * @property {String} confirm-type 设置键盘右下角按钮的文字，仅在type为text时生效(默认done)
 * @property {Object} custom-style 自定义输入框的样式，对象形式
 * @property {Boolean} focus 是否自动获得焦点(默认false)
 * @property {Boolean} fixed 如果type为textarea，且在一个"position:fixed"的区域，需要指明为true(默认false)
 * @property {Boolean} password-icon type为password时，是否显示右侧的密码查看图标(默认true)
 * @property {Boolean} border 是否显示边框(默认false)
 * @property {String} border-color 输入框的边框颜色(默认#dcdfe6)
 * @property {Boolean} auto-height 是否自动增高输入区域，type为textarea时有效(默认true)
 * @property {String Number} height 高度，单位rpx(text类型时为70，textarea时为100)
 * @example <u-input v-model="value" :type="type" :border="border" />
 */var _default2 = { name: 'u-input', mixins: [_emitter.default], props: { value: { type: [String, Number], default: '' }, // 输入框的类型，textarea，text，number
    type: { type: String, default: 'text' }, inputAlign: { type: String, default: 'left' }, placeholder: { type: String, default: '请输入内容' }, disabled: { type: Boolean, default: false }, maxlength: { type: [Number, String], default: 140 }, placeholderStyle: { type: String, default: 'color: #c0c4cc;' }, confirmType: { type: String, default: 'done' }, // 输入框的自定义样式
    customStyle: { type: Object, default: function _default() {return {};} }, // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
    fixed: { type: Boolean, default: false }, // 是否自动获得焦点
    focus: { type: Boolean, default: false }, // 密码类型时，是否显示右侧的密码图标
    passwordIcon: { type: Boolean, default: true }, // input|textarea是否显示边框
    border: { type: Boolean, default: false }, // 输入框的边框颜色
    borderColor: { type: String, default: '#dcdfe6' }, autoHeight: { type: Boolean, default: true }, // type=select时，旋转右侧的图标，标识当前处于打开还是关闭select的状态
    // open-打开，close-关闭
    selectOpen: { type: Boolean, default: false }, // 高度，单位rpx
    height: {
      type: [Number, String],
      default: '' },

    // 是否可清空
    clearable: {
      type: Boolean,
      default: true },

    // 指定光标与键盘的距离，单位 px
    cursorSpacing: {
      type: [Number, String],
      default: 0 },

    // 光标起始位置，自动聚焦时有效，需与selection-end搭配使用
    selectionStart: {
      type: [Number, String],
      default: -1 },

    // 光标结束位置，自动聚焦时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [Number, String],
      default: -1 },

    // 是否自动去除两端的空格
    trim: {
      type: Boolean,
      default: true },

    // 是否显示键盘上方带有”完成“按钮那一栏
    showConfirmbar: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      defaultValue: this.value,
      inputHeight: 70, // input的高度
      textareaHeight: 100, // textarea的高度
      validateState: false, // 当前input的验证状态，用于错误时，边框是否改为红色
      focused: false, // 当前是否处于获得焦点的状态
      showPassword: false, // 是否预览密码
      lastValue: '' // 用于头条小程序，判断@input中，前后的值是否发生了变化，因为头条中文下，按下键没有输入内容，也会触发@input时间
    };
  },
  watch: {
    value: function value(nVal, oVal) {
      this.defaultValue = nVal;
      // 当值发生变化，且为select类型时(此时input被设置为disabled，不会触发@input事件)，模拟触发@input事件
      if (nVal != oVal && this.type == 'select') this.handleInput({
        detail: {
          value: nVal } });


    } },

  computed: {
    // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，给用户可以传入字符串数值
    inputMaxlength: function inputMaxlength() {
      return Number(this.maxlength);
    },
    getStyle: function getStyle() {
      var style = {};
      // 如果没有自定义高度，就根据type为input还是textare来分配一个默认的高度
      style.minHeight = this.height ? this.height + 'rpx' : this.type == 'textarea' ?
      this.textareaHeight + 'rpx' : this.inputHeight + 'rpx';
      style = Object.assign(style, this.customStyle);
      return style;
    },
    //
    getCursorSpacing: function getCursorSpacing() {
      return Number(this.cursorSpacing);
    },
    // 光标起始位置
    uSelectionStart: function uSelectionStart() {
      return String(this.selectionStart);
    },
    // 光标结束位置
    uSelectionEnd: function uSelectionEnd() {
      return String(this.selectionEnd);
    } },

  created: function created() {
    // 监听u-form-item发出的错误事件，将输入框边框变红色
    this.$on('on-form-item-error', this.onFormItemError);
  },
  methods: {
    /**
              * change 事件
              * @param event
              */
    handleInput: function handleInput(event) {var _this = this;
      var value = event.detail.value;
      // 判断是否去除空格
      if (this.trim) value = this.$u.trim(value);
      // vue 原生的方法 return 出去
      this.$emit('input', value);
      // 当前model 赋值
      this.defaultValue = value;
      // 过一个生命周期再发送事件给u-form-item，否则this.$emit('input')更新了父组件的值，但是微信小程序上
      // 尚未更新到u-form-item，导致获取的值为空，从而校验混论
      // 这里不能延时时间太短，或者使用this.$nextTick，否则在头条上，会造成混乱
      setTimeout(function () {
        // 头条小程序由于自身bug，导致中文下，每按下一个键(尚未完成输入)，都会触发一次@input，导致错误，这里进行判断处理




        // 将当前的值发送到 u-form-item 进行校验
        _this.dispatch('u-form-item', 'on-form-change', value);
      }, 40);
    },
    /**
        * blur 事件
        * @param event
        */
    handleBlur: function handleBlur(event) {var _this2 = this;
      // 最开始使用的是监听图标@touchstart事件，自从hx2.8.4后，此方法在微信小程序出错
      // 这里改为监听点击事件，手点击清除图标时，同时也发生了@blur事件，导致图标消失而无法点击，这里做一个延时
      setTimeout(function () {
        _this2.focused = false;
      }, 100);
      // vue 原生的方法 return 出去
      this.$emit('blur', event.detail.value);
      setTimeout(function () {
        // 头条小程序由于自身bug，导致中文下，每按下一个键(尚未完成输入)，都会触发一次@input，导致错误，这里进行判断处理




        // 将当前的值发送到 u-form-item 进行校验
        _this2.dispatch('u-form-item', 'on-form-blur', event.detail.value);
      }, 40);
    },
    onFormItemError: function onFormItemError(status) {
      this.validateState = status;
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus');
    },
    onConfirm: function onConfirm(e) {
      this.$emit('confirm', e.detail.value);
    },
    onClear: function onClear(event) {
      this.$emit('input', '');
    },
    inputClick: function inputClick() {
      this.$emit('click');
    } } };exports.default = _default2;

/***/ }),
/* 56 */
/*!*******************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/login/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 57);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1zQixDQUFnQixzc0JBQUcsRUFBQyIsImZpbGUiOiI1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/login/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _md = _interopRequireDefault(__webpack_require__(/*! uview-ui/libs/function/md5 */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { tel: '', provider: [], is_mobile: true, username: \"\", password: \"\" };}, computed: { inputStyle: function inputStyle() {var style = {};if (this.tel) {style.color = \"#fff\";style.backgroundColor = \"#1E90FF\";}return style;}, inputStyles: function inputStyles() {var style = {};if (this.username != \"\" & this.password != \"\") {style.color = \"#fff\";style.backgroundColor = \"#1E90FF\";}return style;} }, onLoad: function onLoad() {var _this = this;uni.getProvider({ service: \"oauth\", success: function success(res) {_this.provider = res.provider;} });}, methods: { submit: function submit() {if (this.$u.test.mobile(this.tel)) {this.$u.route({ url: 'pages/user-center/login/code' });}}, submit_u: function submit_u() {var _this2 = this;this.$reqs.login({ username: this.username, password: _md.default.md5(this.password) }).\n      then(function (res) {\n        _this2.$apis.reLaunch({\n          url: '../my-page/my-page' });\n\n        __f__(\"log\", res, \" at pages/user-center/login/index.vue:103\");\n      });\n    },\n    goregister: function goregister() {\n      uni.navigateTo({\n        url: \"../register/register\" });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvbG9naW4vaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREEsNEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsT0FEQSxFQUVBLFlBRkEsRUFHQSxlQUhBLEVBSUEsWUFKQSxFQUtBLFlBTEEsR0FPQSxDQVRBLEVBVUEsWUFDQSxVQURBLHdCQUNBLENBQ0EsZUFDQSxlQUNBLHFCQUNBLGtDQUNBLENBQ0EsYUFDQSxDQVJBLEVBU0EsV0FUQSx5QkFTQSxDQUNBLGVBQ0EsZ0RBQ0EscUJBQ0Esa0NBQ0EsQ0FDQSxhQUNBLENBaEJBLEVBVkEsRUE0QkEsTUE1QkEsb0JBNEJBLGtCQUNBLGtCQUNBLGdCQURBLEVBRUEsZ0NBQ0EsOEJBQ0EsQ0FKQSxJQU1BLENBbkNBLEVBb0NBLFdBQ0EsTUFEQSxvQkFDQSxDQUNBLG9DQUNBLGdCQUNBLG1DQURBLElBR0EsQ0FDQSxDQVBBLEVBUUEsUUFSQSxzQkFRQSxtQkFDQSxtQkFDQSx1QkFEQSxFQUVBLHdDQUZBO0FBR0EsVUFIQSxDQUdBO0FBQ0E7QUFDQSxtQ0FEQTs7QUFHQTtBQUNBLE9BUkE7QUFTQSxLQWxCQTtBQW1CQSxjQW5CQSx3QkFtQkE7QUFDQTtBQUNBLG1DQURBOztBQUdBLEtBdkJBLEVBcENBLEUiLCJmaWxlIjoiNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ3cmFwXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcFwiPjwvdmlldz5cclxuXHRcdDwhLS0g5biQ5Y+35a+G56CB55m75b2VIC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCIgdi1pZj1cImlzX21vYmlsZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+5qyi6L+O55m75b2V5LmQ5aSaLjwvdmlldz5cclxuXHRcdFx0PHUtZm9ybT5cclxuXHRcdFx0XHQ8dS1mb3JtLWl0ZW0+XHJcblx0XHRcdFx0XHQ8dS1pbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInRlbFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5omL5py65Y+3L+W4kOWPt+aYteensC/pgq7nrrFcIiAvPlxyXG5cdFx0XHRcdDwvdS1mb3JtLWl0ZW0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXBzXCI+5pyq5rOo5YaM55qE5omL5Y+36aqM6K+B5ZCO5bCG6Ieq5Yqo5Yib5bu65LmQ5aSa5biQ5Y+3PC92aWV3PlxyXG5cdFx0XHRcdDxidXR0b24gQHRhcD1cInN1Ym1pdFwiIDpzdHlsZT1cIltpbnB1dFN0eWxlXVwiIGNsYXNzPVwiZ2V0Q2FwdGNoYVwiPuiOt+WPluefreS/oemqjOivgeeggTwvYnV0dG9uPlxyXG5cdFx0XHQ8L3UtZm9ybT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhbHRlcm5hdGl2ZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFzc3dvcmRcIiBAY2xpY2s9XCJpc19tb2JpbGUgPSBmYWxzZVwiPuWvhueggeeZu+W9lTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImlzc3VlXCIgQGNsaWNrPVwiZ29yZWdpc3RlclwiPueCueWHu+azqOWGjDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDnn63kv6HnmbvlvZUgLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIiB2LWlmPVwiIWlzX21vYmlsZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+5qyi6L+O55m75b2V5LmQ5aSaLjwvdmlldz5cclxuXHRcdFx0PHUtZm9ybT5cclxuXHRcdFx0XHQ8dS1mb3JtLWl0ZW0+XHJcblx0XHRcdFx0XHQ8dS1pbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5omL5py65Y+3L+mCrueusVwiIC8+XHJcblx0XHRcdFx0PC91LWZvcm0taXRlbT5cclxuXHRcdFx0XHQ8dS1mb3JtLWl0ZW0+XHJcblx0XHRcdFx0XHQ8dS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpei0puaIt+WvhueggVwiIC8+XHJcblx0XHRcdFx0PC91LWZvcm0taXRlbT5cclxuXHRcdFx0XHQ8YnV0dG9uIEB0YXA9XCJzdWJtaXRfdVwiIDpzdHlsZT1cIltpbnB1dFN0eWxlc11cIiBjbGFzcz1cImdldENhcHRjaGFcIj7ngrnlh7vnmbvlvZU8L2J1dHRvbj5cclxuXHRcdFx0PC91LWZvcm0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYWx0ZXJuYXRpdmVcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInBhc3N3b3JkXCIgQGNsaWNrPVwiaXNfbW9iaWxlID0gdHJ1ZVwiPumqjOivgeeggeeZu+W9lTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImlzc3VlXCIgQGNsaWNrPVwiZ29yZWdpc3RlclwiPueCueWHu+azqOWGjDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJidXR0b21cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJsb2dpblR5cGVcIj5cclxuXHRcdFx0XHQ8IS0tIOeZu+W9leaWueW8j+W+heWBmiAtLT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImhpbnRcIj5cclxuXHRcdFx0XHTnmbvlvZXku6PooajlkIzmhI9cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpbmtcIj7kuZDlpJrnlKjmiLfljY/orq7jgIHpmpDnp4HmlL/nrZbvvIw8L3RleHQ+XHJcblx0XHRcdFx05bm25o6I5p2D5L2/55So5oKo55qE5LmQ5aSa6LSm5Y+35L+h5oGv77yI5aaC5pi156ew44CB5aS05YOP44CB5pS26I635Zyw5Z2A77yJ5Lul5L6/5oKo57uf5LiA566h55CGXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBtZDVMaWJzIGZyb20gXCJ1dmlldy11aS9saWJzL2Z1bmN0aW9uL21kNVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGVsOiAnJyxcclxuXHRcdFx0XHRwcm92aWRlcjogW10sXHJcblx0XHRcdFx0aXNfbW9iaWxlOiB0cnVlLFxyXG5cdFx0XHRcdHVzZXJuYW1lOiBcIlwiLFxyXG5cdFx0XHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0aW5wdXRTdHlsZSgpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB7fTtcclxuXHRcdFx0XHRpZiAodGhpcy50ZWwpIHtcclxuXHRcdFx0XHRcdHN0eWxlLmNvbG9yID0gXCIjZmZmXCI7XHJcblx0XHRcdFx0XHRzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxRTkwRkZcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbnB1dFN0eWxlcygpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB7fTtcclxuXHRcdFx0XHRpZiAodGhpcy51c2VybmFtZSAhPSBcIlwiICYgdGhpcy5wYXNzd29yZCAhPSBcIlwiKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5jb2xvciA9IFwiI2ZmZlwiO1xyXG5cdFx0XHRcdFx0c3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMUU5MEZGXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dW5pLmdldFByb3ZpZGVyKHtcclxuXHRcdFx0XHRzZXJ2aWNlOiBcIm9hdXRoXCIsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMucHJvdmlkZXIgPSByZXMucHJvdmlkZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRzdWJtaXQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuJHUudGVzdC5tb2JpbGUodGhpcy50ZWwpKSB7XHJcblx0XHRcdFx0XHR0aGlzLiR1LnJvdXRlKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAncGFnZXMvdXNlci1jZW50ZXIvbG9naW4vY29kZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJtaXRfdSgpIHtcclxuXHRcdFx0XHR0aGlzLiRyZXFzLmxvZ2luKHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IG1kNUxpYnMubWQ1KHRoaXMucGFzc3dvcmQpXHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy4kYXBpcy5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHRcdHVybDonLi4vbXktcGFnZS9teS1wYWdlJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnb3JlZ2lzdGVyKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogXCIuLi9yZWdpc3Rlci9yZWdpc3RlclwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC53cmFwIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblxyXG5cdFx0LmNvbnRlbnQge1xyXG5cdFx0XHR3aWR0aDogNjAwcnB4O1xyXG5cdFx0XHRtYXJnaW46IDgwcnB4IGF1dG8gMDtcclxuXHJcblx0XHRcdC50aXRsZSB7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRmb250LXNpemU6IDYwcnB4O1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTAwcnB4O1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDIwMHJweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aW5wdXQge1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBycHg7XHJcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDZycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA3MHJweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnRpcHMge1xyXG5cdFx0XHRcdGNvbG9yOiAkdS10eXBlLWluZm87XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNjBycHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogOHJweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmdldENhcHRjaGEge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDI1NSwgMjU1KTtcclxuXHRcdFx0XHRjb2xvcjogJHUtdGlwcy1jb2xvcjtcclxuXHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAxMnJweCAwO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDIwcnB4O1xyXG5cclxuXHRcdFx0XHQmOjphZnRlciB7XHJcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuYWx0ZXJuYXRpdmUge1xyXG5cdFx0XHRcdGNvbG9yOiAkdS10aXBzLWNvbG9yO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDMwcnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmJ1dHRvbSB7XHJcblx0XHRcdC5sb2dpblR5cGUge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0cGFkZGluZzogMzUwcnB4IDE1MHJweCAxNTBycHggMTUwcnB4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0XHRcdFx0Lml0ZW0ge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICR1LWNvbnRlbnQtY29sb3I7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDI4cnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmhpbnQge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDIwcnB4IDQwcnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjBycHg7XHJcblx0XHRcdFx0Y29sb3I6ICR1LXRpcHMtY29sb3I7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRib3R0b206IDEwMHJweDtcclxuXHJcblx0XHRcdFx0Lmxpbmsge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHJnYigxMzUsIDIwNiwgMjUwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC51LWZvcm0taXRlbSB7XHJcblx0XHRwYWRkaW5nOiAxMnJweCAwICFpbXBvcnRhbnQ7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/md5.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
     * Configurable variables. You may need to tweak these to be compatible with
     * the server-side, but the defaults work in most cases.
     */
var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */

/*
                                                                               * These are the functions you'll usually want to call
                                                                               * They take string arguments and return either hex or base-64 encoded strings
                                                                               */
function hex_md5(s) {return rstr2hex(rstr_md5(str2rstr_utf8(s)));}
function b64_md5(s) {return rstr2b64(rstr_md5(str2rstr_utf8(s)));}
function any_md5(s, e) {return rstr2any(rstr_md5(str2rstr_utf8(s)), e);}
function hex_hmac_md5(k, d)
{return rstr2hex(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));}
function b64_hmac_md5(k, d)
{return rstr2b64(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)));}
function any_hmac_md5(k, d, e)
{return rstr2any(rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d)), e);}

/*
                                                                          * Perform a simple self-test to see if the VM is working
                                                                          */
function md5_vm_test()
{
  return hex_md5("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72";
}

/*
   * Calculate the MD5 of a raw string
   */
function rstr_md5(s)
{
  return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
}

/*
   * Calculate the HMAC-MD5, of a key and some data (raw strings)
   */
function rstr_hmac_md5(key, data)
{
  var bkey = rstr2binl(key);
  if (bkey.length > 16) bkey = binl_md5(bkey, key.length * 8);

  var ipad = Array(16),opad = Array(16);
  for (var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
}

/*
   * Convert a raw string to a hex string
   */
function rstr2hex(input)
{
  try {hexcase;} catch (e) {hexcase = 0;}
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var output = "";
  var x;
  for (var i = 0; i < input.length; i++)
  {
    x = input.charCodeAt(i);
    output += hex_tab.charAt(x >>> 4 & 0x0F) +
    hex_tab.charAt(x & 0x0F);
  }
  return output;
}

/*
   * Convert a raw string to a base-64 string
   */
function rstr2b64(input)
{
  try {b64pad;} catch (e) {b64pad = '';}
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var output = "";
  var len = input.length;
  for (var i = 0; i < len; i += 3)
  {
    var triplet = input.charCodeAt(i) << 16 | (
    i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (
    i + 2 < len ? input.charCodeAt(i + 2) : 0);
    for (var j = 0; j < 4; j++)
    {
      if (i * 8 + j * 6 > input.length * 8) output += b64pad;else
      output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
    }
  }
  return output;
}

/*
   * Convert a raw string to an arbitrary string encoding
   */
function rstr2any(input, encoding)
{
  var divisor = encoding.length;
  var i, j, q, x, quotient;

  /* Convert to an array of 16-bit big-endian values, forming the dividend */
  var dividend = Array(Math.ceil(input.length / 2));
  for (i = 0; i < dividend.length; i++)
  {
    dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
  }

  /*
     * Repeatedly perform a long division. The binary array forms the dividend,
     * the length of the encoding is the divisor. Once computed, the quotient
     * forms the dividend for the next step. All remainders are stored for later
     * use.
     */
  var full_length = Math.ceil(input.length * 8 / (
  Math.log(encoding.length) / Math.log(2)));
  var remainders = Array(full_length);
  for (j = 0; j < full_length; j++)
  {
    quotient = Array();
    x = 0;
    for (i = 0; i < dividend.length; i++)
    {
      x = (x << 16) + dividend[i];
      q = Math.floor(x / divisor);
      x -= q * divisor;
      if (quotient.length > 0 || q > 0)
      quotient[quotient.length] = q;
    }
    remainders[j] = x;
    dividend = quotient;
  }

  /* Convert the remainders to the output string */
  var output = "";
  for (i = remainders.length - 1; i >= 0; i--) {
    output += encoding.charAt(remainders[i]);}

  return output;
}

/*
   * Encode a string as utf-8.
   * For efficiency, this assumes the input is valid utf-16.
   */
function str2rstr_utf8(input)
{
  var output = "";
  var i = -1;
  var x, y;

  while (++i < input.length)
  {
    /* Decode utf-16 surrogate pairs */
    x = input.charCodeAt(i);
    y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
    if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF)
    {
      x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
      i++;
    }

    /* Encode output as utf-8 */
    if (x <= 0x7F)
    output += String.fromCharCode(x);else
    if (x <= 0x7FF)
    output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F,
    0x80 | x & 0x3F);else
    if (x <= 0xFFFF)
    output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F,
    0x80 | x >>> 6 & 0x3F,
    0x80 | x & 0x3F);else
    if (x <= 0x1FFFFF)
    output += String.fromCharCode(0xF0 | x >>> 18 & 0x07,
    0x80 | x >>> 12 & 0x3F,
    0x80 | x >>> 6 & 0x3F,
    0x80 | x & 0x3F);
  }
  return output;
}

/*
   * Encode a string as utf-16
   */
function str2rstr_utf16le(input)
{
  var output = "";
  for (var i = 0; i < input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i) & 0xFF,
    input.charCodeAt(i) >>> 8 & 0xFF);}
  return output;
}

function str2rstr_utf16be(input)
{
  var output = "";
  for (var i = 0; i < input.length; i++) {
    output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF,
    input.charCodeAt(i) & 0xFF);}
  return output;
}

/*
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   */
function rstr2binl(input)
{
  var output = Array(input.length >> 2);
  for (var i = 0; i < output.length; i++) {
    output[i] = 0;}
  for (var i = 0; i < input.length * 8; i += 8) {
    output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << i % 32;}
  return output;
}

/*
   * Convert an array of little-endian words to a string
   */
function binl2rstr(input)
{
  var output = "";
  for (var i = 0; i < input.length * 32; i += 8) {
    output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xFF);}
  return output;
}

/*
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   */
function binl_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;

  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
}

/*
   * These functions implement the four basic operations the algorithm uses.
   */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xFFFF;
}

/*
   * Bitwise rotate a 32-bit number to the left.
   */
function bit_rol(num, cnt)
{
  return num << cnt | num >>> 32 - cnt;
}

module.exports = {
  md5: function md5(str) {
    return hex_md5(str);
  } };

/***/ }),
/* 59 */
/*!******************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/login/code.vue?mpType=page ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code.vue?vue&type=template&id=7eaa0258&scoped=true&mpType=page */ 60);\n/* harmony import */ var _code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.vue?vue&type=script&lang=js&mpType=page */ 67);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7eaa0258\",\n  null,\n  false,\n  _code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user-center/login/code.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlYWEwMjU4JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdlYWEwMjU4XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXItY2VudGVyL2xvZ2luL2NvZGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/login/code.vue?vue&type=template&id=7eaa0258&scoped=true&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./code.vue?vue&type=template&id=7eaa0258&scoped=true&mpType=page */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_template_id_7eaa0258_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 61 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/login/code.vue?vue&type=template&id=7eaa0258&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uMessageInput: __webpack_require__(/*! uview-ui/components/u-message-input/u-message-input.vue */ 62)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "wrap"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "key-input"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "title"),
            attrs: { _i: 2 }
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "tips"),
            attrs: { _i: 3 }
          }),
          _c("u-message-input", {
            attrs: {
              focus: true,
              value: _vm.value,
              mode: "bottomLine",
              maxlength: _vm.maxlength,
              _i: 4
            },
            on: { change: _vm.change, finish: _vm.finish }
          }),
          _c("text", {
            class: _vm._$s(5, "c", { error: _vm.error }),
            attrs: { _i: 5 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(6, "sc", "captcha"), attrs: { _i: 6 } },
            [
              _c("text", {
                class: _vm._$s(7, "c", { noCaptcha: _vm.show }),
                attrs: { _i: 7 },
                on: { click: _vm.noCaptcha }
              }),
              _c(
                "text",
                {
                  class: _vm._$s(8, "c", { regain: !_vm.show }),
                  attrs: { _i: 8 }
                },
                [_vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.second)))]
              )
            ]
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 62 */
/*!******************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-message-input/u-message-input.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-message-input.vue?vue&type=template&id=1817e481&scoped=true& */ 63);
/* harmony import */ var _u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-message-input.vue?vue&type=script&lang=js& */ 65);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1817e481",
  null,
  false,
  _u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/uview-ui/components/u-message-input/u-message-input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 63 */
/*!*************************************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-message-input/u-message-input.vue?vue&type=template&id=1817e481&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-message-input.vue?vue&type=template&id=1817e481&scoped=true& */ 64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_template_id_1817e481_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 64 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-message-input/u-message-input.vue?vue&type=template&id=1817e481&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "u-char-box"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "u-char-flex"), attrs: { _i: 1 } },
        [
          _c("input", {
            staticClass: _vm._$s(2, "sc", "u-input"),
            attrs: {
              disabled: _vm._$s(2, "a-disabled", _vm.disabledKeyboard),
              value: _vm._$s(2, "a-value", _vm.valueModel),
              focus: _vm._$s(2, "a-focus", _vm.focus),
              maxlength: _vm._$s(2, "a-maxlength", _vm.maxlength),
              _i: 2
            },
            on: { input: _vm.getVal }
          }),
          _vm._l(_vm._$s(3, "f", { forItems: _vm.loopCharArr }), function(
            item,
            index,
            $20,
            $30
          ) {
            return _c(
              "view",
              { key: _vm._$s(3, "f", { forIndex: $20, key: index }) },
              [
                _c(
                  "view",
                  {
                    class: _vm._$s("4-" + $30, "c", [
                      _vm.breathe && _vm.charArrLength == index
                        ? "u-breathe"
                        : "",
                      "u-char-item",
                      _vm.charArrLength === index && _vm.mode == "box"
                        ? "u-box-active"
                        : "",
                      _vm.mode === "box" ? "u-box" : ""
                    ]),
                    style: _vm._$s("4-" + $30, "s", {
                      fontWeight: _vm.bold ? "bold" : "normal",
                      fontSize: _vm.fontSize + "rpx",
                      width: _vm.width + "rpx",
                      height: _vm.width + "rpx",
                      color: _vm.inactiveColor,
                      borderColor:
                        _vm.charArrLength === index && _vm.mode == "box"
                          ? _vm.activeColor
                          : _vm.inactiveColor
                    }),
                    attrs: { _i: "4-" + $30 }
                  },
                  [
                    _vm._$s("5-" + $30, "i", _vm.mode !== "middleLine")
                      ? _c("view", {
                          staticClass: _vm._$s(
                            "5-" + $30,
                            "sc",
                            "u-placeholder-line"
                          ),
                          style: _vm._$s("5-" + $30, "s", {
                            display:
                              _vm.charArrLength === index ? "block" : "none",
                            height: _vm.width * 0.5 + "rpx"
                          }),
                          attrs: { _i: "5-" + $30 }
                        })
                      : _vm._e(),
                    _vm._$s(
                      "6-" + $30,
                      "i",
                      _vm.mode === "middleLine" && _vm.charArrLength <= index
                    )
                      ? _c("view", {
                          staticClass: _vm._$s(
                            "6-" + $30,
                            "sc",
                            "u-middle-line"
                          ),
                          class: _vm._$s("6-" + $30, "c", [
                            _vm.breathe && _vm.charArrLength == index
                              ? "u-breathe"
                              : "",
                            _vm.charArrLength === index
                              ? "u-middle-line-active"
                              : ""
                          ]),
                          style: _vm._$s("6-" + $30, "s", {
                            height: _vm.bold ? "4px" : "2px",
                            background:
                              _vm.charArrLength === index
                                ? _vm.activeColor
                                : _vm.inactiveColor
                          }),
                          attrs: { _i: "6-" + $30 }
                        })
                      : _vm._e(),
                    _vm._$s("7-" + $30, "i", _vm.mode === "bottomLine")
                      ? _c("view", {
                          staticClass: _vm._$s(
                            "7-" + $30,
                            "sc",
                            "u-bottom-line"
                          ),
                          class: _vm._$s("7-" + $30, "c", [
                            _vm.breathe && _vm.charArrLength == index
                              ? "u-breathe"
                              : "",
                            _vm.charArrLength === index
                              ? "u-buttom-line-active"
                              : ""
                          ]),
                          style: _vm._$s("7-" + $30, "s", {
                            height: _vm.bold ? "4px" : "2px",
                            background:
                              _vm.charArrLength === index
                                ? _vm.activeColor
                                : _vm.inactiveColor
                          }),
                          attrs: { _i: "7-" + $30 }
                        })
                      : _vm._e(),
                    _vm._$s("8-" + $30, "i", !_vm.dotFill)
                      ? [
                          _vm._v(
                            _vm._$s(
                              "8-" + $30,
                              "t0-0",
                              _vm._s(
                                _vm.charArr[index] ? _vm.charArr[index] : ""
                              )
                            )
                          )
                        ]
                      : [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s("10-" + $30, "sc", "u-dot"),
                              attrs: { _i: "10-" + $30 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "10-" + $30,
                                  "t0-0",
                                  _vm._s(_vm.charArr[index] ? "●" : "")
                                )
                              )
                            ]
                          )
                        ]
                  ],
                  2
                )
              ]
            )
          })
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 65 */
/*!*******************************************************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/components/u-message-input/u-message-input.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-message-input.vue?vue&type=script&lang=js& */ 66);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_message_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 66 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/node_modules/uview-ui/components/u-message-input/u-message-input.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * messageInput 验证码输入框
 * @description 该组件一般用于验证用户短信验证码的场景，也可以结合uView的键盘组件使用
 * @tutorial https://www.uviewui.com/components/messageInput.html
 * @property {String Number} maxlength 输入字符个数（默认4）
 * @property {Boolean} dot-fill 是否用圆点填充（默认false）
 * @property {String} mode 模式选择，见上方"基本使用"说明（默认box）
 * @property {String Number} value 预置值
 * @property {Boolean} breathe 是否开启呼吸效果，见上方说明（默认true）
 * @property {Boolean} focus 是否自动获取焦点（默认false）
 * @property {Boolean} bold 字体和输入横线是否加粗（默认true）
 * @property {String Number} font-size 字体大小，单位rpx（默认60）
 * @property {String} active-color 当前激活输入框的样式（默认#2979ff）
 * @property {String} inactive-color 非激活输入框的样式，文字颜色同此值（默认#606266）
 * @property {String | Number} width 输入框宽度，单位rpx，高等于宽（默认80）
 * @property {Boolean} disabled-keyboard 禁止点击输入框唤起系统键盘（默认false）
 * @event {Function} change 输入内容发生改变时触发，具体见官网说明
 * @event {Function} finish 输入字符个数达maxlength值时触发，见官网说明
 * @example <u-message-input mode="bottomLine"></u-message-input>
 */var _default =
{
  name: "u-message-input",
  props: {
    // 最大输入长度
    maxlength: {
      type: [Number, String],
      default: 4 },

    // 是否用圆点填充
    dotFill: {
      type: Boolean,
      default: false },

    // 显示模式，box-盒子模式，bottomLine-横线在底部模式，middleLine-横线在中部模式
    mode: {
      type: String,
      default: "box" },

    // 预置值
    value: {
      type: [String, Number],
      default: '' },

    // 当前激活输入item，是否带有呼吸效果
    breathe: {
      type: Boolean,
      default: true },

    // 是否自动获取焦点
    focus: {
      type: Boolean,
      default: false },

    // 字体是否加粗
    bold: {
      type: Boolean,
      default: false },

    // 字体大小
    fontSize: {
      type: [String, Number],
      default: 60 },

    // 激活样式
    activeColor: {
      type: String,
      default: '#2979ff' },

    // 未激活的样式
    inactiveColor: {
      type: String,
      default: '#606266' },

    // 输入框的大小，单位rpx，宽等于高
    width: {
      type: [Number, String],
      default: '80' },

    // 是否隐藏原生键盘，如果想用自定义键盘的话，需设置此参数为true
    disabledKeyboard: {
      type: Boolean,
      default: false } },


  watch: {
    // maxlength: {
    // 	// 此值设置为true，会在组件加载后无需maxlength变化就会执行一次本监听函数，无需再created生命周期中处理
    // 	immediate: true,
    // 	handler(val) {
    // 		this.maxlength = Number(val);
    // 	}
    // }, 
    value: {
      immediate: true,
      handler: function handler(val) {
        // 转为字符串
        val = String(val);
        // 超出部分截掉
        this.valueModel = val.substring(0, this.maxlength);
      } } },


  data: function data() {
    return {
      valueModel: "" };

  },
  computed: {
    // 是否显示呼吸灯效果
    animationClass: function animationClass() {var _this = this;
      return function (index) {
        if (_this.breathe && _this.charArr.length == index) return 'u-breathe';else
        return '';
      };
    },
    // 用于显示字符
    charArr: function charArr() {
      return this.valueModel.split('');
    },
    charArrLength: function charArrLength() {
      return this.charArr.length;
    },
    // 根据长度，循环输入框的个数，因为头条小程序数值不能用于v-for
    loopCharArr: function loopCharArr() {
      return new Array(this.maxlength);
    } },

  methods: {
    getVal: function getVal(e) {var

      value =
      e.detail.value;
      this.valueModel = value;
      // 判断长度是否超出了maxlength值，理论上不会发生，因为input组件设置了maxlength属性值
      if (String(value).length > this.maxlength) return;
      // 未达到maxlength之前，发送change事件，达到后发送finish事件
      this.$emit('change', value);
      if (String(value).length == this.maxlength) {
        this.$emit('finish', value);
      }
    } } };exports.default = _default;

/***/ }),
/* 67 */
/*!******************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/login/code.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./code.vue?vue&type=script&lang=js&mpType=page */ 68);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtzQixDQUFnQixxc0JBQUcsRUFBQyIsImZpbGUiOiI2Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///67\n");

/***/ }),
/* 68 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/login/code.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      maxlength: 4,\n      value: '',\n      second: 3,\n      show: false,\n      error: false };\n\n  },\n  computed: {},\n  onLoad: function onLoad() {var _this = this;\n    // this.getCaptcha()\n    var interval = setInterval(function () {\n      _this.second--;\n      if (_this.second <= 0) {\n        _this.show = true;\n        if (_this.value.lenth != 4) {\n          _this.error = true;\n        }\n        clearInterval(interval);\n      }\n    }, 1000);\n  },\n  methods: {\n    // 收不到验证码选择时的选择\n    noCaptcha: function noCaptcha() {\n      uni.showActionSheet({\n        itemList: ['重新获取验证码', '接听语音验证码'],\n        success: function success(res) {\n\n        },\n        fail: function fail(res) {\n\n        } });\n\n    },\n    // change事件侦听\n    change: function change(value) {\n      // console.log('change', value);\n    },\n    // 输入完验证码最后一位执行\n    finish: function finish(value) {\n      // console.log('finish', value);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvbG9naW4vY29kZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZUFGQTtBQUdBLGVBSEE7QUFJQSxpQkFKQTtBQUtBLGtCQUxBOztBQU9BLEdBVEE7QUFVQSxjQVZBO0FBV0EsUUFYQSxvQkFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FUQSxFQVNBLElBVEE7QUFVQSxHQXZCQTtBQXdCQTtBQUNBO0FBQ0EsYUFGQSx1QkFFQTtBQUNBO0FBQ0Esd0NBREE7QUFFQTs7QUFFQSxTQUpBO0FBS0E7O0FBRUEsU0FQQTs7QUFTQSxLQVpBO0FBYUE7QUFDQSxVQWRBLGtCQWNBLEtBZEEsRUFjQTtBQUNBO0FBQ0EsS0FoQkE7QUFpQkE7QUFDQSxVQWxCQSxrQkFrQkEsS0FsQkEsRUFrQkE7QUFDQTtBQUNBLEtBcEJBLEVBeEJBLEUiLCJmaWxlIjoiNjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ3cmFwXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImtleS1pbnB1dFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpdGxlXCI+6L6T5YWl6aqM6K+B56CBPC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpcHNcIj7pqozor4HnoIHlt7Llj5HpgIHoh7MgKzE1MCoqKio5MzIwPC92aWV3PlxyXG5cdFx0XHQ8dS1tZXNzYWdlLWlucHV0IDpmb2N1cz1cInRydWVcIiA6dmFsdWU9XCJ2YWx1ZVwiIEBjaGFuZ2U9XCJjaGFuZ2VcIiBAZmluaXNoPVwiZmluaXNoXCIgbW9kZT1cImJvdHRvbUxpbmVcIiA6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCI+PC91LW1lc3NhZ2UtaW5wdXQ+XHJcblx0XHRcdDx0ZXh0IDpjbGFzcz1cInsgZXJyb3I6IGVycm9yIH1cIj7pqozor4HnoIHplJnor6/vvIzor7fph43mlrDovpPlhaU8L3RleHQ+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2FwdGNoYVwiPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cInsgbm9DYXB0Y2hhOiBzaG93IH1cIiBAdGFwPVwibm9DYXB0Y2hhXCI+5pS25LiN5Yiw6aqM6K+B56CB54K56L+Z6YeMPC90ZXh0PlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cInsgcmVnYWluOiAhc2hvdyB9XCI+e3sgc2Vjb25kIH1956eS5ZCO6YeN5paw6I635Y+W6aqM6K+B56CBPC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRtYXhsZW5ndGg6IDQsXHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdFx0c2Vjb25kOiAzLFxyXG5cdFx0XHRzaG93OiBmYWxzZSxcclxuXHRcdFx0ZXJyb3I6IGZhbHNlXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHt9LFxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdC8vIHRoaXMuZ2V0Q2FwdGNoYSgpXHJcblx0XHRsZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuc2Vjb25kLS07XHJcblx0XHRcdGlmICh0aGlzLnNlY29uZCA8PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93ID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAodGhpcy52YWx1ZS5sZW50aCAhPSA0KSB7XHJcblx0XHRcdFx0XHR0aGlzLmVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIDEwMDApO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Ly8g5pS25LiN5Yiw6aqM6K+B56CB6YCJ5oup5pe255qE6YCJ5oupXHJcblx0XHRub0NhcHRjaGEoKSB7XHJcblx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdGl0ZW1MaXN0OiBbJ+mHjeaWsOiOt+WPlumqjOivgeeggScsICfmjqXlkKzor63pn7Ppqozor4HnoIEnXSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8vIGNoYW5nZeS6i+S7tuS+puWQrFxyXG5cdFx0Y2hhbmdlKHZhbHVlKSB7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdjaGFuZ2UnLCB2YWx1ZSk7XHJcblx0XHR9LFxyXG5cdFx0Ly8g6L6T5YWl5a6M6aqM6K+B56CB5pyA5ZCO5LiA5L2N5omn6KGMXHJcblx0XHRmaW5pc2godmFsdWUpIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2ZpbmlzaCcsIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4ud3JhcCB7XHJcblx0cGFkZGluZzogODBycHg7XHJcbn1cclxuXHJcbi5ib3gge1xyXG5cdG1hcmdpbjogMzBycHggMDtcclxuXHRmb250LXNpemU6IDMwcnB4O1xyXG5cdGNvbG9yOiA1NTU7XHJcbn1cclxuXHJcbi5rZXktaW5wdXQge1xyXG5cdHBhZGRpbmc6IDMwcnB4IDA7XHJcblx0dGV4dCB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQuZXJyb3Ige1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRjb2xvcjogcmVkO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdG1hcmdpbjogMjBycHggMDtcclxuXHR9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcblx0Zm9udC1zaXplOiA1MHJweDtcclxuXHRjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmtleS1pbnB1dCAudGlwcyB7XHJcblx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRjb2xvcjogIzMzMztcclxuXHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHRtYXJnaW4tYm90dG9tOiA2MHJweDtcclxufVxyXG4uY2FwdGNoYSB7XHJcblx0Y29sb3I6ICR1LXR5cGUtd2FybmluZztcclxuXHRmb250LXNpemU6IDMwcnB4O1xyXG5cdG1hcmdpbi10b3A6IDQwcnB4O1xyXG5cdC5ub0NhcHRjaGEge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdC5yZWdhaW4ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///68\n");

/***/ }),
/* 69 */
/*!*************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/register/register.vue?mpType=page ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=6139883e&scoped=true&mpType=page */ 70);\n/* harmony import */ var _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js&mpType=page */ 72);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6139883e\",\n  null,\n  false,\n  _register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user-center/register/register.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTM5ODgzZSZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYxMzk4ODNlXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXItY2VudGVyL3JlZ2lzdGVyL3JlZ2lzdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!*******************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/register/register.vue?vue&type=template&id=6139883e&scoped=true&mpType=page ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=6139883e&scoped=true&mpType=page */ 71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_6139883e_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 71 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/register/register.vue?vue&type=template&id=6139883e&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uForm: __webpack_require__(/*! uview-ui/components/u-form/u-form.vue */ 37).default,
    uFormItem: __webpack_require__(/*! uview-ui/components/u-form-item/u-form-item.vue */ 42)
      .default,
    uInput: __webpack_require__(/*! uview-ui/components/u-input/u-input.vue */ 51).default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "wrap"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "top"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "content"), attrs: { _i: 2 } },
        [
          _c("view", {
            staticClass: _vm._$s(3, "sc", "title"),
            attrs: { _i: 3 }
          }),
          _c(
            "u-form",
            { ref: "uForm", attrs: { model: _vm.form, _i: 4 } },
            [
              _c(
                "u-form-item",
                { attrs: { prop: "username", _i: 5 } },
                [
                  _c("u-input", {
                    attrs: {
                      type: "text",
                      placeholder: "请输入账户名称",
                      _i: 6
                    },
                    model: {
                      value: _vm._$s(6, "v-model", _vm.form.username),
                      callback: function($$v) {
                        _vm.$set(_vm.form, "username", $$v)
                      },
                      expression: "form.username"
                    }
                  })
                ],
                1
              ),
              _c(
                "u-form-item",
                { attrs: { prop: "password", _i: 7 } },
                [
                  _c("u-input", {
                    attrs: {
                      type: "password",
                      placeholder: "请输入账户密码",
                      _i: 8
                    },
                    model: {
                      value: _vm._$s(8, "v-model", _vm.form.password),
                      callback: function($$v) {
                        _vm.$set(_vm.form, "password", $$v)
                      },
                      expression: "form.password"
                    }
                  })
                ],
                1
              ),
              _c(
                "u-form-item",
                { attrs: { prop: "v_password", _i: 9 } },
                [
                  _c("u-input", {
                    attrs: {
                      type: "password",
                      placeholder: "请确认账户密码",
                      _i: 10
                    },
                    model: {
                      value: _vm._$s(10, "v-model", _vm.form.v_password),
                      callback: function($$v) {
                        _vm.$set(_vm.form, "v_password", $$v)
                      },
                      expression: "form.v_password"
                    }
                  })
                ],
                1
              ),
              _c("button", {
                staticClass: _vm._$s(11, "sc", "getCaptcha"),
                style: _vm._$s(11, "s", [_vm.inputStyle]),
                attrs: { _i: 11 },
                on: { click: _vm.register }
              })
            ],
            1
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(12, "sc", "alternative"),
              attrs: { _i: 12 }
            },
            [
              _c("view", {
                staticClass: _vm._$s(13, "sc", "password"),
                attrs: { _i: 13 },
                on: { click: _vm.gologin }
              })
            ]
          )
        ],
        1
      ),
      _c(
        "view",
        { staticClass: _vm._$s(14, "sc", "buttom"), attrs: { _i: 14 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(15, "sc", "hint"), attrs: { _i: 15 } },
            [
              _c("text", {
                staticClass: _vm._$s(16, "sc", "link"),
                attrs: { _i: 16 }
              })
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 72 */
/*!*************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/register/register.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js&mpType=page */ 73);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNzQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiI3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/register/register.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _md = _interopRequireDefault(__webpack_require__(/*! uview-ui/libs/function/md5 */ 58));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {var _this = this;return { tel: '', form: { username: \"\", password: \"\", v_password: \"\" }, rules: { username: [{ required: true, message: '请输入用户名', trigger: ['change', 'blur'] }], password: [{ required: true, message: '请输入密码', trigger: ['change', 'blur'] }, { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\\S{5,12}$/, message: '需同时含有字母和数字，长度在6-12之间', trigger: ['change', 'blur'] }], v_password: [{ required: true, message: '请重新输入密码', trigger: ['change', 'blur'] },\n        {\n          validator: function validator(rule, value, callback) {\n            return value === _this.form.password;\n          },\n          message: '两次输入的密码不相等',\n          trigger: ['change', 'blur'] }] } };\n\n\n\n\n  },\n  onReady: function onReady() {\n    this.$refs.uForm.setRules(this.rules);\n  },\n  computed: {\n    inputStyle: function inputStyle() {\n      var style = {};\n      if (this.form.username != \"\" & this.form.password != \"\" & this.form.v_password != \"\") {\n        style.color = \"#fff\";\n        style.backgroundColor = \"#1E90FF\";\n      }\n      return style;\n    } },\n\n  onLoad: function onLoad() {\n\n  },\n  methods: {\n    gologin: function gologin() {\n      uni.navigateTo({\n        url: \"../login/index\" });\n\n    },\n    register: function register() {var _this2 = this;\n      this.$refs.uForm.validate(function (valid) {\n        if (valid) {\n          __f__(\"log\", 1, \" at pages/user-center/register/register.vue:101\");\n          _this2.$reqs.req('register', { username: _this2.form.username, password: _md.default.md5(_this2.form.password) }).then(function (res) {\n            __f__(\"log\", res, \" at pages/user-center/register/register.vue:103\");\n          });\n        } else {\n          __f__(\"log\", '验证失败', \" at pages/user-center/register/register.vue:106\");\n        }\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvcmVnaXN0ZXIvcmVnaXN0ZXIudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLDRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxJQURBLGtCQUNBLGtCQUNBLFNBQ0EsT0FEQSxFQUVBLFFBQ0EsWUFEQSxFQUVBLFlBRkEsRUFHQSxjQUhBLEVBRkEsRUFPQSxTQUNBLGFBQ0EsY0FEQSxFQUVBLGlCQUZBLEVBR0EsMkJBSEEsR0FEQSxFQU1BLGFBQ0EsY0FEQSxFQUVBLGdCQUZBLEVBR0EsMkJBSEEsSUFLQSxFQUNBLDBEQURBLEVBRUEsK0JBRkEsRUFHQSwyQkFIQSxFQUxBLENBTkEsRUFpQkEsZUFDQSxjQURBLEVBRUEsa0JBRkEsRUFHQSwyQkFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLFdBSEE7QUFJQSwrQkFKQTtBQUtBLHFDQUxBLEVBTEEsQ0FqQkEsRUFQQTs7Ozs7QUF1Q0EsR0F6Q0E7QUEwQ0EsU0ExQ0EscUJBMENBO0FBQ0E7QUFDQSxHQTVDQTtBQTZDQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVJBLEVBN0NBOztBQXVEQSxRQXZEQSxvQkF1REE7O0FBRUEsR0F6REE7QUEwREE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQSw2QkFEQTs7QUFHQSxLQUxBO0FBTUEsWUFOQSxzQkFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBO0FBR0EsU0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBLE9BVEE7QUFVQSxLQWpCQSxFQTFEQSxFIiwiZmlsZSI6IjczLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwid3JhcFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0b3BcIj48L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPuasoui/juS9v+eUqOS5kOWkmi48L3ZpZXc+XHJcblx0XHRcdDx1LWZvcm0gOm1vZGVsPVwiZm9ybVwiIHJlZj1cInVGb3JtXCI+XHJcblx0XHRcdFx0PHUtZm9ybS1pdGVtIHByb3A9XCJ1c2VybmFtZVwiPlxyXG5cdFx0XHRcdFx0PHUtaW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZm9ybS51c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6LSm5oi35ZCN56ewXCIgLz5cclxuXHRcdFx0XHQ8L3UtZm9ybS1pdGVtPlxyXG5cdFx0XHRcdDx1LWZvcm0taXRlbSBwcm9wPVwicGFzc3dvcmRcIj5cclxuXHRcdFx0XHRcdDx1LWlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJmb3JtLnBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXotKbmiLflr4bnoIFcIiAvPlxyXG5cdFx0XHRcdDwvdS1mb3JtLWl0ZW0+XHJcblx0XHRcdFx0PHUtZm9ybS1pdGVtIHByb3A9XCJ2X3Bhc3N3b3JkXCI+XHJcblx0XHRcdFx0XHQ8dS1pbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiZm9ybS52X3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7fnoa7orqTotKbmiLflr4bnoIFcIiAvPlxyXG5cdFx0XHRcdDwvdS1mb3JtLWl0ZW0+XHJcblx0XHRcdFx0PGJ1dHRvbiA6c3R5bGU9XCJbaW5wdXRTdHlsZV1cIiBjbGFzcz1cImdldENhcHRjaGFcIiBAY2xpY2s9XCJyZWdpc3RlclwiPueCueWHu+azqOWGjDwvYnV0dG9uPlxyXG5cdFx0XHQ8L3UtZm9ybT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhbHRlcm5hdGl2ZVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGFzc3dvcmRcIiBAY2xpY2s9XCJnb2xvZ2luXCI+5bey5pyJ5biQ5Y+354K55Ye755m75b2VPC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvbVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImhpbnRcIj5cclxuXHRcdFx0XHTms6jlhozku6PooajlkIzmhI9cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxpbmtcIj7kuZDlpJrnlKjmiLfljY/orq7jgIHpmpDnp4HmlL/nrZbvvIw8L3RleHQ+XHJcblx0XHRcdFx05bm25o6I5p2D5L2/55So5oKo55qE5LmQ5aSa6LSm5Y+35L+h5oGv77yI5aaC5pi156ew44CB5aS05YOP44CB5pS26I635Zyw5Z2A77yJ5Lul5L6/5oKo57uf5LiA566h55CGXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBtZDVMaWJzIGZyb20gXCJ1dmlldy11aS9saWJzL2Z1bmN0aW9uL21kNVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGVsOiAnJyxcclxuXHRcdFx0XHRmb3JtOiB7XHJcblx0XHRcdFx0XHR1c2VybmFtZTogXCJcIixcclxuXHRcdFx0XHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0XHRcdFx0dl9wYXNzd29yZDogXCJcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdHVzZXJuYW1lOiBbe1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0bWVzc2FnZTogJ+ivt+i+k+WFpeeUqOaIt+WQjScsXHJcblx0XHRcdFx0XHRcdHRyaWdnZXI6IFsnY2hhbmdlJywgJ2JsdXInXSxcclxuXHRcdFx0XHRcdH1dLFxyXG5cdFx0XHRcdFx0cGFzc3dvcmQ6IFt7XHJcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ+ivt+i+k+WFpeWvhueggScsXHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcjogWydjaGFuZ2UnLCAnYmx1ciddLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oPyFbMC05XSskKSg/IVthLXpBLVpdKyQpWzAtOUEtWmEtel0rXFxTezUsMTJ9JC8sXHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ+mcgOWQjOaXtuWQq+acieWtl+avjeWSjOaVsOWtl++8jOmVv+W6puWcqDYtMTLkuYvpl7QnLFxyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXI6IFsnY2hhbmdlJywgJ2JsdXInXSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdHZfcGFzc3dvcmQ6IFt7XHJcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ+ivt+mHjeaWsOi+k+WFpeWvhueggScsXHJcblx0XHRcdFx0XHRcdFx0dHJpZ2dlcjogWydjaGFuZ2UnLCAnYmx1ciddLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dmFsaWRhdG9yOiAocnVsZSwgdmFsdWUsIGNhbGxiYWNrKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IHRoaXMuZm9ybS5wYXNzd29yZDtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICfkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3nm7jnrYknLFxyXG5cdFx0XHRcdFx0XHRcdHRyaWdnZXI6IFsnY2hhbmdlJywgJ2JsdXInXSxcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdHRoaXMuJHJlZnMudUZvcm0uc2V0UnVsZXModGhpcy5ydWxlcyk7XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0aW5wdXRTdHlsZSgpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGUgPSB7fTtcclxuXHRcdFx0XHRpZiAodGhpcy5mb3JtLnVzZXJuYW1lICE9IFwiXCIgJiB0aGlzLmZvcm0ucGFzc3dvcmQgIT0gXCJcIiAmIHRoaXMuZm9ybS52X3Bhc3N3b3JkICE9IFwiXCIpIHtcclxuXHRcdFx0XHRcdHN0eWxlLmNvbG9yID0gXCIjZmZmXCI7XHJcblx0XHRcdFx0XHRzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxRTkwRkZcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdvbG9naW4oKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi4uL2xvZ2luL2luZGV4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZWdpc3RlcigpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnVGb3JtLnZhbGlkYXRlKHZhbGlkID0+IHtcclxuXHRcdFx0XHRcdGlmICh2YWxpZCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygxKVxyXG5cdFx0XHRcdFx0XHR0aGlzLiRyZXFzLnJlcSgncmVnaXN0ZXInLHt1c2VybmFtZTp0aGlzLmZvcm0udXNlcm5hbWUscGFzc3dvcmQ6bWQ1TGlicy5tZDUodGhpcy5mb3JtLnBhc3N3b3JkKX0pLnRoZW4ocmVzPT57XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+mqjOivgeWksei0pScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LndyYXAge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHJcblx0XHQuY29udGVudCB7XHJcblx0XHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRcdG1hcmdpbjogODBycHggYXV0byAwO1xyXG5cclxuXHRcdFx0LnRpdGxlIHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogNjBycHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMDBycHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMjAwcnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpbnB1dCB7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxMHJweDtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNnJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuZ2V0Q2FwdGNoYSB7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjU1LCAyNTUpO1xyXG5cdFx0XHRcdGNvbG9yOiAkdS10aXBzLWNvbG9yO1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEycnB4IDA7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMjBycHg7XHJcblxyXG5cdFx0XHRcdCY6OmFmdGVyIHtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5hbHRlcm5hdGl2ZSB7XHJcblx0XHRcdFx0Y29sb3I6ICR1LXRpcHMtY29sb3I7XHJcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMzBycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQuYnV0dG9tIHtcclxuXHJcblx0XHRcdC5oaW50IHtcclxuXHRcdFx0XHRwYWRkaW5nOiAyMHJweCA0MHJweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDIwcnB4O1xyXG5cdFx0XHRcdGNvbG9yOiAkdS10aXBzLWNvbG9yO1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0Ym90dG9tOiAxMDBycHg7XHJcblxyXG5cdFx0XHRcdC5saW5rIHtcclxuXHRcdFx0XHRcdGNvbG9yOiByZ2IoMTM1LCAyMDYsIDI1MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///73\n");

/***/ }),
/* 74 */
/*!***********************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/setting/setting.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=f9fc2a00&scoped=true&mpType=page */ 75);\n/* harmony import */ var _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js&mpType=page */ 77);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"f9fc2a00\",\n  null,\n  false,\n  _setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user-center/setting/setting.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5ZmMyYTAwJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY5ZmMyYTAwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXItY2VudGVyL3NldHRpbmcvc2V0dGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///74\n");

/***/ }),
/* 75 */
/*!*****************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/setting/setting.vue?vue&type=template&id=f9fc2a00&scoped=true&mpType=page ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=f9fc2a00&scoped=true&mpType=page */ 76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_f9fc2a00_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 76 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/setting/setting.vue?vue&type=template&id=f9fc2a00&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uCellGroup: __webpack_require__(/*! uview-ui/components/u-cell-group/u-cell-group.vue */ 21)
      .default,
    uCellItem: __webpack_require__(/*! uview-ui/components/u-cell-item/u-cell-item.vue */ 26)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "setting"), attrs: { _i: 0 } },
    [
      _c(
        "u-cell-group",
        { attrs: { _i: 1 } },
        [
          _c(
            "u-cell-item",
            {
              attrs: { title: "头像", _i: 2 },
              on: {
                click: function($event) {
                  return _vm.chooseAvatar()
                }
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "images-box"),
                  attrs: { _i: 3 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(4, "sc", "image"),
                    attrs: { src: _vm._$s(4, "a-src", _vm.phone), _i: 4 }
                  })
                ]
              )
            ]
          ),
          _c(
            "u-cell-item",
            {
              attrs: { title: "昵称", _i: 5 },
              on: {
                click: function($event) {
                  return _vm.updateNme()
                }
              }
            },
            [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.nickname)))]
          )
        ],
        1
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 77 */
/*!***********************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/setting/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js&mpType=page */ 78);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFzQixDQUFnQix3c0JBQUcsRUFBQyIsImZpbGUiOiI3Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///77\n");

/***/ }),
/* 78 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/setting/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      phone: \"\",\n      nickname: \"\",\n      gender: 0 };\n\n  },\n  onLoad: function onLoad(opt) {\n    __f__(\"log\", opt, \" at pages/user-center/setting/setting.vue:24\");\n    this.phone = opt.avatar;\n    this.nickname = opt.nickname;\n  },\n  created: function created() {var _this = this;\n    // 监听从裁剪页发布的事件，获得裁剪结果\n    uni.$on('uAvatarCropper', function (path) {\n      _this.phone = path;\n      uni.showLoading({});\n\n\n      uniCloud.uploadFile({\n        cloudPath: path,\n        filePath: path,\n        success: function success(res) {\n          _this.$reqs.req('setAvatar', {\n            avatar: res.fileID }).\n          then(function (res) {\n            uni.hideLoading();\n          });\n        } });\n\n    });\n  },\n  methods: {\n    chooseAvatar: function chooseAvatar() {\n      uni.navigateTo({\n        url: \"../u-avatar-cropper/u-avatar-cropper?destWidth=300&rectWidth=200&fileType=jpg\" });\n\n    },\n    updateNme: function updateNme() {\n      var nickname = this.nickname ? this.nickname : \"\";\n      this.$apis.navigateTo({\n        url: \"../updatename/updatename?nickname=\".concat(nickname) },\n      this.$reqs.check_token);\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 79)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvc2V0dGluZy9zZXR0aW5nLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGtCQUZBO0FBR0EsZUFIQTs7QUFLQSxHQVBBO0FBUUEsUUFSQSxrQkFRQSxHQVJBLEVBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVpBO0FBYUEsU0FiQSxxQkFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHVCQURBO0FBRUEsc0JBRkE7QUFHQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxjQUZBLENBRUE7QUFDQTtBQUNBLFdBSkE7QUFLQSxTQVRBOztBQVdBLEtBaEJBO0FBaUJBLEdBaENBO0FBaUNBO0FBQ0EsZ0JBREEsMEJBQ0E7QUFDQTtBQUNBLDRGQURBOztBQUdBLEtBTEE7QUFNQSxhQU5BLHVCQU1BO0FBQ0E7QUFDQTtBQUNBLGtFQURBO0FBRUEsNEJBRkE7QUFHQSxLQVhBLEVBakNBLEUiLCJmaWxlIjoiNzguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJzZXR0aW5nXCI+XHJcblx0XHQ8dS1jZWxsLWdyb3VwPlxyXG5cdFx0XHQ8dS1jZWxsLWl0ZW0gdGl0bGU9XCLlpLTlg49cIiBAY2xpY2s9XCJjaG9vc2VBdmF0YXIoKVwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaW1hZ2VzLWJveFwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIDpzcmM9XCJwaG9uZVwiIG1vZGU9XCJcIiBjbGFzcz1cImltYWdlXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdS1jZWxsLWl0ZW0+XHJcblx0XHRcdDx1LWNlbGwtaXRlbSB0aXRsZT1cIuaYteensFwiIEBjbGljaz1cInVwZGF0ZU5tZSgpXCI+e3tuaWNrbmFtZX19PC91LWNlbGwtaXRlbT5cclxuXHRcdDwvdS1jZWxsLWdyb3VwPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwaG9uZTogXCJcIixcclxuXHRcdFx0XHRuaWNrbmFtZTpcIlwiLFxyXG5cdFx0XHRcdGdlbmRlcjowXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQob3B0KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdClcclxuXHRcdFx0dGhpcy5waG9uZSA9IG9wdC5hdmF0YXJcclxuXHRcdFx0dGhpcy5uaWNrbmFtZSA9IG9wdC5uaWNrbmFtZVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIOebkeWQrOS7juijgeWJqumhteWPkeW4g+eahOS6i+S7tu+8jOiOt+W+l+ijgeWJque7k+aenFxyXG5cdFx0XHR1bmkuJG9uKCd1QXZhdGFyQ3JvcHBlcicsIHBhdGggPT4ge1xyXG5cdFx0XHRcdHRoaXMucGhvbmUgPSBwYXRoO1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dW5pQ2xvdWQudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHRjbG91ZFBhdGg6IHBhdGgsXHJcblx0XHRcdFx0XHRmaWxlUGF0aDogcGF0aCxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHJlcXMucmVxKCdzZXRBdmF0YXInLCB7XHJcblx0XHRcdFx0XHRcdFx0YXZhdGFyOiByZXMuZmlsZUlEXHJcblx0XHRcdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaG9vc2VBdmF0YXIoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi4uL3UtYXZhdGFyLWNyb3BwZXIvdS1hdmF0YXItY3JvcHBlcj9kZXN0V2lkdGg9MzAwJnJlY3RXaWR0aD0yMDAmZmlsZVR5cGU9anBnXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVObWUoKXtcclxuXHRcdFx0XHRsZXQgbmlja25hbWUgPSB0aGlzLm5pY2tuYW1lID8gdGhpcy5uaWNrbmFtZSA6IFwiXCI7XHJcblx0XHRcdFx0dGhpcy4kYXBpcy5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDpgLi4vdXBkYXRlbmFtZS91cGRhdGVuYW1lP25pY2tuYW1lPSR7bmlja25hbWV9YFxyXG5cdFx0XHRcdH0sdGhpcy4kcmVxcy5jaGVja190b2tlbilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LnNldHRpbmcge1xyXG5cdFx0LmltYWdlcy1ib3gge1xyXG5cdFx0XHR3aWR0aDogMTU0cnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDE1NHJweDtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDQyMHJweDtcclxuXHJcblx0XHRcdC5pbWFnZSB7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG5cdFx0XHR9IFxyXG5cdFx0fVxyXG5cclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///78\n");

/***/ }),
/* 79 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 83));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 86);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e25) {throw _e25;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e26) {didErr = true;err = _e26;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var s = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},o = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var o = 0; o < r; o++) {var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[s + o >>> 2] |= i << 24 - (s + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[s + o >>> 2] = n[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((o >>> 4).toString(16)), s.push((15 & o).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(o));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(s, h);}var l = s.splice(0, c);n.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} }), s.algo = {});return s;}(Math), n);}),r = (n(function (e, t) {var n;e.exports = (n = s, function (e) {var t = n,s = t.lib,r = s.WordArray,o = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],v = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],P = e[t + 13],I = e[t + 14],A = e[t + 15],E = o[0],b = o[1],O = o[2],U = o[3];E = u(E, b, O, U, i, 7, a[0]), U = u(U, E, b, O, c, 12, a[1]), O = u(O, U, E, b, f, 17, a[2]), b = u(b, O, U, E, p, 22, a[3]), E = u(E, b, O, U, g, 7, a[4]), U = u(U, E, b, O, m, 12, a[5]), O = u(O, U, E, b, y, 17, a[6]), b = u(b, O, U, E, _, 22, a[7]), E = u(E, b, O, U, w, 7, a[8]), U = u(U, E, b, O, v, 12, a[9]), O = u(O, U, E, b, S, 17, a[10]), b = u(b, O, U, E, k, 22, a[11]), E = u(E, b, O, U, T, 7, a[12]), U = u(U, E, b, O, P, 12, a[13]), O = u(O, U, E, b, I, 17, a[14]), E = h(E, b = u(b, O, U, E, A, 22, a[15]), O, U, c, 5, a[16]), U = h(U, E, b, O, y, 9, a[17]), O = h(O, U, E, b, k, 14, a[18]), b = h(b, O, U, E, i, 20, a[19]), E = h(E, b, O, U, m, 5, a[20]), U = h(U, E, b, O, S, 9, a[21]), O = h(O, U, E, b, A, 14, a[22]), b = h(b, O, U, E, g, 20, a[23]), E = h(E, b, O, U, v, 5, a[24]), U = h(U, E, b, O, I, 9, a[25]), O = h(O, U, E, b, p, 14, a[26]), b = h(b, O, U, E, w, 20, a[27]), E = h(E, b, O, U, P, 5, a[28]), U = h(U, E, b, O, f, 9, a[29]), O = h(O, U, E, b, _, 14, a[30]), E = l(E, b = h(b, O, U, E, T, 20, a[31]), O, U, m, 4, a[32]), U = l(U, E, b, O, w, 11, a[33]), O = l(O, U, E, b, k, 16, a[34]), b = l(b, O, U, E, I, 23, a[35]), E = l(E, b, O, U, c, 4, a[36]), U = l(U, E, b, O, g, 11, a[37]), O = l(O, U, E, b, _, 16, a[38]), b = l(b, O, U, E, S, 23, a[39]), E = l(E, b, O, U, P, 4, a[40]), U = l(U, E, b, O, i, 11, a[41]), O = l(O, U, E, b, p, 16, a[42]), b = l(b, O, U, E, y, 23, a[43]), E = l(E, b, O, U, v, 4, a[44]), U = l(U, E, b, O, T, 11, a[45]), O = l(O, U, E, b, A, 16, a[46]), E = d(E, b = l(b, O, U, E, f, 23, a[47]), O, U, i, 6, a[48]), U = d(U, E, b, O, _, 10, a[49]), O = d(O, U, E, b, I, 15, a[50]), b = d(b, O, U, E, m, 21, a[51]), E = d(E, b, O, U, T, 6, a[52]), U = d(U, E, b, O, p, 10, a[53]), O = d(O, U, E, b, S, 15, a[54]), b = d(b, O, U, E, c, 21, a[55]), E = d(E, b, O, U, w, 6, a[56]), U = d(U, E, b, O, A, 10, a[57]), O = d(O, U, E, b, y, 15, a[58]), b = d(b, O, U, E, P, 21, a[59]), E = d(E, b, O, U, g, 6, a[60]), U = d(U, E, b, O, k, 10, a[61]), O = d(O, U, E, b, f, 15, a[62]), b = d(b, O, U, E, v, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + b | 0, o[2] = o[2] + O | 0, o[3] = o[3] + U | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(s / 4294967296),i = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, o, i) {var a = e + (t & n | ~t & s) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, n, s, r, o, i) {var a = e + (t & s | n & ~s) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, n, s, r, o, i) {var a = e + (t ^ n ^ s) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, n, s, r, o, i) {var a = e + (n ^ (t | ~s)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, r, o;e.exports = (r = (n = s).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = s.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "app-plus" || false,l = c({
    "address": [
        "127.0.0.1",
        "192.168.1.143"
    ],
    "debugPort": 50229,
    "initialLaunchType": "local",
    "servePort": 50230
}
),d = c([{"provider":"aliyun","spaceName":"my-app","spaceId":"540382ee-ea15-4e11-b64c-9d7839cac328","clientSecret":"ojoeoMeLTjhPxkLKovTRpA==","endpoint":"https://api.bspapp.com"}]),f = true;var p = {};function g(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = p, s = e, Object.prototype.hasOwnProperty.call(n, s) || (p[e] = t), p[e];}"app-plus" === h && (p = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var m = ["invoke", "success", "fail", "complete"],y = g("_globalUniCloudInterceptor");function _(e, t) {y[e] || (y[e] = {}), i(t) && Object.keys(t).forEach(function (n) {m.indexOf(n) > -1 && function (e, t, n) {var s = y[e][t];s || (s = y[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function w(e, t) {y[e] || (y[e] = {}), i(t) ? Object.keys(t).forEach(function (n) {m.indexOf(n) > -1 && function (e, t, n) {var s = y[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete y[e];}function v(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function S(e, t) {return y[e] && y[e][t] || [];}function k(e, t) {return t ? function (n) {var _this2 = this;var s = "callFunction" === t && "DCloud-clientDB" === (n && n.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = r.then(function () {return s ? Promise.resolve() : v(S(t, "invoke"), n);}).then(function () {return e.call(_this2, n);}).then(function (e) {return s ? Promise.resolve(e) : v(S(t, "success"), e).then(function () {return v(S(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : v(S(t, "fail"), e).then(function () {return v(S(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e);}).catch(function (e) {n.fail && n.fail(e), n.complete && n.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var T = /*#__PURE__*/function (_Error2) {_inherits(T, _Error2);var _super2 = _createSuper(T);function T(e) {var _this3;_classCallCheck(this, T);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return T;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e2 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),P = _e2.t,I = _e2.setLocale,A = _e2.getLocale;var E, b, O;try {E = __webpack_require__(/*! uni-stat-config */ 87).default || __webpack_require__(/*! uni-stat-config */ 87);} catch (e) {E = { appid: "" };}function U() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function C() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId;return { PLATFORM: h, OS: O, APPID: E.appid, LOCALE: A(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.6" };}function D() {if ("n" === x()) {try {b = plus.runtime.getDCloudId();} catch (e) {b = "";}return b;}return b || (b = U(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: b })), b;}function x() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)[h];}var R = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new T({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new T({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} };var q = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var F = /*#__PURE__*/function () {function F(e) {_classCallCheck(this, F);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(P("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = q, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(F, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return R.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = R.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", n(new T({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new T({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,r = _ref2.config;if (!t) throw new T({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o = r && r.envType || this.config.envType;var i, a;return this.getOSSUploadOptionsFromPath({ env: o, filename: t }).then(function (t) {var r = t.result;i = r.id, a = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: i, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: s }));}).then(function () {return _this7.reportOSSUpload({ id: i });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: a }) : s(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new T({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return F;}();var L = { init: function init(e) {var t = new F(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} },N = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",M = "undefined" != typeof process && "e2e" === "development" && "pre" === Object({"VUE_APP_NAME":"My-App","VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).END_POINT ? "//tcb-pre.tencentcloudapi.com/web" : "//tcb-api.tencentcloudapi.com/web";var j;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(j || (j = {}));var $ = function $() {};var K = function K() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, n) {e = function e(_e3, s) {return _e3 ? n(_e3) : t(s);};});return e.promise = t, e;};function B(e) {return void 0 === e;}function H(e) {return "[object Null]" === Object.prototype.toString.call(e);}var W;function z(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e4 = _step.value;var _t2 = _e4.isMatch,_n = _e4.genAdapter,_s = _e4.runtime;if (_t2()) return { adapter: _n(), runtime: _s };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(W || (W = {}));var V = { adapter: null, runtime: void 0 },J = ["anonymousUuidKey"];var Y = /*#__PURE__*/function (_$) {_inherits(Y, _$);var _super3 = _createSuper(Y);function Y() {var _this8;_classCallCheck(this, Y);_this8 = _super3.call(this), V.adapter.root.tcbObject || (V.adapter.root.tcbObject = {});return _this8;}_createClass(Y, [{ key: "setItem", value: function setItem(e, t) {V.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return V.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete V.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete V.adapter.root.tcbObject;} }]);return Y;}($);function X(e, t) {switch (e) {case "local":return t.localStorage || new Y();case "none":return new Y();default:return t.sessionStorage || new Y();}}var G = /*#__PURE__*/function () {function G(e) {_classCallCheck(this, G);if (!this._storage) {this._persistence = V.adapter.primaryStorage || e.persistence, this._storage = X(this._persistence, V.adapter);var _t3 = "access_token_" + e.env,_n2 = "access_token_expire_" + e.env,_s2 = "refresh_token_" + e.env,_r = "anonymous_uuid_" + e.env,_o = "login_type_" + e.env,_i = "user_info_" + e.env;this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _n2, refreshTokenKey: _s2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(G, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = X(e, V.adapter);for (var _e5 in this.keys) {var _s3 = this.keys[_e5];if (t && J.includes(_e5)) continue;var _r2 = this._storage.getItem(_s3);B(_r2) || H(_r2) || (n.setItem(_s3, _r2), this._storage.removeItem(_s3));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return G;}();var Q = {},Z = {};function ee(e) {return Q[e];}var te = function te(e, t) {_classCallCheck(this, te);this.data = t || null, this.name = e;};var ne = /*#__PURE__*/function (_te) {_inherits(ne, _te);var _super4 = _createSuper(ne);function ne(e, t) {var _this9;_classCallCheck(this, ne);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return ne;}(te);var se = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s4 = n[e].indexOf(t);-1 !== _s4 && n[e].splice(_s4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof ne) return console.error(e.error), this;var n = "string" == typeof e ? new te(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e6 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e6),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function re(e, t) {se.on(e, t);}function oe(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};se.fire(e, t);}function ie(e, t) {se.off(e, t);}var ae = "loginStateChanged",ce = "loginStateExpire",ue = "loginTypeChanged",he = "anonymousConverted",le = "refreshAccessToken";var de;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(de || (de = {}));var fe = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],pe = { "X-SDK-Version": "1.3.5" };function ge(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},o = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(r, s), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e7 in r) {i.append(_e7, r[_e7]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), s.call(e, t);};}function me() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, pe), {}, { "x-seqid": e }) };}var ye = /*#__PURE__*/function () {function ye() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, ye);var t;this.config = e, this._reqClass = new V.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = ee(this.config.env), this._localCache = (t = this.config.env, Z[t]), ge(this._reqClass, "post", [me]), ge(this._reqClass, "upload", [me]), ge(this._reqClass, "download", [me]);}_createClass(ye, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, o, i, a, _e8, _e9, _t5, _s5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(n);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e8 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e8 || "REFRESH_TOKEN_EXPIRED" === _e8 || "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === de.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 19;break;}_e9 = this._cache.getStore(r);_t5 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e9, refresh_token: _t5 });case 17:_s5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s5.refresh_token), this._refreshAccessToken()));case 19:oe(ce), this._cache.removeStore(n);case 20:throw new Error("刷新access token失败：" + a.data.code);case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (oe(le), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, r, o, _e10, i, _e11, _e12, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_" + this.config.env;r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === fe.indexOf(e))) {_context7.next = 10;break;}_e10 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e10);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e11 in i) {i.hasOwnProperty(_e11) && void 0 !== i[_e11] && i.append(_e11, o[_e11]);}r = "multipart/form-data";} else {r = "application/json;charset=UTF-8", i = {};for (_e12 in o) {void 0 !== o[_e12] && (i[_e12] = o[_e12]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e13 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e13, "=").concat(encodeURIComponent(n[_e13]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(N, M, d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === fe.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n3 = _context8.sent;if (!_n3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_n3.data.code, "] ").concat(_n3.data.message));case 12:return _context8.abrupt("return", _n3.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new Error("[".concat(n.data.code, "] ").concat(n.data.message));case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return ye;}();var _e = {};function we(e) {return _e[e];}var ve = /*#__PURE__*/function () {function ve(e) {_classCallCheck(this, ve);this.config = e, this._cache = ee(e.env), this._request = we(e.env);}_createClass(ve, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return ve;}();var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = ee(this._envId), this._request = we(this._envId), this.setUserInfo();}_createClass(Se, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return Se;}();var ke = /*#__PURE__*/function () {function ke(e) {_classCallCheck(this, ke);if (!e) throw new Error("envId is not defined");this._cache = ee(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new Se(e);}_createClass(ke, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === de.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === de.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === de.WECHAT || this.loginType === de.WECHAT_OPEN || this.loginType === de.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return ke;}();var Te = /*#__PURE__*/function (_ve) {_inherits(Te, _ve);var _super5 = _createSuper(Te);function Te() {_classCallCheck(this, Te);return _super5.apply(this, arguments);}_createClass(Te, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e14;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:oe(ae);oe(ue, { env: this.config.env, loginType: de.ANONYMOUS, persistence: "local" });_e14 = new ke(this.config.env);_context13.next = 19;return _e14.user.refresh();case 19:return _context13.abrupt("return", _e14);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:oe(he, { env: this.config.env });oe(ue, { loginType: de.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, de.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return Te;}(ve);var Pe = /*#__PURE__*/function (_ve2) {_inherits(Pe, _ve2);var _super6 = _createSuper(Pe);function Pe() {_classCallCheck(this, Pe);return _super6.apply(this, arguments);}_createClass(Pe, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:oe(ae);oe(ue, { env: this.config.env, loginType: de.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new ke(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return Pe;}(ve);var Ie = /*#__PURE__*/function (_ve3) {_inherits(Ie, _ve3);var _super7 = _createSuper(Ie);function Ie() {_classCallCheck(this, Ie);return _super7.apply(this, arguments);}_createClass(Ie, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;o = s.access_token;i = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:oe(ae);oe(ue, { env: this.config.env, loginType: de.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new ke(this.config.env));case 22:throw s.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return Ie;}(ve);var Ae = /*#__PURE__*/function (_ve4) {_inherits(Ae, _ve4);var _super8 = _createSuper(Ae);function Ae() {_classCallCheck(this, Ae);return _super8.apply(this, arguments);}_createClass(Ae, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: de.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;o = s.access_token_expire;i = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:oe(ae);oe(ue, { env: this.config.env, loginType: de.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new ke(this.config.env));case 23:throw s.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return Ae;}(ve);var Ee = /*#__PURE__*/function () {function Ee(e) {_classCallCheck(this, Ee);this.config = e, this._cache = ee(e.env), this._request = we(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), re(ue, this._onLoginTypeChanged);}_createClass(Ee, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new Te(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new Pe(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new Ie(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new Ae(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new Te(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new Ie(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new Ae(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new Te(this.config)), re(he, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === de.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), oe(ae), oe(ue, { env: this.config.env, loginType: de.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;re(ae, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {re(ce, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {re(le, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {re(he, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;re(ue, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new ke(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new Pe(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ee;}();var be = function be(e, t) {t = t || K();var n = we(this.config.env),s = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Oe = function Oe(e, t) {t = t || K();var n = we(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Ue = function Ue(_ref5, t) {var e = _ref5.fileList;if (t = t || K(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return we(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ce = function Ce(_ref6, t) {var e = _ref6.fileList;t = t || K(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s6 = _step4.value;"object" == typeof _s6 ? (_s6.hasOwnProperty("fileID") && _s6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s6.fileID, max_age: _s6.maxAge })) : "string" == typeof _s6 ? n.push({ fileid: _s6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return we(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},De = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Ce.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = we(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function De(_x26, _x27) {return _ref8.apply(this, arguments);};}(),xe = function xe(_ref9, o) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,r = _ref9.search;var i = o || K();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return we(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (s) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Re = { timeout: 15e3, persistence: "session" },qe = {};var Fe = /*#__PURE__*/function () {function Fe(e) {_classCallCheck(this, Fe);this.config = e || this.config, this.authObj = void 0;}_createClass(Fe, [{ key: "init", value: function init(e) {switch (V.adapter || (this.requestClient = new V.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Re), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new Fe(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || V.adapter.primaryStorage || Re.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;Q[t] = new G(e), Z[t] = new G(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, _e[n.env] = new ye(n), this.authObj = new Ee(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return re.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return ie.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return xe.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Ue.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ce.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return De.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return be.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Oe.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {qe[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = qe[e];if (n) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = z(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (V.adapter = t), n && (V.runtime = n);} }]);return Fe;}();var Le = new Fe();function Ne(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var o in n) {"" === r ? !s && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var Me = /*#__PURE__*/function () {function Me() {_classCallCheck(this, Me);}_createClass(Me, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {q.request({ url: Ne("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = q.uploadFile({ url: Ne("https:", s), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return Me;}();var je = { setItem: function setItem(e, t) {q.setStorageSync(e, t);}, getItem: function getItem(e) {return q.getStorageSync(e);}, removeItem: function removeItem(e) {q.removeStorageSync(e);}, clear: function clear() {q.clearStorageSync();} };var $e = { genAdapter: function genAdapter() {return { root: {}, reqClass: Me, localStorage: je, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Le.useAdapters($e);var Ke = Le,Be = Ke.init;Ke.init = function (e) {e.env = e.spaceId;var t = Be.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = k(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var He = /*#__PURE__*/function (_F) {_inherits(He, _F);var _super9 = _createSuper(He);function He() {_classCallCheck(this, He);return _super9.apply(this, arguments);}_createClass(He, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {_this13.setAccessToken("Anonymous_Access_token"), e("Anonymous_Access_token");});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret);var r = C(),o = r.APPID,i = r.PLATFORM,a = r.DEVICEID,c = r.CLIENT_SDK_VERSION;return s["x-client-platform"] = i, s["x-client-appid"] = o, s["x-client-device-id"] = a, s["x-client-version"] = c, s["x-client-token"] = q.getStorageSync("uni_id_token"), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,n = _ref12.name,s = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new T({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,n = _ref13$fileType === void 0 ? "image" : _ref13$fileType,s = _ref13.onUploadProgress;if (!t) throw new T({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name,c = _t$result.fileUrl;r = c;var u = { url: o, formData: i, name: a, filePath: e, fileType: n };return _this15.uploadFileToOSS(Object.assign({}, u, { onUploadProgress: s }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return He;}(F);var We = { init: function init(e) {var t = new He(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var ze, Ve;function Je(_ref14) {var e = _ref14.name,t = _ref14.data,n = _ref14.spaceId,s = _ref14.provider;ze || (ze = C(), Ve = { ak: E.appid, p: "android" === O ? "a" : "i", ut: x(), uuid: D() });var r = JSON.parse(JSON.stringify(t || {})),o = e,i = n,a = { tencent: "t", aliyun: "a" }[s];{var _e15 = Object.assign({}, Ve, { fn: o, sid: i, pvd: a });Object.assign(r, { clientInfo: ze, uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e15)) });var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),_t8 = _uni$getSystemInfoSyn2.deviceId;r.uniCloudDeviceId = _t8;}if (!r.uniIdToken) {var _e16 = q.getStorageSync("uni_id_token") || q.getStorageSync("uniIdToken");_e16 && (r.uniIdToken = _e16);}return r;}function Ye(_ref15) {var _this16 = this;var e = _ref15.name,t = _ref15.data;var n = this.localAddress,s = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {q.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,n = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref18) {var n = _ref18.code,s = _ref18.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (n, s) {var i = Je({ name: e, data: t, provider: _this16.config.provider, spaceId: o });q.request({ method: "POST", url: a, data: { provider: r, platform: h, param: i }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.statusCode,t = _ref19.data;return !e || e >= 400 ? s(new T({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : n({ result: t });}, fail: function fail(e) {s(new T({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var Xe = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var Ge = /[\\^$.*+?()[\]{}|]/g,Qe = RegExp(Ge.source);function Ze(e, t, n) {return e.replace(new RegExp((s = t) && Qe.test(s) ? s.replace(Ge, "\\$&") : s, "g"), n);var s;}function et(_ref20) {var e = _ref20.functionName,t = _ref20.result,n = _ref20.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _s7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s7, "[/").concat(n, "-request]"));}}function tt(e) {var t = e.callFunction,n = function n(e) {var _this17 = this;var n = e.name;e.data = Je({ name: n, data: e.data, provider: this.config.provider, spaceId: this.config.spaceId });var s = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, e).then(function (e) {return et.call(_this17, { functionName: n, result: e, logPvd: s }), Promise.resolve(e);}, function (t) {return et.call(_this17, { functionName: n, result: t, logPvd: s }), t && t.message && (t.message = function () {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref21$message = _ref21.message,e = _ref21$message === void 0 ? "" : _ref21$message,_ref21$extraInfo = _ref21.extraInfo,t = _ref21$extraInfo === void 0 ? {} : _ref21$extraInfo,_ref21$formatter = _ref21.formatter,n = _ref21$formatter === void 0 ? [] : _ref21$formatter;for (var _s8 = 0; _s8 < n.length; _s8++) {var _n$_s = n[_s8],_r3 = _n$_s.rule,_o2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e19 = 1; _e19 < _a.length; _e19++) {_c = Ze(_c, "{$".concat(_e19, "}"), _a[_e19]);}for (var _e20 in t) {_c = Ze(_c, "{".concat(_e20, "}"), t[_e20]);}switch (i) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: Xe, extraInfo: { functionName: n } })), Promise.reject(t);});};e.callFunction = function (t) {var s;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n), s = Ye.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var nt = Symbol("CLIENT_DB_INTERNAL");function st(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = nt, new Proxy(e, { get: function get(e, n, s) {return n in e || "string" != typeof n ? e[n] : t.get(e, n, s);} });}function rt(e) {switch (o(e)) {case "array":return e.map(function (e) {return rt(e);});case "object":return e._internalType === nt || Object.keys(e).forEach(function (t) {e[t] = rt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function ot() {var e = q.getStorageSync("uni_id_token") || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(atob(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}var it = t(n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:fail";function s(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function r(e, t, _ref22) {var n = _ref22.onChooseFile,s = _ref22.onUploadProgress;return t.then(function (e) {if (n) {var _t9 = n(e);if (void 0 !== _t9) return Promise.resolve(_t9).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: "chooseAndUploadFile:ok", tempFilePaths: [], tempFiles: [] } : function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var s = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = "chooseAndUploadFile:ok";var r = t.tempFiles,o = r.length;var i = 0;return new Promise(function (a) {for (; i < n;) {c();}function c() {var n = i++;if (n >= o) return void (!r.find(function (e) {return !e.url && !e.errMsg;}) && a(t));var u = r[n];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = n, e.tempFile = u, e.tempFilePath = u.path, s && s(e);} }).then(function (e) {u.url = e.fileID, n < o && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, n < o && c();});}});}(e, t, 5, s);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? r(e, function (e) {var t = e.count,r = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: r, sourceType: o, extension: i, success: function success(t) {e(s(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", n) });} });});}(t), t) : "video" === t.type ? r(e, function (e) {var t = e.camera,r = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: r, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,r = t.duration,o = t.size,i = t.height,a = t.width;e(s({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: r, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", n) });} });});}(t), t) : r(e, function (e) {var t = e.count,r = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: n + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: r, success: function success(t) {e(s(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", n) });} });});}(t), t);};};}));var at = "manual";function ct(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, collection: { type: String, default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === at) return;var n = !1;var s = [];for (var _r4 = 2; _r4 < e.length; _r4++) {e[_r4] !== t[_r4] && (s.push(e[_r4]), n = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$getone = _ref23.getone,e = _ref23$getone === void 0 ? !1 : _ref23$getone,t = _ref23.success,n = _ref23.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this19.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = r), _this19.mixinDatacomHasMore = s.length < _this19.pageSize;var o = e ? s.length ? s[0] : void 0 : s;_this19.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database();var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = n.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (n = n.where(o));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var h = t.orderby || this.orderby;h && (n = n.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;} } };}function ut(_x30, _x31) {return _ut.apply(this, arguments);}function _ut() {_ut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n, _e27, s;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {q.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e27 = _context32.sent;return _context32.abrupt("return", !(!_e27.data || 0 !== _e27.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _ut.apply(this, arguments);}var ht = new ( /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);}_createClass(_class2, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = Ke.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = L.init(Object.assign(e, { useDebugFunction: n }));break;case "private":t = We.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}var s = l;u && s && !s.code && (t.debugInfo = s);var r = Promise.resolve();var o;o = 1, r = new Promise(function (e, t) {setTimeout(function () {e();}, o);}), t.isReady = !1, t.isDefault = !1;var i = t.auth();t.initUniCloud = r.then(function () {return i.getLoginState();}).then(function (e) {return e ? Promise.resolve() : i.signInAnonymously();}).then(function () {if (u && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e21 = _t$debugInfo.address,_n4 = _t$debugInfo.servePort;return function () {var _ref24 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var n, _s9, _r5;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_s9 = 0;case 1:if (!(_s9 < e.length)) {_context31.next = 11;break;}_r5 = e[_s9];_context31.next = 5;return ut(_r5, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}n = _r5;return _context31.abrupt("break", 11);case 8:_s9++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: n, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref24.apply(this, arguments);};}()(_e21, _n4);}return Promise.resolve();}).then(function () {var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref25.address,n = _ref25.port;if (!u) return Promise.resolve();if (e) t.localAddress = e, t.localPort = n;else if (t.debugInfo) {var _e22 = console["app-plus" === h ? "error" : "warn"];"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _e22("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs")) : _e22("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs");}}).then(function () {return function () {if (!u || "h5" !== h) return;if (uni.getStorageSync("__LAST_DCLOUD_APPID") === E.appid) return;uni.setStorageSync("__LAST_DCLOUD_APPID", E.appid), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));}(), new Promise(function (e) {"quickapp-native" === h ? (O = "android", uni.getStorage({ key: "__DC_CLOUD_UUID", success: function success(t) {b = t.data ? t.data : U(32), e();} })) : setTimeout(function () {O = uni.getSystemInfoSync().platform, b = uni.getStorageSync("__DC_CLOUD_UUID") || U(32), e();}, 0);});}).then(function () {t.isReady = !0;}), tt(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this20 = this;var n;return n = this.isReady ? Promise.resolve() : this.initUniCloud, n.then(function () {return t.call(_this20, e);});};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {};var n = {};function s(_ref26) {var s = _ref26.action,r = _ref26.command,o = _ref26.multiCommand;return v(S("database", "invoke")).then(function () {return e.callFunction({ name: "DCloud-clientDB", data: { action: s, command: r, multiCommand: o } });}).then(function (e) {var _e$result = e.result,s = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,c = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (c) for (var _e23 = 0; _e23 < c.length; _e23++) {var _c$_e = c[_e23],_t10 = _c$_e.level,_n5 = _c$_e.message,_s10 = _c$_e.detail,_r6 = console["app-plus" === h && "warn" === _t10 ? "error" : _t10] || console.log;var _o3 = "[System Info]" + _n5;_s10 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s10)), _r6(_o3);}if (s) {var _e24 = new a(r, s);return n.error && n.error.forEach(function (t) {t(_e24);}), Promise.reject(_e24);}o && i && (t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}));var u = e.result.affectedDocs;return "number" == typeof u && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), u;} }), v(S("database", "success"), e).then(function () {return v(S("database", "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), v(S("database", "fail"), e).then(function () {return v(S("database", "complete"), e);}).then(function () {return Promise.reject(e);});});}this.isDefault && (n = g("_globalUniCloudDatabaseCallback"));var r = /*#__PURE__*/function () {function r(e, t) {_classCallCheck(this, r);this.content = e, this.prevStage = t, this.udb = null;}_createClass(r, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: e.$param };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),r = this.getCommand();return r.$db.push({ $method: e, $param: rt(t) }), s({ action: n, command: r });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n6 = e.content.$method;if ("aggregate" === _n6 || "pipeline" === _n6) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return c({ $method: "count", $param: rt(Array.from(arguments)) }, e);};} }, { key: "multiSend", get: function get() {} }]);return r;}();var o = ["db.Geo", "db.command", "command.aggregate"];function i(e, t) {return o.indexOf("".concat(e, ".").concat(t)) > -1;}function c(e, t) {return st(new r(e, t), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), i(n, t) ? c({ $method: t }, e) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) }, e);};}, set: function set(e, t, n) {e[t] = n;} });}function u(_ref27) {var e = _ref27.path,t = _ref27.method;return /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);this.param = Array.from(arguments);}_createClass(_class3, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class3;}();}var l = { auth: { on: function on(e, n) {t[e] = t[e] || [], t[e].indexOf(n) > -1 || t[e].push(n);}, off: function off(e, n) {t[e] = t[e] || [];var s = t[e].indexOf(n);-1 !== s && t[e].splice(s, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var s = n[e].indexOf(t);-1 !== s && n[e].splice(s, 1);}, env: st({}, { get: function get(e, t) {return { $env: t };} }), Geo: st({}, { get: function get(e, t) {return u({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, multiSend: function multiSend() {var e = Array.from(arguments);return s({ multiCommand: e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };}) }).then(function (t) {for (var _n7 = 0; _n7 < e.length; _n7++) {var _s11 = e[_n7];_s11.udb && "function" == typeof _s11.udb.setResult && _s11.udb.setResult(t.result.dataList[_n7]);}return Promise.resolve(t);}, function (t) {for (var _n8 = 0; _n8 < e.length; _n8++) {var _s12 = e[_n8];_s12.udb && "function" == typeof _s12.udb.setResult && _s12.udb.setResult(t);}return Promise.reject(t);});}, get serverDate() {return u({ path: [], method: "serverDate" });}, get RegExp() {return u({ path: [], method: "RegExp" });} },d = st(l, { get: function get(e, t) {return i("db", t) ? c({ $method: t }) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) });};} });return this._database = d, d;};}(t), function (e) {e.getCurrentUserInfo = ot, e.chooseAndUploadFile = it.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return ct(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {t[e] && (t[e] = k(t[e], e));}), t.init = this.init, t;} }]);return _class2;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], ht = ht.init(t), ht.isDefault = !0;else {var _t11 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _n9;_n9 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t11.forEach(function (e) {ht[e] = function () {return console.error(_n9), Promise.reject(new T({ code: "SYS_ERR", message: _n9 }));};});}Object.assign(ht, { get mixinDatacom() {return ct(ht);} }), ht.addInterceptor = _, ht.removeInterceptor = w, u && "h5" === h && (window.uniCloud = ht);}})();var lt = ht;var _default2 = lt;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 80), __webpack_require__(/*! ./../../../../../node-libs-browser/mock/process.js */ 49), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 81)["default"]))

/***/ }),
/* 80 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 81 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 82));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 80)))

/***/ }),
/* 82 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 83 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 84);

/***/ }),
/* 84 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 85);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 85 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 86 */
/*!**************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.esm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.initVueI18n = initVueI18n;exports.I18n = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isObject = function isObject(val) {return val !== null && typeof val === 'object';};var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var _char = format[position++];
    if (_char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      _char = format[position++];
      while (_char !== undefined && _char !== '}') {
        sub += _char;
        _char = format[position++];
      }
      var isClosed = _char === '}';
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    } else
    if (_char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[position] !== '{') {
        text += _char;
      }
    } else
    {
      text += _char;
    }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') !== -1) {
      return 'zh-Hans';
    }
    if (locale.indexOf('-hant') !== -1) {
      return 'zh-Hant';
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return 'zh-Hant';
    }
    return 'zh-Hans';
  }
  var lang = startsWith(locale, ['en', 'fr', 'es']);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref) {var locale = _ref.locale,fallbackLocale = _ref.fallbackLocale,messages = _ref.messages,watcher = _ref.watcher,formater = _ref.formater;_classCallCheck(this, I18n);
    this.locale = 'en';
    this.fallbackLocale = 'en';
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages;
    this.setLocale(locale);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      this.message = this.messages[this.locale];
      this.watchers.forEach(function (watcher) {
        watcher(_this.locale, oldLocale);
      });
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function initLocaleWatcher(appVm, i18n) {
  appVm.$i18n &&
  appVm.$i18n.vm.$watch('locale', function (newLocale) {
    i18n.setLocale(newLocale);
  }, {
    immediate: true });

}
function getDefaultLocale() {
  if (typeof navigator !== 'undefined') {
    return navigator.userLanguage || navigator.language;
  }
  if (typeof plus !== 'undefined') {
    // TODO 待调整为最新的获取语言代码
    return plus.os.language;
  }
  return uni.getSystemInfoSync().language;
}
function initVueI18n(messages) {var fallbackLocale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';var locale = arguments.length > 2 ? arguments[2] : undefined;
  var i18n = new I18n({
    locale: locale || fallbackLocale,
    fallbackLocale: fallbackLocale,
    messages: messages });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app-plus view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var appVm = getApp().$vm;
      if (!appVm.$t || !appVm.$i18n) {
        if (!locale) {
          i18n.setLocale(getDefaultLocale());
        }
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          return i18n.t(key, values);
        };
      } else
      {
        initLocaleWatcher(appVm, i18n);
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          var $i18n = appVm.$i18n;
          var silentTranslationWarn = $i18n.silentTranslationWarn;
          $i18n.silentTranslationWarn = true;
          var msg = appVm.$t(key, values);
          $i18n.silentTranslationWarn = silentTranslationWarn;
          if (msg !== key) {
            return msg;
          }
          return i18n.t(key, $i18n.locale, values);
        };
      }
    }
    return _t(key, values);
  };
  return {
    t: function t(key, values) {
      return _t(key, values);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    },
    mixin: {
      beforeCreate: function beforeCreate() {var _this3 = this;
        var unwatch = i18n.watchLocale(function () {
          _this3.$forceUpdate();
        });
        this.$once('hook:beforeDestroy', function () {
          unwatch();
        });
      },
      methods: {
        $$t: function $$t(key, values) {
          return _t(key, values);
        } } } };



}

/***/ }),
/* 87 */
/*!************************************************!*\
  !*** F:/APP/My-App/pages.json?{"type":"stat"} ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__60BA6BC" };exports.default = _default;

/***/ }),
/* 88 */
/*!*****************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/u-avatar-cropper/u-avatar-cropper.vue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-avatar-cropper.vue?vue&type=template&id=4a6c83fe&scoped=true&mpType=page */ 89);\n/* harmony import */ var _u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-avatar-cropper.vue?vue&type=script&lang=js&mpType=page */ 91);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4a6c83fe\",\n  null,\n  false,\n  _u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user-center/u-avatar-cropper/u-avatar-cropper.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0o7QUFDcEo7QUFDK0U7QUFDTDs7O0FBRzFFO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLGlHQUFNO0FBQ1IsRUFBRSxrSEFBTTtBQUNSLEVBQUUsMkhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0hBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiODguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3UtYXZhdGFyLWNyb3BwZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhNmM4M2ZlJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91LWF2YXRhci1jcm9wcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi91LWF2YXRhci1jcm9wcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRhNmM4M2ZlXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXItY2VudGVyL3UtYXZhdGFyLWNyb3BwZXIvdS1hdmF0YXItY3JvcHBlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///88\n");

/***/ }),
/* 89 */
/*!***********************************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/u-avatar-cropper/u-avatar-cropper.vue?vue&type=template&id=4a6c83fe&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-avatar-cropper.vue?vue&type=template&id=4a6c83fe&scoped=true&mpType=page */ 90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_template_id_4a6c83fe_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 90 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/u-avatar-cropper/u-avatar-cropper.vue?vue&type=template&id=4a6c83fe&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "cropper-wrapper"),
          style: _vm._$s(1, "s", { height: _vm.cropperOpt.height + "px" }),
          attrs: { _i: 1 }
        },
        [
          _c("canvas", {
            staticClass: _vm._$s(2, "sc", "cropper"),
            style: _vm._$s(2, "s", {
              width: _vm.cropperOpt.width,
              height: _vm.cropperOpt.height,
              backgroundColor: "rgba(0, 0, 0, 0.8)"
            }),
            attrs: { id: "cropper", _i: 2 },
            on: {
              touchstart: _vm.touchStart,
              touchmove: _vm.touchMove,
              touchend: _vm.touchEnd
            }
          }),
          _c("canvas", {
            staticClass: _vm._$s(3, "sc", "cropper"),
            style: _vm._$s(3, "s", {
              position: "fixed",
              top:
                "-" + _vm.cropperOpt.width * _vm.cropperOpt.pixelRatio + "px",
              left:
                "-" + _vm.cropperOpt.height * _vm.cropperOpt.pixelRatio + "px",
              width: _vm.cropperOpt.width * _vm.cropperOpt.pixelRatio + "px",
              height: "" + _vm.cropperOpt.height * _vm.cropperOpt.pixelRatio
            }),
            attrs: { id: "targetId", _i: 3 }
          })
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(4, "sc", "cropper-buttons safe-area-padding"),
          style: _vm._$s(4, "s", { height: _vm.bottomNavHeight + "px" }),
          attrs: { _i: 4 }
        },
        [
          _c("view", {
            staticClass: _vm._$s(5, "sc", "upload"),
            attrs: { _i: 5 },
            on: { click: _vm.uploadTap }
          }),
          _c("view", {
            staticClass: _vm._$s(6, "sc", "getCropperImage"),
            attrs: { _i: 6 },
            on: {
              click: function($event) {
                return _vm.getCropperImage(false)
              }
            }
          })
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 91 */
/*!*****************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/u-avatar-cropper/u-avatar-cropper.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./u-avatar-cropper.vue?vue&type=script&lang=js&mpType=page */ 92);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_u_avatar_cropper_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThzQixDQUFnQixpdEJBQUcsRUFBQyIsImZpbGUiOiI5MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91LWF2YXRhci1jcm9wcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdS1hdmF0YXItY3JvcHBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///91\n");

/***/ }),
/* 92 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/u-avatar-cropper/u-avatar-cropper.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _weCropper = _interopRequireDefault(__webpack_require__(/*! ./weCropper.js */ 93));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 = { props: { // 裁剪矩形框的样式，其中可包含的属性为lineWidth-边框宽度(单位rpx)，color: 边框颜色，\n    // mask-遮罩颜色，一般设置为一个rgba的透明度，如\"rgba(0, 0, 0, 0.35)\"\n    boundStyle: { type: Object, default: function _default() {return { lineWidth: 4, borderColor: 'rgb(245, 245, 245)', mask: 'rgba(0, 0, 0, 0.35)' };} } // // 裁剪框宽度，单位rpx\n    // rectWidth: {\n    // \ttype: [String, Number],\n    // \tdefault: 400\n    // },\n    // // 裁剪框高度，单位rpx\n    // rectHeight: {\n    // \ttype: [String, Number],\n    // \tdefault: 400\n    // },\n    // // 输出图片宽度，单位rpx\n    // destWidth: {\n    // \ttype: [String, Number],\n    // \tdefault: 400\n    // },\n    // // 输出图片高度，单位rpx\n    // destHeight: {\n    // \ttype: [String, Number],\n    // \tdefault: 400\n    // },\n    // // 输出的图片类型，如果发现裁剪的图片很大，可能是因为设置为了\"png\"，改成\"jpg\"即可\n    // fileType: {\n    // \ttype: String,\n    // \tdefault: 'jpg',\n    // },\n    // // 生成的图片质量\n    // // H5上无效，目前不考虑使用此参数\n    // quality: {\n    // \ttype: [Number, String],\n    // \tdefault: 1\n    // }\n  }, data: function data() {return { // 底部导航的高度\n      bottomNavHeight: 50, originWidth: 200, width: 0, height: 0, cropperOpt: { id: 'cropper', targetId: 'targetCropper', pixelRatio: 1, width: 0, height: 0, scale: 2.5, zoom: 8, cut: { x: (this.width - this.originWidth) / 2, y: (this.height - this.originWidth) / 2, width: this.originWidth, height: this.originWidth }, boundStyle: { lineWidth: uni.upx2px(this.boundStyle.lineWidth), mask: this.boundStyle.mask, color: this.boundStyle.borderColor } },\n      // 裁剪框和输出图片的尺寸，高度默认等于宽度\n      // 输出图片宽度，单位px\n      destWidth: 200,\n      // 裁剪框宽度，单位px\n      rectWidth: 200,\n      // 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成\"jpg\"即可\n      fileType: 'jpg',\n      src: '' // 选择的图片路径，用于在点击确定时，判断是否选择了图片\n    };\n  },\n  onLoad: function onLoad(option) {var _this = this;\n    var rectInfo = uni.getSystemInfoSync();\n    this.width = rectInfo.windowWidth;\n    this.height = rectInfo.windowHeight - this.bottomNavHeight;\n    this.cropperOpt.width = this.width;\n    this.cropperOpt.height = this.height;\n    this.cropperOpt.pixelRatio = rectInfo.pixelRatio;\n\n    if (option.destWidth) this.destWidth = option.destWidth;\n    if (option.rectWidth) {\n      var rectWidth = Number(option.rectWidth);\n      this.cropperOpt.cut = {\n        x: (this.width - rectWidth) / 2,\n        y: (this.height - rectWidth) / 2,\n        width: rectWidth,\n        height: rectWidth };\n\n    }\n    this.rectWidth = option.rectWidth;\n    if (option.fileType) this.fileType = option.fileType;\n    // 初始化\n    this.cropper = new _weCropper.default(this.cropperOpt).\n    on('ready', function (ctx) {\n      // wecropper is ready for work!\n    }).\n    on('beforeImageLoad', function (ctx) {\n      // before picture loaded, i can do something\n    }).\n    on('imageLoad', function (ctx) {\n      // picture loaded\n    }).\n    on('beforeDraw', function (ctx, instance) {\n      // before canvas draw,i can do something\n    });\n    // 设置导航栏样式，以免用户在page.json中没有设置为黑色背景\n    uni.setNavigationBarColor({\n      frontColor: '#ffffff',\n      backgroundColor: '#000000' });\n\n    uni.chooseImage({\n      count: 1, // 默认9\n      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有\n      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有\n      success: function success(res) {\n        _this.src = res.tempFilePaths[0];\n        //  获取裁剪图片资源后，给data添加src属性及其值\n        _this.cropper.pushOrign(_this.src);\n      } });\n\n  },\n  methods: {\n    touchStart: function touchStart(e) {\n      this.cropper.touchStart(e);\n    },\n    touchMove: function touchMove(e) {\n      this.cropper.touchMove(e);\n    },\n    touchEnd: function touchEnd(e) {\n      this.cropper.touchEnd(e);\n    },\n    getCropperImage: function getCropperImage() {var _this2 = this;var isPre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      if (!this.src) return this.$u.toast('请先选择图片再裁剪');\n\n      var cropper_opt = {\n        destHeight: Number(this.destWidth), // uni.canvasToTempFilePath要求这些参数为数值\n        destWidth: Number(this.destWidth),\n        fileType: this.fileType };\n\n      this.cropper.getCropperImage(cropper_opt, function (path, err) {\n        if (err) {\n          uni.showModal({\n            title: '温馨提示',\n            content: err.message });\n\n        } else {\n          if (isPre) {\n            uni.previewImage({\n              current: '', // 当前显示图片的 http 链接\n              urls: [path] // 需要预览的图片 http 链接列表\n            });\n          } else {\n            uni.$emit('uAvatarCropper', path);\n            _this2.$u.route({\n              type: 'back' });\n\n          }\n        }\n      });\n    },\n    uploadTap: function uploadTap() {var _this3 = this;\n      var self = this;\n      uni.chooseImage({\n        count: 1, // 默认9\n        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有\n        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有\n        success: function success(res) {\n          self.src = res.tempFilePaths[0];\n          //  获取裁剪图片资源后，给data添加src属性及其值\n\n          self.cropper.pushOrign(_this3.src);\n        } });\n\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvdS1hdmF0YXItY3JvcHBlci91LWF2YXRhci1jcm9wcGVyLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBLHVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBQ0EsRUFDQSxTQUNBO0FBQ0E7QUFDQSxrQkFDQSxZQURBLEVBRUEsT0FGQSxzQkFFQSxDQUNBLFNBQ0EsWUFEQSxFQUVBLGlDQUZBLEVBR0EsMkJBSEEsR0FLQSxDQVJBLEVBSEEsQ0FhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQSxHQURBLEVBOENBLElBOUNBLGtCQThDQSxDQUNBLFNBQ0E7QUFDQSx5QkFGQSxFQUdBLGdCQUhBLEVBSUEsUUFKQSxFQUtBLFNBTEEsRUFNQSxjQUNBLGFBREEsRUFFQSx5QkFGQSxFQUdBLGFBSEEsRUFJQSxRQUpBLEVBS0EsU0FMQSxFQU1BLFVBTkEsRUFPQSxPQVBBLEVBUUEsT0FDQSxzQ0FEQSxFQUVBLHVDQUZBLEVBR0EsdUJBSEEsRUFJQSx3QkFKQSxFQVJBLEVBY0EsY0FDQSxnREFEQSxFQUVBLDBCQUZBLEVBR0Esa0NBSEEsRUFkQSxFQU5BO0FBMEJBO0FBQ0E7QUFDQSxvQkE1QkE7QUE2QkE7QUFDQSxvQkE5QkE7QUErQkE7QUFDQSxxQkFoQ0E7QUFpQ0EsYUFqQ0EsQ0FpQ0E7QUFqQ0E7QUFtQ0EsR0FsRkE7QUFtRkEsUUFuRkEsa0JBbUZBLE1BbkZBLEVBbUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSx3Q0FGQTtBQUdBLHdCQUhBO0FBSUEseUJBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BREEsQ0FDQSxPQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxNQUpBLENBSUEsaUJBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLE1BUEEsQ0FPQSxXQVBBLEVBT0E7QUFDQTtBQUNBLEtBVEE7QUFVQSxNQVZBLENBVUEsWUFWQSxFQVVBO0FBQ0E7QUFDQSxLQVpBO0FBYUE7QUFDQTtBQUNBLDJCQURBO0FBRUEsZ0NBRkE7O0FBSUE7QUFDQSxjQURBLEVBQ0E7QUFDQSw4QkFGQSxFQUVBO0FBQ0EscUNBSEEsRUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQTs7QUFVQSxHQXBJQTtBQXFJQTtBQUNBLGNBREEsc0JBQ0EsQ0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsYUFKQSxxQkFJQSxDQUpBLEVBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxZQVBBLG9CQU9BLENBUEEsRUFPQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLG1CQVZBLDZCQVVBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FEQSxFQUNBO0FBQ0EseUNBRkE7QUFHQSwrQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLGdDQUZBOztBQUlBLFNBTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQSxFQUNBO0FBQ0EsMEJBRkEsQ0FFQTtBQUZBO0FBSUEsV0FMQSxNQUtBO0FBQ0E7QUFDQTtBQUNBLDBCQURBOztBQUdBO0FBQ0E7QUFDQSxPQW5CQTtBQW9CQSxLQXRDQTtBQXVDQSxhQXZDQSx1QkF1Q0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREEsRUFDQTtBQUNBLDRDQUZBLEVBRUE7QUFDQSx1Q0FIQSxFQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FUQTs7QUFXQSxLQXBEQSxFQXJJQSxFIiwiZmlsZSI6IjkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJjcm9wcGVyLXdyYXBwZXJcIiA6c3R5bGU9XCJ7IGhlaWdodDogY3JvcHBlck9wdC5oZWlnaHQgKyAncHgnIH1cIj5cclxuXHRcdFx0PGNhbnZhc1xyXG5cdFx0XHRcdGNsYXNzPVwiY3JvcHBlclwiXHJcblx0XHRcdFx0OmRpc2FibGUtc2Nyb2xsPVwidHJ1ZVwiXHJcblx0XHRcdFx0QHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0XCJcclxuXHRcdFx0XHRAdG91Y2htb3ZlPVwidG91Y2hNb3ZlXCJcclxuXHRcdFx0XHRAdG91Y2hlbmQ9XCJ0b3VjaEVuZFwiXHJcblx0XHRcdFx0OnN0eWxlPVwieyB3aWR0aDogY3JvcHBlck9wdC53aWR0aCwgaGVpZ2h0OiBjcm9wcGVyT3B0LmhlaWdodCwgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjgpJyB9XCJcclxuXHRcdFx0XHRjYW52YXMtaWQ9XCJjcm9wcGVyXCJcclxuXHRcdFx0XHRpZD1cImNyb3BwZXJcIlxyXG5cdFx0XHQ+PC9jYW52YXM+XHJcblx0XHRcdDxjYW52YXNcclxuXHRcdFx0XHRjbGFzcz1cImNyb3BwZXJcIlxyXG5cdFx0XHRcdDpkaXNhYmxlLXNjcm9sbD1cInRydWVcIlxyXG5cdFx0XHRcdDpzdHlsZT1cIntcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0XHRcdFx0dG9wOiBgLSR7Y3JvcHBlck9wdC53aWR0aCAqIGNyb3BwZXJPcHQucGl4ZWxSYXRpb31weGAsXHJcblx0XHRcdFx0XHRsZWZ0OiBgLSR7Y3JvcHBlck9wdC5oZWlnaHQgKiBjcm9wcGVyT3B0LnBpeGVsUmF0aW99cHhgLFxyXG5cdFx0XHRcdFx0d2lkdGg6IGAke2Nyb3BwZXJPcHQud2lkdGggKiBjcm9wcGVyT3B0LnBpeGVsUmF0aW99cHhgLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBgJHtjcm9wcGVyT3B0LmhlaWdodCAqIGNyb3BwZXJPcHQucGl4ZWxSYXRpb31gXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0Y2FudmFzLWlkPVwidGFyZ2V0SWRcIlxyXG5cdFx0XHRcdGlkPVwidGFyZ2V0SWRcIlxyXG5cdFx0XHQ+PC9jYW52YXM+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNyb3BwZXItYnV0dG9ucyBzYWZlLWFyZWEtcGFkZGluZ1wiIDpzdHlsZT1cInsgaGVpZ2h0OiBib3R0b21OYXZIZWlnaHQgKyAncHgnIH1cIj5cclxuXHRcdFx0PCEtLSAjaWZkZWYgSDUgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidXBsb2FkXCIgQHRhcD1cInVwbG9hZFRhcFwiPumAieaLqeWbvueJhzwvdmlldz5cclxuXHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdDwhLS0gI2lmbmRlZiBINSAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1cGxvYWRcIiBAdGFwPVwidXBsb2FkVGFwXCI+6YeN5paw6YCJ5oupPC92aWV3PlxyXG5cdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJnZXRDcm9wcGVySW1hZ2VcIiBAdGFwPVwiZ2V0Q3JvcHBlckltYWdlKGZhbHNlKVwiPuehruWumjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgV2VDcm9wcGVyIGZyb20gJy4vd2VDcm9wcGVyLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdHByb3BzOiB7XHJcblx0XHQvLyDoo4Hliarnn6nlvaLmoYbnmoTmoLflvI/vvIzlhbbkuK3lj6/ljIXlkKvnmoTlsZ7mgKfkuLpsaW5lV2lkdGgt6L655qGG5a695bqmKOWNleS9jXJweCnvvIxjb2xvcjog6L655qGG6aKc6Imy77yMXHJcblx0XHQvLyBtYXNrLemBrue9qeminOiJsu+8jOS4gOiIrOiuvue9ruS4uuS4gOS4qnJnYmHnmoTpgI/mmI7luqbvvIzlpoJcInJnYmEoMCwgMCwgMCwgMC4zNSlcIlxyXG5cdFx0Ym91bmRTdHlsZToge1xyXG5cdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdGRlZmF1bHQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdGxpbmVXaWR0aDogNCxcclxuXHRcdFx0XHRcdGJvcmRlckNvbG9yOiAncmdiKDI0NSwgMjQ1LCAyNDUpJyxcclxuXHRcdFx0XHRcdG1hc2s6ICdyZ2JhKDAsIDAsIDAsIDAuMzUpJ1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIC8vIOijgeWJquahhuWuveW6pu+8jOWNleS9jXJweFxyXG5cdFx0Ly8gcmVjdFdpZHRoOiB7XHJcblx0XHQvLyBcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHQvLyBcdGRlZmF1bHQ6IDQwMFxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIC8vIOijgeWJquahhumrmOW6pu+8jOWNleS9jXJweFxyXG5cdFx0Ly8gcmVjdEhlaWdodDoge1xyXG5cdFx0Ly8gXHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0Ly8gXHRkZWZhdWx0OiA0MDBcclxuXHRcdC8vIH0sXHJcblx0XHQvLyAvLyDovpPlh7rlm77niYflrr3luqbvvIzljZXkvY1ycHhcclxuXHRcdC8vIGRlc3RXaWR0aDoge1xyXG5cdFx0Ly8gXHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG5cdFx0Ly8gXHRkZWZhdWx0OiA0MDBcclxuXHRcdC8vIH0sXHJcblx0XHQvLyAvLyDovpPlh7rlm77niYfpq5jluqbvvIzljZXkvY1ycHhcclxuXHRcdC8vIGRlc3RIZWlnaHQ6IHtcclxuXHRcdC8vIFx0dHlwZTogW1N0cmluZywgTnVtYmVyXSxcclxuXHRcdC8vIFx0ZGVmYXVsdDogNDAwXHJcblx0XHQvLyB9LFxyXG5cdFx0Ly8gLy8g6L6T5Ye655qE5Zu+54mH57G75Z6L77yM5aaC5p6c5Y+R546w6KOB5Ymq55qE5Zu+54mH5b6I5aSn77yM5Y+v6IO95piv5Zug5Li66K6+572u5Li65LqGXCJwbmdcIu+8jOaUueaIkFwianBnXCLljbPlj69cclxuXHRcdC8vIGZpbGVUeXBlOiB7XHJcblx0XHQvLyBcdHR5cGU6IFN0cmluZyxcclxuXHRcdC8vIFx0ZGVmYXVsdDogJ2pwZycsXHJcblx0XHQvLyB9LFxyXG5cdFx0Ly8gLy8g55Sf5oiQ55qE5Zu+54mH6LSo6YePXHJcblx0XHQvLyAvLyBINeS4iuaXoOaViO+8jOebruWJjeS4jeiAg+iZkeS9v+eUqOatpOWPguaVsFxyXG5cdFx0Ly8gcXVhbGl0eToge1xyXG5cdFx0Ly8gXHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0Ly8gXHRkZWZhdWx0OiAxXHJcblx0XHQvLyB9XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Ly8g5bqV6YOo5a+86Iiq55qE6auY5bqmXHJcblx0XHRcdGJvdHRvbU5hdkhlaWdodDogNTAsXHJcblx0XHRcdG9yaWdpbldpZHRoOiAyMDAsXHJcblx0XHRcdHdpZHRoOiAwLFxyXG5cdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdGNyb3BwZXJPcHQ6IHtcclxuXHRcdFx0XHRpZDogJ2Nyb3BwZXInLFxyXG5cdFx0XHRcdHRhcmdldElkOiAndGFyZ2V0Q3JvcHBlcicsXHJcblx0XHRcdFx0cGl4ZWxSYXRpbzogMSxcclxuXHRcdFx0XHR3aWR0aDogMCxcclxuXHRcdFx0XHRoZWlnaHQ6IDAsXHJcblx0XHRcdFx0c2NhbGU6IDIuNSxcclxuXHRcdFx0XHR6b29tOiA4LFxyXG5cdFx0XHRcdGN1dDoge1xyXG5cdFx0XHRcdFx0eDogKHRoaXMud2lkdGggLSB0aGlzLm9yaWdpbldpZHRoKSAvIDIsXHJcblx0XHRcdFx0XHR5OiAodGhpcy5oZWlnaHQgLSB0aGlzLm9yaWdpbldpZHRoKSAvIDIsXHJcblx0XHRcdFx0XHR3aWR0aDogdGhpcy5vcmlnaW5XaWR0aCxcclxuXHRcdFx0XHRcdGhlaWdodDogdGhpcy5vcmlnaW5XaWR0aFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ym91bmRTdHlsZToge1xyXG5cdFx0XHRcdFx0bGluZVdpZHRoOiB1bmkudXB4MnB4KHRoaXMuYm91bmRTdHlsZS5saW5lV2lkdGgpLFxyXG5cdFx0XHRcdFx0bWFzazogdGhpcy5ib3VuZFN0eWxlLm1hc2ssXHJcblx0XHRcdFx0XHRjb2xvcjogdGhpcy5ib3VuZFN0eWxlLmJvcmRlckNvbG9yXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDoo4HliarmoYblkozovpPlh7rlm77niYfnmoTlsLrlr7jvvIzpq5jluqbpu5jorqTnrYnkuo7lrr3luqZcclxuXHRcdFx0Ly8g6L6T5Ye65Zu+54mH5a695bqm77yM5Y2V5L2NcHhcclxuXHRcdFx0ZGVzdFdpZHRoOiAyMDAsXHJcblx0XHRcdC8vIOijgeWJquahhuWuveW6pu+8jOWNleS9jXB4XHJcblx0XHRcdHJlY3RXaWR0aDogMjAwLFxyXG5cdFx0XHQvLyDovpPlh7rnmoTlm77niYfnsbvlnovvvIzlpoLmnpwncG5nJ+exu+Wei+WPkeeOsOijgeWJqueahOWbvueJh+WkquWkp++8jOaUueaIkFwianBnXCLljbPlj69cclxuXHRcdFx0ZmlsZVR5cGU6ICdqcGcnLFxyXG5cdFx0XHRzcmM6ICcnLCAvLyDpgInmi6nnmoTlm77niYfot6/lvoTvvIznlKjkuo7lnKjngrnlh7vnoa7lrprml7bvvIzliKTmlq3mmK/lkKbpgInmi6nkuoblm77niYdcclxuXHRcdH07XHJcblx0fSxcclxuXHRvbkxvYWQob3B0aW9uKSB7XHJcblx0XHRsZXQgcmVjdEluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdHRoaXMud2lkdGggPSByZWN0SW5mby53aW5kb3dXaWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gcmVjdEluZm8ud2luZG93SGVpZ2h0IC0gdGhpcy5ib3R0b21OYXZIZWlnaHQ7XHJcblx0XHR0aGlzLmNyb3BwZXJPcHQud2lkdGggPSB0aGlzLndpZHRoO1xyXG5cdFx0dGhpcy5jcm9wcGVyT3B0LmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cdFx0dGhpcy5jcm9wcGVyT3B0LnBpeGVsUmF0aW8gPSByZWN0SW5mby5waXhlbFJhdGlvO1xyXG5cclxuXHRcdGlmIChvcHRpb24uZGVzdFdpZHRoKSB0aGlzLmRlc3RXaWR0aCA9IG9wdGlvbi5kZXN0V2lkdGg7XHJcblx0XHRpZiAob3B0aW9uLnJlY3RXaWR0aCkge1xyXG5cdFx0XHRsZXQgcmVjdFdpZHRoID0gTnVtYmVyKG9wdGlvbi5yZWN0V2lkdGgpO1xyXG5cdFx0XHR0aGlzLmNyb3BwZXJPcHQuY3V0ID0ge1xyXG5cdFx0XHRcdHg6ICh0aGlzLndpZHRoIC0gcmVjdFdpZHRoKSAvIDIsXHJcblx0XHRcdFx0eTogKHRoaXMuaGVpZ2h0IC0gcmVjdFdpZHRoKSAvIDIsXHJcblx0XHRcdFx0d2lkdGg6IHJlY3RXaWR0aCxcclxuXHRcdFx0XHRoZWlnaHQ6IHJlY3RXaWR0aFxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yZWN0V2lkdGggPSBvcHRpb24ucmVjdFdpZHRoO1xyXG5cdFx0aWYgKG9wdGlvbi5maWxlVHlwZSkgdGhpcy5maWxlVHlwZSA9IG9wdGlvbi5maWxlVHlwZTtcclxuXHRcdC8vIOWIneWni+WMllxyXG5cdFx0dGhpcy5jcm9wcGVyID0gbmV3IFdlQ3JvcHBlcih0aGlzLmNyb3BwZXJPcHQpXHJcblx0XHRcdC5vbigncmVhZHknLCBjdHggPT4ge1xyXG5cdFx0XHRcdC8vIHdlY3JvcHBlciBpcyByZWFkeSBmb3Igd29yayFcclxuXHRcdFx0fSlcclxuXHRcdFx0Lm9uKCdiZWZvcmVJbWFnZUxvYWQnLCBjdHggPT4ge1xyXG5cdFx0XHRcdC8vIGJlZm9yZSBwaWN0dXJlIGxvYWRlZCwgaSBjYW4gZG8gc29tZXRoaW5nXHJcblx0XHRcdH0pXHJcblx0XHRcdC5vbignaW1hZ2VMb2FkJywgY3R4ID0+IHtcclxuXHRcdFx0XHQvLyBwaWN0dXJlIGxvYWRlZFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQub24oJ2JlZm9yZURyYXcnLCAoY3R4LCBpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdC8vIGJlZm9yZSBjYW52YXMgZHJhdyxpIGNhbiBkbyBzb21ldGhpbmdcclxuXHRcdFx0fSk7XHJcblx0XHQvLyDorr7nva7lr7zoiKrmoI/moLflvI/vvIzku6XlhY3nlKjmiLflnKhwYWdlLmpzb27kuK3msqHmnInorr7nva7kuLrpu5HoibLog4zmma9cclxuXHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyQ29sb3Ioe1xyXG5cdFx0XHRmcm9udENvbG9yOiAnI2ZmZmZmZicsXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnXHJcblx0XHR9KTtcclxuXHRcdHVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdGNvdW50OiAxLCAvLyDpu5jorqQ5XHJcblx0XHRcdHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcblx0XHRcdHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG5cdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3JjID0gcmVzLnRlbXBGaWxlUGF0aHNbMF07XHJcblx0XHRcdFx0Ly8gIOiOt+WPluijgeWJquWbvueJh+i1hOa6kOWQju+8jOe7mWRhdGHmt7vliqBzcmPlsZ7mgKflj4rlhbblgLxcclxuXHRcdFx0XHR0aGlzLmNyb3BwZXIucHVzaE9yaWduKHRoaXMuc3JjKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHR0b3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0dGhpcy5jcm9wcGVyLnRvdWNoU3RhcnQoZSk7XHJcblx0XHR9LFxyXG5cdFx0dG91Y2hNb3ZlKGUpIHtcclxuXHRcdFx0dGhpcy5jcm9wcGVyLnRvdWNoTW92ZShlKTtcclxuXHRcdH0sXHJcblx0XHR0b3VjaEVuZChlKSB7XHJcblx0XHRcdHRoaXMuY3JvcHBlci50b3VjaEVuZChlKTtcclxuXHRcdH0sXHJcblx0XHRnZXRDcm9wcGVySW1hZ2UoaXNQcmUgPSBmYWxzZSkge1xyXG5cdFx0XHRpZighdGhpcy5zcmMpIHJldHVybiB0aGlzLiR1LnRvYXN0KCfor7flhYjpgInmi6nlm77niYflho3oo4HliaonKTtcclxuXHJcblx0XHRcdGxldCBjcm9wcGVyX29wdCA9IHtcclxuXHRcdFx0XHRkZXN0SGVpZ2h0OiBOdW1iZXIodGhpcy5kZXN0V2lkdGgpLCAvLyB1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGjopoHmsYLov5nkupvlj4LmlbDkuLrmlbDlgLxcclxuXHRcdFx0XHRkZXN0V2lkdGg6IE51bWJlcih0aGlzLmRlc3RXaWR0aCksXHJcblx0XHRcdFx0ZmlsZVR5cGU6IHRoaXMuZmlsZVR5cGVcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5jcm9wcGVyLmdldENyb3BwZXJJbWFnZShjcm9wcGVyX29wdCwgKHBhdGgsIGVycikgPT4ge1xyXG5cdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IGVyci5tZXNzYWdlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGlzUHJlKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQ6ICcnLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoQgaHR0cCDpk77mjqVcclxuXHRcdFx0XHRcdFx0XHR1cmxzOiBbcGF0aF0gLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHIGh0dHAg6ZO+5o6l5YiX6KGoXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLiRlbWl0KCd1QXZhdGFyQ3JvcHBlcicsIHBhdGgpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLiR1LnJvdXRlKHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnYmFjaydcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHR1cGxvYWRUYXAoKSB7XHJcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdGNvdW50OiAxLCAvLyDpu5jorqQ5XHJcblx0XHRcdFx0c2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcclxuXHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcclxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRzZWxmLnNyYyA9IHJlcy50ZW1wRmlsZVBhdGhzWzBdO1xyXG5cdFx0XHRcdFx0Ly8gIOiOt+WPluijgeWJquWbvueJh+i1hOa6kOWQju+8jOe7mWRhdGHmt7vliqBzcmPlsZ7mgKflj4rlhbblgLxcclxuXHJcblx0XHRcdFx0XHRzZWxmLmNyb3BwZXIucHVzaE9yaWduKHRoaXMuc3JjKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbkBpbXBvcnQgJy4vc3R5bGUuY29tcG9uZW50cy5zY3NzJztcclxuXHJcbi5jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG59XHJcblxyXG4uY3JvcHBlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmNyb3BwZXItYnV0dG9ucyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuXHRjb2xvcjogI2VlZTtcclxufVxyXG5cclxuLmNyb3BwZXItd3JhcHBlciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdEBpbmNsdWRlIHZ1ZS1mbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmNyb3BwZXItYnV0dG9ucyB7XHJcblx0d2lkdGg6IDEwMHZ3O1xyXG5cdEBpbmNsdWRlIHZ1ZS1mbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGZvbnQtc2l6ZTogMjhycHg7XHJcbn1cclxuXHJcbi5jcm9wcGVyLWJ1dHRvbnMgLnVwbG9hZCxcclxuLmNyb3BwZXItYnV0dG9ucyAuZ2V0Q3JvcHBlckltYWdlIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNyb3BwZXItYnV0dG9ucyAudXBsb2FkIHtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdHBhZGRpbmctbGVmdDogNTBycHg7XHJcbn1cclxuXHJcbi5jcm9wcGVyLWJ1dHRvbnMgLmdldENyb3BwZXJJbWFnZSB7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0cGFkZGluZy1yaWdodDogNTBycHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///92\n");

/***/ }),
/* 93 */
/*!*********************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/u-avatar-cropper/weCropper.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__, global) {/**\r\n * we-cropper v1.3.9\r\n * (c) 2020 dlhandsome\r\n * @license MIT\r\n */\n(function (global, factory) {\n   true ? module.exports = factory() :\n  undefined;\n})(this, function () {\n  'use strict';\n\n  var device = void 0;\n  var TOUCH_STATE = ['touchstarted', 'touchmoved', 'touchended'];\n\n  function firstLetterUpper(str) {\n    return str.charAt(0).toUpperCase() + str.slice(1);\n  }\n\n  function setTouchState(instance) {\n    var arg = [],\n    len = arguments.length - 1;\n    while (len-- > 0) {arg[len] = arguments[len + 1];}\n\n    TOUCH_STATE.forEach(function (key, i) {\n      if (arg[i] !== undefined) {\n        instance[key] = arg[i];\n      }\n    });\n  }\n\n  function validator(instance, o) {\n    Object.defineProperties(instance, o);\n  }\n\n  function getDevice() {\n    if (!device) {\n      device = uni.getSystemInfoSync();\n    }\n    return device;\n  }\n\n  var tmp = {};\n\n  var ref = getDevice();\n  var pixelRatio = ref.pixelRatio;\n\n  var DEFAULT = {\n    id: {\n      default: 'cropper',\n      get: function get() {\n        return tmp.id;\n      },\n      set: function set(value) {\n        if (typeof value !== 'string') {\n          __f__(\"error\", \"id：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:56\");\n        }\n        tmp.id = value;\n      } },\n\n    width: {\n      default: 750,\n      get: function get() {\n        return tmp.width;\n      },\n      set: function set(value) {\n        if (typeof value !== 'number') {\n          __f__(\"error\", \"width：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:68\");\n        }\n        tmp.width = value;\n      } },\n\n    height: {\n      default: 750,\n      get: function get() {\n        return tmp.height;\n      },\n      set: function set(value) {\n        if (typeof value !== 'number') {\n          __f__(\"error\", \"height：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:80\");\n        }\n        tmp.height = value;\n      } },\n\n    pixelRatio: {\n      default: pixelRatio,\n      get: function get() {\n        return tmp.pixelRatio;\n      },\n      set: function set(value) {\n        if (typeof value !== 'number') {\n          __f__(\"error\", \"pixelRatio：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:92\");\n        }\n        tmp.pixelRatio = value;\n      } },\n\n    scale: {\n      default: 2.5,\n      get: function get() {\n        return tmp.scale;\n      },\n      set: function set(value) {\n        if (typeof value !== 'number') {\n          __f__(\"error\", \"scale：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:104\");\n        }\n        tmp.scale = value;\n      } },\n\n    zoom: {\n      default: 5,\n      get: function get() {\n        return tmp.zoom;\n      },\n      set: function set(value) {\n        if (typeof value !== 'number') {\n          __f__(\"error\", \"zoom：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:116\");\n        } else if (value < 0 || value > 10) {\n          __f__(\"error\", \"zoom should be ranged in 0 ~ 10\", \" at pages/user-center/u-avatar-cropper/weCropper.js:118\");\n        }\n        tmp.zoom = value;\n      } },\n\n    src: {\n      default: '',\n      get: function get() {\n        return tmp.src;\n      },\n      set: function set(value) {\n        if (typeof value !== 'string') {\n          __f__(\"error\", \"src：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:130\");\n        }\n        tmp.src = value;\n      } },\n\n    cut: {\n      default: {},\n      get: function get() {\n        return tmp.cut;\n      },\n      set: function set(value) {\n        if (typeof value !== 'object') {\n          __f__(\"error\", \"cut：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:142\");\n        }\n        tmp.cut = value;\n      } },\n\n    boundStyle: {\n      default: {},\n      get: function get() {\n        return tmp.boundStyle;\n      },\n      set: function set(value) {\n        if (typeof value !== 'object') {\n          __f__(\"error\", \"boundStyle：\" + value + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:154\");\n        }\n        tmp.boundStyle = value;\n      } },\n\n    onReady: {\n      default: null,\n      get: function get() {\n        return tmp.ready;\n      },\n      set: function set(value) {\n        tmp.ready = value;\n      } },\n\n    onBeforeImageLoad: {\n      default: null,\n      get: function get() {\n        return tmp.beforeImageLoad;\n      },\n      set: function set(value) {\n        tmp.beforeImageLoad = value;\n      } },\n\n    onImageLoad: {\n      default: null,\n      get: function get() {\n        return tmp.imageLoad;\n      },\n      set: function set(value) {\n        tmp.imageLoad = value;\n      } },\n\n    onBeforeDraw: {\n      default: null,\n      get: function get() {\n        return tmp.beforeDraw;\n      },\n      set: function set(value) {\n        tmp.beforeDraw = value;\n      } } };\n\n\n\n  var ref$1 = getDevice();\n  var windowWidth = ref$1.windowWidth;\n\n  function prepare() {\n    var self = this;\n\n    // v1.4.0 版本中将不再自动绑定we-cropper实例\n    self.attachPage = function () {\n      var pages = getCurrentPages();\n      // 获取到当前page上下文\n      var pageContext = pages[pages.length - 1];\n      // 把this依附在Page上下文的wecropper属性上，便于在page钩子函数中访问\n      Object.defineProperty(pageContext, 'wecropper', {\n        get: function get() {\n          __f__(\"warn\",\n          'Instance will not be automatically bound to the page after v1.4.0\\n\\n' +\n          'Please use a custom instance name instead\\n\\n' +\n          'Example: \\n' +\n          'this.mycropper = new WeCropper(options)\\n\\n' +\n          '// ...\\n' +\n          'this.mycropper.getCropperImage()', \" at pages/user-center/u-avatar-cropper/weCropper.js:211\");\n\n          return self;\n        },\n        configurable: true });\n\n    };\n\n    self.createCtx = function () {\n      var id = self.id;\n      var targetId = self.targetId;\n\n      if (id) {\n        self.ctx = self.ctx || uni.createCanvasContext(id);\n        self.targetCtx = self.targetCtx || uni.createCanvasContext(targetId);\n      } else {\n        __f__(\"error\", \"constructor: create canvas context failed, 'id' must be valuable\", \" at pages/user-center/u-avatar-cropper/weCropper.js:233\");\n      }\n    };\n\n    self.deviceRadio = windowWidth / 750;\n  }\n\n  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !==\n  'undefined' ? self : {};\n\n\n\n\n\n  function createCommonjsModule(fn, module) {\n    return module = {\n      exports: {} },\n    fn(module, module.exports), module.exports;\n  }\n\n  var tools = createCommonjsModule(function (module, exports) {\n    /**\r\n                                                                * String type check\r\n                                                                */\n    exports.isStr = function (v) {\n      return typeof v === 'string';\n    };\n    /**\r\n        * Number type check\r\n        */\n    exports.isNum = function (v) {\n      return typeof v === 'number';\n    };\n    /**\r\n        * Array type check\r\n        */\n    exports.isArr = Array.isArray;\n    /**\r\n                                    * undefined type check\r\n                                    */\n    exports.isUndef = function (v) {\n      return v === undefined;\n    };\n\n    exports.isTrue = function (v) {\n      return v === true;\n    };\n\n    exports.isFalse = function (v) {\n      return v === false;\n    };\n    /**\r\n        * Function type check\r\n        */\n    exports.isFunc = function (v) {\n      return typeof v === 'function';\n    };\n    /**\r\n        * Quick object check - this is primarily used to tell\r\n        * Objects from primitive values when we know the value\r\n        * is a JSON-compliant type.\r\n        */\n    exports.isObj = exports.isObject = function (obj) {\n      return obj !== null && typeof obj === 'object';\n    };\n\n    /**\r\n        * Strict object type check. Only returns true\r\n        * for plain JavaScript objects.\r\n        */\n    var _toString = Object.prototype.toString;\n    exports.isPlainObject = function (obj) {\n      return _toString.call(obj) === '[object Object]';\n    };\n\n    /**\r\n        * Check whether the object has the property.\r\n        */\n    var hasOwnProperty = Object.prototype.hasOwnProperty;\n    exports.hasOwn = function (obj, key) {\n      return hasOwnProperty.call(obj, key);\n    };\n\n    /**\r\n        * Perform no operation.\r\n        * Stubbing args to make Flow happy without leaving useless transpiled code\r\n        * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)\r\n        */\n    exports.noop = function (a, b, c) {};\n\n    /**\r\n                                           * Check if val is a valid array index.\r\n                                           */\n    exports.isValidArrayIndex = function (val) {\n      var n = parseFloat(String(val));\n      return n >= 0 && Math.floor(n) === n && isFinite(val);\n    };\n  });\n\n  var tools_7 = tools.isFunc;\n  var tools_10 = tools.isPlainObject;\n\n  var EVENT_TYPE = ['ready', 'beforeImageLoad', 'beforeDraw', 'imageLoad'];\n\n  function observer() {\n    var self = this;\n\n    self.on = function (event, fn) {\n      if (EVENT_TYPE.indexOf(event) > -1) {\n        if (tools_7(fn)) {\n          event === 'ready' ?\n          fn(self) :\n          self[\"on\" + firstLetterUpper(event)] = fn;\n        }\n      } else {\n        __f__(\"error\", \"event: \" + event + \" is invalid\", \" at pages/user-center/u-avatar-cropper/weCropper.js:348\");\n      }\n      return self;\n    };\n  }\n\n  function wxPromise(fn) {\n    return function (obj) {\n      var args = [],\n      len = arguments.length - 1;\n      while (len-- > 0) {args[len] = arguments[len + 1];}\n\n      if (obj === void 0) obj = {};\n      return new Promise(function (resolve, reject) {\n        obj.success = function (res) {\n          resolve(res);\n        };\n        obj.fail = function (err) {\n          reject(err);\n        };\n        fn.apply(void 0, [obj].concat(args));\n      });\n    };\n  }\n\n  function draw(ctx, reserve) {\n    if (reserve === void 0) reserve = false;\n\n    return new Promise(function (resolve) {\n      ctx.draw(reserve, resolve);\n    });\n  }\n\n  var getImageInfo = wxPromise(uni.getImageInfo);\n\n  var canvasToTempFilePath = wxPromise(uni.canvasToTempFilePath);\n\n  var base64 = createCommonjsModule(function (module, exports) {\n    /*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */\n    (function (root) {\n\n      // Detect free variables `exports`.\n      var freeExports =  true && exports;\n\n      // Detect free variable `module`.\n      var freeModule =  true && module &&\n      module.exports == freeExports && module;\n\n      // Detect free variable `global`, from Node.js or Browserified code, and use\n      // it as `root`.\n      var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;\n      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {\n        root = freeGlobal;\n      }\n\n      /*--------------------------------------------------------------------------*/\n\n      var InvalidCharacterError = function InvalidCharacterError(message) {\n        this.message = message;\n      };\n      InvalidCharacterError.prototype = new Error();\n      InvalidCharacterError.prototype.name = 'InvalidCharacterError';\n\n      var error = function error(message) {\n        // Note: the error messages used throughout this file match those used by\n        // the native `atob`/`btoa` implementation in Chromium.\n        throw new InvalidCharacterError(message);\n      };\n\n      var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';\n      // http://whatwg.org/html/common-microsyntaxes.html#space-character\n      var REGEX_SPACE_CHARACTERS = /[\\t\\n\\f\\r ]/g;\n\n      // `decode` is designed to be fully compatible with `atob` as described in the\n      // HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob\n      // The optimized base64-decoding algorithm used is based on @atk’s excellent\n      // implementation. https://gist.github.com/atk/1020396\n      var decode = function decode(input) {\n        input = String(input).\n        replace(REGEX_SPACE_CHARACTERS, '');\n        var length = input.length;\n        if (length % 4 == 0) {\n          input = input.replace(/==?$/, '');\n          length = input.length;\n        }\n        if (\n        length % 4 == 1 ||\n        // http://whatwg.org/C#alphanumeric-ascii-characters\n        /[^+a-zA-Z0-9/]/.test(input))\n        {\n          error(\n          'Invalid character: the string to be decoded is not correctly encoded.');\n\n        }\n        var bitCounter = 0;\n        var bitStorage;\n        var buffer;\n        var output = '';\n        var position = -1;\n        while (++position < length) {\n          buffer = TABLE.indexOf(input.charAt(position));\n          bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;\n          // Unless this is the first of a group of 4 characters…\n          if (bitCounter++ % 4) {\n            // …convert the first 8 bits to a single ASCII character.\n            output += String.fromCharCode(\n            0xFF & bitStorage >> (-2 * bitCounter & 6));\n\n          }\n        }\n        return output;\n      };\n\n      // `encode` is designed to be fully compatible with `btoa` as described in the\n      // HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa\n      var encode = function encode(input) {\n        input = String(input);\n        if (/[^\\0-\\xFF]/.test(input)) {\n          // Note: no need to special-case astral symbols here, as surrogates are\n          // matched, and the input is supposed to only contain ASCII anyway.\n          error(\n          'The string to be encoded contains characters outside of the ' +\n          'Latin1 range.');\n\n        }\n        var padding = input.length % 3;\n        var output = '';\n        var position = -1;\n        var a;\n        var b;\n        var c;\n        var buffer;\n        // Make sure any padding is handled outside of the loop.\n        var length = input.length - padding;\n\n        while (++position < length) {\n          // Read three bytes, i.e. 24 bits.\n          a = input.charCodeAt(position) << 16;\n          b = input.charCodeAt(++position) << 8;\n          c = input.charCodeAt(++position);\n          buffer = a + b + c;\n          // Turn the 24 bits into four chunks of 6 bits each, and append the\n          // matching character for each of them to the output.\n          output +=\n          TABLE.charAt(buffer >> 18 & 0x3F) +\n          TABLE.charAt(buffer >> 12 & 0x3F) +\n          TABLE.charAt(buffer >> 6 & 0x3F) +\n          TABLE.charAt(buffer & 0x3F);\n\n        }\n\n        if (padding == 2) {\n          a = input.charCodeAt(position) << 8;\n          b = input.charCodeAt(++position);\n          buffer = a + b;\n          output +=\n          TABLE.charAt(buffer >> 10) +\n          TABLE.charAt(buffer >> 4 & 0x3F) +\n          TABLE.charAt(buffer << 2 & 0x3F) +\n          '=';\n\n        } else if (padding == 1) {\n          buffer = input.charCodeAt(position);\n          output +=\n          TABLE.charAt(buffer >> 2) +\n          TABLE.charAt(buffer << 4 & 0x3F) +\n          '==';\n\n        }\n\n        return output;\n      };\n\n      var base64 = {\n        'encode': encode,\n        'decode': decode,\n        'version': '0.1.0' };\n\n\n      // Some AMD build optimizers, like r.js, check for specific condition patterns\n      // like the following:\n      if (\n      false)\n      {} else if (freeExports && !freeExports.nodeType) {\n        if (freeModule) {// in Node.js or RingoJS v0.8.0+\n          freeModule.exports = base64;\n        } else {// in Narwhal or RingoJS v0.7.0-\n          for (var key in base64) {\n            base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);\n          }\n        }\n      } else {// in Rhino or a web browser\n        root.base64 = base64;\n      }\n\n    })(commonjsGlobal);\n  });\n\n  function makeURI(strData, type) {\n    return 'data:' + type + ';base64,' + strData;\n  }\n\n  function fixType(type) {\n    type = type.toLowerCase().replace(/jpg/i, 'jpeg');\n    var r = type.match(/png|jpeg|bmp|gif/)[0];\n    return 'image/' + r;\n  }\n\n  function encodeData(data) {\n    var str = '';\n    if (typeof data === 'string') {\n      str = data;\n    } else {\n      for (var i = 0; i < data.length; i++) {\n        str += String.fromCharCode(data[i]);\n      }\n    }\n    return base64.encode(str);\n  }\n\n  /**\r\n     * 获取图像区域隐含的像素数据\r\n     * @param canvasId canvas标识\r\n     * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标\r\n     * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标\r\n     * @param width 将要被提取的图像数据矩形区域的宽度\r\n     * @param height 将要被提取的图像数据矩形区域的高度\r\n     * @param done 完成回调\r\n     */\n  function getImageData(canvasId, x, y, width, height, done) {\n    uni.canvasGetImageData({\n      canvasId: canvasId,\n      x: x,\n      y: y,\n      width: width,\n      height: height,\n      success: function success(res) {\n        done(res, null);\n      },\n      fail: function fail(res) {\n        done(null, res);\n      } });\n\n  }\n\n  /**\r\n     * 生成bmp格式图片\r\n     * 按照规则生成图片响应头和响应体\r\n     * @param oData 用来描述 canvas 区域隐含的像素数据 { data, width, height } = oData\r\n     * @returns {*} base64字符串\r\n     */\n  function genBitmapImage(oData) {\n    //\n    // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx\n    // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx\n    //\n    var biWidth = oData.width;\n    var biHeight = oData.height;\n    var biSizeImage = biWidth * biHeight * 3;\n    var bfSize = biSizeImage + 54; // total header size = 54 bytes\n\n    //\n    //  typedef struct tagBITMAPFILEHEADER {\n    //  \tWORD bfType;\n    //  \tDWORD bfSize;\n    //  \tWORD bfReserved1;\n    //  \tWORD bfReserved2;\n    //  \tDWORD bfOffBits;\n    //  } BITMAPFILEHEADER;\n    //\n    var BITMAPFILEHEADER = [\n    // WORD bfType -- The file type signature; must be \"BM\"\n    0x42, 0x4D,\n    // DWORD bfSize -- The size, in bytes, of the bitmap file\n    bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,\n    // WORD bfReserved1 -- Reserved; must be zero\n    0, 0,\n    // WORD bfReserved2 -- Reserved; must be zero\n    0, 0,\n    // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.\n    54, 0, 0, 0];\n\n\n    //\n    //  typedef struct tagBITMAPINFOHEADER {\n    //  \tDWORD biSize;\n    //  \tLONG  biWidth;\n    //  \tLONG  biHeight;\n    //  \tWORD  biPlanes;\n    //  \tWORD  biBitCount;\n    //  \tDWORD biCompression;\n    //  \tDWORD biSizeImage;\n    //  \tLONG  biXPelsPerMeter;\n    //  \tLONG  biYPelsPerMeter;\n    //  \tDWORD biClrUsed;\n    //  \tDWORD biClrImportant;\n    //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;\n    //\n    var BITMAPINFOHEADER = [\n    // DWORD biSize -- The number of bytes required by the structure\n    40, 0, 0, 0,\n    // LONG biWidth -- The width of the bitmap, in pixels\n    biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,\n    // LONG biHeight -- The height of the bitmap, in pixels\n    biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,\n    // WORD biPlanes -- The number of planes for the target device. This value must be set to 1\n    1, 0,\n    // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap\n    // has a maximum of 2^24 colors (16777216, Truecolor)\n    24, 0,\n    // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed\n    0, 0, 0, 0,\n    // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps\n    biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,\n    // LONG biXPelsPerMeter, unused\n    0, 0, 0, 0,\n    // LONG biYPelsPerMeter, unused\n    0, 0, 0, 0,\n    // DWORD biClrUsed, the number of color indexes of palette, unused\n    0, 0, 0, 0,\n    // DWORD biClrImportant, unused\n    0, 0, 0, 0];\n\n\n    var iPadding = (4 - biWidth * 3 % 4) % 4;\n\n    var aImgData = oData.data;\n\n    var strPixelData = '';\n    var biWidth4 = biWidth << 2;\n    var y = biHeight;\n    var fromCharCode = String.fromCharCode;\n\n    do {\n      var iOffsetY = biWidth4 * (y - 1);\n      var strPixelRow = '';\n      for (var x = 0; x < biWidth; x++) {\n        var iOffsetX = x << 2;\n        strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +\n        fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +\n        fromCharCode(aImgData[iOffsetY + iOffsetX]);\n      }\n\n      for (var c = 0; c < iPadding; c++) {\n        strPixelRow += String.fromCharCode(0);\n      }\n\n      strPixelData += strPixelRow;\n    } while (--y);\n\n    var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);\n\n    return strEncoded;\n  }\n\n  /**\r\n     * 转换为图片base64\r\n     * @param canvasId canvas标识\r\n     * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标\r\n     * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标\r\n     * @param width 将要被提取的图像数据矩形区域的宽度\r\n     * @param height 将要被提取的图像数据矩形区域的高度\r\n     * @param type 转换图片类型\r\n     * @param done 完成回调\r\n     */\n  function convertToImage(canvasId, x, y, width, height, type, done) {\n    if (done === void 0) done = function done() {};\n\n    if (type === undefined) {\n      type = 'png';\n    }\n    type = fixType(type);\n    if (/bmp/.test(type)) {\n      getImageData(canvasId, x, y, width, height, function (data, err) {\n        var strData = genBitmapImage(data);\n        tools_7(done) && done(makeURI(strData, 'image/' + type), err);\n      });\n    } else {\n      __f__(\"error\", '暂不支持生成\\'' + type + '\\'类型的base64图片', \" at pages/user-center/u-avatar-cropper/weCropper.js:732\");\n    }\n  }\n\n  var CanvasToBase64 = {\n    convertToImage: convertToImage,\n    // convertToPNG: function (width, height, done) {\n    //   return convertToImage(width, height, 'png', done)\n    // },\n    // convertToJPEG: function (width, height, done) {\n    //   return convertToImage(width, height, 'jpeg', done)\n    // },\n    // convertToGIF: function (width, height, done) {\n    //   return convertToImage(width, height, 'gif', done)\n    // },\n    convertToBMP: function convertToBMP(ref, done) {\n      if (ref === void 0) ref = {};\n      var canvasId = ref.canvasId;\n      var x = ref.x;\n      var y = ref.y;\n      var width = ref.width;\n      var height = ref.height;\n      if (done === void 0) done = function done() {};\n\n      return convertToImage(canvasId, x, y, width, height, 'bmp', done);\n    } };\n\n\n  function methods() {\n    var self = this;\n\n    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度\n    var boundHeight = self.height; // 裁剪框默认高度，即整个画布高度\n\n    var id = self.id;\n    var targetId = self.targetId;\n    var pixelRatio = self.pixelRatio;\n\n    var ref = self.cut;\n    var x = ref.x;\n    if (x === void 0) x = 0;\n    var y = ref.y;\n    if (y === void 0) y = 0;\n    var width = ref.width;\n    if (width === void 0) width = boundWidth;\n    var height = ref.height;\n    if (height === void 0) height = boundHeight;\n\n    self.updateCanvas = function (done) {\n      if (self.croperTarget) {\n        //  画布绘制图片\n        self.ctx.drawImage(\n        self.croperTarget,\n        self.imgLeft,\n        self.imgTop,\n        self.scaleWidth,\n        self.scaleHeight);\n\n      }\n      tools_7(self.onBeforeDraw) && self.onBeforeDraw(self.ctx, self);\n\n      self.setBoundStyle(self.boundStyle); //\t设置边界样式\n\n      self.ctx.draw(false, done);\n      return self;\n    };\n\n    self.pushOrigin = self.pushOrign = function (src) {\n      self.src = src;\n\n      tools_7(self.onBeforeImageLoad) && self.onBeforeImageLoad(self.ctx, self);\n\n      return getImageInfo({\n        src: src }).\n\n      then(function (res) {\n        var innerAspectRadio = res.width / res.height;\n        var customAspectRadio = width / height;\n\n        self.croperTarget = res.path;\n\n        if (innerAspectRadio < customAspectRadio) {\n          self.rectX = x;\n          self.baseWidth = width;\n          self.baseHeight = width / innerAspectRadio;\n          self.rectY = y - Math.abs((height - self.baseHeight) / 2);\n        } else {\n          self.rectY = y;\n          self.baseWidth = height * innerAspectRadio;\n          self.baseHeight = height;\n          self.rectX = x - Math.abs((width - self.baseWidth) / 2);\n        }\n\n        self.imgLeft = self.rectX;\n        self.imgTop = self.rectY;\n        self.scaleWidth = self.baseWidth;\n        self.scaleHeight = self.baseHeight;\n\n        self.update();\n\n        return new Promise(function (resolve) {\n          self.updateCanvas(resolve);\n        });\n      }).\n      then(function () {\n        tools_7(self.onImageLoad) && self.onImageLoad(self.ctx, self);\n      });\n    };\n\n    self.removeImage = function () {\n      self.src = '';\n      self.croperTarget = '';\n      return draw(self.ctx);\n    };\n\n    self.getCropperBase64 = function (done) {\n      if (done === void 0) done = function done() {};\n\n      CanvasToBase64.convertToBMP({\n        canvasId: id,\n        x: x,\n        y: y,\n        width: width,\n        height: height },\n      done);\n    };\n\n    self.getCropperImage = function (opt, fn) {\n      var customOptions = opt;\n\n      var canvasOptions = {\n        canvasId: id,\n        x: x,\n        y: y,\n        width: width,\n        height: height };\n\n\n      var task = function task() {\n        return Promise.resolve();\n      };\n\n      if (\n      tools_10(customOptions) &&\n      customOptions.original)\n      {\n        // original mode\n        task = function task() {\n          self.targetCtx.drawImage(\n          self.croperTarget,\n          self.imgLeft * pixelRatio,\n          self.imgTop * pixelRatio,\n          self.scaleWidth * pixelRatio,\n          self.scaleHeight * pixelRatio);\n\n\n          canvasOptions = {\n            canvasId: targetId,\n            x: x * pixelRatio,\n            y: y * pixelRatio,\n            width: width * pixelRatio,\n            height: height * pixelRatio };\n\n\n          return draw(self.targetCtx);\n        };\n      }\n\n      return task().\n      then(function () {\n        if (tools_10(customOptions)) {\n          canvasOptions = Object.assign({}, canvasOptions, customOptions);\n        }\n\n        if (tools_7(customOptions)) {\n          fn = customOptions;\n        }\n\n        var arg = canvasOptions.componentContext ?\n        [canvasOptions, canvasOptions.componentContext] :\n        [canvasOptions];\n\n        return canvasToTempFilePath.apply(null, arg);\n      }).\n      then(function (res) {\n        var tempFilePath = res.tempFilePath;\n\n        return tools_7(fn) ?\n        fn.call(self, tempFilePath, null) :\n        tempFilePath;\n      }).\n      catch(function (err) {\n        if (tools_7(fn)) {\n          fn.call(self, null, err);\n        } else {\n          throw err;\n        }\n      });\n    };\n  }\n\n  /**\r\n     * 获取最新缩放值\r\n     * @param oldScale 上一次触摸结束后的缩放值\r\n     * @param oldDistance 上一次触摸结束后的双指距离\r\n     * @param zoom 缩放系数\r\n     * @param touch0 第一指touch对象\r\n     * @param touch1 第二指touch对象\r\n     * @returns {*}\r\n     */\n  var getNewScale = function getNewScale(oldScale, oldDistance, zoom, touch0, touch1) {\n    var xMove, yMove, newDistance;\n    // 计算二指最新距离\n    xMove = Math.round(touch1.x - touch0.x);\n    yMove = Math.round(touch1.y - touch0.y);\n    newDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));\n\n    return oldScale + 0.001 * zoom * (newDistance - oldDistance);\n  };\n\n  function update() {\n    var self = this;\n\n    if (!self.src) {\n      return;\n    }\n\n    self.__oneTouchStart = function (touch) {\n      self.touchX0 = Math.round(touch.x);\n      self.touchY0 = Math.round(touch.y);\n    };\n\n    self.__oneTouchMove = function (touch) {\n      var xMove, yMove;\n      // 计算单指移动的距离\n      if (self.touchended) {\n        return self.updateCanvas();\n      }\n      xMove = Math.round(touch.x - self.touchX0);\n      yMove = Math.round(touch.y - self.touchY0);\n\n      var imgLeft = Math.round(self.rectX + xMove);\n      var imgTop = Math.round(self.rectY + yMove);\n\n      self.outsideBound(imgLeft, imgTop);\n\n      self.updateCanvas();\n    };\n\n    self.__twoTouchStart = function (touch0, touch1) {\n      var xMove, yMove, oldDistance;\n\n      self.touchX1 = Math.round(self.rectX + self.scaleWidth / 2);\n      self.touchY1 = Math.round(self.rectY + self.scaleHeight / 2);\n\n      // 计算两指距离\n      xMove = Math.round(touch1.x - touch0.x);\n      yMove = Math.round(touch1.y - touch0.y);\n      oldDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));\n\n      self.oldDistance = oldDistance;\n    };\n\n    self.__twoTouchMove = function (touch0, touch1) {\n      var oldScale = self.oldScale;\n      var oldDistance = self.oldDistance;\n      var scale = self.scale;\n      var zoom = self.zoom;\n\n      self.newScale = getNewScale(oldScale, oldDistance, zoom, touch0, touch1);\n\n      //  设定缩放范围\n      self.newScale <= 1 && (self.newScale = 1);\n      self.newScale >= scale && (self.newScale = scale);\n\n      self.scaleWidth = Math.round(self.newScale * self.baseWidth);\n      self.scaleHeight = Math.round(self.newScale * self.baseHeight);\n      var imgLeft = Math.round(self.touchX1 - self.scaleWidth / 2);\n      var imgTop = Math.round(self.touchY1 - self.scaleHeight / 2);\n\n      self.outsideBound(imgLeft, imgTop);\n\n      self.updateCanvas();\n    };\n\n    self.__xtouchEnd = function () {\n      self.oldScale = self.newScale;\n      self.rectX = self.imgLeft;\n      self.rectY = self.imgTop;\n    };\n  }\n\n  var handle = {\n    //  图片手势初始监测\n    touchStart: function touchStart(e) {\n      var self = this;\n      var ref = e.touches;\n      var touch0 = ref[0];\n      var touch1 = ref[1];\n\n      if (!self.src) {\n        return;\n      }\n\n      setTouchState(self, true, null, null);\n\n      // 计算第一个触摸点的位置，并参照改点进行缩放\n      self.__oneTouchStart(touch0);\n\n      // 两指手势触发\n      if (e.touches.length >= 2) {\n        self.__twoTouchStart(touch0, touch1);\n      }\n    },\n\n    //  图片手势动态缩放\n    touchMove: function touchMove(e) {\n      var self = this;\n      var ref = e.touches;\n      var touch0 = ref[0];\n      var touch1 = ref[1];\n\n      if (!self.src) {\n        return;\n      }\n\n      setTouchState(self, null, true);\n\n      // 单指手势时触发\n      if (e.touches.length === 1) {\n        self.__oneTouchMove(touch0);\n      }\n      // 两指手势触发\n      if (e.touches.length >= 2) {\n        self.__twoTouchMove(touch0, touch1);\n      }\n    },\n\n    touchEnd: function touchEnd(e) {\n      var self = this;\n\n      if (!self.src) {\n        return;\n      }\n\n      setTouchState(self, false, false, true);\n      self.__xtouchEnd();\n    } };\n\n\n  function cut() {\n    var self = this;\n    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度\n    var boundHeight = self.height;\n    // 裁剪框默认高度，即整个画布高度\n    var ref = self.cut;\n    var x = ref.x;\n    if (x === void 0) x = 0;\n    var y = ref.y;\n    if (y === void 0) y = 0;\n    var width = ref.width;\n    if (width === void 0) width = boundWidth;\n    var height = ref.height;\n    if (height === void 0) height = boundHeight;\n\n    /**\r\n                                                  * 设置边界\r\n                                                  * @param imgLeft 图片左上角横坐标值\r\n                                                  * @param imgTop 图片左上角纵坐标值\r\n                                                  */\n    self.outsideBound = function (imgLeft, imgTop) {\n      self.imgLeft = imgLeft >= x ?\n      x :\n      self.scaleWidth + imgLeft - x <= width ?\n      x + width - self.scaleWidth :\n      imgLeft;\n\n      self.imgTop = imgTop >= y ?\n      y :\n      self.scaleHeight + imgTop - y <= height ?\n      y + height - self.scaleHeight :\n      imgTop;\n    };\n\n    /**\r\n        * 设置边界样式\r\n        * @param color\t边界颜色\r\n        */\n    self.setBoundStyle = function (ref) {\n      if (ref === void 0) ref = {};\n      var color = ref.color;\n      if (color === void 0) color = '#04b00f';\n      var mask = ref.mask;\n      if (mask === void 0) mask = 'rgba(0, 0, 0, 0.3)';\n      var lineWidth = ref.lineWidth;\n      if (lineWidth === void 0) lineWidth = 1;\n\n      var half = lineWidth / 2;\n      var boundOption = [{\n        start: {\n          x: x - half,\n          y: y + 10 - half },\n\n        step1: {\n          x: x - half,\n          y: y - half },\n\n        step2: {\n          x: x + 10 - half,\n          y: y - half } },\n\n\n      {\n        start: {\n          x: x - half,\n          y: y + height - 10 + half },\n\n        step1: {\n          x: x - half,\n          y: y + height + half },\n\n        step2: {\n          x: x + 10 - half,\n          y: y + height + half } },\n\n\n      {\n        start: {\n          x: x + width - 10 + half,\n          y: y - half },\n\n        step1: {\n          x: x + width + half,\n          y: y - half },\n\n        step2: {\n          x: x + width + half,\n          y: y + 10 - half } },\n\n\n      {\n        start: {\n          x: x + width + half,\n          y: y + height - 10 + half },\n\n        step1: {\n          x: x + width + half,\n          y: y + height + half },\n\n        step2: {\n          x: x + width - 10 + half,\n          y: y + height + half } }];\n\n\n\n\n      // 绘制半透明层\n      self.ctx.beginPath();\n      self.ctx.setFillStyle(mask);\n      self.ctx.fillRect(0, 0, x, boundHeight);\n      self.ctx.fillRect(x, 0, width, y);\n      self.ctx.fillRect(x, y + height, width, boundHeight - y - height);\n      self.ctx.fillRect(x + width, 0, boundWidth - x - width, boundHeight);\n      self.ctx.fill();\n\n      boundOption.forEach(function (op) {\n        self.ctx.beginPath();\n        self.ctx.setStrokeStyle(color);\n        self.ctx.setLineWidth(lineWidth);\n        self.ctx.moveTo(op.start.x, op.start.y);\n        self.ctx.lineTo(op.step1.x, op.step1.y);\n        self.ctx.lineTo(op.step2.x, op.step2.y);\n        self.ctx.stroke();\n      });\n    };\n  }\n\n  var version = \"1.3.9\";\n\n  var WeCropper = function WeCropper(params) {\n    var self = this;\n    var _default = {};\n\n    validator(self, DEFAULT);\n\n    Object.keys(DEFAULT).forEach(function (key) {\n      _default[key] = DEFAULT[key].default;\n    });\n    Object.assign(self, _default, params);\n\n    self.prepare();\n    self.attachPage();\n    self.createCtx();\n    self.observer();\n    self.cutt();\n    self.methods();\n    self.init();\n    self.update();\n\n    return self;\n  };\n\n  WeCropper.prototype.init = function init() {\n    var self = this;\n    var src = self.src;\n\n    self.version = version;\n\n    typeof self.onReady === 'function' && self.onReady(self.ctx, self);\n\n    if (src) {\n      self.pushOrign(src);\n    } else {\n      self.updateCanvas();\n    }\n    setTouchState(self, false, false, false);\n\n    self.oldScale = 1;\n    self.newScale = 1;\n\n    return self;\n  };\n\n  Object.assign(WeCropper.prototype, handle);\n\n  WeCropper.prototype.prepare = prepare;\n  WeCropper.prototype.observer = observer;\n  WeCropper.prototype.methods = methods;\n  WeCropper.prototype.cutt = cut;\n  WeCropper.prototype.update = update;\n\n  return WeCropper;\n\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"], __webpack_require__(/*! (webpack)/buildin/global.js */ 80)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvdS1hdmF0YXItY3JvcHBlci93ZUNyb3BwZXIuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZXZpY2UiLCJUT1VDSF9TVEFURSIsImZpcnN0TGV0dGVyVXBwZXIiLCJzdHIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwic2V0VG91Y2hTdGF0ZSIsImluc3RhbmNlIiwiYXJnIiwibGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImtleSIsImkiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0b3IiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImdldERldmljZSIsInVuaSIsImdldFN5c3RlbUluZm9TeW5jIiwidG1wIiwicmVmIiwicGl4ZWxSYXRpbyIsIkRFRkFVTFQiLCJpZCIsImRlZmF1bHQiLCJnZXQiLCJzZXQiLCJ2YWx1ZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2NhbGUiLCJ6b29tIiwic3JjIiwiY3V0IiwiYm91bmRTdHlsZSIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uQmVmb3JlSW1hZ2VMb2FkIiwiYmVmb3JlSW1hZ2VMb2FkIiwib25JbWFnZUxvYWQiLCJpbWFnZUxvYWQiLCJvbkJlZm9yZURyYXciLCJiZWZvcmVEcmF3IiwicmVmJDEiLCJ3aW5kb3dXaWR0aCIsInByZXBhcmUiLCJzZWxmIiwiYXR0YWNoUGFnZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZUNvbnRleHQiLCJkZWZpbmVQcm9wZXJ0eSIsImNvbmZpZ3VyYWJsZSIsImNyZWF0ZUN0eCIsInRhcmdldElkIiwiY3R4IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInRhcmdldEN0eCIsImRldmljZVJhZGlvIiwiY29tbW9uanNHbG9iYWwiLCJ3aW5kb3ciLCJjcmVhdGVDb21tb25qc01vZHVsZSIsImZuIiwidG9vbHMiLCJpc1N0ciIsInYiLCJpc051bSIsImlzQXJyIiwiQXJyYXkiLCJpc0FycmF5IiwiaXNVbmRlZiIsImlzVHJ1ZSIsImlzRmFsc2UiLCJpc0Z1bmMiLCJpc09iaiIsImlzT2JqZWN0Iiwib2JqIiwiX3RvU3RyaW5nIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJpc1BsYWluT2JqZWN0IiwiY2FsbCIsImhhc093blByb3BlcnR5IiwiaGFzT3duIiwibm9vcCIsImEiLCJiIiwiYyIsImlzVmFsaWRBcnJheUluZGV4IiwidmFsIiwibiIsInBhcnNlRmxvYXQiLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJpc0Zpbml0ZSIsInRvb2xzXzciLCJ0b29sc18xMCIsIkVWRU5UX1RZUEUiLCJvYnNlcnZlciIsIm9uIiwiZXZlbnQiLCJpbmRleE9mIiwid3hQcm9taXNlIiwiYXJncyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJhcHBseSIsImNvbmNhdCIsImRyYXciLCJyZXNlcnZlIiwiZ2V0SW1hZ2VJbmZvIiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJiYXNlNjQiLCJyb290IiwiZnJlZUV4cG9ydHMiLCJmcmVlTW9kdWxlIiwiZnJlZUdsb2JhbCIsIkludmFsaWRDaGFyYWN0ZXJFcnJvciIsIm1lc3NhZ2UiLCJFcnJvciIsIm5hbWUiLCJlcnJvciIsIlRBQkxFIiwiUkVHRVhfU1BBQ0VfQ0hBUkFDVEVSUyIsImRlY29kZSIsImlucHV0IiwicmVwbGFjZSIsInRlc3QiLCJiaXRDb3VudGVyIiwiYml0U3RvcmFnZSIsImJ1ZmZlciIsIm91dHB1dCIsInBvc2l0aW9uIiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlIiwicGFkZGluZyIsImNoYXJDb2RlQXQiLCJub2RlVHlwZSIsIm1ha2VVUkkiLCJzdHJEYXRhIiwidHlwZSIsImZpeFR5cGUiLCJ0b0xvd2VyQ2FzZSIsInIiLCJtYXRjaCIsImVuY29kZURhdGEiLCJkYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiY2FudmFzSWQiLCJ4IiwieSIsImRvbmUiLCJjYW52YXNHZXRJbWFnZURhdGEiLCJnZW5CaXRtYXBJbWFnZSIsIm9EYXRhIiwiYmlXaWR0aCIsImJpSGVpZ2h0IiwiYmlTaXplSW1hZ2UiLCJiZlNpemUiLCJCSVRNQVBGSUxFSEVBREVSIiwiQklUTUFQSU5GT0hFQURFUiIsImlQYWRkaW5nIiwiYUltZ0RhdGEiLCJzdHJQaXhlbERhdGEiLCJiaVdpZHRoNCIsImlPZmZzZXRZIiwic3RyUGl4ZWxSb3ciLCJpT2Zmc2V0WCIsInN0ckVuY29kZWQiLCJjb252ZXJ0VG9JbWFnZSIsIkNhbnZhc1RvQmFzZTY0IiwiY29udmVydFRvQk1QIiwibWV0aG9kcyIsImJvdW5kV2lkdGgiLCJib3VuZEhlaWdodCIsInVwZGF0ZUNhbnZhcyIsImNyb3BlclRhcmdldCIsImRyYXdJbWFnZSIsImltZ0xlZnQiLCJpbWdUb3AiLCJzY2FsZVdpZHRoIiwic2NhbGVIZWlnaHQiLCJzZXRCb3VuZFN0eWxlIiwicHVzaE9yaWdpbiIsInB1c2hPcmlnbiIsInRoZW4iLCJpbm5lckFzcGVjdFJhZGlvIiwiY3VzdG9tQXNwZWN0UmFkaW8iLCJwYXRoIiwicmVjdFgiLCJiYXNlV2lkdGgiLCJiYXNlSGVpZ2h0IiwicmVjdFkiLCJhYnMiLCJ1cGRhdGUiLCJyZW1vdmVJbWFnZSIsImdldENyb3BwZXJCYXNlNjQiLCJnZXRDcm9wcGVySW1hZ2UiLCJvcHQiLCJjdXN0b21PcHRpb25zIiwiY2FudmFzT3B0aW9ucyIsInRhc2siLCJvcmlnaW5hbCIsImFzc2lnbiIsImNvbXBvbmVudENvbnRleHQiLCJ0ZW1wRmlsZVBhdGgiLCJjYXRjaCIsImdldE5ld1NjYWxlIiwib2xkU2NhbGUiLCJvbGREaXN0YW5jZSIsInRvdWNoMCIsInRvdWNoMSIsInhNb3ZlIiwieU1vdmUiLCJuZXdEaXN0YW5jZSIsInJvdW5kIiwic3FydCIsIl9fb25lVG91Y2hTdGFydCIsInRvdWNoIiwidG91Y2hYMCIsInRvdWNoWTAiLCJfX29uZVRvdWNoTW92ZSIsInRvdWNoZW5kZWQiLCJvdXRzaWRlQm91bmQiLCJfX3R3b1RvdWNoU3RhcnQiLCJ0b3VjaFgxIiwidG91Y2hZMSIsIl9fdHdvVG91Y2hNb3ZlIiwibmV3U2NhbGUiLCJfX3h0b3VjaEVuZCIsImhhbmRsZSIsInRvdWNoU3RhcnQiLCJlIiwidG91Y2hlcyIsInRvdWNoTW92ZSIsInRvdWNoRW5kIiwiY29sb3IiLCJtYXNrIiwibGluZVdpZHRoIiwiaGFsZiIsImJvdW5kT3B0aW9uIiwic3RhcnQiLCJzdGVwMSIsInN0ZXAyIiwiYmVnaW5QYXRoIiwic2V0RmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJmaWxsIiwib3AiLCJzZXRTdHJva2VTdHlsZSIsInNldExpbmVXaWR0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInZlcnNpb24iLCJXZUNyb3BwZXIiLCJwYXJhbXMiLCJfZGVmYXVsdCIsImtleXMiLCJjdXR0IiwiaW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0MsV0FBU0EsTUFBVCxFQUFpQkMsT0FBakIsRUFBMEI7QUFDMUIsVUFBK0RDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsT0FBTyxFQUF2RjtBQUNDLFdBREQ7QUFHQSxDQUpBLEVBSUMsSUFKRCxFQUlRLFlBQVc7QUFDbkI7O0FBRUEsTUFBSUcsTUFBTSxHQUFHLEtBQUssQ0FBbEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsQ0FBQyxjQUFELEVBQWlCLFlBQWpCLEVBQStCLFlBQS9CLENBQWxCOztBQUVBLFdBQVNDLGdCQUFULENBQTBCQyxHQUExQixFQUErQjtBQUM5QixXQUFPQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsS0FBOEJGLEdBQUcsQ0FBQ0csS0FBSixDQUFVLENBQVYsQ0FBckM7QUFDQTs7QUFFRCxXQUFTQyxhQUFULENBQXVCQyxRQUF2QixFQUFpQztBQUNoQyxRQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNDQyxPQUFHLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUQxQjtBQUVBLFdBQU9GLEdBQUcsS0FBSyxDQUFm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Q0FBQ1MsR0FBbEIsRUFBdUJULElBQXZCLENBQXRDOztBQUVBLFFBQUlkLEdBQUosRUFBUztBQUNSYyxVQUFJLENBQUNnSixTQUFMLENBQWU5SixHQUFmO0FBQ0EsS0FGRCxNQUVPO0FBQ05jLFVBQUksQ0FBQ3VJLFlBQUw7QUFDQTtBQUNEbkwsaUJBQWEsQ0FBQzRDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZCxFQUFxQixLQUFyQixDQUFiOztBQUVBQSxRQUFJLENBQUN3SyxRQUFMLEdBQWdCLENBQWhCO0FBQ0F4SyxRQUFJLENBQUM0TCxRQUFMLEdBQWdCLENBQWhCOztBQUVBLFdBQU81TCxJQUFQO0FBQ0EsR0FuQkQ7O0FBcUJBaEMsUUFBTSxDQUFDbU0sTUFBUCxDQUFjb0QsU0FBUyxDQUFDdkwsU0FBeEIsRUFBbUM4SixNQUFuQzs7QUFFQXlCLFdBQVMsQ0FBQ3ZMLFNBQVYsQ0FBb0JqQyxPQUFwQixHQUE4QkEsT0FBOUI7QUFDQXdOLFdBQVMsQ0FBQ3ZMLFNBQVYsQ0FBb0JxQixRQUFwQixHQUErQkEsUUFBL0I7QUFDQWtLLFdBQVMsQ0FBQ3ZMLFNBQVYsQ0FBb0JvRyxPQUFwQixHQUE4QkEsT0FBOUI7QUFDQW1GLFdBQVMsQ0FBQ3ZMLFNBQVYsQ0FBb0IyTCxJQUFwQixHQUEyQnhPLEdBQTNCO0FBQ0FvTyxXQUFTLENBQUN2TCxTQUFWLENBQW9CMEgsTUFBcEIsR0FBNkJBLE1BQTdCOztBQUVBLFNBQU82RCxTQUFQOztBQUVBLENBM3VDQSxDQUFELEMiLCJmaWxlIjoiOTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogd2UtY3JvcHBlciB2MS4zLjlcclxuICogKGMpIDIwMjAgZGxoYW5kc29tZVxyXG4gKiBAbGljZW5zZSBNSVRcclxuICovXHJcbihmdW5jdGlvbihnbG9iYWwsIGZhY3RvcnkpIHtcclxuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XHJcblx0XHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxyXG5cdFx0KGdsb2JhbC5XZUNyb3BwZXIgPSBmYWN0b3J5KCkpO1xyXG59KHRoaXMsIChmdW5jdGlvbigpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBkZXZpY2UgPSB2b2lkIDA7XHJcblx0dmFyIFRPVUNIX1NUQVRFID0gWyd0b3VjaHN0YXJ0ZWQnLCAndG91Y2htb3ZlZCcsICd0b3VjaGVuZGVkJ107XHJcblxyXG5cdGZ1bmN0aW9uIGZpcnN0TGV0dGVyVXBwZXIoc3RyKSB7XHJcblx0XHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRUb3VjaFN0YXRlKGluc3RhbmNlKSB7XHJcblx0XHR2YXIgYXJnID0gW10sXHJcblx0XHRcdGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xyXG5cdFx0d2hpbGUgKGxlbi0tID4gMCkgYXJnW2xlbl0gPSBhcmd1bWVudHNbbGVuICsgMV07XHJcblxyXG5cdFx0VE9VQ0hfU1RBVEUuZm9yRWFjaChmdW5jdGlvbihrZXksIGkpIHtcclxuXHRcdFx0aWYgKGFyZ1tpXSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0aW5zdGFuY2Vba2V5XSA9IGFyZ1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB2YWxpZGF0b3IoaW5zdGFuY2UsIG8pIHtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGluc3RhbmNlLCBvKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldERldmljZSgpIHtcclxuXHRcdGlmICghZGV2aWNlKSB7XHJcblx0XHRcdGRldmljZSA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRldmljZVxyXG5cdH1cclxuXHJcblx0dmFyIHRtcCA9IHt9O1xyXG5cclxuXHR2YXIgcmVmID0gZ2V0RGV2aWNlKCk7XHJcblx0dmFyIHBpeGVsUmF0aW8gPSByZWYucGl4ZWxSYXRpbztcclxuXHJcblx0dmFyIERFRkFVTFQgPSB7XHJcblx0XHRpZDoge1xyXG5cdFx0XHRkZWZhdWx0OiAnY3JvcHBlcicsXHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0bXAuaWRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoKFwiaWTvvJpcIiArIHZhbHVlICsgXCIgaXMgaW52YWxpZFwiKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRtcC5pZCA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0d2lkdGg6IHtcclxuXHRcdFx0ZGVmYXVsdDogNzUwLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdG1wLndpZHRoXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKChcIndpZHRo77yaXCIgKyB2YWx1ZSArIFwiIGlzIGludmFsaWRcIikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0bXAud2lkdGggPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGhlaWdodDoge1xyXG5cdFx0XHRkZWZhdWx0OiA3NTAsXHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0bXAuaGVpZ2h0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XHJcblx0XHRcdFx0aWYgKHR5cGVvZih2YWx1ZSkgIT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKChcImhlaWdodO+8mlwiICsgdmFsdWUgKyBcIiBpcyBpbnZhbGlkXCIpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG1wLmhlaWdodCA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cGl4ZWxSYXRpbzoge1xyXG5cdFx0XHRkZWZhdWx0OiBwaXhlbFJhdGlvLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdG1wLnBpeGVsUmF0aW9cclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gJ251bWJlcicpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoKFwicGl4ZWxSYXRpb++8mlwiICsgdmFsdWUgKyBcIiBpcyBpbnZhbGlkXCIpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG1wLnBpeGVsUmF0aW8gPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHNjYWxlOiB7XHJcblx0XHRcdGRlZmF1bHQ6IDIuNSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRtcC5zY2FsZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcigoXCJzY2FsZe+8mlwiICsgdmFsdWUgKyBcIiBpcyBpbnZhbGlkXCIpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG1wLnNjYWxlID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR6b29tOiB7XHJcblx0XHRcdGRlZmF1bHQ6IDUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xyXG5cdFx0XHRcdHJldHVybiB0bXAuem9vbVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSAnbnVtYmVyJykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcigoXCJ6b29t77yaXCIgKyB2YWx1ZSArIFwiIGlzIGludmFsaWRcIikpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUgPCAwIHx8IHZhbHVlID4gMTApIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJ6b29tIHNob3VsZCBiZSByYW5nZWQgaW4gMCB+IDEwXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0bXAuem9vbSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0c3JjOiB7XHJcblx0XHRcdGRlZmF1bHQ6ICcnLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdG1wLnNyY1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YodmFsdWUpICE9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcigoXCJzcmPvvJpcIiArIHZhbHVlICsgXCIgaXMgaW52YWxpZFwiKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRtcC5zcmMgPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGN1dDoge1xyXG5cdFx0XHRkZWZhdWx0OiB7fSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRtcC5jdXRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoKFwiY3V077yaXCIgKyB2YWx1ZSArIFwiIGlzIGludmFsaWRcIikpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0bXAuY3V0ID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRib3VuZFN0eWxlOiB7XHJcblx0XHRcdGRlZmF1bHQ6IHt9LFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdG1wLmJvdW5kU3R5bGVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcclxuXHRcdFx0XHRpZiAodHlwZW9mKHZhbHVlKSAhPT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoKFwiYm91bmRTdHlsZe+8mlwiICsgdmFsdWUgKyBcIiBpcyBpbnZhbGlkXCIpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG1wLmJvdW5kU3R5bGUgPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHk6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRtcC5yZWFkeVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdFx0XHRcdHRtcC5yZWFkeSA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25CZWZvcmVJbWFnZUxvYWQ6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRtcC5iZWZvcmVJbWFnZUxvYWRcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcclxuXHRcdFx0XHR0bXAuYmVmb3JlSW1hZ2VMb2FkID0gdmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkltYWdlTG9hZDoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdG1wLmltYWdlTG9hZFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xyXG5cdFx0XHRcdHRtcC5pbWFnZUxvYWQgPSB2YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uQmVmb3JlRHJhdzoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdG1wLmJlZm9yZURyYXdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcclxuXHRcdFx0XHR0bXAuYmVmb3JlRHJhdyA9IHZhbHVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dmFyIHJlZiQxID0gZ2V0RGV2aWNlKCk7XHJcblx0dmFyIHdpbmRvd1dpZHRoID0gcmVmJDEud2luZG93V2lkdGg7XHJcblxyXG5cdGZ1bmN0aW9uIHByZXBhcmUoKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gdjEuNC4wIOeJiOacrOS4reWwhuS4jeWGjeiHquWKqOe7keWumndlLWNyb3BwZXLlrp7kvotcclxuXHRcdHNlbGYuYXR0YWNoUGFnZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHRcdFx0Ly8g6I635Y+W5Yiw5b2T5YmNcGFnZeS4iuS4i+aWh1xyXG5cdFx0XHR2YXIgcGFnZUNvbnRleHQgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuXHRcdFx0Ly8g5oqKdGhpc+S+nemZhOWcqFBhZ2XkuIrkuIvmlofnmoR3ZWNyb3BwZXLlsZ7mgKfkuIrvvIzkvr/kuo7lnKhwYWdl6ZKp5a2Q5Ye95pWw5Lit6K6/6ZeuXHJcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwYWdlQ29udGV4dCwgJ3dlY3JvcHBlcicsIHtcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcclxuXHRcdFx0XHRcdFx0J0luc3RhbmNlIHdpbGwgbm90IGJlIGF1dG9tYXRpY2FsbHkgYm91bmQgdG8gdGhlIHBhZ2UgYWZ0ZXIgdjEuNC4wXFxuXFxuJyArXHJcblx0XHRcdFx0XHRcdCdQbGVhc2UgdXNlIGEgY3VzdG9tIGluc3RhbmNlIG5hbWUgaW5zdGVhZFxcblxcbicgK1xyXG5cdFx0XHRcdFx0XHQnRXhhbXBsZTogXFxuJyArXHJcblx0XHRcdFx0XHRcdCd0aGlzLm15Y3JvcHBlciA9IG5ldyBXZUNyb3BwZXIob3B0aW9ucylcXG5cXG4nICtcclxuXHRcdFx0XHRcdFx0Jy8vIC4uLlxcbicgK1xyXG5cdFx0XHRcdFx0XHQndGhpcy5teWNyb3BwZXIuZ2V0Q3JvcHBlckltYWdlKCknXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNlbGZcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0c2VsZi5jcmVhdGVDdHggPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGlkID0gc2VsZi5pZDtcclxuXHRcdFx0dmFyIHRhcmdldElkID0gc2VsZi50YXJnZXRJZDtcclxuXHJcblx0XHRcdGlmIChpZCkge1xyXG5cdFx0XHRcdHNlbGYuY3R4ID0gc2VsZi5jdHggfHwgdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoaWQpO1xyXG5cdFx0XHRcdHNlbGYudGFyZ2V0Q3R4ID0gc2VsZi50YXJnZXRDdHggfHwgdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQodGFyZ2V0SWQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJjb25zdHJ1Y3RvcjogY3JlYXRlIGNhbnZhcyBjb250ZXh0IGZhaWxlZCwgJ2lkJyBtdXN0IGJlIHZhbHVhYmxlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHNlbGYuZGV2aWNlUmFkaW8gPSB3aW5kb3dXaWR0aCAvIDc1MDtcclxuXHR9XHJcblxyXG5cdHZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT1cclxuXHRcdCd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xyXG5cdFx0cmV0dXJuIG1vZHVsZSA9IHtcclxuXHRcdFx0ZXhwb3J0czoge31cclxuXHRcdH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcclxuXHR9XHJcblxyXG5cdHZhciB0b29scyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBTdHJpbmcgdHlwZSBjaGVja1xyXG5cdFx0ICovXHJcblx0XHRleHBvcnRzLmlzU3RyID0gZnVuY3Rpb24odikge1xyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIHYgPT09ICdzdHJpbmcnO1xyXG5cdFx0fTtcclxuXHRcdC8qKlxyXG5cdFx0ICogTnVtYmVyIHR5cGUgY2hlY2tcclxuXHRcdCAqL1xyXG5cdFx0ZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uKHYpIHtcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiB2ID09PSAnbnVtYmVyJztcclxuXHRcdH07XHJcblx0XHQvKipcclxuXHRcdCAqIEFycmF5IHR5cGUgY2hlY2tcclxuXHRcdCAqL1xyXG5cdFx0ZXhwb3J0cy5pc0FyciA9IEFycmF5LmlzQXJyYXk7XHJcblx0XHQvKipcclxuXHRcdCAqIHVuZGVmaW5lZCB0eXBlIGNoZWNrXHJcblx0XHQgKi9cclxuXHRcdGV4cG9ydHMuaXNVbmRlZiA9IGZ1bmN0aW9uKHYpIHtcclxuXHRcdFx0cmV0dXJuIHYgPT09IHVuZGVmaW5lZDtcclxuXHRcdH07XHJcblxyXG5cdFx0ZXhwb3J0cy5pc1RydWUgPSBmdW5jdGlvbih2KSB7XHJcblx0XHRcdHJldHVybiB2ID09PSB0cnVlO1xyXG5cdFx0fTtcclxuXHJcblx0XHRleHBvcnRzLmlzRmFsc2UgPSBmdW5jdGlvbih2KSB7XHJcblx0XHRcdHJldHVybiB2ID09PSBmYWxzZTtcclxuXHRcdH07XHJcblx0XHQvKipcclxuXHRcdCAqIEZ1bmN0aW9uIHR5cGUgY2hlY2tcclxuXHRcdCAqL1xyXG5cdFx0ZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbih2KSB7XHJcblx0XHRcdHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuXHRcdH07XHJcblx0XHQvKipcclxuXHRcdCAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxyXG5cdFx0ICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxyXG5cdFx0ICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxyXG5cdFx0ICovXHJcblx0XHRleHBvcnRzLmlzT2JqID0gZXhwb3J0cy5pc09iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxyXG5cdFx0ICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cclxuXHRcdCAqL1xyXG5cdFx0dmFyIF90b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcblx0XHRleHBvcnRzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcblx0XHR9O1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXHJcblx0XHQgKi9cclxuXHRcdHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcblx0XHRleHBvcnRzLmhhc093biA9IGZ1bmN0aW9uKG9iaiwga2V5KSB7XHJcblx0XHRcdHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KVxyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBlcmZvcm0gbm8gb3BlcmF0aW9uLlxyXG5cdFx0ICogU3R1YmJpbmcgYXJncyB0byBtYWtlIEZsb3cgaGFwcHkgd2l0aG91dCBsZWF2aW5nIHVzZWxlc3MgdHJhbnNwaWxlZCBjb2RlXHJcblx0XHQgKiB3aXRoIC4uLnJlc3QgKGh0dHBzOi8vZmxvdy5vcmcvYmxvZy8yMDE3LzA1LzA3L1N0cmljdC1GdW5jdGlvbi1DYWxsLUFyaXR5LylcclxuXHRcdCAqL1xyXG5cdFx0ZXhwb3J0cy5ub29wID0gZnVuY3Rpb24oYSwgYiwgYykge307XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVjayBpZiB2YWwgaXMgYSB2YWxpZCBhcnJheSBpbmRleC5cclxuXHRcdCAqL1xyXG5cdFx0ZXhwb3J0cy5pc1ZhbGlkQXJyYXlJbmRleCA9IGZ1bmN0aW9uKHZhbCkge1xyXG5cdFx0XHR2YXIgbiA9IHBhcnNlRmxvYXQoU3RyaW5nKHZhbCkpO1xyXG5cdFx0XHRyZXR1cm4gbiA+PSAwICYmIE1hdGguZmxvb3IobikgPT09IG4gJiYgaXNGaW5pdGUodmFsKVxyXG5cdFx0fTtcclxuXHR9KTtcclxuXHJcblx0dmFyIHRvb2xzXzcgPSB0b29scy5pc0Z1bmM7XHJcblx0dmFyIHRvb2xzXzEwID0gdG9vbHMuaXNQbGFpbk9iamVjdDtcclxuXHJcblx0dmFyIEVWRU5UX1RZUEUgPSBbJ3JlYWR5JywgJ2JlZm9yZUltYWdlTG9hZCcsICdiZWZvcmVEcmF3JywgJ2ltYWdlTG9hZCddO1xyXG5cclxuXHRmdW5jdGlvbiBvYnNlcnZlcigpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRzZWxmLm9uID0gZnVuY3Rpb24oZXZlbnQsIGZuKSB7XHJcblx0XHRcdGlmIChFVkVOVF9UWVBFLmluZGV4T2YoZXZlbnQpID4gLTEpIHtcclxuXHRcdFx0XHRpZiAodG9vbHNfNyhmbikpIHtcclxuXHRcdFx0XHRcdGV2ZW50ID09PSAncmVhZHknID9cclxuXHRcdFx0XHRcdFx0Zm4oc2VsZikgOlxyXG5cdFx0XHRcdFx0XHRzZWxmWyhcIm9uXCIgKyAoZmlyc3RMZXR0ZXJVcHBlcihldmVudCkpKV0gPSBmbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcigoXCJldmVudDogXCIgKyBldmVudCArIFwiIGlzIGludmFsaWRcIikpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzZWxmXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gd3hQcm9taXNlKGZuKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHZhciBhcmdzID0gW10sXHJcblx0XHRcdFx0bGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XHJcblx0XHRcdHdoaWxlIChsZW4tLSA+IDApIGFyZ3NbbGVuXSA9IGFyZ3VtZW50c1tsZW4gKyAxXTtcclxuXHJcblx0XHRcdGlmIChvYmogPT09IHZvaWQgMCkgb2JqID0ge307XHJcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHRcdFx0XHRvYmouc3VjY2VzcyA9IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0b2JqLmZhaWwgPSBmdW5jdGlvbihlcnIpIHtcclxuXHRcdFx0XHRcdHJlamVjdChlcnIpO1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0Zm4uYXBwbHkodm9pZCAwLCBbb2JqXS5jb25jYXQoYXJncykpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZHJhdyhjdHgsIHJlc2VydmUpIHtcclxuXHRcdGlmIChyZXNlcnZlID09PSB2b2lkIDApIHJlc2VydmUgPSBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG5cdFx0XHRjdHguZHJhdyhyZXNlcnZlLCByZXNvbHZlKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHR2YXIgZ2V0SW1hZ2VJbmZvID0gd3hQcm9taXNlKHVuaS5nZXRJbWFnZUluZm8pO1xyXG5cclxuXHR2YXIgY2FudmFzVG9UZW1wRmlsZVBhdGggPSB3eFByb21pc2UodW5pLmNhbnZhc1RvVGVtcEZpbGVQYXRoKTtcclxuXHJcblx0dmFyIGJhc2U2NCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xyXG5cdFx0LyohIGh0dHA6Ly9tdGhzLmJlL2Jhc2U2NCB2MC4xLjAgYnkgQG1hdGhpYXMgfCBNSVQgbGljZW5zZSAqL1xyXG5cdFx0KGZ1bmN0aW9uKHJvb3QpIHtcclxuXHJcblx0XHRcdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlcyBgZXhwb3J0c2AuXHJcblx0XHRcdHZhciBmcmVlRXhwb3J0cyA9ICdvYmplY3QnID09ICdvYmplY3QnICYmIGV4cG9ydHM7XHJcblxyXG5cdFx0XHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC5cclxuXHRcdFx0dmFyIGZyZWVNb2R1bGUgPSAnb2JqZWN0JyA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcclxuXHRcdFx0XHRtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cyAmJiBtb2R1bGU7XHJcblxyXG5cdFx0XHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCwgZnJvbSBOb2RlLmpzIG9yIEJyb3dzZXJpZmllZCBjb2RlLCBhbmQgdXNlXHJcblx0XHRcdC8vIGl0IGFzIGByb290YC5cclxuXHRcdFx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgY29tbW9uanNHbG9iYWwgPT0gJ29iamVjdCcgJiYgY29tbW9uanNHbG9iYWw7XHJcblx0XHRcdGlmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkge1xyXG5cdFx0XHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblx0XHRcdHZhciBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuXHRcdFx0fTtcclxuXHRcdFx0SW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcclxuXHRcdFx0SW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XHJcblxyXG5cdFx0XHR2YXIgZXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XHJcblx0XHRcdFx0Ly8gTm90ZTogdGhlIGVycm9yIG1lc3NhZ2VzIHVzZWQgdGhyb3VnaG91dCB0aGlzIGZpbGUgbWF0Y2ggdGhvc2UgdXNlZCBieVxyXG5cdFx0XHRcdC8vIHRoZSBuYXRpdmUgYGF0b2JgL2BidG9hYCBpbXBsZW1lbnRhdGlvbiBpbiBDaHJvbWl1bS5cclxuXHRcdFx0XHR0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKG1lc3NhZ2UpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIFRBQkxFID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG5cdFx0XHQvLyBodHRwOi8vd2hhdHdnLm9yZy9odG1sL2NvbW1vbi1taWNyb3N5bnRheGVzLmh0bWwjc3BhY2UtY2hhcmFjdGVyXHJcblx0XHRcdHZhciBSRUdFWF9TUEFDRV9DSEFSQUNURVJTID0gL1tcXHRcXG5cXGZcXHIgXS9nO1xyXG5cclxuXHRcdFx0Ly8gYGRlY29kZWAgaXMgZGVzaWduZWQgdG8gYmUgZnVsbHkgY29tcGF0aWJsZSB3aXRoIGBhdG9iYCBhcyBkZXNjcmliZWQgaW4gdGhlXHJcblx0XHRcdC8vIEhUTUwgU3RhbmRhcmQuIGh0dHA6Ly93aGF0d2cub3JnL2h0bWwvd2ViYXBwYXBpcy5odG1sI2RvbS13aW5kb3diYXNlNjQtYXRvYlxyXG5cdFx0XHQvLyBUaGUgb3B0aW1pemVkIGJhc2U2NC1kZWNvZGluZyBhbGdvcml0aG0gdXNlZCBpcyBiYXNlZCBvbiBAYXRr4oCZcyBleGNlbGxlbnRcclxuXHRcdFx0Ly8gaW1wbGVtZW50YXRpb24uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2F0ay8xMDIwMzk2XHJcblx0XHRcdHZhciBkZWNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xyXG5cdFx0XHRcdGlucHV0ID0gU3RyaW5nKGlucHV0KVxyXG5cdFx0XHRcdFx0LnJlcGxhY2UoUkVHRVhfU1BBQ0VfQ0hBUkFDVEVSUywgJycpO1xyXG5cdFx0XHRcdHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XHJcblx0XHRcdFx0aWYgKGxlbmd0aCAlIDQgPT0gMCkge1xyXG5cdFx0XHRcdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC89PT8kLywgJycpO1xyXG5cdFx0XHRcdFx0bGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRsZW5ndGggJSA0ID09IDEgfHxcclxuXHRcdFx0XHRcdC8vIGh0dHA6Ly93aGF0d2cub3JnL0MjYWxwaGFudW1lcmljLWFzY2lpLWNoYXJhY3RlcnNcclxuXHRcdFx0XHRcdC9bXithLXpBLVowLTkvXS8udGVzdChpbnB1dClcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGVycm9yKFxyXG5cdFx0XHRcdFx0XHQnSW52YWxpZCBjaGFyYWN0ZXI6IHRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIGJpdENvdW50ZXIgPSAwO1xyXG5cdFx0XHRcdHZhciBiaXRTdG9yYWdlO1xyXG5cdFx0XHRcdHZhciBidWZmZXI7XHJcblx0XHRcdFx0dmFyIG91dHB1dCA9ICcnO1xyXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IC0xO1xyXG5cdFx0XHRcdHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRidWZmZXIgPSBUQUJMRS5pbmRleE9mKGlucHV0LmNoYXJBdChwb3NpdGlvbikpO1xyXG5cdFx0XHRcdFx0Yml0U3RvcmFnZSA9IGJpdENvdW50ZXIgJSA0ID8gYml0U3RvcmFnZSAqIDY0ICsgYnVmZmVyIDogYnVmZmVyO1xyXG5cdFx0XHRcdFx0Ly8gVW5sZXNzIHRoaXMgaXMgdGhlIGZpcnN0IG9mIGEgZ3JvdXAgb2YgNCBjaGFyYWN0ZXJz4oCmXHJcblx0XHRcdFx0XHRpZiAoYml0Q291bnRlcisrICUgNCkge1xyXG5cdFx0XHRcdFx0XHQvLyDigKZjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gYSBzaW5nbGUgQVNDSUkgY2hhcmFjdGVyLlxyXG5cdFx0XHRcdFx0XHRvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcclxuXHRcdFx0XHRcdFx0XHQweEZGICYgYml0U3RvcmFnZSA+PiAoLTIgKiBiaXRDb3VudGVyICYgNilcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG91dHB1dDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8vIGBlbmNvZGVgIGlzIGRlc2lnbmVkIHRvIGJlIGZ1bGx5IGNvbXBhdGlibGUgd2l0aCBgYnRvYWAgYXMgZGVzY3JpYmVkIGluIHRoZVxyXG5cdFx0XHQvLyBIVE1MIFN0YW5kYXJkOiBodHRwOi8vd2hhdHdnLm9yZy9odG1sL3dlYmFwcGFwaXMuaHRtbCNkb20td2luZG93YmFzZTY0LWJ0b2FcclxuXHRcdFx0dmFyIGVuY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XHJcblx0XHRcdFx0aW5wdXQgPSBTdHJpbmcoaW5wdXQpO1xyXG5cdFx0XHRcdGlmICgvW15cXDAtXFx4RkZdLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRcdFx0Ly8gTm90ZTogbm8gbmVlZCB0byBzcGVjaWFsLWNhc2UgYXN0cmFsIHN5bWJvbHMgaGVyZSwgYXMgc3Vycm9nYXRlcyBhcmVcclxuXHRcdFx0XHRcdC8vIG1hdGNoZWQsIGFuZCB0aGUgaW5wdXQgaXMgc3VwcG9zZWQgdG8gb25seSBjb250YWluIEFTQ0lJIGFueXdheS5cclxuXHRcdFx0XHRcdGVycm9yKFxyXG5cdFx0XHRcdFx0XHQnVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgJyArXHJcblx0XHRcdFx0XHRcdCdMYXRpbjEgcmFuZ2UuJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHBhZGRpbmcgPSBpbnB1dC5sZW5ndGggJSAzO1xyXG5cdFx0XHRcdHZhciBvdXRwdXQgPSAnJztcclxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSAtMTtcclxuXHRcdFx0XHR2YXIgYTtcclxuXHRcdFx0XHR2YXIgYjtcclxuXHRcdFx0XHR2YXIgYztcclxuXHRcdFx0XHR2YXIgYnVmZmVyO1xyXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSBhbnkgcGFkZGluZyBpcyBoYW5kbGVkIG91dHNpZGUgb2YgdGhlIGxvb3AuXHJcblx0XHRcdFx0dmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCAtIHBhZGRpbmc7XHJcblxyXG5cdFx0XHRcdHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XHJcblx0XHRcdFx0XHQvLyBSZWFkIHRocmVlIGJ5dGVzLCBpLmUuIDI0IGJpdHMuXHJcblx0XHRcdFx0XHRhID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbikgPDwgMTY7XHJcblx0XHRcdFx0XHRiID0gaW5wdXQuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKSA8PCA4O1xyXG5cdFx0XHRcdFx0YyA9IGlucHV0LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XHJcblx0XHRcdFx0XHRidWZmZXIgPSBhICsgYiArIGM7XHJcblx0XHRcdFx0XHQvLyBUdXJuIHRoZSAyNCBiaXRzIGludG8gZm91ciBjaHVua3Mgb2YgNiBiaXRzIGVhY2gsIGFuZCBhcHBlbmQgdGhlXHJcblx0XHRcdFx0XHQvLyBtYXRjaGluZyBjaGFyYWN0ZXIgZm9yIGVhY2ggb2YgdGhlbSB0byB0aGUgb3V0cHV0LlxyXG5cdFx0XHRcdFx0b3V0cHV0ICs9IChcclxuXHRcdFx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxOCAmIDB4M0YpICtcclxuXHRcdFx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxMiAmIDB4M0YpICtcclxuXHRcdFx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiA2ICYgMHgzRikgK1xyXG5cdFx0XHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyICYgMHgzRilcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAocGFkZGluZyA9PSAyKSB7XHJcblx0XHRcdFx0XHRhID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbikgPDwgODtcclxuXHRcdFx0XHRcdGIgPSBpbnB1dC5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xyXG5cdFx0XHRcdFx0YnVmZmVyID0gYSArIGI7XHJcblx0XHRcdFx0XHRvdXRwdXQgKz0gKFxyXG5cdFx0XHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDEwKSArXHJcblx0XHRcdFx0XHRcdFRBQkxFLmNoYXJBdCgoYnVmZmVyID4+IDQpICYgMHgzRikgK1xyXG5cdFx0XHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA8PCAyKSAmIDB4M0YpICtcclxuXHRcdFx0XHRcdFx0Jz0nXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAocGFkZGluZyA9PSAxKSB7XHJcblx0XHRcdFx0XHRidWZmZXIgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcclxuXHRcdFx0XHRcdG91dHB1dCArPSAoXHJcblx0XHRcdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMikgK1xyXG5cdFx0XHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA8PCA0KSAmIDB4M0YpICtcclxuXHRcdFx0XHRcdFx0Jz09J1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBvdXRwdXQ7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgYmFzZTY0ID0ge1xyXG5cdFx0XHRcdCdlbmNvZGUnOiBlbmNvZGUsXHJcblx0XHRcdFx0J2RlY29kZSc6IGRlY29kZSxcclxuXHRcdFx0XHQndmVyc2lvbic6ICcwLjEuMCdcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIHNwZWNpZmljIGNvbmRpdGlvbiBwYXR0ZXJuc1xyXG5cdFx0XHQvLyBsaWtlIHRoZSBmb2xsb3dpbmc6XHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0eXBlb2YgdW5kZWZpbmVkID09ICdmdW5jdGlvbicgJiZcclxuXHRcdFx0XHR0eXBlb2YgdW5kZWZpbmVkLmFtZCA9PSAnb2JqZWN0JyAmJlxyXG5cdFx0XHRcdHVuZGVmaW5lZC5hbWRcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dW5kZWZpbmVkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGJhc2U2NDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiAhZnJlZUV4cG9ydHMubm9kZVR5cGUpIHtcclxuXHRcdFx0XHRpZiAoZnJlZU1vZHVsZSkgeyAvLyBpbiBOb2RlLmpzIG9yIFJpbmdvSlMgdjAuOC4wK1xyXG5cdFx0XHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gYmFzZTY0O1xyXG5cdFx0XHRcdH0gZWxzZSB7IC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXHJcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYmFzZTY0KSB7XHJcblx0XHRcdFx0XHRcdGJhc2U2NC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gYmFzZTY0W2tleV0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHsgLy8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxyXG5cdFx0XHRcdHJvb3QuYmFzZTY0ID0gYmFzZTY0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fShjb21tb25qc0dsb2JhbCkpO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBtYWtlVVJJKHN0ckRhdGEsIHR5cGUpIHtcclxuXHRcdHJldHVybiAnZGF0YTonICsgdHlwZSArICc7YmFzZTY0LCcgKyBzdHJEYXRhXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmaXhUeXBlKHR5cGUpIHtcclxuXHRcdHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvanBnL2ksICdqcGVnJyk7XHJcblx0XHR2YXIgciA9IHR5cGUubWF0Y2goL3BuZ3xqcGVnfGJtcHxnaWYvKVswXTtcclxuXHRcdHJldHVybiAnaW1hZ2UvJyArIHJcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGVuY29kZURhdGEoZGF0YSkge1xyXG5cdFx0dmFyIHN0ciA9ICcnO1xyXG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRzdHIgPSBkYXRhO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0c3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVtpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBiYXNlNjQuZW5jb2RlKHN0cilcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluWbvuWDj+WMuuWfn+makOWQq+eahOWDj+e0oOaVsOaNrlxyXG5cdCAqIEBwYXJhbSBjYW52YXNJZCBjYW52YXPmoIfor4ZcclxuXHQgKiBAcGFyYW0geCDlsIbopoHooqvmj5Dlj5bnmoTlm77lg4/mlbDmja7nn6nlvaLljLrln5/nmoTlt6bkuIrop5IgeCDlnZDmoIdcclxuXHQgKiBAcGFyYW0geSDlsIbopoHooqvmj5Dlj5bnmoTlm77lg4/mlbDmja7nn6nlvaLljLrln5/nmoTlt6bkuIrop5IgeSDlnZDmoIdcclxuXHQgKiBAcGFyYW0gd2lkdGgg5bCG6KaB6KKr5o+Q5Y+W55qE5Zu+5YOP5pWw5o2u55+p5b2i5Yy65Z+f55qE5a695bqmXHJcblx0ICogQHBhcmFtIGhlaWdodCDlsIbopoHooqvmj5Dlj5bnmoTlm77lg4/mlbDmja7nn6nlvaLljLrln5/nmoTpq5jluqZcclxuXHQgKiBAcGFyYW0gZG9uZSDlrozmiJDlm57osINcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBnZXRJbWFnZURhdGEoY2FudmFzSWQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGRvbmUpIHtcclxuXHRcdHVuaS5jYW52YXNHZXRJbWFnZURhdGEoe1xyXG5cdFx0XHRjYW52YXNJZDogY2FudmFzSWQsXHJcblx0XHRcdHg6IHgsXHJcblx0XHRcdHk6IHksXHJcblx0XHRcdHdpZHRoOiB3aWR0aCxcclxuXHRcdFx0aGVpZ2h0OiBoZWlnaHQsXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0ZG9uZShyZXMsIG51bGwpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiBmdW5jdGlvbiBmYWlsKHJlcykge1xyXG5cdFx0XHRcdGRvbmUobnVsbCwgcmVzKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDnlJ/miJBibXDmoLzlvI/lm77niYdcclxuXHQgKiDmjInnhafop4TliJnnlJ/miJDlm77niYflk43lupTlpLTlkozlk43lupTkvZNcclxuXHQgKiBAcGFyYW0gb0RhdGEg55So5p2l5o+P6L+wIGNhbnZhcyDljLrln5/pmpDlkKvnmoTlg4/ntKDmlbDmja4geyBkYXRhLCB3aWR0aCwgaGVpZ2h0IH0gPSBvRGF0YVxyXG5cdCAqIEByZXR1cm5zIHsqfSBiYXNlNjTlrZfnrKbkuLJcclxuXHQgKi9cclxuXHRmdW5jdGlvbiBnZW5CaXRtYXBJbWFnZShvRGF0YSkge1xyXG5cdFx0Ly9cclxuXHRcdC8vIEJJVE1BUEZJTEVIRUFERVI6IGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS93aW5kb3dzL2Rlc2t0b3AvZGQxODMzNzQodj12cy44NSkuYXNweFxyXG5cdFx0Ly8gQklUTUFQSU5GT0hFQURFUjogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2RkMTgzMzc2LmFzcHhcclxuXHRcdC8vXHJcblx0XHR2YXIgYmlXaWR0aCA9IG9EYXRhLndpZHRoO1xyXG5cdFx0dmFyIGJpSGVpZ2h0ID0gb0RhdGEuaGVpZ2h0O1xyXG5cdFx0dmFyIGJpU2l6ZUltYWdlID0gYmlXaWR0aCAqIGJpSGVpZ2h0ICogMztcclxuXHRcdHZhciBiZlNpemUgPSBiaVNpemVJbWFnZSArIDU0OyAvLyB0b3RhbCBoZWFkZXIgc2l6ZSA9IDU0IGJ5dGVzXHJcblxyXG5cdFx0Ly9cclxuXHRcdC8vICB0eXBlZGVmIHN0cnVjdCB0YWdCSVRNQVBGSUxFSEVBREVSIHtcclxuXHRcdC8vICBcdFdPUkQgYmZUeXBlO1xyXG5cdFx0Ly8gIFx0RFdPUkQgYmZTaXplO1xyXG5cdFx0Ly8gIFx0V09SRCBiZlJlc2VydmVkMTtcclxuXHRcdC8vICBcdFdPUkQgYmZSZXNlcnZlZDI7XHJcblx0XHQvLyAgXHREV09SRCBiZk9mZkJpdHM7XHJcblx0XHQvLyAgfSBCSVRNQVBGSUxFSEVBREVSO1xyXG5cdFx0Ly9cclxuXHRcdHZhciBCSVRNQVBGSUxFSEVBREVSID0gW1xyXG5cdFx0XHQvLyBXT1JEIGJmVHlwZSAtLSBUaGUgZmlsZSB0eXBlIHNpZ25hdHVyZTsgbXVzdCBiZSBcIkJNXCJcclxuXHRcdFx0MHg0MiwgMHg0RCxcclxuXHRcdFx0Ly8gRFdPUkQgYmZTaXplIC0tIFRoZSBzaXplLCBpbiBieXRlcywgb2YgdGhlIGJpdG1hcCBmaWxlXHJcblx0XHRcdGJmU2l6ZSAmIDB4ZmYsIGJmU2l6ZSA+PiA4ICYgMHhmZiwgYmZTaXplID4+IDE2ICYgMHhmZiwgYmZTaXplID4+IDI0ICYgMHhmZixcclxuXHRcdFx0Ly8gV09SRCBiZlJlc2VydmVkMSAtLSBSZXNlcnZlZDsgbXVzdCBiZSB6ZXJvXHJcblx0XHRcdDAsIDAsXHJcblx0XHRcdC8vIFdPUkQgYmZSZXNlcnZlZDIgLS0gUmVzZXJ2ZWQ7IG11c3QgYmUgemVyb1xyXG5cdFx0XHQwLCAwLFxyXG5cdFx0XHQvLyBEV09SRCBiZk9mZkJpdHMgLS0gVGhlIG9mZnNldCwgaW4gYnl0ZXMsIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgQklUTUFQRklMRUhFQURFUiBzdHJ1Y3R1cmUgdG8gdGhlIGJpdG1hcCBiaXRzLlxyXG5cdFx0XHQ1NCwgMCwgMCwgMFxyXG5cdFx0XTtcclxuXHJcblx0XHQvL1xyXG5cdFx0Ly8gIHR5cGVkZWYgc3RydWN0IHRhZ0JJVE1BUElORk9IRUFERVIge1xyXG5cdFx0Ly8gIFx0RFdPUkQgYmlTaXplO1xyXG5cdFx0Ly8gIFx0TE9ORyAgYmlXaWR0aDtcclxuXHRcdC8vICBcdExPTkcgIGJpSGVpZ2h0O1xyXG5cdFx0Ly8gIFx0V09SRCAgYmlQbGFuZXM7XHJcblx0XHQvLyAgXHRXT1JEICBiaUJpdENvdW50O1xyXG5cdFx0Ly8gIFx0RFdPUkQgYmlDb21wcmVzc2lvbjtcclxuXHRcdC8vICBcdERXT1JEIGJpU2l6ZUltYWdlO1xyXG5cdFx0Ly8gIFx0TE9ORyAgYmlYUGVsc1Blck1ldGVyO1xyXG5cdFx0Ly8gIFx0TE9ORyAgYmlZUGVsc1Blck1ldGVyO1xyXG5cdFx0Ly8gIFx0RFdPUkQgYmlDbHJVc2VkO1xyXG5cdFx0Ly8gIFx0RFdPUkQgYmlDbHJJbXBvcnRhbnQ7XHJcblx0XHQvLyAgfSBCSVRNQVBJTkZPSEVBREVSLCAqUEJJVE1BUElORk9IRUFERVI7XHJcblx0XHQvL1xyXG5cdFx0dmFyIEJJVE1BUElORk9IRUFERVIgPSBbXHJcblx0XHRcdC8vIERXT1JEIGJpU2l6ZSAtLSBUaGUgbnVtYmVyIG9mIGJ5dGVzIHJlcXVpcmVkIGJ5IHRoZSBzdHJ1Y3R1cmVcclxuXHRcdFx0NDAsIDAsIDAsIDAsXHJcblx0XHRcdC8vIExPTkcgYmlXaWR0aCAtLSBUaGUgd2lkdGggb2YgdGhlIGJpdG1hcCwgaW4gcGl4ZWxzXHJcblx0XHRcdGJpV2lkdGggJiAweGZmLCBiaVdpZHRoID4+IDggJiAweGZmLCBiaVdpZHRoID4+IDE2ICYgMHhmZiwgYmlXaWR0aCA+PiAyNCAmIDB4ZmYsXHJcblx0XHRcdC8vIExPTkcgYmlIZWlnaHQgLS0gVGhlIGhlaWdodCBvZiB0aGUgYml0bWFwLCBpbiBwaXhlbHNcclxuXHRcdFx0YmlIZWlnaHQgJiAweGZmLCBiaUhlaWdodCA+PiA4ICYgMHhmZiwgYmlIZWlnaHQgPj4gMTYgJiAweGZmLCBiaUhlaWdodCA+PiAyNCAmIDB4ZmYsXHJcblx0XHRcdC8vIFdPUkQgYmlQbGFuZXMgLS0gVGhlIG51bWJlciBvZiBwbGFuZXMgZm9yIHRoZSB0YXJnZXQgZGV2aWNlLiBUaGlzIHZhbHVlIG11c3QgYmUgc2V0IHRvIDFcclxuXHRcdFx0MSwgMCxcclxuXHRcdFx0Ly8gV09SRCBiaUJpdENvdW50IC0tIFRoZSBudW1iZXIgb2YgYml0cy1wZXItcGl4ZWwsIDI0IGJpdHMtcGVyLXBpeGVsIC0tIHRoZSBiaXRtYXBcclxuXHRcdFx0Ly8gaGFzIGEgbWF4aW11bSBvZiAyXjI0IGNvbG9ycyAoMTY3NzcyMTYsIFRydWVjb2xvcilcclxuXHRcdFx0MjQsIDAsXHJcblx0XHRcdC8vIERXT1JEIGJpQ29tcHJlc3Npb24gLS0gVGhlIHR5cGUgb2YgY29tcHJlc3Npb24sIEJJX1JHQiAoY29kZSAwKSAtLSB1bmNvbXByZXNzZWRcclxuXHRcdFx0MCwgMCwgMCwgMCxcclxuXHRcdFx0Ly8gRFdPUkQgYmlTaXplSW1hZ2UgLS0gVGhlIHNpemUsIGluIGJ5dGVzLCBvZiB0aGUgaW1hZ2UuIFRoaXMgbWF5IGJlIHNldCB0byB6ZXJvIGZvciBCSV9SR0IgYml0bWFwc1xyXG5cdFx0XHRiaVNpemVJbWFnZSAmIDB4ZmYsIGJpU2l6ZUltYWdlID4+IDggJiAweGZmLCBiaVNpemVJbWFnZSA+PiAxNiAmIDB4ZmYsIGJpU2l6ZUltYWdlID4+IDI0ICYgMHhmZixcclxuXHRcdFx0Ly8gTE9ORyBiaVhQZWxzUGVyTWV0ZXIsIHVudXNlZFxyXG5cdFx0XHQwLCAwLCAwLCAwLFxyXG5cdFx0XHQvLyBMT05HIGJpWVBlbHNQZXJNZXRlciwgdW51c2VkXHJcblx0XHRcdDAsIDAsIDAsIDAsXHJcblx0XHRcdC8vIERXT1JEIGJpQ2xyVXNlZCwgdGhlIG51bWJlciBvZiBjb2xvciBpbmRleGVzIG9mIHBhbGV0dGUsIHVudXNlZFxyXG5cdFx0XHQwLCAwLCAwLCAwLFxyXG5cdFx0XHQvLyBEV09SRCBiaUNsckltcG9ydGFudCwgdW51c2VkXHJcblx0XHRcdDAsIDAsIDAsIDBcclxuXHRcdF07XHJcblxyXG5cdFx0dmFyIGlQYWRkaW5nID0gKDQgLSAoKGJpV2lkdGggKiAzKSAlIDQpKSAlIDQ7XHJcblxyXG5cdFx0dmFyIGFJbWdEYXRhID0gb0RhdGEuZGF0YTtcclxuXHJcblx0XHR2YXIgc3RyUGl4ZWxEYXRhID0gJyc7XHJcblx0XHR2YXIgYmlXaWR0aDQgPSBiaVdpZHRoIDw8IDI7XHJcblx0XHR2YXIgeSA9IGJpSGVpZ2h0O1xyXG5cdFx0dmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XHJcblxyXG5cdFx0ZG8ge1xyXG5cdFx0XHR2YXIgaU9mZnNldFkgPSBiaVdpZHRoNCAqICh5IC0gMSk7XHJcblx0XHRcdHZhciBzdHJQaXhlbFJvdyA9ICcnO1xyXG5cdFx0XHRmb3IgKHZhciB4ID0gMDsgeCA8IGJpV2lkdGg7IHgrKykge1xyXG5cdFx0XHRcdHZhciBpT2Zmc2V0WCA9IHggPDwgMjtcclxuXHRcdFx0XHRzdHJQaXhlbFJvdyArPSBmcm9tQ2hhckNvZGUoYUltZ0RhdGFbaU9mZnNldFkgKyBpT2Zmc2V0WCArIDJdKSArXHJcblx0XHRcdFx0XHRmcm9tQ2hhckNvZGUoYUltZ0RhdGFbaU9mZnNldFkgKyBpT2Zmc2V0WCArIDFdKSArXHJcblx0XHRcdFx0XHRmcm9tQ2hhckNvZGUoYUltZ0RhdGFbaU9mZnNldFkgKyBpT2Zmc2V0WF0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKHZhciBjID0gMDsgYyA8IGlQYWRkaW5nOyBjKyspIHtcclxuXHRcdFx0XHRzdHJQaXhlbFJvdyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzdHJQaXhlbERhdGEgKz0gc3RyUGl4ZWxSb3c7XHJcblx0XHR9IHdoaWxlICgtLXkpXHJcblxyXG5cdFx0dmFyIHN0ckVuY29kZWQgPSBlbmNvZGVEYXRhKEJJVE1BUEZJTEVIRUFERVIuY29uY2F0KEJJVE1BUElORk9IRUFERVIpKSArIGVuY29kZURhdGEoc3RyUGl4ZWxEYXRhKTtcclxuXHJcblx0XHRyZXR1cm4gc3RyRW5jb2RlZFxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog6L2s5o2i5Li65Zu+54mHYmFzZTY0XHJcblx0ICogQHBhcmFtIGNhbnZhc0lkIGNhbnZhc+agh+ivhlxyXG5cdCAqIEBwYXJhbSB4IOWwhuimgeiiq+aPkOWPlueahOWbvuWDj+aVsOaNruefqeW9ouWMuuWfn+eahOW3puS4iuinkiB4IOWdkOagh1xyXG5cdCAqIEBwYXJhbSB5IOWwhuimgeiiq+aPkOWPlueahOWbvuWDj+aVsOaNruefqeW9ouWMuuWfn+eahOW3puS4iuinkiB5IOWdkOagh1xyXG5cdCAqIEBwYXJhbSB3aWR0aCDlsIbopoHooqvmj5Dlj5bnmoTlm77lg4/mlbDmja7nn6nlvaLljLrln5/nmoTlrr3luqZcclxuXHQgKiBAcGFyYW0gaGVpZ2h0IOWwhuimgeiiq+aPkOWPlueahOWbvuWDj+aVsOaNruefqeW9ouWMuuWfn+eahOmrmOW6plxyXG5cdCAqIEBwYXJhbSB0eXBlIOi9rOaNouWbvueJh+exu+Wei1xyXG5cdCAqIEBwYXJhbSBkb25lIOWujOaIkOWbnuiwg1xyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGNvbnZlcnRUb0ltYWdlKGNhbnZhc0lkLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCB0eXBlLCBkb25lKSB7XHJcblx0XHRpZiAoZG9uZSA9PT0gdm9pZCAwKSBkb25lID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcblx0XHRpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHR5cGUgPSAncG5nJztcclxuXHRcdH1cclxuXHRcdHR5cGUgPSBmaXhUeXBlKHR5cGUpO1xyXG5cdFx0aWYgKC9ibXAvLnRlc3QodHlwZSkpIHtcclxuXHRcdFx0Z2V0SW1hZ2VEYXRhKGNhbnZhc0lkLCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmdW5jdGlvbihkYXRhLCBlcnIpIHtcclxuXHRcdFx0XHR2YXIgc3RyRGF0YSA9IGdlbkJpdG1hcEltYWdlKGRhdGEpO1xyXG5cdFx0XHRcdHRvb2xzXzcoZG9uZSkgJiYgZG9uZShtYWtlVVJJKHN0ckRhdGEsICdpbWFnZS8nICsgdHlwZSksIGVycik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcign5pqC5LiN5pSv5oyB55Sf5oiQXFwnJyArIHR5cGUgKyAnXFwn57G75Z6L55qEYmFzZTY05Zu+54mHJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YXIgQ2FudmFzVG9CYXNlNjQgPSB7XHJcblx0XHRjb252ZXJ0VG9JbWFnZTogY29udmVydFRvSW1hZ2UsXHJcblx0XHQvLyBjb252ZXJ0VG9QTkc6IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCBkb25lKSB7XHJcblx0XHQvLyAgIHJldHVybiBjb252ZXJ0VG9JbWFnZSh3aWR0aCwgaGVpZ2h0LCAncG5nJywgZG9uZSlcclxuXHRcdC8vIH0sXHJcblx0XHQvLyBjb252ZXJ0VG9KUEVHOiBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgZG9uZSkge1xyXG5cdFx0Ly8gICByZXR1cm4gY29udmVydFRvSW1hZ2Uod2lkdGgsIGhlaWdodCwgJ2pwZWcnLCBkb25lKVxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIGNvbnZlcnRUb0dJRjogZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIGRvbmUpIHtcclxuXHRcdC8vICAgcmV0dXJuIGNvbnZlcnRUb0ltYWdlKHdpZHRoLCBoZWlnaHQsICdnaWYnLCBkb25lKVxyXG5cdFx0Ly8gfSxcclxuXHRcdGNvbnZlcnRUb0JNUDogZnVuY3Rpb24ocmVmLCBkb25lKSB7XHJcblx0XHRcdGlmIChyZWYgPT09IHZvaWQgMCkgcmVmID0ge307XHJcblx0XHRcdHZhciBjYW52YXNJZCA9IHJlZi5jYW52YXNJZDtcclxuXHRcdFx0dmFyIHggPSByZWYueDtcclxuXHRcdFx0dmFyIHkgPSByZWYueTtcclxuXHRcdFx0dmFyIHdpZHRoID0gcmVmLndpZHRoO1xyXG5cdFx0XHR2YXIgaGVpZ2h0ID0gcmVmLmhlaWdodDtcclxuXHRcdFx0aWYgKGRvbmUgPT09IHZvaWQgMCkgZG9uZSA9IGZ1bmN0aW9uKCkge307XHJcblxyXG5cdFx0XHRyZXR1cm4gY29udmVydFRvSW1hZ2UoY2FudmFzSWQsIHgsIHksIHdpZHRoLCBoZWlnaHQsICdibXAnLCBkb25lKVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIG1ldGhvZHMoKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0dmFyIGJvdW5kV2lkdGggPSBzZWxmLndpZHRoOyAvLyDoo4HliarmoYbpu5jorqTlrr3luqbvvIzljbPmlbTkuKrnlLvluIPlrr3luqZcclxuXHRcdHZhciBib3VuZEhlaWdodCA9IHNlbGYuaGVpZ2h0OyAvLyDoo4HliarmoYbpu5jorqTpq5jluqbvvIzljbPmlbTkuKrnlLvluIPpq5jluqZcclxuXHJcblx0XHR2YXIgaWQgPSBzZWxmLmlkO1xyXG5cdFx0dmFyIHRhcmdldElkID0gc2VsZi50YXJnZXRJZDtcclxuXHRcdHZhciBwaXhlbFJhdGlvID0gc2VsZi5waXhlbFJhdGlvO1xyXG5cclxuXHRcdHZhciByZWYgPSBzZWxmLmN1dDtcclxuXHRcdHZhciB4ID0gcmVmLng7XHJcblx0XHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcclxuXHRcdHZhciB5ID0gcmVmLnk7XHJcblx0XHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcclxuXHRcdHZhciB3aWR0aCA9IHJlZi53aWR0aDtcclxuXHRcdGlmICh3aWR0aCA9PT0gdm9pZCAwKSB3aWR0aCA9IGJvdW5kV2lkdGg7XHJcblx0XHR2YXIgaGVpZ2h0ID0gcmVmLmhlaWdodDtcclxuXHRcdGlmIChoZWlnaHQgPT09IHZvaWQgMCkgaGVpZ2h0ID0gYm91bmRIZWlnaHQ7XHJcblxyXG5cdFx0c2VsZi51cGRhdGVDYW52YXMgPSBmdW5jdGlvbihkb25lKSB7XHJcblx0XHRcdGlmIChzZWxmLmNyb3BlclRhcmdldCkge1xyXG5cdFx0XHRcdC8vICDnlLvluIPnu5jliLblm77niYdcclxuXHRcdFx0XHRzZWxmLmN0eC5kcmF3SW1hZ2UoXHJcblx0XHRcdFx0XHRzZWxmLmNyb3BlclRhcmdldCxcclxuXHRcdFx0XHRcdHNlbGYuaW1nTGVmdCxcclxuXHRcdFx0XHRcdHNlbGYuaW1nVG9wLFxyXG5cdFx0XHRcdFx0c2VsZi5zY2FsZVdpZHRoLFxyXG5cdFx0XHRcdFx0c2VsZi5zY2FsZUhlaWdodFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9vbHNfNyhzZWxmLm9uQmVmb3JlRHJhdykgJiYgc2VsZi5vbkJlZm9yZURyYXcoc2VsZi5jdHgsIHNlbGYpO1xyXG5cclxuXHRcdFx0c2VsZi5zZXRCb3VuZFN0eWxlKHNlbGYuYm91bmRTdHlsZSk7IC8vXHTorr7nva7ovrnnlYzmoLflvI9cclxuXHJcblx0XHRcdHNlbGYuY3R4LmRyYXcoZmFsc2UsIGRvbmUpO1xyXG5cdFx0XHRyZXR1cm4gc2VsZlxyXG5cdFx0fTtcclxuXHJcblx0XHRzZWxmLnB1c2hPcmlnaW4gPSBzZWxmLnB1c2hPcmlnbiA9IGZ1bmN0aW9uKHNyYykge1xyXG5cdFx0XHRzZWxmLnNyYyA9IHNyYztcclxuXHJcblx0XHRcdHRvb2xzXzcoc2VsZi5vbkJlZm9yZUltYWdlTG9hZCkgJiYgc2VsZi5vbkJlZm9yZUltYWdlTG9hZChzZWxmLmN0eCwgc2VsZik7XHJcblxyXG5cdFx0XHRyZXR1cm4gZ2V0SW1hZ2VJbmZvKHtcclxuXHRcdFx0XHRcdHNyYzogc3JjXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQudGhlbihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHZhciBpbm5lckFzcGVjdFJhZGlvID0gcmVzLndpZHRoIC8gcmVzLmhlaWdodDtcclxuXHRcdFx0XHRcdHZhciBjdXN0b21Bc3BlY3RSYWRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdHNlbGYuY3JvcGVyVGFyZ2V0ID0gcmVzLnBhdGg7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGlubmVyQXNwZWN0UmFkaW8gPCBjdXN0b21Bc3BlY3RSYWRpbykge1xyXG5cdFx0XHRcdFx0XHRzZWxmLnJlY3RYID0geDtcclxuXHRcdFx0XHRcdFx0c2VsZi5iYXNlV2lkdGggPSB3aWR0aDtcclxuXHRcdFx0XHRcdFx0c2VsZi5iYXNlSGVpZ2h0ID0gd2lkdGggLyBpbm5lckFzcGVjdFJhZGlvO1xyXG5cdFx0XHRcdFx0XHRzZWxmLnJlY3RZID0geSAtIE1hdGguYWJzKChoZWlnaHQgLSBzZWxmLmJhc2VIZWlnaHQpIC8gMik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzZWxmLnJlY3RZID0geTtcclxuXHRcdFx0XHRcdFx0c2VsZi5iYXNlV2lkdGggPSBoZWlnaHQgKiBpbm5lckFzcGVjdFJhZGlvO1xyXG5cdFx0XHRcdFx0XHRzZWxmLmJhc2VIZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHRcdFx0XHRcdHNlbGYucmVjdFggPSB4IC0gTWF0aC5hYnMoKHdpZHRoIC0gc2VsZi5iYXNlV2lkdGgpIC8gMik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0c2VsZi5pbWdMZWZ0ID0gc2VsZi5yZWN0WDtcclxuXHRcdFx0XHRcdHNlbGYuaW1nVG9wID0gc2VsZi5yZWN0WTtcclxuXHRcdFx0XHRcdHNlbGYuc2NhbGVXaWR0aCA9IHNlbGYuYmFzZVdpZHRoO1xyXG5cdFx0XHRcdFx0c2VsZi5zY2FsZUhlaWdodCA9IHNlbGYuYmFzZUhlaWdodDtcclxuXHJcblx0XHRcdFx0XHRzZWxmLnVwZGF0ZSgpO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYudXBkYXRlQ2FudmFzKHJlc29sdmUpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dG9vbHNfNyhzZWxmLm9uSW1hZ2VMb2FkKSAmJiBzZWxmLm9uSW1hZ2VMb2FkKHNlbGYuY3R4LCBzZWxmKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0fTtcclxuXHJcblx0XHRzZWxmLnJlbW92ZUltYWdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGYuc3JjID0gJyc7XHJcblx0XHRcdHNlbGYuY3JvcGVyVGFyZ2V0ID0gJyc7XHJcblx0XHRcdHJldHVybiBkcmF3KHNlbGYuY3R4KVxyXG5cdFx0fTtcclxuXHJcblx0XHRzZWxmLmdldENyb3BwZXJCYXNlNjQgPSBmdW5jdGlvbihkb25lKSB7XHJcblx0XHRcdGlmIChkb25lID09PSB2b2lkIDApIGRvbmUgPSBmdW5jdGlvbigpIHt9O1xyXG5cclxuXHRcdFx0Q2FudmFzVG9CYXNlNjQuY29udmVydFRvQk1QKHtcclxuXHRcdFx0XHRjYW52YXNJZDogaWQsXHJcblx0XHRcdFx0eDogeCxcclxuXHRcdFx0XHR5OiB5LFxyXG5cdFx0XHRcdHdpZHRoOiB3aWR0aCxcclxuXHRcdFx0XHRoZWlnaHQ6IGhlaWdodFxyXG5cdFx0XHR9LCBkb25lKTtcclxuXHRcdH07XHJcblxyXG5cdFx0c2VsZi5nZXRDcm9wcGVySW1hZ2UgPSBmdW5jdGlvbihvcHQsIGZuKSB7XHJcblx0XHRcdHZhciBjdXN0b21PcHRpb25zID0gb3B0O1xyXG5cclxuXHRcdFx0dmFyIGNhbnZhc09wdGlvbnMgPSB7XHJcblx0XHRcdFx0Y2FudmFzSWQ6IGlkLFxyXG5cdFx0XHRcdHg6IHgsXHJcblx0XHRcdFx0eTogeSxcclxuXHRcdFx0XHR3aWR0aDogd2lkdGgsXHJcblx0XHRcdFx0aGVpZ2h0OiBoZWlnaHRcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciB0YXNrID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRvb2xzXzEwKGN1c3RvbU9wdGlvbnMpICYmXHJcblx0XHRcdFx0Y3VzdG9tT3B0aW9ucy5vcmlnaW5hbFxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHQvLyBvcmlnaW5hbCBtb2RlXHJcblx0XHRcdFx0dGFzayA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2VsZi50YXJnZXRDdHguZHJhd0ltYWdlKFxyXG5cdFx0XHRcdFx0XHRzZWxmLmNyb3BlclRhcmdldCxcclxuXHRcdFx0XHRcdFx0c2VsZi5pbWdMZWZ0ICogcGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdFx0c2VsZi5pbWdUb3AgKiBwaXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0XHRzZWxmLnNjYWxlV2lkdGggKiBwaXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0XHRzZWxmLnNjYWxlSGVpZ2h0ICogcGl4ZWxSYXRpb1xyXG5cdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRjYW52YXNPcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0XHRjYW52YXNJZDogdGFyZ2V0SWQsXHJcblx0XHRcdFx0XHRcdHg6IHggKiBwaXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0XHR5OiB5ICogcGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IHdpZHRoICogcGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OiBoZWlnaHQgKiBwaXhlbFJhdGlvXHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiBkcmF3KHNlbGYudGFyZ2V0Q3R4KVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiB0YXNrKClcclxuXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICh0b29sc18xMChjdXN0b21PcHRpb25zKSkge1xyXG5cdFx0XHRcdFx0XHRjYW52YXNPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgY2FudmFzT3B0aW9ucywgY3VzdG9tT3B0aW9ucyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRvb2xzXzcoY3VzdG9tT3B0aW9ucykpIHtcclxuXHRcdFx0XHRcdFx0Zm4gPSBjdXN0b21PcHRpb25zO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHZhciBhcmcgPSBjYW52YXNPcHRpb25zLmNvbXBvbmVudENvbnRleHQgP1xyXG5cdFx0XHRcdFx0XHRbY2FudmFzT3B0aW9ucywgY2FudmFzT3B0aW9ucy5jb21wb25lbnRDb250ZXh0XSA6XHJcblx0XHRcdFx0XHRcdFtjYW52YXNPcHRpb25zXTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gY2FudmFzVG9UZW1wRmlsZVBhdGguYXBwbHkobnVsbCwgYXJnKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHR2YXIgdGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gdG9vbHNfNyhmbikgP1xyXG5cdFx0XHRcdFx0XHRmbi5jYWxsKHNlbGYsIHRlbXBGaWxlUGF0aCwgbnVsbCkgOlxyXG5cdFx0XHRcdFx0XHR0ZW1wRmlsZVBhdGhcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuXHRcdFx0XHRcdGlmICh0b29sc183KGZuKSkge1xyXG5cdFx0XHRcdFx0XHRmbi5jYWxsKHNlbGYsIG51bGwsIGVycik7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBlcnJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluacgOaWsOe8qeaUvuWAvFxyXG5cdCAqIEBwYXJhbSBvbGRTY2FsZSDkuIrkuIDmrKHop6bmkbjnu5PmnZ/lkI7nmoTnvKnmlL7lgLxcclxuXHQgKiBAcGFyYW0gb2xkRGlzdGFuY2Ug5LiK5LiA5qyh6Kem5pG457uT5p2f5ZCO55qE5Y+M5oyH6Led56a7XHJcblx0ICogQHBhcmFtIHpvb20g57yp5pS+57O75pWwXHJcblx0ICogQHBhcmFtIHRvdWNoMCDnrKzkuIDmjId0b3VjaOWvueixoVxyXG5cdCAqIEBwYXJhbSB0b3VjaDEg56ys5LqM5oyHdG91Y2jlr7nosaFcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHR2YXIgZ2V0TmV3U2NhbGUgPSBmdW5jdGlvbihvbGRTY2FsZSwgb2xkRGlzdGFuY2UsIHpvb20sIHRvdWNoMCwgdG91Y2gxKSB7XHJcblx0XHR2YXIgeE1vdmUsIHlNb3ZlLCBuZXdEaXN0YW5jZTtcclxuXHRcdC8vIOiuoeeul+S6jOaMh+acgOaWsOi3neemu1xyXG5cdFx0eE1vdmUgPSBNYXRoLnJvdW5kKHRvdWNoMS54IC0gdG91Y2gwLngpO1xyXG5cdFx0eU1vdmUgPSBNYXRoLnJvdW5kKHRvdWNoMS55IC0gdG91Y2gwLnkpO1xyXG5cdFx0bmV3RGlzdGFuY2UgPSBNYXRoLnJvdW5kKE1hdGguc3FydCh4TW92ZSAqIHhNb3ZlICsgeU1vdmUgKiB5TW92ZSkpO1xyXG5cclxuXHRcdHJldHVybiBvbGRTY2FsZSArIDAuMDAxICogem9vbSAqIChuZXdEaXN0YW5jZSAtIG9sZERpc3RhbmNlKVxyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRpZiAoIXNlbGYuc3JjKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHNlbGYuX19vbmVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24odG91Y2gpIHtcclxuXHRcdFx0c2VsZi50b3VjaFgwID0gTWF0aC5yb3VuZCh0b3VjaC54KTtcclxuXHRcdFx0c2VsZi50b3VjaFkwID0gTWF0aC5yb3VuZCh0b3VjaC55KTtcclxuXHRcdH07XHJcblxyXG5cdFx0c2VsZi5fX29uZVRvdWNoTW92ZSA9IGZ1bmN0aW9uKHRvdWNoKSB7XHJcblx0XHRcdHZhciB4TW92ZSwgeU1vdmU7XHJcblx0XHRcdC8vIOiuoeeul+WNleaMh+enu+WKqOeahOi3neemu1xyXG5cdFx0XHRpZiAoc2VsZi50b3VjaGVuZGVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIHNlbGYudXBkYXRlQ2FudmFzKClcclxuXHRcdFx0fVxyXG5cdFx0XHR4TW92ZSA9IE1hdGgucm91bmQodG91Y2gueCAtIHNlbGYudG91Y2hYMCk7XHJcblx0XHRcdHlNb3ZlID0gTWF0aC5yb3VuZCh0b3VjaC55IC0gc2VsZi50b3VjaFkwKTtcclxuXHJcblx0XHRcdHZhciBpbWdMZWZ0ID0gTWF0aC5yb3VuZChzZWxmLnJlY3RYICsgeE1vdmUpO1xyXG5cdFx0XHR2YXIgaW1nVG9wID0gTWF0aC5yb3VuZChzZWxmLnJlY3RZICsgeU1vdmUpO1xyXG5cclxuXHRcdFx0c2VsZi5vdXRzaWRlQm91bmQoaW1nTGVmdCwgaW1nVG9wKTtcclxuXHJcblx0XHRcdHNlbGYudXBkYXRlQ2FudmFzKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHNlbGYuX190d29Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24odG91Y2gwLCB0b3VjaDEpIHtcclxuXHRcdFx0dmFyIHhNb3ZlLCB5TW92ZSwgb2xkRGlzdGFuY2U7XHJcblxyXG5cdFx0XHRzZWxmLnRvdWNoWDEgPSBNYXRoLnJvdW5kKHNlbGYucmVjdFggKyBzZWxmLnNjYWxlV2lkdGggLyAyKTtcclxuXHRcdFx0c2VsZi50b3VjaFkxID0gTWF0aC5yb3VuZChzZWxmLnJlY3RZICsgc2VsZi5zY2FsZUhlaWdodCAvIDIpO1xyXG5cclxuXHRcdFx0Ly8g6K6h566X5Lik5oyH6Led56a7XHJcblx0XHRcdHhNb3ZlID0gTWF0aC5yb3VuZCh0b3VjaDEueCAtIHRvdWNoMC54KTtcclxuXHRcdFx0eU1vdmUgPSBNYXRoLnJvdW5kKHRvdWNoMS55IC0gdG91Y2gwLnkpO1xyXG5cdFx0XHRvbGREaXN0YW5jZSA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KHhNb3ZlICogeE1vdmUgKyB5TW92ZSAqIHlNb3ZlKSk7XHJcblxyXG5cdFx0XHRzZWxmLm9sZERpc3RhbmNlID0gb2xkRGlzdGFuY2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdHNlbGYuX190d29Ub3VjaE1vdmUgPSBmdW5jdGlvbih0b3VjaDAsIHRvdWNoMSkge1xyXG5cdFx0XHR2YXIgb2xkU2NhbGUgPSBzZWxmLm9sZFNjYWxlO1xyXG5cdFx0XHR2YXIgb2xkRGlzdGFuY2UgPSBzZWxmLm9sZERpc3RhbmNlO1xyXG5cdFx0XHR2YXIgc2NhbGUgPSBzZWxmLnNjYWxlO1xyXG5cdFx0XHR2YXIgem9vbSA9IHNlbGYuem9vbTtcclxuXHJcblx0XHRcdHNlbGYubmV3U2NhbGUgPSBnZXROZXdTY2FsZShvbGRTY2FsZSwgb2xkRGlzdGFuY2UsIHpvb20sIHRvdWNoMCwgdG91Y2gxKTtcclxuXHJcblx0XHRcdC8vICDorr7lrprnvKnmlL7ojIPlm7RcclxuXHRcdFx0c2VsZi5uZXdTY2FsZSA8PSAxICYmIChzZWxmLm5ld1NjYWxlID0gMSk7XHJcblx0XHRcdHNlbGYubmV3U2NhbGUgPj0gc2NhbGUgJiYgKHNlbGYubmV3U2NhbGUgPSBzY2FsZSk7XHJcblxyXG5cdFx0XHRzZWxmLnNjYWxlV2lkdGggPSBNYXRoLnJvdW5kKHNlbGYubmV3U2NhbGUgKiBzZWxmLmJhc2VXaWR0aCk7XHJcblx0XHRcdHNlbGYuc2NhbGVIZWlnaHQgPSBNYXRoLnJvdW5kKHNlbGYubmV3U2NhbGUgKiBzZWxmLmJhc2VIZWlnaHQpO1xyXG5cdFx0XHR2YXIgaW1nTGVmdCA9IE1hdGgucm91bmQoc2VsZi50b3VjaFgxIC0gc2VsZi5zY2FsZVdpZHRoIC8gMik7XHJcblx0XHRcdHZhciBpbWdUb3AgPSBNYXRoLnJvdW5kKHNlbGYudG91Y2hZMSAtIHNlbGYuc2NhbGVIZWlnaHQgLyAyKTtcclxuXHJcblx0XHRcdHNlbGYub3V0c2lkZUJvdW5kKGltZ0xlZnQsIGltZ1RvcCk7XHJcblxyXG5cdFx0XHRzZWxmLnVwZGF0ZUNhbnZhcygpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRzZWxmLl9feHRvdWNoRW5kID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGYub2xkU2NhbGUgPSBzZWxmLm5ld1NjYWxlO1xyXG5cdFx0XHRzZWxmLnJlY3RYID0gc2VsZi5pbWdMZWZ0O1xyXG5cdFx0XHRzZWxmLnJlY3RZID0gc2VsZi5pbWdUb3A7XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dmFyIGhhbmRsZSA9IHtcclxuXHRcdC8vICDlm77niYfmiYvlir/liJ3lp4vnm5HmtYtcclxuXHRcdHRvdWNoU3RhcnQ6IGZ1bmN0aW9uIHRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHZhciByZWYgPSBlLnRvdWNoZXM7XHJcblx0XHRcdHZhciB0b3VjaDAgPSByZWZbMF07XHJcblx0XHRcdHZhciB0b3VjaDEgPSByZWZbMV07XHJcblxyXG5cdFx0XHRpZiAoIXNlbGYuc3JjKSB7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNldFRvdWNoU3RhdGUoc2VsZiwgdHJ1ZSwgbnVsbCwgbnVsbCk7XHJcblxyXG5cdFx0XHQvLyDorqHnrpfnrKzkuIDkuKrop6bmkbjngrnnmoTkvY3nva7vvIzlubblj4LnhafmlLnngrnov5vooYznvKnmlL5cclxuXHRcdFx0c2VsZi5fX29uZVRvdWNoU3RhcnQodG91Y2gwKTtcclxuXHJcblx0XHRcdC8vIOS4pOaMh+aJi+WKv+inpuWPkVxyXG5cdFx0XHRpZiAoZS50b3VjaGVzLmxlbmd0aCA+PSAyKSB7XHJcblx0XHRcdFx0c2VsZi5fX3R3b1RvdWNoU3RhcnQodG91Y2gwLCB0b3VjaDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vICDlm77niYfmiYvlir/liqjmgIHnvKnmlL5cclxuXHRcdHRvdWNoTW92ZTogZnVuY3Rpb24gdG91Y2hNb3ZlKGUpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2YXIgcmVmID0gZS50b3VjaGVzO1xyXG5cdFx0XHR2YXIgdG91Y2gwID0gcmVmWzBdO1xyXG5cdFx0XHR2YXIgdG91Y2gxID0gcmVmWzFdO1xyXG5cclxuXHRcdFx0aWYgKCFzZWxmLnNyYykge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXRUb3VjaFN0YXRlKHNlbGYsIG51bGwsIHRydWUpO1xyXG5cclxuXHRcdFx0Ly8g5Y2V5oyH5omL5Yq/5pe26Kem5Y+RXHJcblx0XHRcdGlmIChlLnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XHJcblx0XHRcdFx0c2VsZi5fX29uZVRvdWNoTW92ZSh0b3VjaDApO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIOS4pOaMh+aJi+WKv+inpuWPkVxyXG5cdFx0XHRpZiAoZS50b3VjaGVzLmxlbmd0aCA+PSAyKSB7XHJcblx0XHRcdFx0c2VsZi5fX3R3b1RvdWNoTW92ZSh0b3VjaDAsIHRvdWNoMSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0dG91Y2hFbmQ6IGZ1bmN0aW9uIHRvdWNoRW5kKGUpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdFx0aWYgKCFzZWxmLnNyYykge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZXRUb3VjaFN0YXRlKHNlbGYsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XHJcblx0XHRcdHNlbGYuX194dG91Y2hFbmQoKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRmdW5jdGlvbiBjdXQoKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgYm91bmRXaWR0aCA9IHNlbGYud2lkdGg7IC8vIOijgeWJquahhum7mOiupOWuveW6pu+8jOWNs+aVtOS4queUu+W4g+WuveW6plxyXG5cdFx0dmFyIGJvdW5kSGVpZ2h0ID0gc2VsZi5oZWlnaHQ7XHJcblx0XHQvLyDoo4HliarmoYbpu5jorqTpq5jluqbvvIzljbPmlbTkuKrnlLvluIPpq5jluqZcclxuXHRcdHZhciByZWYgPSBzZWxmLmN1dDtcclxuXHRcdHZhciB4ID0gcmVmLng7XHJcblx0XHRpZiAoeCA9PT0gdm9pZCAwKSB4ID0gMDtcclxuXHRcdHZhciB5ID0gcmVmLnk7XHJcblx0XHRpZiAoeSA9PT0gdm9pZCAwKSB5ID0gMDtcclxuXHRcdHZhciB3aWR0aCA9IHJlZi53aWR0aDtcclxuXHRcdGlmICh3aWR0aCA9PT0gdm9pZCAwKSB3aWR0aCA9IGJvdW5kV2lkdGg7XHJcblx0XHR2YXIgaGVpZ2h0ID0gcmVmLmhlaWdodDtcclxuXHRcdGlmIChoZWlnaHQgPT09IHZvaWQgMCkgaGVpZ2h0ID0gYm91bmRIZWlnaHQ7XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDorr7nva7ovrnnlYxcclxuXHRcdCAqIEBwYXJhbSBpbWdMZWZ0IOWbvueJh+W3puS4iuinkuaoquWdkOagh+WAvFxyXG5cdFx0ICogQHBhcmFtIGltZ1RvcCDlm77niYflt6bkuIrop5LnurXlnZDmoIflgLxcclxuXHRcdCAqL1xyXG5cdFx0c2VsZi5vdXRzaWRlQm91bmQgPSBmdW5jdGlvbihpbWdMZWZ0LCBpbWdUb3ApIHtcclxuXHRcdFx0c2VsZi5pbWdMZWZ0ID0gaW1nTGVmdCA+PSB4ID9cclxuXHRcdFx0XHR4IDpcclxuXHRcdFx0XHRzZWxmLnNjYWxlV2lkdGggKyBpbWdMZWZ0IC0geCA8PSB3aWR0aCA/XHJcblx0XHRcdFx0eCArIHdpZHRoIC0gc2VsZi5zY2FsZVdpZHRoIDpcclxuXHRcdFx0XHRpbWdMZWZ0O1xyXG5cclxuXHRcdFx0c2VsZi5pbWdUb3AgPSBpbWdUb3AgPj0geSA/XHJcblx0XHRcdFx0eSA6XHJcblx0XHRcdFx0c2VsZi5zY2FsZUhlaWdodCArIGltZ1RvcCAtIHkgPD0gaGVpZ2h0ID9cclxuXHRcdFx0XHR5ICsgaGVpZ2h0IC0gc2VsZi5zY2FsZUhlaWdodCA6XHJcblx0XHRcdFx0aW1nVG9wO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIOiuvue9rui+ueeVjOagt+W8j1xyXG5cdFx0ICogQHBhcmFtIGNvbG9yXHTovrnnlYzpopzoibJcclxuXHRcdCAqL1xyXG5cdFx0c2VsZi5zZXRCb3VuZFN0eWxlID0gZnVuY3Rpb24ocmVmKSB7XHJcblx0XHRcdGlmIChyZWYgPT09IHZvaWQgMCkgcmVmID0ge307XHJcblx0XHRcdHZhciBjb2xvciA9IHJlZi5jb2xvcjtcclxuXHRcdFx0aWYgKGNvbG9yID09PSB2b2lkIDApIGNvbG9yID0gJyMwNGIwMGYnO1xyXG5cdFx0XHR2YXIgbWFzayA9IHJlZi5tYXNrO1xyXG5cdFx0XHRpZiAobWFzayA9PT0gdm9pZCAwKSBtYXNrID0gJ3JnYmEoMCwgMCwgMCwgMC4zKSc7XHJcblx0XHRcdHZhciBsaW5lV2lkdGggPSByZWYubGluZVdpZHRoO1xyXG5cdFx0XHRpZiAobGluZVdpZHRoID09PSB2b2lkIDApIGxpbmVXaWR0aCA9IDE7XHJcblxyXG5cdFx0XHR2YXIgaGFsZiA9IGxpbmVXaWR0aCAvIDI7XHJcblx0XHRcdHZhciBib3VuZE9wdGlvbiA9IFt7XHJcblx0XHRcdFx0XHRzdGFydDoge1xyXG5cdFx0XHRcdFx0XHR4OiB4IC0gaGFsZixcclxuXHRcdFx0XHRcdFx0eTogeSArIDEwIC0gaGFsZlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN0ZXAxOiB7XHJcblx0XHRcdFx0XHRcdHg6IHggLSBoYWxmLFxyXG5cdFx0XHRcdFx0XHR5OiB5IC0gaGFsZlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN0ZXAyOiB7XHJcblx0XHRcdFx0XHRcdHg6IHggKyAxMCAtIGhhbGYsXHJcblx0XHRcdFx0XHRcdHk6IHkgLSBoYWxmXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzdGFydDoge1xyXG5cdFx0XHRcdFx0XHR4OiB4IC0gaGFsZixcclxuXHRcdFx0XHRcdFx0eTogeSArIGhlaWdodCAtIDEwICsgaGFsZlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN0ZXAxOiB7XHJcblx0XHRcdFx0XHRcdHg6IHggLSBoYWxmLFxyXG5cdFx0XHRcdFx0XHR5OiB5ICsgaGVpZ2h0ICsgaGFsZlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN0ZXAyOiB7XHJcblx0XHRcdFx0XHRcdHg6IHggKyAxMCAtIGhhbGYsXHJcblx0XHRcdFx0XHRcdHk6IHkgKyBoZWlnaHQgKyBoYWxmXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzdGFydDoge1xyXG5cdFx0XHRcdFx0XHR4OiB4ICsgd2lkdGggLSAxMCArIGhhbGYsXHJcblx0XHRcdFx0XHRcdHk6IHkgLSBoYWxmXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3RlcDE6IHtcclxuXHRcdFx0XHRcdFx0eDogeCArIHdpZHRoICsgaGFsZixcclxuXHRcdFx0XHRcdFx0eTogeSAtIGhhbGZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdGVwMjoge1xyXG5cdFx0XHRcdFx0XHR4OiB4ICsgd2lkdGggKyBoYWxmLFxyXG5cdFx0XHRcdFx0XHR5OiB5ICsgMTAgLSBoYWxmXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzdGFydDoge1xyXG5cdFx0XHRcdFx0XHR4OiB4ICsgd2lkdGggKyBoYWxmLFxyXG5cdFx0XHRcdFx0XHR5OiB5ICsgaGVpZ2h0IC0gMTAgKyBoYWxmXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3RlcDE6IHtcclxuXHRcdFx0XHRcdFx0eDogeCArIHdpZHRoICsgaGFsZixcclxuXHRcdFx0XHRcdFx0eTogeSArIGhlaWdodCArIGhhbGZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdGVwMjoge1xyXG5cdFx0XHRcdFx0XHR4OiB4ICsgd2lkdGggLSAxMCArIGhhbGYsXHJcblx0XHRcdFx0XHRcdHk6IHkgKyBoZWlnaHQgKyBoYWxmXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdO1xyXG5cclxuXHRcdFx0Ly8g57uY5Yi25Y2K6YCP5piO5bGCXHJcblx0XHRcdHNlbGYuY3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0XHRzZWxmLmN0eC5zZXRGaWxsU3R5bGUobWFzayk7XHJcblx0XHRcdHNlbGYuY3R4LmZpbGxSZWN0KDAsIDAsIHgsIGJvdW5kSGVpZ2h0KTtcclxuXHRcdFx0c2VsZi5jdHguZmlsbFJlY3QoeCwgMCwgd2lkdGgsIHkpO1xyXG5cdFx0XHRzZWxmLmN0eC5maWxsUmVjdCh4LCB5ICsgaGVpZ2h0LCB3aWR0aCwgYm91bmRIZWlnaHQgLSB5IC0gaGVpZ2h0KTtcclxuXHRcdFx0c2VsZi5jdHguZmlsbFJlY3QoeCArIHdpZHRoLCAwLCBib3VuZFdpZHRoIC0geCAtIHdpZHRoLCBib3VuZEhlaWdodCk7XHJcblx0XHRcdHNlbGYuY3R4LmZpbGwoKTtcclxuXHJcblx0XHRcdGJvdW5kT3B0aW9uLmZvckVhY2goZnVuY3Rpb24ob3ApIHtcclxuXHRcdFx0XHRzZWxmLmN0eC5iZWdpblBhdGgoKTtcclxuXHRcdFx0XHRzZWxmLmN0eC5zZXRTdHJva2VTdHlsZShjb2xvcik7XHJcblx0XHRcdFx0c2VsZi5jdHguc2V0TGluZVdpZHRoKGxpbmVXaWR0aCk7XHJcblx0XHRcdFx0c2VsZi5jdHgubW92ZVRvKG9wLnN0YXJ0LngsIG9wLnN0YXJ0LnkpO1xyXG5cdFx0XHRcdHNlbGYuY3R4LmxpbmVUbyhvcC5zdGVwMS54LCBvcC5zdGVwMS55KTtcclxuXHRcdFx0XHRzZWxmLmN0eC5saW5lVG8ob3Auc3RlcDIueCwgb3Auc3RlcDIueSk7XHJcblx0XHRcdFx0c2VsZi5jdHguc3Ryb2tlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHZhciB2ZXJzaW9uID0gXCIxLjMuOVwiO1xyXG5cclxuXHR2YXIgV2VDcm9wcGVyID0gZnVuY3Rpb24gV2VDcm9wcGVyKHBhcmFtcykge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIF9kZWZhdWx0ID0ge307XHJcblxyXG5cdFx0dmFsaWRhdG9yKHNlbGYsIERFRkFVTFQpO1xyXG5cclxuXHRcdE9iamVjdC5rZXlzKERFRkFVTFQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRcdF9kZWZhdWx0W2tleV0gPSBERUZBVUxUW2tleV0uZGVmYXVsdDtcclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmFzc2lnbihzZWxmLCBfZGVmYXVsdCwgcGFyYW1zKTtcclxuXHJcblx0XHRzZWxmLnByZXBhcmUoKTtcclxuXHRcdHNlbGYuYXR0YWNoUGFnZSgpO1xyXG5cdFx0c2VsZi5jcmVhdGVDdHgoKTtcclxuXHRcdHNlbGYub2JzZXJ2ZXIoKTtcclxuXHRcdHNlbGYuY3V0dCgpO1xyXG5cdFx0c2VsZi5tZXRob2RzKCk7XHJcblx0XHRzZWxmLmluaXQoKTtcclxuXHRcdHNlbGYudXBkYXRlKCk7XHJcblxyXG5cdFx0cmV0dXJuIHNlbGZcclxuXHR9O1xyXG5cclxuXHRXZUNyb3BwZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIHNyYyA9IHNlbGYuc3JjO1xyXG5cclxuXHRcdHNlbGYudmVyc2lvbiA9IHZlcnNpb247XHJcblxyXG5cdFx0dHlwZW9mIHNlbGYub25SZWFkeSA9PT0gJ2Z1bmN0aW9uJyAmJiBzZWxmLm9uUmVhZHkoc2VsZi5jdHgsIHNlbGYpO1xyXG5cclxuXHRcdGlmIChzcmMpIHtcclxuXHRcdFx0c2VsZi5wdXNoT3JpZ24oc3JjKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNlbGYudXBkYXRlQ2FudmFzKCk7XHJcblx0XHR9XHJcblx0XHRzZXRUb3VjaFN0YXRlKHNlbGYsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xyXG5cclxuXHRcdHNlbGYub2xkU2NhbGUgPSAxO1xyXG5cdFx0c2VsZi5uZXdTY2FsZSA9IDE7XHJcblxyXG5cdFx0cmV0dXJuIHNlbGZcclxuXHR9O1xyXG5cclxuXHRPYmplY3QuYXNzaWduKFdlQ3JvcHBlci5wcm90b3R5cGUsIGhhbmRsZSk7XHJcblxyXG5cdFdlQ3JvcHBlci5wcm90b3R5cGUucHJlcGFyZSA9IHByZXBhcmU7XHJcblx0V2VDcm9wcGVyLnByb3RvdHlwZS5vYnNlcnZlciA9IG9ic2VydmVyO1xyXG5cdFdlQ3JvcHBlci5wcm90b3R5cGUubWV0aG9kcyA9IG1ldGhvZHM7XHJcblx0V2VDcm9wcGVyLnByb3RvdHlwZS5jdXR0ID0gY3V0O1xyXG5cdFdlQ3JvcHBlci5wcm90b3R5cGUudXBkYXRlID0gdXBkYXRlO1xyXG5cclxuXHRyZXR1cm4gV2VDcm9wcGVyO1xyXG5cclxufSkpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///93\n");

/***/ }),
/* 94 */
/*!*****************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/updatename/updatename.vue?mpType=page ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatename.vue?vue&type=template&id=a4012dc4&scoped=true&mpType=page */ 95);\n/* harmony import */ var _updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatename.vue?vue&type=script&lang=js&mpType=page */ 97);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"a4012dc4\",\n  null,\n  false,\n  _updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/user-center/updatename/updatename.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEk7QUFDOUk7QUFDeUU7QUFDTDs7O0FBR3BFO0FBQzJNO0FBQzNNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSw0R0FBTTtBQUNSLEVBQUUscUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0hBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VwZGF0ZW5hbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE0MDEyZGM0JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91cGRhdGVuYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi91cGRhdGVuYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImE0MDEyZGM0XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3VzZXItY2VudGVyL3VwZGF0ZW5hbWUvdXBkYXRlbmFtZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///94\n");

/***/ }),
/* 95 */
/*!***********************************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/updatename/updatename.vue?vue&type=template&id=a4012dc4&scoped=true&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./updatename.vue?vue&type=template&id=a4012dc4&scoped=true&mpType=page */ 96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_template_id_a4012dc4_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 96 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/updatename/updatename.vue?vue&type=template&id=a4012dc4&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "updatename"), attrs: { _i: 0 } },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.nickname,
            expression: "nickname"
          }
        ],
        staticClass: _vm._$s(1, "sc", "input"),
        attrs: { _i: 1 },
        domProps: { value: _vm._$s(1, "v-model", _vm.nickname) },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.nickname = $event.target.value
          }
        }
      }),
      _c("text", { staticClass: _vm._$s(2, "sc", "title"), attrs: { _i: 2 } }),
      _c("view", {
        attrs: { _i: 3 },
        on: {
          click: function($event) {
            return _vm.updateUser()
          }
        }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 97 */
/*!*****************************************************************************************************!*\
  !*** F:/APP/My-App/pages/user-center/updatename/updatename.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./updatename.vue?vue&type=script&lang=js&mpType=page */ 98);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_updatename_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdzQixDQUFnQiwyc0JBQUcsRUFBQyIsImZpbGUiOiI5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cGRhdGVuYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBkYXRlbmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///97\n");

/***/ }),
/* 98 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/pages/user-center/updatename/updatename.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      nickname: \"\" };\n\n  },\n  onLoad: function onLoad(opt) {\n    __f__(\"log\", opt, \" at pages/user-center/updatename/updatename.vue:17\");\n    this.nickname = opt.nickname;\n  },\n  methods: {\n    updateUser: function updateUser() {var _this = this;\n      uni.showLoading({});\n\n\n      this.$reqs.req('updateUser', { userInfo: { nickname: this.nickname } }).then(function (res) {\n        __f__(\"log\", _this.nickname, \" at pages/user-center/updatename/updatename.vue:26\");\n        uni.hideLoading();\n        uni.showToast({\n          title: res.message,\n          icon: 'none' });\n\n      });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdXNlci1jZW50ZXIvdXBkYXRlbmFtZS91cGRhdGVuYW1lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFTQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGtCQURBOztBQUdBLEdBTEE7QUFNQSxRQU5BLGtCQU1BLEdBTkEsRUFNQTtBQUNBO0FBQ0E7QUFDQSxHQVRBO0FBVUE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxzQkFGQTs7QUFJQSxPQVBBO0FBUUEsS0FiQSxFQVZBLEUiLCJmaWxlIjoiOTguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwidXBkYXRlbmFtZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJuaWNrbmFtZVwiIGNsYXNzPVwiaW5wdXRcIiAvPlxyXG5cdFx0PHRleHQgY2xhc3M9XCJ0aXRsZVwiPuWlveWQjeWtl+WPr+S7peiuqeS9oOeahOaci+WPi+abtOWuueaYk+iusOS9j+S9oOOAgjwvdGV4dD5cclxuXHRcdDx2aWV3IEBjbGljaz1cInVwZGF0ZVVzZXIoKVwiPuS/neWtmDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRuaWNrbmFtZTpcIlwiXG5cdFx0XHR9XG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHQpIHtcclxuXHRcdFx0Y29uc29sZS5sb2cob3B0KVxyXG5cdFx0XHR0aGlzLm5pY2tuYW1lID0gb3B0Lm5pY2tuYW1lXHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHVwZGF0ZVVzZXIoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhpcy4kcmVxcy5yZXEoJ3VwZGF0ZVVzZXInLHt1c2VySW5mbzp7bmlja25hbWU6dGhpcy5uaWNrbmFtZX19KS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5uaWNrbmFtZSlcclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6cmVzLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4udXBkYXRlbmFtZXtcclxuXHRoZWlnaHQ6IDM2cnB4O1xyXG5cdG1hcmdpbjogMCA0OHJweDtcclxuXHQuaW5wdXR7XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0XHRwYWRkaW5nOiA1NHJweCAwcnB4IDE0cnB4IDA7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblx0LnRpdGxle1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjZGRkZGRkO1xyXG5cdH1cclxufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///98\n");

/***/ }),
/* 99 */
/*!*****************************!*\
  !*** F:/APP/My-App/App.vue ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 100);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDMk07QUFDM00sZ0JBQWdCLDZNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6Ijk5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///99\n");

/***/ }),
/* 100 */
/*!******************************************************!*\
  !*** F:/APP/My-App/App.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 101);\n/* harmony import */ var _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_4_20210305_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNyQixDQUFnQix5ckJBQUcsRUFBQyIsImZpbGUiOiIxMDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXOe8luivkeWZqOaWh+S7tlxcXFxIQnVpbGRlclguMy4xLjQuMjAyMTAzMDUuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFznvJbor5Hlmajmlofku7ZcXFxcSEJ1aWxkZXJYLjMuMS40LjIwMjEwMzA1LmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxc57yW6K+R5Zmo5paH5Lu2XFxcXEhCdWlsZGVyWC4zLjEuNC4yMDIxMDMwNS5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///100\n");

/***/ }),
/* 101 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/APP/My-App/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///101\n");

/***/ }),
/* 102 */
/*!****************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 103));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 104));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 108));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 109));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 110));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 111));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 112));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 113));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 114));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 115));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 116));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 106));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 105));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 117));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 107));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 118));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 119));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 120));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 121));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 122));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 123);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 124));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 125));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 126));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 127));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {__f__("warn", str, " at node_modules/uview-ui/index.js:13");}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)["default"]))

/***/ }),
/* 103 */
/*!***************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };

/***/ }),
/* 104 */
/*!*****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/request/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 105));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 107));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;

/***/ }),
/* 105 */
/*!**********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/deepMerge.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 106));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 106 */
/*!**********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/deepClone.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 107 */
/*!*****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/test.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 108 */
/*!************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/queryParams.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 109 */
/*!******************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/route.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 83));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;

/***/ }),
/* 110 */
/*!***********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/timeFormat.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 111 */
/*!*********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/timeFrom.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 110));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 112 */
/*!**************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 113 */
/*!*****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/guid.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 114 */
/*!******************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/color.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 115 */
/*!**********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/type2icon.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 116 */
/*!************************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/randomArray.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 117 */
/*!********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/addUnit.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 107));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 118 */
/*!*******************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/random.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 119 */
/*!*****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/trim.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 120 */
/*!******************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/toast.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;

/***/ }),
/* 121 */
/*!**********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/getParent.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 122 */
/*!********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/$parent.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 123 */
/*!****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/sys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}

/***/ }),
/* 124 */
/*!*********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/debounce.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 125 */
/*!*********************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/function/throttle.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 126 */
/*!*****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/config/config.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-12-17
var version = '1.8.3';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 127 */
/*!*****************************************************************!*\
  !*** F:/APP/My-App/node_modules/uview-ui/libs/config/zIndex.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 128 */
/*!****************************************!*\
  !*** F:/APP/My-App/cloud_sdk/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 83);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var req = function req(action, params) {\n  return new Promise(function (resolve, reject) {\n    uniCloud.callFunction({\n      name: 'user-center',\n      data: {\n        action: action,\n        params: params },\n\n      success: function success(res) {\n        resolve(res.result);\n      },\n      fail: function fail(res) {\n        reject(res.result);\n      } });\n\n  });\n};\nvar login = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(params) {var res;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n              req('login', params));case 2:res = _context.sent;\n            if (res.code == 0) {\n              uni.setStorageSync('uni_id_token', res.token);\n              uni.setStorageSync('uni_id_token_expired', res.tokenExpired);\n            }return _context.abrupt(\"return\",\n            res);case 5:case \"end\":return _context.stop();}}}, _callee);}));return function login(_x) {return _ref.apply(this, arguments);};}();\n\n\n\n\n\nvar logout = function logout() {\n  req('logout', {});\n  uni.removeStorageSync('uni_id_token');\n  uni.removeStorageSync('uni_id_token_expired');\n  uni.removeStorageSync('uid');\n  uni.removeStorageSync('nickname');\n  uni.removeStorageSync('avatar');\n};\n\nvar check_token = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {var res;return _regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n              req(\"getUserInfo\"));case 2:res = _context2.sent;\n            __f__(\"log\", res, \" at cloud_sdk/index.js:41\");if (!(\n            res.code == 0)) {_context2.next = 8;break;}return _context2.abrupt(\"return\",\n            res);case 8:return _context2.abrupt(\"return\",\n\n            false);case 9:case \"end\":return _context2.stop();}}}, _callee2);}));return function check_token() {return _ref2.apply(this, arguments);};}();\n\n\n\n\nmodule.exports = {\n  req: req,\n  login: login,\n  logout: logout,\n  check_token: check_token };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 79)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 33)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY2xvdWRfc2RrL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcSIsImFjdGlvbiIsInBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pQ2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXMiLCJyZXN1bHQiLCJmYWlsIiwibG9naW4iLCJjb2RlIiwidW5pIiwic2V0U3RvcmFnZVN5bmMiLCJ0b2tlbiIsInRva2VuRXhwaXJlZCIsImxvZ291dCIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiY2hlY2tfdG9rZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiNHdCQUFBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUMvQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNDLFlBQVEsQ0FBQ0MsWUFBVCxDQUFzQjtBQUNyQkMsVUFBSSxFQUFFLGFBRGU7QUFFckJDLFVBQUksRUFBRTtBQUNMUixjQUFNLEVBQU5BLE1BREs7QUFFTEMsY0FBTSxFQUFOQSxNQUZLLEVBRmU7O0FBTXJCUSxhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNmUCxlQUFPLENBQUNPLEdBQUcsQ0FBQ0MsTUFBTCxDQUFQO0FBQ0EsT0FSb0I7QUFTckJDLFVBQUksRUFBRSxjQUFBRixHQUFHLEVBQUk7QUFDWk4sY0FBTSxDQUFDTSxHQUFHLENBQUNDLE1BQUwsQ0FBTjtBQUNBLE9BWG9CLEVBQXRCOztBQWFBLEdBZE0sQ0FBUDtBQWVBLENBaEJEO0FBaUJBLElBQU1FLEtBQUssaUdBQUcsaUJBQU9aLE1BQVA7QUFDR0YsaUJBQUcsQ0FBQyxPQUFELEVBQVVFLE1BQVYsQ0FETixTQUNUUyxHQURTO0FBRWIsZ0JBQUlBLEdBQUcsQ0FBQ0ksSUFBSixJQUFZLENBQWhCLEVBQW1CO0FBQ2xCQyxpQkFBRyxDQUFDQyxjQUFKLENBQW1CLGNBQW5CLEVBQW1DTixHQUFHLENBQUNPLEtBQXZDO0FBQ0FGLGlCQUFHLENBQUNDLGNBQUosQ0FBbUIsc0JBQW5CLEVBQTJDTixHQUFHLENBQUNRLFlBQS9DO0FBQ0EsYUFMWTtBQU1OUixlQU5NLDBEQUFILG1CQUFMRyxLQUFLLDhDQUFYOzs7Ozs7QUFZQSxJQUFNTSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ3BCcEIsS0FBRyxDQUFDLFFBQUQsRUFBVyxFQUFYLENBQUg7QUFDQWdCLEtBQUcsQ0FBQ0ssaUJBQUosQ0FBc0IsY0FBdEI7QUFDQUwsS0FBRyxDQUFDSyxpQkFBSixDQUFzQixzQkFBdEI7QUFDQUwsS0FBRyxDQUFDSyxpQkFBSixDQUFzQixLQUF0QjtBQUNBTCxLQUFHLENBQUNLLGlCQUFKLENBQXNCLFVBQXRCO0FBQ0FMLEtBQUcsQ0FBQ0ssaUJBQUosQ0FBc0IsUUFBdEI7QUFDQSxDQVBEOztBQVNBLElBQU1DLFdBQVcsa0dBQUc7QUFDSHRCLGlCQUFHLENBQUMsYUFBRCxDQURBLFNBQ2ZXLEdBRGU7QUFFbkIseUJBQVlBLEdBQVosK0JBRm1CO0FBR2ZBLGVBQUcsQ0FBQ0ksSUFBSixJQUFZLENBSEc7QUFJWEosZUFKVzs7QUFNWCxpQkFOVyw0REFBSCxtQkFBWFcsV0FBVyw2Q0FBakI7Ozs7O0FBV0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQnhCLEtBQUcsRUFBSEEsR0FEZ0I7QUFFaEJjLE9BQUssRUFBTEEsS0FGZ0I7QUFHaEJNLFFBQU0sRUFBTkEsTUFIZ0I7QUFJaEJFLGFBQVcsRUFBWEEsV0FKZ0IsRUFBakIsQyIsImZpbGUiOiIxMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXEgPSAoYWN0aW9uLCBwYXJhbXMpID0+IHtcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0dW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcclxuXHRcdFx0bmFtZTogJ3VzZXItY2VudGVyJyxcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGFjdGlvbixcclxuXHRcdFx0XHRwYXJhbXNcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRyZXNvbHZlKHJlcy5yZXN1bHQpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IHJlcyA9PiB7XHJcblx0XHRcdFx0cmVqZWN0KHJlcy5yZXN1bHQpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSlcclxufVxyXG5jb25zdCBsb2dpbiA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuXHRsZXQgcmVzID0gYXdhaXQgcmVxKCdsb2dpbicsIHBhcmFtcyk7XHJcblx0aWYgKHJlcy5jb2RlID09IDApIHtcclxuXHRcdHVuaS5zZXRTdG9yYWdlU3luYygndW5pX2lkX3Rva2VuJywgcmVzLnRva2VuKVxyXG5cdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCd1bmlfaWRfdG9rZW5fZXhwaXJlZCcsIHJlcy50b2tlbkV4cGlyZWQpXHJcblx0fVxyXG5cdHJldHVybiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuXHRyZXEoJ2xvZ291dCcsIHt9KTtcclxuXHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ3VuaV9pZF90b2tlbicpXHJcblx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd1bmlfaWRfdG9rZW5fZXhwaXJlZCcpXHJcblx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCd1aWQnKVxyXG5cdHVuaS5yZW1vdmVTdG9yYWdlU3luYygnbmlja25hbWUnKVxyXG5cdHVuaS5yZW1vdmVTdG9yYWdlU3luYygnYXZhdGFyJylcclxufVxyXG5cclxuY29uc3QgY2hlY2tfdG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcblx0bGV0IHJlcyA9IGF3YWl0IHJlcShcImdldFVzZXJJbmZvXCIpO1xyXG5cdGNvbnNvbGUubG9nKHJlcylcclxuXHRpZiAocmVzLmNvZGUgPT0gMCkge1xyXG5cdFx0cmV0dXJuIHJlc1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0cmVxLFxyXG5cdGxvZ2luLFxyXG5cdGxvZ291dCxcclxuXHRjaGVja190b2tlblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///128\n");

/***/ }),
/* 129 */
/*!************************************!*\
  !*** F:/APP/My-App/tools/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 83);function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var apis = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(action, params, fun, type) {var res;return _regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n            uni.showLoading({});\n\n\n            fun = fun ? fun : function () {return true;};\n            type = type ? type : true;\n            res = true;if (!\n            type) {_context.next = 10;break;}_context.next = 7;return (\n              fun());case 7:res = _context.sent;_context.next = 11;break;case 10:\n\n            res = fun();case 11:\n\n            uni.hideLoading();if (\n            res) {_context.next = 15;break;}\n            uni.showToast({\n              title: '请先登录',\n              icon: 'none' });return _context.abrupt(\"return\");case 15:_context.t0 =\n\n\n\n            action;_context.next = _context.t0 ===\n            1 ? 18 : _context.t0 ===\n\n\n\n            2 ? 20 : _context.t0 ===\n\n\n\n            3 ? 22 : _context.t0 ===\n\n\n\n            4 ? 24 : 26;break;case 18:uni.navigateTo(params);return _context.abrupt(\"break\", 26);case 20:uni.redirectTo(params);return _context.abrupt(\"break\", 26);case 22:uni.reLaunch(params);return _context.abrupt(\"break\", 26);case 24:\n            uni.switchTab(params);return _context.abrupt(\"break\", 26);case 26:case \"end\":return _context.stop();}}}, _callee);}));return function apis(_x, _x2, _x3, _x4) {return _ref.apply(this, arguments);};}();\n\n\n\n\n\nvar navigateTo = function navigateTo(params, fun) {\n  apis(1, params, fun);\n};\nvar redirectTo = function redirectTo(params, fun) {\n  apis(2, params, fun);\n};\nvar reLaunch = function reLaunch(params, fun) {\n  apis(3, params, fun);\n};\nvar switchTab = function switchTab(params, fun) {\n  switchTab(4, params, fun);\n};\n\nmodule.exports = { navigateTo: navigateTo, redirectTo: redirectTo, reLaunch: reLaunch, switchTab: switchTab };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdG9vbHMvaW5kZXguanMiXSwibmFtZXMiOlsiYXBpcyIsImFjdGlvbiIsInBhcmFtcyIsImZ1biIsInR5cGUiLCJ1bmkiLCJzaG93TG9hZGluZyIsInJlcyIsImhpZGVMb2FkaW5nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iLCJyZUxhdW5jaCIsInN3aXRjaFRhYiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJxdEJBQUEsSUFBTUEsSUFBSSxpR0FBRyxpQkFBT0MsTUFBUCxFQUFjQyxNQUFkLEVBQXFCQyxHQUFyQixFQUF5QkMsSUFBekI7QUFDWkMsZUFBRyxDQUFDQyxXQUFKLENBQWdCLEVBQWhCOzs7QUFHQUgsZUFBRyxHQUFHQSxHQUFHLEdBQUdBLEdBQUgsR0FBTyxZQUFJLENBQUMsT0FBTyxJQUFQLENBQVksQ0FBakM7QUFDQUMsZ0JBQUksR0FBR0EsSUFBSSxHQUFDQSxJQUFELEdBQU0sSUFBakI7QUFDSUcsZUFOUSxHQU1GLElBTkU7QUFPVEgsZ0JBUFM7QUFRQ0QsaUJBQUcsRUFSSixTQVFYSSxHQVJXOztBQVVYQSxlQUFHLEdBQUdKLEdBQUcsRUFBVCxDQVZXOztBQVlaRSxlQUFHLENBQUNHLFdBQUosR0FaWTtBQWFSRCxlQWJRO0FBY1hGLGVBQUcsQ0FBQ0ksU0FBSixDQUFjO0FBQ2JDLG1CQUFLLEVBQUMsTUFETztBQUViQyxrQkFBSSxFQUFDLE1BRlEsRUFBZCxFQWRXOzs7O0FBb0JMVixrQkFwQks7QUFxQk4sYUFyQk07Ozs7QUF5Qk4sYUF6Qk07Ozs7QUE2Qk4sYUE3Qk07Ozs7QUFpQ04sYUFqQ00seUJBc0JWSSxHQUFHLENBQUNPLFVBQUosQ0FBZVYsTUFBZixFQXRCVSw0Q0EwQlZHLEdBQUcsQ0FBQ1EsVUFBSixDQUFlWCxNQUFmLEVBMUJVLDRDQThCVkcsR0FBRyxDQUFDUyxRQUFKLENBQWFaLE1BQWIsRUE5QlU7QUFrQ1ZHLGVBQUcsQ0FBQ1UsU0FBSixDQUFjYixNQUFkLEVBbENVLDZGQUFILG1CQUFKRixJQUFJLDZEQUFWOzs7Ozs7QUF3Q0EsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ1YsTUFBRCxFQUFRQyxHQUFSLEVBQWM7QUFDaENILE1BQUksQ0FBQyxDQUFELEVBQUdFLE1BQUgsRUFBVUMsR0FBVixDQUFKO0FBQ0EsQ0FGRDtBQUdBLElBQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNYLE1BQUQsRUFBUUMsR0FBUixFQUFjO0FBQ2hDSCxNQUFJLENBQUMsQ0FBRCxFQUFHRSxNQUFILEVBQVVDLEdBQVYsQ0FBSjtBQUNBLENBRkQ7QUFHQSxJQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDWixNQUFELEVBQVFDLEdBQVIsRUFBYztBQUM5QkgsTUFBSSxDQUFDLENBQUQsRUFBR0UsTUFBSCxFQUFVQyxHQUFWLENBQUo7QUFDQSxDQUZEO0FBR0EsSUFBTVksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2IsTUFBRCxFQUFRQyxHQUFSLEVBQWM7QUFDL0JZLFdBQVMsQ0FBQyxDQUFELEVBQUdiLE1BQUgsRUFBVUMsR0FBVixDQUFUO0FBQ0EsQ0FGRDs7QUFJQWEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEVBQUNMLFVBQVUsRUFBVkEsVUFBRCxFQUFZQyxVQUFVLEVBQVZBLFVBQVosRUFBdUJDLFFBQVEsRUFBUkEsUUFBdkIsRUFBZ0NDLFNBQVMsRUFBVEEsU0FBaEMsRUFBakIiLCJmaWxlIjoiMTI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpcyA9IGFzeW5jIChhY3Rpb24scGFyYW1zLGZ1bix0eXBlKT0+e1xyXG5cdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcclxuXHR9KVxyXG5cdGZ1biA9IGZ1biA/IGZ1bjooKT0+e3JldHVybiB0cnVlfTtcclxuXHR0eXBlID0gdHlwZT90eXBlOnRydWU7XHJcblx0bGV0IHJlcyA9IHRydWU7XHJcblx0aWYodHlwZSl7XHJcblx0XHRyZXMgPSBhd2FpdCBmdW4oKTtcclxuXHR9ZWxzZXtcclxuXHRcdHJlcyA9IGZ1bigpO1xyXG5cdH1cclxuXHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdGlmKCFyZXMpe1xyXG5cdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlOifor7flhYjnmbvlvZUnLFxyXG5cdFx0XHRpY29uOidub25lJ1xyXG5cdFx0fSlcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0c3dpdGNoKGFjdGlvbil7XHJcblx0XHRjYXNlIDE6e1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyhwYXJhbXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGNhc2UgMjp7XHJcblx0XHRcdHVuaS5yZWRpcmVjdFRvKHBhcmFtcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSAzOntcclxuXHRcdFx0dW5pLnJlTGF1bmNoKHBhcmFtcyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Y2FzZSA0OntcclxuXHRcdFx0dW5pLnN3aXRjaFRhYihwYXJhbXMpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG5hdmlnYXRlVG8gPSAocGFyYW1zLGZ1bik9PntcclxuXHRhcGlzKDEscGFyYW1zLGZ1bilcclxufVxyXG5jb25zdCByZWRpcmVjdFRvID0gKHBhcmFtcyxmdW4pPT57XHJcblx0YXBpcygyLHBhcmFtcyxmdW4pXHJcbn1cclxuY29uc3QgcmVMYXVuY2ggPSAocGFyYW1zLGZ1bik9PntcclxuXHRhcGlzKDMscGFyYW1zLGZ1bilcclxufVxyXG5jb25zdCBzd2l0Y2hUYWIgPSAocGFyYW1zLGZ1bik9PntcclxuXHRzd2l0Y2hUYWIoNCxwYXJhbXMsZnVuKVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtuYXZpZ2F0ZVRvLHJlZGlyZWN0VG8scmVMYXVuY2gsc3dpdGNoVGFifSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///129\n");

/***/ })
],[[0,"app-config"]]]);