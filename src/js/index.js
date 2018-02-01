import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom";
import $ from 'jquery';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import pluging from 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import LightButtons from './components/lightButtons'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        let it = this;
        let $window = $(window);
        $('.mainvisual').css({'height': $window.innerHeight()});
        $window.on('resize', () => {
            $('.mainvisual').css({'height': $window.innerHeight()});
        });
        $('.bg_live').css({'height': $window.innerHeight()});
        $window.on('resize', () => {
            $('.bg_live').css({'height': $window.innerHeight()});
        });
        /**
         * Anchor link Animation
         */
        $("a[href^='#']").on('click', function () {
            let speed = 500,
                href = $(this).attr("href"),
                target = $(href == "#" || href == "" ? 'html' : href),
                position = target.offset().top;
            $("html, body").animate({scrollTop: position}, speed, "swing");
            return false;
        });

    }

    render() {
        return (
            <div className="layout__container page__index">
                <main className="layout__container--wrapper">
                    <article className="mainvisual pc">
                        <img src="/images/title.svg" alt=""/>
                    </article>
                    <article className="mainvisual sp">
                        <img src="/images/title_sp.svg" alt=""/>
                    </article>
                    <article id="info">
                        <h2 data-subtitle="開催概要">Information</h2>
                        <div className="layout__container--content">
                            <p><strong>情報科学芸術大学院大学 第16期生修了研究発表会・プロジェクト研究発表会</strong></p>
                            <p><strong>Graduation and Project Research Exhibition</strong></p>
                            <br/>
                            <p>日時：2月22日(木)ｰ2月25日(日) 10:00ｰ18:00(初日のみ13:00から)</p>
                            <p>会場：ソフトピアジャパン センタービル 岐阜県大垣市加賀野4丁目１−７</p>
                            <p>入場：無料</p>
                            <p>主催：情報科学芸術大学院大学[IAMAS]</p>
                        </div>
                    </article>
                    <article id="theme">
                        <h2 data-subtitle="テーマ">Theme</h2>
                        <div className="layout__container--content">
                            <p><strong>つまずく小石をひろうこと</strong></p><br/>
                            <p>Scienceという言葉はラテン語のscientiaが語源で、「知っていること」という意味であった。<br/>
                                現在では科学全般のことを指し、さらにテクノロジーという意味にまで拡張されている。</p><br/>
                            <p>我々の生活と切り離せない「テクノロジー」。<br/>
                                テクノロジーによって生活が豊かになる一方で、科学主義的な姿勢が目立つように感じる。</p><br/>
                            <p>私たちは、本来単純に区別出来ない事象の方が多いはずの世界の中で、<br/>
                                日々の生活で感じた些細な違和感や関心を向けたさりげないこと、<br/>
                                合理的判断によって切り捨てられてしまうようなことに気付き、表現してきた。<br/>
                                そしてそれは、多様な考え方が広がる社会を支えることに繋がるはずだ。</p><br/>
                            <p>IAMAS2018を巡り、私たちの表現に触れることが、<br/>
                                未知との遭遇ではなく、既に知ってしまっていたことの再発見となるだろう。</p>
                        </div>
                    </article>
                    <article>
                        <h2 data-subtitle="修士研究発表">Works</h2>
                        <div className="layout__container--content">
                            <p>第16期生修了研究発表者 (修了生12名、研究生1名)</p>
                            <ul>
                                <li>井上 奈那美</li>
                                <li>加藤 明洋</li>
                                <li>北詰 和徳</li>
                                <li>髙坂 聖太郎</li>
                                <li>後藤 良太</li>
                                <li>冨田 弓絵</li>
                                <li>永松 歩</li>
                                <li>浜田 卓之</li>
                                <li>原田 和馬</li>
                                <li>山口 伊生人</li>
                                <li>大和 比呂志</li>
                                <li>綿貫 岳海</li>
                                <li>塚原 真梨佳 (研究生)</li>
                            </ul>
                            <div className="layout__container--content__more">
                                <Link to="/works">More</Link>
                            </div>
                        </div>
                    </article>
                    <article className="event">
                        <h2 data-subtitle="イベント">Events</h2>
                        <div className="layout__container--content">
                            <p>IAMASを取り巻く多様な考えに触れ、深掘って議論し、共有するために、IAMASの外の各領域で活躍するゲストを招聘しトークイベントやワークショップを多数おこないます。展示とあわせて、スケジュールのご確認の上、是非ご参加ください。</p>
                            <h3>ゲスト一覧</h3>
                            <ul>
                              <li className="event__guest">
                                <span className="event__guest__name">伊藤 亜紗</span>
                                <span className="event__guest__title">東京工業大学リベラルアーツ研究教育院准教授</span>
                              </li>
                              <li className="event__guest">
                                <span className="event__guest__name">豊田 啓介</span>
                                <span className="event__guest__title">noiz共同主宰、gluonパートナー</span>
                              </li>
                              <li className="event__guest">
                                <span className="event__guest__name">中島 守</span>
                                <span className="event__guest__title">岐阜県博物館長</span>
                              </li>
                              <li className="event__guest">
                                <span className="event__guest__name">徳井 直生</span>
                                <span className="event__guest__title">(株)Qosmo代表取締役 / メディアアーティスト / DJ</span>
                              </li>
                              <li className="event__guest">
                                <span className="event__guest__name">清水 基</span>
                                <span className="event__guest__title">backspacetokyo共同主宰</span>
                              </li>
                              <li className="event__guest">
                                <span className="event__guest__name">高橋 啓治郎</span>
                                <span className="event__guest__title">ユニティー・テクノロジーズ・ジャパン合同会社</span>
                              </li>
                              <li className="event__guest">
                                <span className="event__guest__name">野中 健一</span>
                                <span className="event__guest__title">立教大学文学部教授</span>
                              </li>
                              <li className="event__guest">
                                <span className="event__guest__name">高橋 勝幸</span>
                                <span className="event__guest__title">全国地蜂連合会会長</span>
                              </li>
                            </ul>
                            <div className="layout__container--content__more">
                                <Link to="/event">More</Link>
                            </div>
                        </div>
                    </article>
                    <article>
                        <h2 data-subtitle="プロジェクト研究発表">Projects</h2>
                        <div className="layout__container--content">
                            <p>
                                プロジェクトは、メディア表現領域の社会的な意義をはかりながら、高度な研究成果や技術開発を目指して、領域横断的に運営される授業群です。今年はIAMASの研究活動の主幹として、多領域に渡るプロジェクト研究が活動しました。「IAMAS
                                2018」では修士研究発表に加えて、これらプロジェクト研究の成果を展示します。
                            </p>
                            <div className="layout__container--content__more">
                                <Link to="/projects">More</Link>
                            </div>
                        </div>
                    </article>
                    <article id="others" className="others">
                        <h2 data-subtitle="関連コーナー">Others</h2>
                        <div className="layout__container--content">
                          <h3 className="others__header">進学相談</h3>
                          <div className="others__content">
                            <img src="/images/other_1.jpg" />
                            <p>ご自身の研究や入試、IAMASでの研究や学生生活について直接希望する教員に相談・質問することができます。</p>
                          </div>
                          <h3 className="others__header">カフェ 南原食堂</h3>
                          <div className="others__content">
                            <img src="/images/other_2.png" />
                            <div className="others__content">
                              <p>岐阜県大垣市を拠点とする南原兄弟によるコミュニティ食堂「<a href="https://www.facebook.com/namshoku/" target="_blank">南原食堂</a>」が、本卒展にあわせて特設カフェをオープンします。是非お立ち寄りください。 ※ 2月24日(土)、25日(日)のみ営業</p>
                            </div>
                          </div>
                        </div>
                    </article>
                    <article id="access" className="access">
                        <h2 data-subtitle="アクセス">Access</h2>
                        <div className="layout__container--content">
                            <img src="/images/map.svg" alt=""/>
                            <p>〒503-0006 岐阜県大垣市加賀野4丁目1-7</p>
                            <p>
                                &lt;大垣駅より&gt;<br/>
                                タクシー： JR大垣駅南口から約5分<br/>
                                バス： JR大垣駅南口から3番乗り場ソフトピア線・羽島線 「ソフトピアジャパン」行き 約10分（1時間に2～3便程度）
                            </p>
                        </div>
                    </article>
                    <article id="contact" className="contact">
                        <h2 data-subtitle="お問い合わせ">Contact</h2>
                        <div className="layout__container--content">
                            <p>
                              TEL: <a href="tel:0584756600">0584-75-6600</a><br/>
                              FAX: 0584-75-6637<br/>
                              MAIL: <a href="mailto:event@ml.iamas.ac.jp">event@ml.iamas.ac.jp</a></p>
                              <ul className="contact__sns">
                                  <li><a href="https://www.facebook.com/IAMAS.GraduationExhibition/" target="_blank"><img
                                      src="/images/icon_facebook.svg"/></a></li>
                                  <li><a href="https://twitter.com/iamas_exhibit" target="_blank"><img
                                      src="/images/icon_twitter.svg"/></a></li>
                                  <li><a href="https://www.instagram.com/iamas2018/" target="_blank"><img
                                      src="/images/icon_instagram.svg"/></a></li>
                              </ul>
                            <a href="http://www.iamas.ac.jp"><img src="/images/footer_logo.png" /></a>
                        </div>
                    </article>
                </main>
                <LightButtons/>
            </div>
        );
    }
}

export default Index
