import React, { Component } from 'react';
import MoDrawer from './MoDrawer';

export default class DemoDrawer extends Component {
  render() {
    return (
      <div>
        <MoDrawer 
          title='MoDrawerDemo'
          placement='right'
          onRef={(ob)=>this.drawerRef = ob}
        >
          <div
            style={{
              width: '300px',
            }}
          >
            Test
          </div>
        </MoDrawer>
        <button onClick={()=>this.drawerRef.open()}>
          Drawer
        </button>
      </div>
    )
  }
}