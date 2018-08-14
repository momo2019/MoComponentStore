import React, { Component } from 'react';
import LoadingStyleSet from './MoLoadingStyle';
import './MoLoading.scss';

export default class MoLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrHidden: false,
    }
    this.plugin = {
      size: 'default',
      text: '',
      color: '#1890ff',
      style: 'spinDot',
    }
    this.obRef = {
      show: () => {
        this._show();
      },
      hidden: () => {
        this._hidden();
      }
    }
  }

  _show = () => {
    this.setState({
      showOrHidden: true,
    })
  }

  _hidden = () => {
    this.setState({
      showOrHidden: false,
    })
  }

  _init = () => {
    let loadingIStyle;
    let loadingTextStyle;
    const arrPluginSize = [                                                     // 整体大小集合
      'small',
      'default',
      'large',
    ];
    const arrPluginStyle = [                                                    // 动画样式集合
      'spinDot',
      'jumpBlock',
      'spinBlock',
      'switchDot',
      'slipBlock',
      'slipDot',
      'blinkDot',
      'spreadDot',
      'roundDot',
    ]
    
    this.plugin = {                                                             // 配置信息初始化
      size: arrPluginSize.indexOf(this.props.size)!==-1 ? this.props.size : 'default',
      text: this.props.text || '',
      color: this.props.color || '#1890ff',
      style: arrPluginStyle.indexOf(this.props.style)!==-1 ? this.props.style : 'spinDot',
    }                                                     
    
    loadingIStyle = {                                                           // 动画颜色初始化
      backgroundColor: this.plugin.color,
    }
    loadingTextStyle = (() => {                                                 // 文本大小及颜色初始化
      switch(this.plugin.size){
        case 'small': 
          return {
            fontSize: '16px',
            color: this.plugin.color,
          }
        case 'default':
          return {
            fontSize: '18px',
            color: this.plugin.color,
          }
        case 'large':
          return {
            fontSize: '20px',
            color: this.plugin.color,
          }
        default:
          return false;
      }
    })();

    this.loadingStyle = (() => {                                                // 动画整体大小初始化
      switch(this.plugin.size){
        case 'small': 
          return {
            width: '30px',
            height: '30px',
          }
        case 'default':
          return {
            width: '40px',
            height: '40px',
          }
        case 'large':
          return {
            width: '50px',
            height: '50px',
          }
        default:
          return false;
      }
    })();

    this.loading = (() => {                                                     // loading动画初始化
      let styleItem = this.plugin.style;
      let pluginStyle = {
        spinDot: 4,
        jumpBlock: 5,
        spinBlock: 1,
        switchDot: 2,
        slipBlock: 2,
        slipDot: 2,
        blinkDot: 3,
        spreadDot: 1,
        roundDot: 8,
      };
      return <LoadingStyleSet 
                color={loadingIStyle} 
                setItem={styleItem}
                iNum={pluginStyle[styleItem]}
              />
    })();
    this.text = (() => {                                                        // 初始化文本标签
      return (
        <div
          className='mo-loading-text'
          style={loadingTextStyle}
        >
          {this.plugin.text}
        </div>
      )
    })()
    
    this.props.onRef && (this.props.onRef(this.obRef));                         // 给予外部控制接口
  }

  componentWillMount() {
    this._init();
  }

  render() {
    let loadingBoxStyle = this.state.showOrHidden ? {display: 'block',} : {display: 'none',};
    return (
      <div
        className='mo-loading-box'
        style={loadingBoxStyle}
      >
        <div className='mo-loading'>
          <div
            className='mo-loading-icon-box'
            style={this.loadingStyle}
          >
            {this.loading}
          </div>
          {this.text}
        </div>
      </div>
    )
  }
}