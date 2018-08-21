import React, { Component } from 'react';
import MoLoading from './MoLoading';

export default class DemoLoading extends Component {
  render() {
    return (
      <div
        style={{
          position: 'relative',
          height: '100px',
          width: '300px',
        }}
      >
        <MoLoading text='loading' loadStyle='spinDot' onRef={(ob)=> this.rr = ob} />
        <button onClick={()=>this.rr.show()}>22</button>
      </div>
    )
  }
}