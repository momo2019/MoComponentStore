import React, { Component } from 'react';
import MoDND from './MoDND';

export default class DemoDND extends Component {
  
  render() {
    return (
      <MoDND isParent={false}>
        <ul>
          <li className="nide">1222</li>
          <li>12</li>
          <li>33</li>
          <li>22</li>
        </ul>
      </MoDND>
    );
  }
} 