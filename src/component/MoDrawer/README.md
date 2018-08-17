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