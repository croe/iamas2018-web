import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import pluging from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import workData from './data/workData.json';
import magnificPopup from 'magnific-popup';

import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

class Works extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  componentDidMount() {
    let it = this;
    let $window = $(window);


    let val = getUrlVars();

    /**
     * URL解析して、クエリ文字列を返す
     * @returns {Array} クエリ文字列
     */
    function getUrlVars() {
      let vars = [], max = 0, hash = "", array = "";
      let url = window.location.search;

      //?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
      hash = url.slice(1).split('&');
      max = hash.length;
      for (let i = 0; i < max; i++) {
        array = hash[i].split('=');    //keyと値に分割。
        vars.push(array[0]);    //末尾にクエリ文字列のkeyを挿入。
        vars[array[0]] = array[1];    //先ほど確保したkeyに、値を代入。
      }

      return vars;
    }


    $("html, body").animate({scrollTop: 0}, 500, "swing");

    $('.bg_live').css({'height': $window.innerHeight()});
    $('.layout__container').css({'height': $window.innerHeight()});
    $window.on('resize', () => {
      $('.bg_live').css({'height': $window.innerHeight()});
      $('.layout__container').css({'height': $window.innerHeight()});
    });
    $('.mfp-popup').magnificPopup({
      delegate: 'li',
      type: 'inline',
      closeOnContentClick: true,
      closeBtnInside: false,
      showCloseBtn: false,
      fixedContentPos: true,
      mainClass: 'mfp-fade', // 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true,
      },
      gallery: {
        enabled: true
      },
      callbacks: {
        change: function () {
          it.setState({
            selected: this.index
          })
        }
      }
    });

    if (val.q){
      val.q = parseInt(val.q);
      $('.mfp-popup').magnificPopup('open', val.q);
    }
  }

  showWorksHandleClick(e, index) {
    this.setState({
      selected: index
    })
  }

  render() {

    // もっとシンプルにしたい
    let works_list1 = workData.works.map((item, index) => {
      let imgsrc = "/exhibit18/images/" + item.image_1x1;
      if (index !== 12) {
        return (
          <li onClick={e => this.showWorksHandleClick(e, index)} key={index} data-author={item.name_en}
              data-mfp-src="#works__content">
            <img src={imgsrc} alt={item.title_ja}/>
          </li>
        )
      }
    });
    let works_list2 = workData.works.map((item, index) => {
      let imgsrc = "/exhibit18/images/" + item.image_1x1;
      if (index === 12) {
        return (
          <li onClick={e => this.showWorksHandleClick(e, index)} key={index} data-author={item.name_en}
              data-mfp-src="#works__content">
            <img src={imgsrc} alt={item.title_ja}/>
          </li>
        )
      }
    });

    let modal__content = () => {
      let wd = workData.works[this.state.selected];
      let imgsrc = "/exhibit18/images/" + wd.image_16x9;
      let shareUrl = "http://www.iamas.ac.jp/exhibit18/works/?q=" + this.state.selected;
      return (
        <div className="wrapper">
          <button className="btn_close"/>
          <div className="overview">
            <div className="photo">
              <img src={imgsrc} alt={wd.title_en}/>
            </div>
            <h3 data-en={wd.title_en}>{wd.title_ja}</h3>
            <p>{wd.content}</p>
          </div>
          <div className="author">
            <h4 data-en={wd.name_en}>{wd.name_ja}</h4>
            <p>{wd.profile}</p>
            <a href={wd.website} target="_blank">{wd.website}</a>
          </div>
          <br />
          <div className="share">
            <FacebookShareButton
              url={shareUrl}
              quote={wd.title_ja}>
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
            <TwitterShareButton
              url={shareUrl}
              title={wd.title_ja}
              hashtags={["IAMAS2018"]}>
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
          </div>
        </div>
      )
    }

    return (
      <div className="layout__container page__works">
        <main className="layout__container--wrapper">
          <article>
            <h2 data-subtitle="修士研究発表">Works</h2>
            <div className="layout__container--content">
              <ul className="mfp-popup">{works_list1}</ul>
            </div>
            <h2 className="none" data-subtitle="研究生作品">.</h2>
            <div className="layout__container--content">
              <ul className="mfp-popup">{works_list2}</ul>
            </div>
          </article>
        </main>
        <div id="works__content">
          {modal__content()}
        </div>
      </div>
    );
  }
}

export default Works