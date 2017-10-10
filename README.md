# vue-grid-canvas

> a vue component

### 目前测试阶段，暂不发布npm仓库，定制型较弱，需要日后完善，有需要的朋友，可类似simple使用，联系：zhao

### 一个类似excel的表格组件，说明：
* 1，通过canvas实现，能处理万级数据
* 2，类似excel，选中单元格并实时编辑
* 3，复制黏贴，支持批量
* 4，撤销前进
* 5，checkbox勾选框，全选功能
* 6，固定列（目前只支持固定到右侧）
* 7，删除单元格，支持批量
* 7，隐藏列（待完善，由于原业务依赖了iview，vuex，为了保持组件纯净，会重新实现样式和逻辑）
* 8，支持基础按钮显示及点击时间
* 9，支持文本的重新计算渲染（通过计算的单元格不支持实时编辑）
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
