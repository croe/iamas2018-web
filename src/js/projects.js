import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import pluging from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import projectData from "./data/projectData.json";

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        let it = this;
        let $window = $(window);
        $('.bg_live').css({'height': $window.innerHeight()});
        $('.layout__container--wrapper').css({'height': $window.innerHeight()});
        $window.on('resize', () => {
            $('.bg_live').css({'height': $window.innerHeight()});
            $('.layout__container--wrapper').css({'height': $window.innerHeight()});
        })
    }


    render() {

        let project_list;

        return (
            <div className="layout__container page__index">
                <main className="layout__container--wrapper">
                    <article>
                        <h2 data-subtitle="プロジェクト研究発表">Projects</h2>
                        <div className="layout__container--content">

                        </div>
                    </article>
                </main>
            </div>
        );
    }
}

export default Projects