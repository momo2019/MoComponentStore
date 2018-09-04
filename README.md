#MOmo的组件库

## MoLoading使用文档


##### 提供的配置接口

参数|功能|默认值|其他
:-----:|:-----:|:-----:|:-----:
size|大小|'default'|提供三种大小，'small','default','large'
text|动画下方文字|''|默认不显示
color|动画和文字颜色|'#1890ff'|无
loadStyle|动画风格|'spinDot'|提供多种风格,'spinDot','jumpBlock','spinBlock','switchDot','slipBlock','slipDot','blinkDot','spreadDot','roundDot',


---
---

##### 提供接口对象onRef
方法|功能|其他
:-----:|:-----:|:-----:
show|显示Loading|无
hidden|隐藏Loading|无


***
***

## MoDrawer使用文档

##### 提供的配置接口:

参数|功能|默认值|其他
:-----:|:-----:|:-----:|:-----:
title|标题|''|title为''时不显示标题栏
closable|关闭按钮|true|是否显示关闭按钮，Boolean
mask|背景蒙层是否显示|true|Boolean
maskClosable|背景蒙层是否可以关闭drawer|true|Boolean
placement|drawer出现位置|'left'|'left','right'
transitionTime|出现消失的过渡时间|300|Number
children|内容|div</>|为内容区显示的内容，根据react语法添加的children

---
---

##### 提供接口对象onRef
方法|功能|其他
:-----:|:-----:|:-----:
show|显示drawer|无
hidden|隐藏drawer|无


***
***

## MoDND使用文档


##### 提供的配置接口

参数|功能|默认值|其他
:-----:|:-----:|:-----:|:-----:
isParent(弃用)|包裹层是否为拖拽列表的父元素|true|Boolean,设置为false时可以将列表的父元素，类似ul放置在组件的children内
style|包裹层样式|''|无


###### 取消判断包裹层是否为拖拽列表的父元素的功能