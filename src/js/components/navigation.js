import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom"

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="layout__navigation">
        <nav className="layout__navigation--wrapper">
          <ul className="menu">
            <li><a href="#">Information</a></li>
            <li><a href="#">Theme</a></li>
            <li><a href="#">Event</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Access</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul className="sns">
            <li><a href="#"><img src="/images/icon_facebook.svg"/></a></li>
            <li><a href="#"><img src="/images/icon_twitter.svg"/></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation