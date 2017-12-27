import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let it = this;
    let $window = $(window);
    $('.mainvisual').css({'height': $window.innerHeight()});
    $window.on('resize',()=>{
      $('.mainvisual').css({'height': $window.innerHeight()});
    })

  }

  render() {
    return (
      <div className="layout__container page__index">
        <main className="layout__container--wrapper">
          <article className="mainvisual">
            <img src="/images/title.svg" alt=""/>
          </article>
          <article>
            <h2 data-subtitle="開催概要">Information</h2>
            <div className="layout__container--content">
              <p><strong>情報科学芸術大学院大学 第16期生修了研究発表会・プロジェクト研究発表会</strong></p>
              <p><strong>Graduation and Project Research Exhibition</strong></p>
              <br/>
              <p>日時：2月22日(木)ｰ2月25日(日)　10:00ｰ18:00(初日のみ13:00)</p>
              <p>会場：ソフトピアジャパン センタービル 岐阜県大垣市加賀野4丁目１−７</p>
              <p>入場：無料</p>
              <p>主催：情報科学芸術大学院大学[IAMAS]</p>
            </div>
          </article>
          <article>
            <h2 data-subtitle="テーマ">Theme</h2>
            <div className="layout__container--content">
              <p><strong>つまずく小石を拾うこと</strong></p><br/>
              <p>Scienceという言葉はラテン語のscientiaが語源で、「知っていること」という意味であった。<br/>
              現在では科学全般のことを指し、さらにテクノロジーという意味にまで拡張されている。</p><br/>
              <p>我々の生活と切り離せない「テクノロジー」。<br/>
              テクノロジーによって生活が豊かになる一方で、科学主義的な姿勢が目立つように感じる。</p><br/>
              <p>私たちは、本来単純に区別出来ない事象の方が多いはずの世界の中で、<br/>
              日々の生活で感じた些細な違和感や関心を向けたさりげないこと、<br/>
              合理的判断によって切り捨てられてしまうようなことに気付き、表現してきた。<br/>
              そしてそれは、多様な考え方が広がる社会を支えることに繋がるはずだ。</p><br/>

              <p>IAMAS2018を巡り、私たちの表現に触れることが、<br/>
                未知との遭遇ではなく、既に知っていたことの再発見となるだろう。</p>
            </div>
          </article>
          <article>
            <h2 data-subtitle="イベント">Event</h2>
            <div className="layout__container--content">
              <p>IAMAS2017のテーマ「ひらく」をキーワードに ゲストを招いたトークイベントやライブ、学生有志によるパフォーマンスなどを企画しました。</p><br/>
              <p>私たちの日常はあらゆる可能性を秘めています。<br/>
                それらの可能性を「ひらく」ことについて、各々のイベントを通して考えていきます。</p>
              <a href="#">More</a>
            </div>
          </article>
          <article>
            <h2 data-subtitle="修士研究発表">Works</h2>
            <div className="layout__container--content">
              <p>第16期生修了研究発表者　(計12名/50音順)</p>
              <ul>
                <li>井上　奈那美</li>
                <li>大和　比呂志</li>
                <li>加藤　明洋</li>
                <li>北詰　和徳</li>
                <li>髙坂　聖太郎</li>
                <li>後藤　良太</li>
                <li>冨田　弓絵</li>
                <li>永松　歩</li>
                <li>浜田　卓之</li>
                <li>原田　和馬</li>
                <li>山口　伊生人</li>
              </ul>
              <a href="#">More</a>
            </div>
          </article>
          <article>
            <h2 data-subtitle="プロジェクト研究発表">Projects</h2>
            <div className="layout__container--content">
              <p>
                プロジェクトは、メディア表現領域の社会的な意義をはかりながら、高度な研究成果や技術開発を目指して、領域横断的に運営される授業群です。今年はIAMASの研究活動の主幹として、多領域に渡るプロジェクト研究が活動しました。「IAMAS 2017」では修士研究発表に加えて、これらプロジェクト研究の成果を展示します。
              </p>
              <a href="#">More</a>
            </div>
          </article>
          <article>
            <h2 data-subtitle="アクセス">Access</h2>
            <div className="layout__container--content">
              <img src="/images/map.svg" alt=""/>
            </div>
          </article>
          <article className="contact">
            <h2 data-subtitle="お問い合わせ">Contact</h2>
            <div className="layout__container--content">
              <p>IAMAS 2017へのお問い合わせはこちらまでお寄せください。</p>
              <p>情報科学芸術大学院大学［IAMAS] 〒503-0006 岐阜県大垣市加賀野4丁目1-7</p>
              <p>TEL: <a href="tel:0584756600">0584-75-6600</a></p>
              <p>FAX: 0584-75-6637</p>
              <p><a href="mailto:event@ml.iamas.ac.jp">event@ml.iamas.ac.jp</a></p>
              <p><a href="http://www.iamas.ac.jp" target="_blank">http://www.iamas.ac.jp</a></p>
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default Index