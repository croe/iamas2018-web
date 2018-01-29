import React, {Component} from 'react'
import {Link} from 'react-router'
import {findDOMNode} from 'react-dom'

var MILK_COCOA = MilkCocoa.connectWithApiKey('bluejcw1ch34.mlkcca.com', 'HJKKNPPHCNNJDKIL', 'hAYYdlfJaUJUCSKIegQEQaaWUTHfDjTQMgODXkhf');
var DATA_STORE = MILK_COCOA.dataStore('light');

class LightButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      n: props.n
    }
    this.lastClick = 0;
  }

  sendSignalToMC(n){
    let current = new Date();
    if ((current - this.lastClick) > 200) {
      DATA_STORE.send({ n: this.state.n });

      this.lastClick = current;
    }
  }

  render() {
    let cl = "lightButtons__button " + "btn__" + this.state.n;
    return (
      <li className={ cl } onClick={e => this.sendSignalToMC()} />
    );
  }
}

class LightButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <ul className="lightButtons">
        <LightButton n="0" />
        <LightButton n="1" />
        <LightButton n="2" />
        <LightButton n="3" />
      </ul>
    );
  }
}



export default LightButtons
