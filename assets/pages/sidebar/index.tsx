﻿/// <reference path="../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';


export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {
    render() {
        let pathname = this.props.location.pathname;
        return <section className="page-sidebar">
            <header>
                <img src="components/global/image/head.png" />
                <p className="name">Di Xu</p>
                <p className="mt20">
                    设置<span className="line"></span>退出
                </p>
            </header>
            <nav>
                <Link className={pathname == '/reception' ? 'selected' : ''} to="/reception">
                    <i className="iconfont icon-book"></i>
                    <span className="fl">
                        接待中心
                    </span>
                    <span className="tag">28</span>
                </Link>
                <Link  className={pathname == '/message' ? 'selected' : ''} to="/message">
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        短信设置
                    </span>
                </Link>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        信息推送
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        预约管理
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        患者管理
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        档案管理
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        网站维护
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        支付管理
                    </span>
                </a>
            </nav>
            <footer>
                <a>中文</a><span className="line"></span><a>English</a>
            </footer>
        </section>;
    }
}

