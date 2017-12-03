import React, {Component} from 'react'
import {Link} from 'react-router';
import {findDOMNode} from "react-dom"

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.componentHandleScan = this.componentHandleScan.bind(this)
  }

  render() {
    return (
      <div className="app">
        <main className="container">
        </main>
      </div>
    );
  }
}

export default Index