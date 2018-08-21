import React, { Component } from 'react';

import DemoDND from './component/MoDND/demo';
import DemoTable from './component/MoTable/demo';
import DemoDrawer from './component/MoDrawer/demo';
import DemoLoading from './component/MoLoading/demo';
import DemoPopover from './component/MoPopover/demo';


class App extends Component {
  render() {
    return (
      <div>
        <DemoDND />
        <DemoTable />
        <DemoDrawer />
        <DemoLoading />
        <DemoPopover />
      </div>
    );
  }
}

export default App;
