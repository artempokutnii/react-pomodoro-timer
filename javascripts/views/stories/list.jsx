'use strict';

import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class StoryList extends Component {
  render() {
    return (
      <Row>
        <Col sm={3} md={2} className='sidebar'>
          <ul className="nav nav-sidebar">
            <li><a href>Nav item</a></li>
          </ul>
          <ul className="nav nav-sidebar">
            <li><a href>Nav item again</a></li>
          </ul>
        </Col>
        <Col sm={9} smOffset={3} md={10} mdOffset={2} className='main'>
          <h1>This is place for timer</h1>
        </Col>                    
      </Row>
    );
  }
}


