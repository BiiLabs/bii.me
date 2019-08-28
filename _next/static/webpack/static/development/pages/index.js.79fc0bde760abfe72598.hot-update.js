webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Item.tsx":
/*!*****************************!*\
  !*** ./components/Item.tsx ***!
  \*****************************/
/*! exports provided: Icon, Description, Title, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./utils.ts");



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Icon = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Item__Icon",
  componentId: "sc-579nym-0"
})(["z-index:1;border-radius:50%;margin-bottom:15px;position:relative;background-color:white;border:6px solid white;width:112px;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p.withConfig({
  displayName: "Item__Description",
  componentId: "sc-579nym-1"
})(["color:", ";font-size:18px;max-width:220px;margin:0;", "{max-width:initial;}"], function (props) {
  return props.color;
}, Object(_utils__WEBPACK_IMPORTED_MODULE_4__["media"])('md'));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "Item__Title",
  componentId: "sc-579nym-2"
})(["color:", ";font-size:28px;margin:0 0 10px;"], function (props) {
  return props.color;
});
var Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Item__Container",
  componentId: "sc-579nym-3"
})(["display:flex;justify-content:center;flex-direction:column;align-items:center;padding:0 18px;", "{margin-top:60px;}"], Object(_utils__WEBPACK_IMPORTED_MODULE_4__["media"])('md'));

var Item = function Item(_ref) {
  var title = _ref.title,
      description = _ref.description,
      icon = _ref.icon,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'white' : _ref$color;
  return __jsx(Container, {
    md: 6,
    sm: 12
  }, icon && __jsx(Icon, {
    src: icon
  }), __jsx(Title, {
    color: color
  }, title), __jsx(Description, {
    color: color
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ })

})
//# sourceMappingURL=index.js.79fc0bde760abfe72598.hot-update.js.map