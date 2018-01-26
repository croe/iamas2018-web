import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import pluging from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import eventData from "./data/eventData.json";

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: eventData.date3,
            item: {},
            itemIndex: 0
        }
    }

    componentDidMount() {
        let it = this;
        let $window = $(window);
        $('.bg_live').css({'height': $window.innerHeight()});
        $('.layout__container').css({'height': $window.innerHeight()});
        $window.on('resize', () => {
            $('.bg_live').css({'height': $window.innerHeight()});
            $('.layout__container').css({'height': $window.innerHeight()});
        })
    }

    tabHeadHandleClick(e, index) {
        if (index === 0) {
            this.state.data = eventData.date1
        }
        else if (index === 1) {
            this.state.data = eventData.date2
        }
        else if (index === 2) {
            this.state.data = eventData.date3
        }
        else if (index === 3) {
            this.state.data = eventData.date4
        }
        this.setState({
            data: this.state.data,
            itemIndex: 0
        })
    }

    showTabContentHandleClick(e, item, index) {

        $('.layout__container--wrapper').addClass('is-active');
        this.setState({
            item: item,
            itemIndex: index
        })
    }

    backTabListHandleClick(){
        $('.layout__container--wrapper').removeClass('is-active');
    }

    prevItemHandleClick(){
        let ind;
        if (this.state.itemIndex - 1 > 0){ ind = this.state.itemIndex - 1;}
        else { ind = 0; }
        this.setState({ itemIndex: ind })
    }

    nextItemHandleClick(){
        let ind;
        if (this.state.itemIndex >= this.state.data.length -1){ ind = this.state.itemIndex;}
        else { ind = this.state.itemIndex + 1; }
        this.setState({ itemIndex: ind })
    }

    render() {

        let tabList = this.state.data.map((item, index) => {
            let guest = "";
            if (item.guest) {
                guest = item.guest + "（" + item.guest_posi + "）";
            }
            return (
                <li key={index} onClick={e => this.showTabContentHandleClick(e, item, index)}>
                    <p><span className="date">{item.date}</span><span className="plase">{item.plase}</span><span
                        className="guest">{guest}</span></p>
                    <h3>{item.title}</h3>
                </li>
            )
        });

        let tabContent = () => {
            return (
                <div>
                    <p>{this.state.data[this.state.itemIndex].content}</p>
                    <p>{this.state.itemIndex}</p>
                </div>
            )
        }

        let prevButton = () => {
            if (this.state.itemIndex !== 0){
                return (
                    <button onClick={this.prevItemHandleClick.bind(this)}>prev</button>
                )
            }
        }

        let nextButton = () => {
            if (this.state.itemIndex !== this.state.data.length - 1){
                return (
                    <button onClick={this.nextItemHandleClick.bind(this)}>next</button>
                )
            }
        }

        return (
            <div className="layout__container page__event">
                <main className="layout__container--wrapper">
                    <article>
                        <h2 data-subtitle="イベント">Event</h2>
                        <div className="tab">
                            <div className="tab__head">
                                <ul>
                                    <li onClick={e => this.tabHeadHandleClick(e, 0)}>22日（木）</li>
                                    <li onClick={e => this.tabHeadHandleClick(e, 1)}>23日（金）</li>
                                    <li onClick={e => this.tabHeadHandleClick(e, 2)}>24日（土）</li>
                                    <li onClick={e => this.tabHeadHandleClick(e, 3)}>25日（日）</li>
                                </ul>
                            </div>
                            <div className="tab__content">
                                <ul>
                                    {tabList}
                                </ul>
                            </div>
                        </div>
                    </article>
                    <article>
                        <div onClick={this.backTabListHandleClick.bind(this)}>Back</div>
                        <div>{tabContent()}</div>
                        <div>{prevButton()}</div>
                        <div>{nextButton()}</div>
                    </article>
                </main>
            </div>
        );
    }
}

export default Event