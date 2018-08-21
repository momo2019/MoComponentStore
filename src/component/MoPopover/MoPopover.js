import React, { Component } from 'react';
import MojQuery from '../MojQuery/MojQuery';

import './MoPopover.scss';


export default class MoPopover extends Component {
  constructor(props){
    super(props);
    this.state = {
      showOrHidden: false,
    }
    this.plugin = {
      title: '',
      content: 'MoPopover',
      placement: 'top',
      align: 'center',
    }
    this.obRef = {
      show: () => this._show(),
      hidden: () => this._hidden(),
    }
  }

  _show = () => {
    if(this.state.showOrHidden === true) {
      return false;
    }
    this.setState({
      showOrHidden: true,
    })
    setTimeout(()=>{
      if(document.body !== this.refs.box.parentNode){
        let position = MojQuery.getPosition(this.refs.box);
        MojQuery.appendChild(document.body,this.refs.box);
        this.refs.box.style.transform = 'none';
        this.refs.box.style.left = position.left + 'px';
        this.refs.box.style.top = position.top + 'px';
        this.refs.box.style.right = 'auto';
        this.refs.box.style.bottom = 'auto';
      }
      this.refs.box.style.transform = 'scale(1)'
    },0);
  }
  _hidden = () => {
    if(this.state.showOrHidden === false) {
      return false;
    }
    this.setState({
      showOrHidden: false,
    })
  }

  _init = () => {
    const arrPluginPlacement = [
      'top',
      'left',
      'right',
      'bottom',
    ];
    const arrPluginAlign = [
      'center',
      'left',
      'right',
    ];
    this.plugin = {
      title: this.props.title || '',
      content: this.props.content || 'MoPopover',
      placement: arrPluginPlacement.indexOf(this.props.placement) !== -1 ? this.props.placement : 'top',
      align: arrPluginAlign.indexOf(this.props.align) !== -1 ? this.props.align : 'center',
    }

    this.offsetPlugin = (() => {
      let temp = 'mo-popover-' + this.plugin.placement + '-' + this.plugin.align;
      return temp;
    })();



    this.title = (() => {
      if( this.plugin.title === '' ) {
        return (
          <div>
          </div>
        )
      }
      if( typeof this.plugin.title === 'object') {
        return this.title;
      }
      return (
        <div className='mo-popover-title'>
          {this.plugin.title}
        </div>
      )
    })();
    this.content = (() => {
      if( typeof this.plugin.content === 'object') {
        return this.content;
      }
      return (
        <div className='mo-popover-content'>
          {this.plugin.content}
        </div>
      )
    })();

    this.props.onRef && this.props.onRef(this.obRef);
  }
  componentWillMount() {
    this._init();
  }
  render() {
    let popoverBoxStyle = this.state.showOrHidden ? {
      display:'block',
    } : {
      display:'none',
    };
    return (
      <div
        className={'mo-popover-box ' + this.offsetPlugin}
        style={popoverBoxStyle}
        ref={'box'}
      >
        {this.title}
        {this.content}
      </div>
    )
  }
}