'use strict';

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class StoryList extends Component {

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

  render() {
    console.log(this.state.time)
    return (
      <div>
        <span className="time">{ this.state.time }</span>
      </div>
    );
  }
}


