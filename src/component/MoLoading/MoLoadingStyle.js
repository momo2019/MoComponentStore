import React from 'react';

const LoadingStyleSet = (props) => {
  let styleMap = {
    spinDot: {
      className: 'mo-loading-spin-dot',
      scss: require('./loadingStyle/loadingSpinDot.scss'),
    },
    jumpBlock: {
      className: 'mo-loading-jump-block',
      scss: require('./loadingStyle/loadingJumpBlock.scss'),
    },
    spinBlock: {
      className: 'mo-loading-spin-block',
      scss: require('./loadingStyle/loadingSpinBlock.scss'),
    },
    switchDot: {
      className: 'mo-loading-switch-dot',
      scss: require('./loadingStyle/loadingSwitchDot.scss'),
    },
    slipBlock: {
      className: 'mo-loading-slip-block',
      scss: require('./loadingStyle/loadingSlipBlock.scss'),
    },
    slipDot: {
      className: 'mo-loading-slip-dot',
      scss: require('./loadingStyle/loadingSlipDot.scss'),
    },
    blinkDot: {
      className: 'mo-loading-blink-dot',
      scss: require('./loadingStyle/loadingBlinkDot.scss'),
    },
    spreadDot: {
      className: 'mo-loading-spread-dow',
      scss: require('./loadingStyle/loadingSpreadDot.scss'),
    },
    roundDot: {
      className: 'mo-loading-round-dot',
      scss: require('./loadingStyle/loadingRoundDot.scss'),
    },
  }
  let itemMap = styleMap[props.setItem];
  let iSet = new Array(props.iNum);
  iSet.fill(0);
  itemMap.scss;
  return (
    <span
      className={itemMap.className}
      style={{
        position: 'relative',
        display: 'inline-block',
        height: '100%',
        width: '100%',
      }}
    >
      {
        iSet.map((item,index)=>
          <i style={props.color} key={'loading-icon-i-'+index}></i>
        )
      }
    </span>
  )
};


export default LoadingStyleSet;