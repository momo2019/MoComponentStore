import React, { Component } from 'react';
import MojQuery from '../MojQuery/MojQuery';

import './MoDND.scss';

export default class MoDND extends Component {
  constructor(props) {
    super(props);
    this.plugin = {
      isParent: true,                         // 是否是可拖拽元素的父元素
      style: {display:'block'},                          // 包裹层的样式
    };
  }

  _init = () => {
    let temp = {
      isParent: this.props.isParent === false ? this.props.isParent : true,
      style: this.props.style || {display:'block'},
    };
    return temp;
  }

  _handleDragStartEvent = (event) => {                // 拖拽开始
    MojQuery.addClass(event.target, 'mo-draging');
  }
  _handleDragEndEvent = (event) => {                  // 拖拽结束
    MojQuery.removeClass(event.target, 'mo-draging');
  }
  _handleDragEnterEvent = (event) => {                // 进入其他元素
    let targetDom = event.target;
    let dragingDom = targetDom.parentNode.getElementsByClassName('mo-draging')[0];
    if( !dragingDom  || (targetDom.parentNode !== dragingDom.parentNode) || targetDom === dragingDom ){       // 不在当前包裹层内 || 进入元素为本身
      return false;
    }

    if( this._whichFront(targetDom, dragingDom) ) {
      this._insertBefore(targetDom, dragingDom);
    }else{
      this._insertAfter(targetDom, dragingDom);
    }
    /**
     * 阻止继续冒泡
     * 多层MoDND会导致触发多个委托事件
     * 优化,深层MoDND不添加委托.
     * 权衡,1.冒泡到委托层经过数轮
     *     2.无法很好地判断嵌套的MoDND层级时,需要用户提供标记.体验和可控性上的考量.
     */
    event.stopPropagation();        
    return false;
    
  }

 
  _whichFront = (target,draging) => {
    let arr = target.parentNode.children;
    for(let i=arr.length-1; i>=0; i--) {
      if(arr[i] === target) {      // 从上到下
        return false;
      }
      if(arr[i] === draging) {     // 从下到上
        return true;
      }
    }
  }
  _insertBefore = (target, draging) => {
    let parent = target.parentNode;
    parent.insertBefore(draging, target);
  }
  _insertAfter = (target, draging) => {
    let parent = target.parentNode;
    if(target.nextSibling) {
      parent.insertBefore(draging, target.nextSibling);
    }else {
      parent.appendChild(draging);
    }
  }

  componentWillMount() {
    this.plugin = this._init();
  }

  componentDidMount() {
    let tempDom = this.parentDom;
    // 判断本组件包裹的是li还是ul(代指所有子元素还是包裹的父元素)
    if( !this.plugin.isParent ) {
      try {
        if(tempDom.children.length !== 1) {
          let err = new Error('isParent is \'false\',but the child of MoDND is not only one');
          throw err;
        }
      } catch (error) {
        console.log( error )
        return false;
      }
      tempDom = tempDom.children[0];
    }

    // 给可拖拽元素添加 draggable='true'
    for(let i=tempDom.children.length-1; i>=0; i--) {
      tempDom.children[i].setAttribute('draggable',true);
    }

    // 委托父元素绑定拖拽事件
    tempDom.addEventListener('dragstart',(ev) => this._handleDragStartEvent(ev));
    tempDom.addEventListener('dragend',(ev) => this._handleDragEndEvent(ev));
    tempDom.addEventListener('dragenter',(ev) => this._handleDragEnterEvent(ev));
  }

  render() {
    return (
      <div 
        style={this.plugin.style} 
        ref={(dom) => this.parentDom=dom}
      >
        {this.props.children}
      </div>
    );
}
}