import React, {Component} from "react";
import {render} from "react-dom";
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Navigation from './components/navigation';

import Index from './index';
import Event from './event';
import Projects from "./projects";
import Works from './works';

import YouTube from 'react-youtube'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillMount() {
    let it = this;
  }

  componentDidMount(){
    let it = this;
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
        <div className="bg_live">
          <YouTube
              videoId="xMmfycqGkZA"
              opts={opts}
              onReady={this._onReady} />
        </div>
        {this.props.children && React.cloneElement(this.props.children, {
          _it: this
        })}
      </div>
    )
  }


}

render((
    <Router history={browserHistory}>
      <Route path="/" components={App}>
        <IndexRoute components={Index}/>
        <Route path="/event" component={Event}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/works" component={Works}/>
      </Route>
    </Router>
  ), document.getElementById('root')
);
