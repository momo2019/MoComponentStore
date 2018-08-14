import React, { Component } from 'react';
import MoTable from './MoTable';

export default class DemoTable extends Component {
  _dataSource = [
    {
      id: 1,
      name: 'aa',
      age: 12
    },
    {
      id: 4,
      name: 'gugu',
      age: 12
    },
    {
      id: 2,
      name: 'ee',
      age: 12
    },
    {
      id: 3,
      name: 'ab',
      age: 12
    },
  ]
  _columns = [
    {
      title: 'id',            // 显示的内容
      key: 'id',              // 对应dataSource中的属性名
      sort: (a, b) => b-a,
    },
    {
      title: '名字',
      key: 'name',
      sort: true,
    },
    {
      title: 'age',
      key: 'age',
      unSelection: true,
    }
  ]

  render() {
    return (
      <MoTable 
        dataSource={this._dataSource} 
        columns={this._columns}
        pagination={2}
        scroll={1}
        selection={true}
      />
    );
  }
}