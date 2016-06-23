'use strict';

import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import GithubCorner from 'react-github-corner';

export default class Timer extends Component {

  constructor() {
    super();
    this.state = {
      time: 0,
      play: false
    };
    this.elapseTime = this.elapseTime.bind(this);
  }

  componentDidMount() {
    this.setDefaultTime();
  }

  //elapseTime() {
  //  if (this.state.time === 0) {
  //    console.log('HELLO')
  //  }
  //  if (this.state.play === true) {
  //    let newState = this.state.time - 1;
  //    this.setState({ time: newState })
  //  }
  //}

  setDefaultTime() {
    let defaultTime = 1500;

    this.setState({
      time: defaultTime,
      play: false
    });
  }

  setCodeTime = () => {
    let defaultTime = 1500;

    this.setState({
      time: defaultTime,
      play: true
    })
  };

  setShortTime = () => {
    let defaultTime = 300;

    this.setState({
      time: defaultTime,
      play: true
    })
  };

  setLongTime = () => {
    let defaultTime = 900;

    this.setState({
      time: defaultTime,
      play: true
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


