import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    pageTransitionHandleClick() {
        let hash = window.location.hash;
        if (hash !== ''){
            setTimeout(()=> {
                let speed = 500,
                    target = $(hash == "#" || hash == "" ? 'html' : hash),
                    position = target.offset().top;
                $("html, body").animate({scrollTop: position}, speed, "swing");
            }, 500)
        }
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
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/" data-ja="トップ">Top</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/#info" data-ja="インフォメーション">Information</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/#theme" data-ja="テーマ">Theme</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/works" data-ja="修士作品">Works</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/event" data-ja="イベント">Events</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/projects" data-ja="プロジェクト">Projects</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/#others" data-ja="関連コーナー">Others</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/#access" data-ja="アクセス">Access</Link></li>
                        <li onClick={e => this.pageTransitionHandleClick()}><Link to="/exhibit18/#contact" data-ja="お問い合わせ">Contact</Link></li>
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