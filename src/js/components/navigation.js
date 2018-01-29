import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loc: window.location.pathname
        }
    }

    pageTransitionHandleClick() {
        this.setState({
            loc: window.location.pathname
        });
    }

    showNavigation() {
        $('.layout__navigation').addClass('is-active');
        $('.transition_owner').addClass('is-active');
    }

    hideNavigation() {
        $('.layout__navigation').removeClass('is-active');
        $('.transition_owner').removeClass('is-active');
    }

    toggleNavigation() {
        $('.layout__navigation').toggleClass('is-active');
        $('.transition_owner').toggleClass('is-active');
    }

    render() {
        return (
            <div onMouseEnter={this.showNavigation.bind(this)} onMouseLeave={this.hideNavigation.bind(this)}
                 className="layout__navigation">
                <nav className="layout__navigation--wrapper">
                    <ul className="menu">
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#info" data-ja="インフォメーション">Information</Link>
                        </li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#theme" data-ja="テーマ">Theme</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/event" data-ja="イベント">Event</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/works" data-ja="修士作品">Works</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/projects" data-ja="プロジェクト">Projects</Link>
                        </li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#access" data-ja="アクセス">Access</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#contact" data-ja="お問い合わせ">Contact</Link></li>
                    </ul>
                    <ul className="sns">
                        <li><a href="https://www.facebook.com/IAMAS.GraduationExhibition/" target="_blank"/></li>
                        <li><a href="https://twitter.com/iamas_exhibit" target="_blank"/></li>
                        <li><a href="https://www.instagram.com/iamas2018/" target="_blank"/></li>
                    </ul>
                </nav>
                <div className="layout__navigation__hamb" onClick={this.toggleNavigation.bind(this)}/>
            </div>
        );
    }
}

export default Navigation

/*
 TODO: インデックス以外からインデックスに戻ったときにアンカーリンクの場所に移動しない。（Linkを使わなければ可、その代わりリロードが発生する）
 */
