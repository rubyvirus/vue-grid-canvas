# vue-grid-canvas

> a vue component

![vue-grid-canvas](https://github.com/Harveyzhao/vue-grid-canvas/blob/master/WechatIMG132.jpeg?raw=true)

### 目前测试阶段，暂不发布npm仓库，定制性较弱，需要日后完善，有需要的朋友，可参考simple使用

一个类似excel的表格组件，说明：
* 1，通过canvas实现，能处理万级数据
* 2，类似excel，选中单元格并实时编辑
* 3，复制黏贴，支持批量，从excel复制，复制到excel都可以
* 4，撤销／前进
* 5，checkbox勾选框，全选功能，可开关
* 6，固定列（目前只支持固定到右侧）
* 7，删除单元格，支持批量
* 7，支持文本的重新计算渲染（通过计算的单元格不支持实时编辑）
* 8，支持基础按钮显示及点击时间
* 9，隐藏列功能
。。。

以后计划：
* 1，由于使用canvas不支持浏览器的检索功能，以后加上表格的搜索功能
* 2，行列拖拽



## 运行例子

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
