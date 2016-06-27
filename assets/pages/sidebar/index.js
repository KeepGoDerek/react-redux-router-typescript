define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
const React = require('react');
const react_router_1 = require('react-router');
class Component extends React.Component {
    render() {
        let pathname = this.props.location.pathname;
        return React.createElement("section", {className: "page-sidebar"}, React.createElement("header", null, React.createElement("img", {src: "components/global/image/head.png"}), React.createElement("p", {className: "name"}, "Di Xu"), React.createElement("p", {className: "mt20"}, "设置", React.createElement("span", {className: "line"}), "退出")), React.createElement("nav", null, React.createElement(react_router_1.Link, {className: pathname == '/reception' ? 'selected' : '', to: "/reception"}, React.createElement("i", {className: "iconfont icon-book"}), React.createElement("span", {className: "fl"}, "接待中心"), React.createElement("span", {className: "tag"}, "28")), React.createElement(react_router_1.Link, {className: pathname == '/message' ? 'selected' : '', to: "/message"}, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "短信设置")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "信息推送")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "预约管理")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "患者管理")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "档案管理")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "网站维护")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "支付管理"))), React.createElement("footer", null, React.createElement("a", null, "中文"), React.createElement("span", {className: "line"}), React.createElement("a", null, "English")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})