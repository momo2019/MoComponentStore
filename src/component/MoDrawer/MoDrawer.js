import React, { Component } from 'react';
import './MoDrawer.scss';

export default class MoDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDrawer: false,              // drawer显示与否
    }
    this.plugin = {
      title: '',                      // 标题
      closable: true,                 // 关闭按钮
      mask: true,                     // 背景蒙层是否显示
      maskClosable: true,             // 背景蒙层是否可以关闭drawer
      placement: 'left',              // drawer出现位置
      transitionTime: 300,            // 出现消失的过渡时间
      children: <div></div>,          // 内容
    }
    this.obRef = {                    // 给予外部的方法集合
      show: () => {
        this._show();
      },
      hidden: () => {
        this._hidden();
      },
    }
  }

  _show = () => {
    if(this.state.showDrawer === true) {
      return false;
    }
    this.setState({
      showDrawer: true,
    })
    setTimeout(()=>{
      this.refs.box && (this.refs.box.style.opacity = 1);
      this.refs.drawer && (this.refs.drawer.style[this.plugin.placement] = '0');
    },0);
  }
 
  _hidden = () => {
    if(this.state.showDrawer === false) {
      return false;
    }
    this.refs.box && (this.refs.box.style.opacity = 0);
    this.refs.drawer && (this.refs.drawer.style[this.plugin.placement] = '-100%');
    setTimeout(() => {
      this.setState({
        showDrawer: false,
      })
    }, this.plugin.transitionTime);

  }

  _init = () => {
    this.plugin = {
      title: this.props.title || '',
      closable: this.props.closable===false ? false : true,
      mask: this.props.mask===false ? false : true,
      maskClosable: this.props.maskClosable===false ? false : true,
      placement: this.props.placement==='right' ? 'right' : 'left',
      transitionTime: this.props.transitionTime || 300,
      children: this.props.children || <div></div>,
    };
    this.drawerStyle = (() => { 
      if(this.plugin.placement==='left'){                                  // drawer出现位置不同定义不同的style
        return {
          left:'-100%',
          transition: 'left '+ (this.plugin.transitionTime/1000) +'s ease-in-out',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
        }
      }else {
        return {
          right:'-100%',
          transition: 'right '+ (this.plugin.transitionTime/1000) +'s ease-in-out',
          boxShadow: '-2px 0 8px rgba(0, 0, 0, 0.15)',
        }
      }
    })();
    this.close = (() => {
      if(this.plugin.closable){                                      // 关闭按钮是否存在
        return (
          <div 
            className='mo-drawer-close' 
            onClick={()=>this._hidden()}
          >
          ×
          </div>
        )
      }
      return (
        <div>
        </div>
      )
    })();
    this.mask = (() => {
      if(this.plugin.mask){                                         // 背景蒙层存在与否
        if(this.plugin.maskClosable){                               // 背景蒙层点击关闭drawer与否
          return (
            <div 
              className='mo-drawer-mask' 
              onClick={() => this._hidden()}
            >
            </div>
          )
        }else {
          return (
            <div 
              className='mo-drawer-mask'
            >
            </div>
          )
        }                                                       
      }
      return (
        <div>
        </div>
      )
    })();

    this.props.onRef && this.props.onRef(this.obRef);
  }

  componentWillMount(){
    this._init();
  }

  componentDidMount(){
    if(this.refs.box.parentNode !== document.body){       //防止视图层级显示不理想
      document.body.appendChild(this.refs.box);
    }
  }

  render() {
    let drawerBoxStyle = this.state.showDrawer ? {
      display: 'block',
      transition: 'opacity '+ (this.plugin.transitionTime/1000) +'s ease-in-out',
    } : {
      display: 'none',
      transition: 'opacity '+ (this.plugin.transitionTime/1000) +'s ease-in-out',
    };    // 显示与否
    return (
      <div 
        className='mo-drawer-box'
        style={drawerBoxStyle}
        ref={'box'}
      >
        {this.mask}
        <div 
          className='mo-drawer' 
          style={this.drawerStyle}
          ref={'drawer'}
        >
          <div className='mo-drawer-title'>
            {this.plugin.title}
            {this.close}
          </div>
          <div className='mo-drawer-content'>
            {this.plugin.children}
          </div>
        </div>
      </div>
    );
  }
}