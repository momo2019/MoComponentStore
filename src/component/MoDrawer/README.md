<h1>MoDrawer使用文档</h1>


<h5>提供的配置接口:</h5>


<table>
  <tr>
    <th>参数</th>
    <th>功能</th>
    <th>默认值</th>
    <th>其他</th>
  </tr>
  <tr>
    <td>title</td>
    <td>标题</td>
    <td>''</td>
    <td>title为''时不显示标题栏</td>
  </tr>
  <tr>
    <td>closable</td>
    <td>关闭按钮</td>
    <td>true</td>
    <td>是否显示关闭按钮，Boolean</td>
  </tr>
  <tr>
    <td>mask</td>
    <td>背景蒙层是否显示</td>
    <td>true</td>
    <td>Boolean</td>
  </tr>
  <tr>
    <td>maskClosable</td>
    <td>背景蒙层是否可以关闭drawer</td>
    <td>true</td>
    <td>Boolean</td>
  </tr>
  <tr>
    <td>placement</td>
    <td>drawer出现位置</td>
    <td>'left'</td>
    <td>'left', 'right'</td>
  </tr>
  <tr>
    <td>transitionTime</td>
    <td>出现消失的过渡时间</td>
    <td>300</td>
    <td>int</td>
  </tr>
  <tr>
    <td>children</td>
    <td>内容</td>
    <td>"\<div\>\<\/div\>"</td>
    <td>为内容区显示的内容，根据react语法添加的children</td>
  </tr>
</table>

<br/>
<br/>

<h5>提供接口对象onRef</h5>
<table>
  <tr>
    <th>方法</th>
    <th>功能</th>
    <th>其他</th>
  </tr>
  <tr>
    <td>show</td>
    <td>显示drawer</td>
    <td>无</td>
  </tr>
  <tr>
    <td>hidden</td>
    <td>隐藏drawer</td>
    <td>无</td>
  </tr>
</table>