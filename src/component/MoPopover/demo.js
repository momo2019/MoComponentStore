import React, { Component } from 'react';
import MoPopover from './MoPopover';

export default class DemoPopover extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            position: 'relative',
          }}
          onClick={()=>this.rr.show()}
        >
          pop
          <MoPopover onRef={(ob)=> this.rr = ob} />
        </button>
      </div>
    )
  }
}