import React, {Component} from "react";
import {render} from "react-dom";
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import Index from './index';

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
    return (
      <div>
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
        <Route path="/config" component={Index}/>
      </Route>
    </Router>
  ), document.getElementById('root')
);
