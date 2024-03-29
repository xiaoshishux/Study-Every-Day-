# Vue的性能优化有哪些

**（1）编码阶段**

- 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher

- v-if和v-for不能连用

- 如果需要使用v-for给每项元素绑定事件时使用事件代理

- SPA 页面采用keep-alive缓存组件

- 在更多的情况下，使用v-if替代v-show

- key保证唯一

- 使用路由懒加载、异步组件

- 防抖、节流

- 第三方模块按需导入

- 长列表滚动到可视区域动态加载

- 图片懒加载

  

**（2）SEO优化**

- 预渲染
- 服务端渲染SSR



**（3）打包优化**

- 压缩代码
- Tree Shaking/Scope Hoisting
- 使用cdn加载第三方模块
- 多线程打包happypack
- splitChunks抽离公共文件
- sourceMap优化



**（4）用户体验**



- 骨架屏
- PWA
- 还可以使用缓存(客户端缓存、服务端缓存)优化、服务端开启gzip压缩等。