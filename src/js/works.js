import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import pluging from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import workData from './data/workData.json';

class Works extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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

    render() {

        // もっとシンプルにしたい
        let works_list1 = workData.works.map((item, index) => {
            let imgsrc = "/images/" + item.image_1x1;
            if (index === 0 || index === 1 || index === 2 || index === 3) {
                return (
                    <li key={index} data-author={item.name_en}>
                        <img src={imgsrc} alt={item.title_ja}/>
                    </li>
                )
            }
        });
        let works_list2 = workData.works.map((item, index) => {
            let imgsrc = "/images/" + item.image_1x1;
            if (index === 4 || index === 5 || index === 6 || index === 7 || index === 8) {
                return (
                    <li key={index} data-author={item.name_en}>
                        <img src={imgsrc} alt={item.title_ja}/>
                    </li>
                )
            }
        });
        let works_list3 = workData.works.map((item, index) => {
            let imgsrc = "/images/" + item.image_1x1;
            if (index === 9 || index === 10 || index === 11 || index === 12) {
                return (
                    <li key={index} data-author={item.name_en}>
                        <img src={imgsrc} alt={item.title_ja}/>
                    </li>
                )
            }
        });

        return (
            <div className="layout__container page__works">
                <main className="layout__container--wrapper">
                    <article>
                        <h2 data-subtitle="修士研究発表">Works</h2>
                        <div className="layout__container--content">
                            <ul>{works_list1}</ul>
                            <ul>{works_list2}</ul>
                            <ul>{works_list3}</ul>
                        </div>
                    </article>
                </main>
            </div>
        );
    }
}
export default Works