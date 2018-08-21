import React, { Component } from 'react';

export default class MoTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: this.props.dataSource || [],
    }
    this.plugin = {
      columns: [],
      pagination: 0,
      scroll: 0,
      selection: false,
    }
  }

  _init = () => {
    this.plugin = {
      columns: this.props.columns || [],
      pagination: this.props.columns || 0,
      scroll: this.props.scroll || 0,
      selection: this.props.selection || false,
    }
    this.ths = (() => {
      return this.plugin.columns.map((item) => 
                item.sort ? (
                  <th 
                    key={ item.key } 
                    onClick={() => this._sort(item)}
                  >
                    {item.title}
                  </th>
                ) : ( 
                  <th key={ item.key }>
                    {item.title}
                  </th>
                )  
              );
    })();
  }

  _sort = (item) => {
    let sortFun = typeof item.sort === 'function' ? item.sort : (a, b) => a>b;
    let tempData = this.state.dataSource.slice();
    tempData.sort((oA, oB) =>
      sortFun(oA[item.key], oB[item.key])
    );
    this.setState({
      dataSource: tempData,
    })
  }

  componentWillMount(){
    this._init();
  }




  render() {
    const tds = this.state.dataSource.map((item,i) => {
                let temp = item;
                let index = i;
                return (
                  <tr key={ 'mo-td-' + index }>
                    {
                      this.plugin.columns.map((item) => 
                        <td key={ item.key + '-td-' + index}>
                          {temp[item.key]}
                        </td>
                      )
                    }
                  </tr>
                )
              });
    return (
      <table>
        <tbody>
          <tr>
            {this.ths}
          </tr>
          {tds}
        </tbody>
      </table>
    );
  }
} 