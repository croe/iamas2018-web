import React, {Component} from "react";
import {render} from "react-dom";
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Navigation from './components/navigation';
import $ from 'jquery';

import Index from './index';
import Event from './event';
import Projects from "./projects";
import Works from './works';

import YouTube from 'react-youtube'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        youtubeLink: ["mkLW5gZpjr4"]
    }
  }

  componentWillMount() {
    let it = this;
      $.ajax({
          url: "https://sheets.googleapis.com/v4/spreadsheets/1MseugORx0m6TJ9PNxUYulaJA4zK5NykcjGuK0MGiT7M/values/A1:A2?key=AIzaSyBZHoIkxG4HFEflbPr1ha-42IDLLyX7ZuQ",
          dataType: 'json'
      }).done(function (data) {
          console.log(data)
          it.setState({
              youtubeLink: data.values[0]
          })
      });
  }

    componentDidMount() {
        let it = this;

        if ((16 / 9) > $(window).innerWidth() / $(window).innerHeight()) {
            $('.bg_live span').css({
                width: $(window).innerWidth() * (16 / 9),
                height: '100%'
            });
        } else {
            $('.bg_live span').css({
                width: '100%',
                height: $(window).innerHeight() * (16 / 9)
            });
        }

        $(window).on('resize', () => {
            if ((16 / 9) > $(window).innerWidth() / $(window).innerHeight()) {
                $('.bg_live span').css({
                    width: $(window).innerWidth() * (16 / 9),
                    height: '100%'
                });
            } else {
                $('.bg_live span').css({
                    width: '100%',
                    height: $(window).innerHeight() * (16 / 9)
                });
            }
        })
    }

  render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0
        }
    };

    return (
      <div className="layout">
        <Navigation />
          <div className="transition_owner">
              <div className="bg_live">
                  <YouTube
                      videoId={this.state.youtubeLink[0]}
                      opts={opts}
                      onReady={this._onReady}
                  />
              </div>
              {this.props.children && React.cloneElement(this.props.children, {
                  _it: this
              })}
          </div>
      </div>
    )
  }


}

render((
        <Router history={browserHistory}>
            <Route path="/exhibit18/" components={App}>
                <IndexRoute components={Index}/>
                <Route path="/exhibit18/event" component={Event}/>
                <Route path="/exhibit18/projects" component={Projects}/>
                <Route path="/exhibit18/works" component={Works}/>
            </Route>
        </Router>
    ), document.getElementById('root')
);

// TODO: トップへ戻るボタン
// TODO: ライトのリップル効果
