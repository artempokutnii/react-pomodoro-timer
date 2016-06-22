'use strict';

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import GithubCorner from 'react-github-corner';

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

  setCodeTime = () => {
    let defaultTime = 1500;

    this.setState({
      time: defaultTime
    })
  };

  setShortTime = () => {
    let defaultTime = 300;

    this.setState({
      time: defaultTime
    })
  };

  setLongTime = () => {
    let defaultTime = 900;

    this.setState({
      time: defaultTime
    })
  };

  format(seconds) {
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
  }

  render() {
    return (
      <div className="pomodoro-timer">
        <GithubCorner
          href="https://github.com/artempokutnii/react-pomodoro-timer"
          bannerColor="#fff"
          octoColor="#45668e"
          />

        <div className="main">

          <div>
            <span className="time">{ this.format(this.state.time) }</span>
          </div>

          <div className="setup-time">
            <Button className="btn" onClick={ this.setCodeTime }>Code</Button>
            <Button className="btn" onClick={ this.setShortTime }>Short break</Button>
            <Button className="btn" onClick={ this.setLongTime }>Long break</Button>
          </div>

        </div>

      </div>
    );
  }
}


