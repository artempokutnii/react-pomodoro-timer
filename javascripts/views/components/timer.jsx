'use strict';

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


export default class Timer extends Component {

  constructor() {
    super();
    this.state = {
      time: 0
    }
  }

  componentDidMount() {
    this.setDefaultTime();
  }

  setDefaultTime() {
    let defaultTime = 1500;

    this.setState({
      time: defaultTime
    });
  }

  format(seconds) {
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
  }

  render() {
    return (

      <div className="main">

        <div>
          <span className="time">{ this.format(this.state.time) }</span>
        </div>

        <div className="setup-time">
          <Button className="btn">Code</Button>
          <Button className="btn">Short break</Button>
          <Button className="btn">Long break</Button>
        </div>

      </div>
    );
  }
}


