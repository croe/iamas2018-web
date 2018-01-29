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
        $('.transition_owner').addClass('is-active');
    }

    hideNavigation() {
        $('.transition_owner').removeClass('is-active');
    }

    render() {
        if (this.state.loc === "/") {
            return (
                <div onMouseEnter={this.showNavigation.bind(this)} onMouseLeave={this.hideNavigation.bind(this)}
                     className="layout__navigation">
                    <nav className="layout__navigation--wrapper">
                        <ul className="menu">
                            <li><a href="#info">Information</a></li>
                            <li><a href="#theme">Theme</a></li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/event">Event</Link></li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/works">Works</Link></li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/projects">Projects</Link>
                            </li>
                            <li><a href="#access">Access</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <ul className="sns">
                            <li><a href="https://www.facebook.com/IAMAS.GraduationExhibition/" target="_blank"><img
                                src="/images/icon_facebook.svg"/></a></li>
                            <li><a href="https://twitter.com/iamas_exhibit" target="_blank"><img
                                src="/images/icon_twitter.svg"/></a></li>
                            <li><a href="https://www.instagram.com/iamas2018/" target="_blank"><img
                                src="/images/icon_instagram.svg"/></a></li>
                        </ul>
                    </nav>
                </div>
            );
        } else {
            return (
                <div onMouseEnter={this.showNavigation.bind(this)} onMouseLeave={this.hideNavigation.bind(this)}
                     className="layout__navigation">
                    <nav className="layout__navigation--wrapper">
                        <ul className="menu">
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#info">Information</Link>
                            </li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#theme">Theme</Link></li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/event">Event</Link></li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/works">Works</Link></li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/projects">Projects</Link>
                            </li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#access">Access</Link></li>
                            <li onClick={e => this.pageTransitionHandleClick()}><Link to="/#contact">Contact</Link></li>
                        </ul>
                        <ul className="sns">
                            <li><a href="https://www.facebook.com/IAMAS.GraduationExhibition/" target="_blank"><img
                                src="/images/icon_facebook.svg"/></a></li>
                            <li><a href="https://twitter.com/iamas_exhibit" target="_blank"><img
                                src="/images/icon_twitter.svg"/></a></li>
                            <li><a href="https://www.instagram.com/iamas2018/" target="_blank"><img
                                src="/images/icon_instagram.svg"/></a></li>
                        </ul>
                    </nav>
                </div>
            );
        }
    }
}

export default Navigation

/*
 TODO: インデックス以外からインデックスに戻ったときにアンカーリンクの場所に移動しない。（Linkを使わなければ可、その代わりリロードが発生する）
 */
