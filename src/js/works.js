import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import pluging from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import {TweenMax, Power2, TimelineLite} from 'gsap';

class Works extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let it = this;
    let $window = $(window);
    if ($window.innerHeight()/$window.innerWidth() < 0.75) {
        $('.bg_live').css({'width': "100%"});
        $('.bg_live').css({'height': $window.innerHeight()});
    } else {
        $('.bg_live').css({'width': $window.innerWidth()});
        $('.bg_live').css({'height': "100%"});
    }
    $window.on('resize',()=>{
      console.log($window.innerHeight()/$window.innerWidth())
      if ($window.innerHeight()/$window.innerWidth() < 0.75) {
          $('.bg_live').css({'width': "100%"});
          $('.bg_live').css({'height': $window.innerHeight()});
      } else {
          $('.bg_live').css({'width': $window.innerWidth()});
          $('.bg_live').css({'height': "100%"});
      }
    })


  }

  render() {
    return (
      <div className="layout__container page__index">
        <main className="layout__container--wrapper">
          <article>
            <h2 data-subtitle="修士研究発表">Works</h2>
            <div className="layout__container--content">

            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default Works